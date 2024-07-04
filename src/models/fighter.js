import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../utils/config.js";

const FighterSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			trim: true,
			minlength: 3,
			maxlength: 32,
			validate: {
				validator: async function (name) {
					const user = await this.constructor.findOne({ name });
					if (user && user.id !== this.id) {
						return false;
					}
					return true;
				},
				message: (props) => `The name ${props.value} is already taken`,
			},
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			validate: [
				{
					validator: (email) => {
						return /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
					},
					message: (props) => `${props.value} is not a valid email address`,
				},
				{
					validator: async function (email) {
						const user = await this.constructor.findOne({ email });
						if (user && user.id !== this.id) {
							return false;
						}
						return true;
					},
					message: (props) => `The email ${props.value} is already taken`,
				},
			],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be at least 8 characters long"],
			validate: {
				validator: (password) => /\d/.test(password),
				message: "Password must contain at least one digit",
			},
		},
		passwordConfirmation: {
			type: String,
			required: [true, "Password confirmation is required"],
			validate: {
				validator: function (passwordConfirmation) {
					return passwordConfirmation === this.password;
				},
				message: "Passwords do not match",
			},
		},
		fights: {
			total: {
				type: Number,
				default: 0,
			},
			wins: {
				type: Number,
				default: 0,
			},
			losses: {
				type: Number,
				default: 0,
			},
			score: {
				type: Number,
				default: 0,
			},
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
	{ collection: "fighters" },
);

FighterSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
		this.passwordConfirmation = undefined;
	}
	next();
});

FighterSchema.methods.checkPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

FighterSchema.methods.createAuthToken = function () {
	return jwt.sign(
		{ id: this._id.toString(), name: this.name, isAdmin: this.isAdmin },
		config.JWT_SECRET,
		{
			expiresIn: "3h",
		},
	);
};

FighterSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id?.toString();
		returnedObject._id = undefined;
		returnedObject.__v = undefined;
	},
});

const Fighter = model("Fighter", FighterSchema);

export default Fighter;

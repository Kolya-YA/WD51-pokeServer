import { Schema, model } from "mongoose";

const battleSchema = new Schema(
	{
		fighterID: {
			type: Schema.Types.ObjectId,
			ref: "Fighter",
			required: true,
		},
		result: {
			type: String,
			enum: ["win", "loss", "draw"],
			required: true,
		},
		fighterPokemonId: {
			type: Number,
			required: true,
		},
		computerPokemonId: {
			type: Number,
			required: true,
		},
		fightDate: {
			type: Date,
			default: Date.now,
			required: true,
		},
	}
);

battleSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id?.toString();
		returnedObject._id = undefined;
		returnedObject.__v = undefined;
	},
});

const Battle = model("Battle", battleSchema);

export default Battle;

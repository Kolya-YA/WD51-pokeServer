import express from 'express';
import cors from 'cors';
import pokeRoutes from './routes/pokeRoutes.js';


const app = express()

const corsOptions = {
    origin: process.env.ORIGINS.split(', ')
}
app.use(cors(corsOptions))

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/pokes', pokeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
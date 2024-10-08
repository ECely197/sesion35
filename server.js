import "dotenv/config"
import express from "express";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
connectDB();

/////// RUTAS

app.use(recipeRoutes);

app.use(UserRoutes);

app.use(authRoutes);
////// FIN RUTAS

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

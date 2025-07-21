import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"; // Import the function to connect to the database
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(cors({ origin: "http://localhost:5173" }));

//our simple custom middleware
// app.use((req, re, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });
});

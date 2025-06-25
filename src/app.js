import express from "express";
import dotenv from "dotenv";
import { routerCharacter } from "./routers/character.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api", routerCharacter);

app.listen(PORT, () => {
  console.log("Server running in port: " + PORT);
});

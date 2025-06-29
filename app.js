import express from "express";
import dotenv from "dotenv";
import { routerCharacter } from "./src/routers/character.routes.js";
import { startDB } from "./src/config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/api", routerCharacter);

app.listen(PORT, async () => {
  await startDB();
  console.log("Server running in port: " + PORT);
});

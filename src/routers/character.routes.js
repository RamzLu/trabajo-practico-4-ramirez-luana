import { Router } from "express";
import {
  getAll,
  getById,
  createCharacter,
  upDateCharacter,
  deleteCharacter,
} from "../controllers/character.controllers.js";

export const routerCharacter = Router();

routerCharacter.get("/characters", getAll);

routerCharacter.get("/characters/:id", getById);

routerCharacter.post("/characters", createCharacter);

routerCharacter.put("/characters/:id", upDateCharacter);

routerCharacter.delete("/characters/:id", deleteCharacter);

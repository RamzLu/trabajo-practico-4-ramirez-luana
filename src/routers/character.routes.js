import { Router } from "express";
import { getAll } from "../controllers/character.controllers.js";

export const routerCharacter = Router();

routerCharacter.get("/character", getAll);

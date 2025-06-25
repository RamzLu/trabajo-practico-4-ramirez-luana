import { Router } from "express";

export const routerCharacter = Router();

routerCharacter.get("/", (req, res) => {
  res.send("All characters");
});

import { Character } from "../models/character.model.js";

export const getAll = async (req, res) => {
  try {
    const character = await Character.findAll(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json({
      error: error.mesagge,
    });
  }
};

export const createCharacter = (req, res) => {
  try {
    const character = Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(501).json({
      error: error.mesagge,
    });
  }
};

export const getById = (req, res) => {};

export const upDateCharacter = (req, res) => {
  res.send("Updating character");
};

export const deleteCharacter = (req, res) => {
  res.send("Dalete a character");
};

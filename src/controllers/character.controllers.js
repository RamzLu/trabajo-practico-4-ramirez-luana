import { Character } from "../models/character.model.js";

export const getAll = async (req, res) => {
  try {
    const character = await Character.findAll(req.body);
    res.json(character);
  } catch (error) {
    res.status(500).json({
      error: error.mesagge,
    });
  }
};

export const createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(501).json({
      error: error.mesagge,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({
        msg: "Personaje no encontrado",
      });
    }
  } catch (error) {
    res.status(501).json({
      error: error.mesagge,
    });
  }
};

export const upDateCharacter = async (req, res) => {
  try {
    const [update] = await Character.update(req.body, {
      where: { id: req.params.id },
    });
    if (update) {
      const character = await Character.findByPk(req.params.id);
      res.status(201).json(character);
    } else {
      res.status(404).json({
        msg: "Personaje no encontrado",
      });
    }
  } catch (error) {
    res.status(501).json({
      error: error.mesage,
    });
  }
};

export const deleteCharacter = async (req, res) => {
  try {
    const deleted = await Character.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.json({
        msg: "Personaje eliminado",
      });
    } else {
      res.status(404).json({
        msg: "No se encontró el personaje",
      });
    }
  } catch (error) {
    res.status(501).json({
      error: error.mesage,
    });
  }
};

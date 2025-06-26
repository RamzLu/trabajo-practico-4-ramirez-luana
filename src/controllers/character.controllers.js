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
    if (
      req.body.description !== undefined &&
      req.body.description !== "" &&
      req.body.description.trim().length < 5
    ) {
      console.log("Descripción inválida:", req.body.description);
      return res.status(400).json({
        msg: "La descripcion debe ser cadena de texto mayor a 5 caracteres",
      });
    }
    const { id, name, ki, race, gender } = req.body;

    if (id == "" || name == "" || ki == "" || race == "" || gender == "") {
      return res.json({
        msg: "El id, name, ki, race, gender no pueden ser nulos",
      });
    }

    if (typeof ki != "number" || !Number.isInteger(ki)) {
      return res.status(400).json({
        msg: "El ki debe ser un número entero",
      });
    }

    if (
      gender !== "male" &&
      gender !== "Male" &&
      gender !== "female" &&
      gender !== "Female"
    ) {
      return res.status(400).json({
        msg: "El genero solo puede ser female o male",
      });
    }

    const character = await Character.create(req.body);
    return res.status(201).json(character);
  } catch (error) {
    return res.status(501).json({
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
    if (
      req.body.description !== undefined &&
      req.body.description !== "" &&
      req.body.description.trim().length < 5
    ) {
      console.log("Descripción inválida:", req.body.description);
      return res.status(400).json({
        msg: "La descripcion debe ser cadena de texto mayor a 5 caracteres",
      });
    }
    const { id, name, ki, race, gender } = req.body;

    if (id == "" || name == "" || ki == "" || race == "" || gender == "") {
      res.json({
        msg: "El id, name, ki, race, gender no pueden ser nulos",
      });
    }
    if (typeof ki != "number" || !Number.isInteger(ki)) {
      res.status(400).json({
        msg: "El ki debe ser un número entero",
      });
    }

    if (
      (gender !== "male") &
      (gender !== "Male") &
      (gender !== "female") &
      (gender !== "Female")
    ) {
      res.status(400).json({
        msg: "El genero solo puede ser female o male",
      });
    }

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

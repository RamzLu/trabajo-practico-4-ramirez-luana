import e from "express";

export const getAll = (req, res) => {
  res.send("All characters");
};

export const getById = (req, res) => {
  res.send("Getting by id");
};

export const createCharacter = (req, res) => {
  res.send("Creating character");
};

export const upDateCharacter = (req, res) => {
  res.send("Updating character");
};

export const deleteCharacter = (req, res) => {
  res.send("Dalete a character");
};

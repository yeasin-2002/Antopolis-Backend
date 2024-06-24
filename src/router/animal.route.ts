import express from "express";
import { AddAnimal, getAnimal } from "../controller/animal.controller";

export const animalRouter = express.Router();

animalRouter.get("/", getAnimal);
animalRouter.post("/", AddAnimal);

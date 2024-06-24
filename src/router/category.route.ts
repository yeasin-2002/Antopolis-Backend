import express from "express";
import {
    AddCategories,
    getCategories,
} from "../controller/category.controller";


export const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", AddCategories);

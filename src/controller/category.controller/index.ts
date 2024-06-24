import { Request, Response } from "express";
import { db } from "../../model";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const getCategories = async (req: Request, res: Response) => {
    const allCategories = await db.Category.find({});
    if (!allCategories) errorResponse({ res, message: "Categories not found" });

    return successResponse({
        res,
        message: "Get Categories",
        data: allCategories,
    });
};

export const AddCategories = async (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) {
        return errorResponse({ res, message: "name is required" });
    }

    const checkName = await db.Category.findOne({ name });
    if (checkName) {
        return errorResponse({
            res,
            message: ` category with '${name}' already exists`,
        });
    }

    const newCategory = await db.Category.create({ name });
    if (!newCategory) {
        return errorResponse({ res, message: "unable to add category" });
    }

    return successResponse({
        res,
        message: "Category Added",
        data: newCategory,
    });
};

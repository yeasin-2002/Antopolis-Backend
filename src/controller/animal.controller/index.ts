import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { db } from "../../model";
import { errorResponse, successResponse } from "../../utils/responseHandler";

export const getAnimal = async (req: Request, res: Response) => {
    const allAnimal = await db.Animal.find({}).populate("category");
    return successResponse({
        res,
        message: `Get ${allAnimal.length} Animal`,
        data: allAnimal,
    });
};

export const AddAnimal = async (req: Request, res: Response) => {
    console.table(req.body);
    try {
        const body = req.body as {
            name: string;
            category: string;
            image: string;
        };

        // 1. validate body and files
        if (!body.name || !body.category || !body.image) {
            return errorResponse({
                res,
                message: "name, category and image are required",
                statusCode: 400,
            });
        }

        // 2. check name already exists?
        console.log("checking name");
        const checkName = await db.Animal.findOne({ name: body.name });
        if (checkName) {
            return errorResponse({
                res,
                message: ` animal with '${body.name}' already exists`,
                statusCode: 400,
            });
        }

        // 3. adding animal
        console.log("adding animal");

        const newAnimal = await db.Animal.create({
            name: body.name,
            image: body.image,
            category: body.category,
        });

        if (!newAnimal) throw new Error("unable to add animal");

        // 4. return response
        console.log("returning response");
        return successResponse({
            res,
            message: "Animal Added",
            data: newAnimal,
        });
    } catch (error) {
        return errorResponse({ res, message: error?.message });
    }
};

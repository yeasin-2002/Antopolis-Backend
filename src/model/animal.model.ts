import { Schema, model } from "mongoose";

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
        trim: true,
    },
});

export const Animal = model("animal", animalSchema);

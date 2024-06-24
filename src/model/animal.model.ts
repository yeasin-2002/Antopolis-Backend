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
        type: Schema.Types.ObjectId,
        ref: "Category",
        require: true,
    },
});

export const Animal = model("animal", animalSchema);

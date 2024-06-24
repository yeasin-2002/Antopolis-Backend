import mongoose from "mongoose";
import { databaseUrl } from "./envs";

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to MongoDB");
            return;
        }

        const conn = await mongoose.connect(databaseUrl);

        console.log(`⚡ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`🚨  Error: ${error.message}`);
        process.exit(1);
    }
};

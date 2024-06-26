import * as dotenv from "dotenv";
dotenv.config();

export const port = process.env.SERVER_PORT || 8000;
export const databaseUrl = process.env.MONGO_CONNECTION_STRING as string;

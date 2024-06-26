import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import "express-async-errors";
import expressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import morgan from "morgan";

// Local imports
import { defaultErrorHandler, notFoundHandler } from "./middlewares";
import { port } from "./utils";

import { animalRouter, categoryRouter, rootRouter } from "./router";
import { connectDB } from "./utils/connectDB";

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(expressMongoSanitize());
app.use(morgan("dev"));

//  Serving static files
app.use("/uploads", express.static("uploads"));

// Custom routes
app.use("/animal", animalRouter);
app.use("/category", categoryRouter);

app.use("/", rootRouter);
app.use(notFoundHandler);
app.use(defaultErrorHandler);

app.listen(port, async () => {
    await connectDB();
    console.log(`🔥 Server running on http://localhost:${port}`);
});

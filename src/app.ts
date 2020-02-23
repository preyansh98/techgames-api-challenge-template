import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { Application, Request, Response } from "express";
import { Controller } from "./main.controller";
import mongoose from "mongoose";


class App {
    public app: Application;
    public artiController: Controller;
    public port: Number;

    constructor() {
        dotenv.config();
        let dbUrl = "";

        (process.env.DB_URL)
            ? dbUrl = process.env.DB_URL
            : dbUrl = "mongodb://mongo:27017/techgames-template";

        console.log(dbUrl)

        this.app = express();
        this.setConfig();
        this.setMongoConfig(dbUrl);

        this.artiController = new Controller(this.app);


        this.app.use((req: Request, res: Response) => {
            res.status(500).send({
                status: 500,
                message: "Not Implemented"
            });
        });
    }

    private setConfig() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors());
    }

    private setMongoConfig(dbUrl: string) {
        mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        mongoose.set("useCreateIndex", true);
    }
}

export default new App().app;
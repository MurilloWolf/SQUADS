import express from "express";
import cors from "cors";
import routes from "./routes";
import database from "mongoose";

class App {
	public server: express.Application;

	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
		this.database();
	}

	middlewares() {
		this.server.use(express.json());
		this.server.use(cors());
	}

	routes() {
		this.server.use(routes);
	}

	async database() {
		const conected = await database.connect(
			"mongodb+srv://squads-db01:squads-db01@squads.1087j.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		conected
			? console.log("Connected to the database")
			: console.log("Cant connected to the database");
	}
}

export default new App().server;

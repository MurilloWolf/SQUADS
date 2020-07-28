import { Router } from "express";
import TaskController from "./controllers/taskController";
const routes = Router();

routes.get("/", (req, res) => res.status(200).json({ server: true }));
routes.post("/task", TaskController.store);
routes.get("/task", TaskController.index);
routes.put("/task", TaskController.update);
routes.delete("/task", TaskController.delete);
export default routes;

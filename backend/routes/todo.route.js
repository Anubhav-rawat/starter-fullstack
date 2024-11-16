import express from "express";
import { controllerName } from "../controllers/todo.controller.js";


const router = express.Router();

router.post("/testRoute", controllerName);


export default router;

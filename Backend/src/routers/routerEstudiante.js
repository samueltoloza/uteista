import express from "express";
import estudianteController from "../controller/estudiantecontrollers.js";

const routerEstudiante = express.Router();

routerEstudiante.get("/", estudianteController.getStudents);

export default routerEstudiante;
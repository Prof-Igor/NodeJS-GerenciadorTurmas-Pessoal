import express from "express"
import { turmasController } from "../controller/turmasController.js";

const roteador = express.Router();

roteador.get("/", turmasController.getTurmas)

export default roteador;
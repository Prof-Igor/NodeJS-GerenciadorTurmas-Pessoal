import express from "express"
import { getTurmas } from "../controller/turmasController.js";

const roteador = express.Router();

roteador.get("/", getTurmas)

export default roteador;
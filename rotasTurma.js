import express from "express"
import { getTurmas } from "./controladores/turmasController.js";

const roteador = express.Router();

roteador.get("/", getTurmas)

export default roteador;
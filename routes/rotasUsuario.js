import express from "express"
import { usuariosController } from "../controller/usuarioController.js";

const roteador = express.Router();

roteador.get("/", usuariosController.getAll)

roteador.post("/", usuariosController.create)

roteador.put("/:id", usuariosController.update)

roteador.delete("/:id", usuariosController.delete)

export default roteador;
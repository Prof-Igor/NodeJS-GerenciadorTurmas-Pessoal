import express from "express";
import cors from "cors";
import rotasUsuario from "./rotasUsuario.js";
import rotasTurma from "./rotasTurma.js";

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use(cors())

app.use("/usuario", rotasUsuario)
app.use("/turma", rotasTurma)

app.listen(port)


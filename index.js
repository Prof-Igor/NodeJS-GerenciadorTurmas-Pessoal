import express from "express";
import cors from "cors";
import rotasUsuario from "./routes/rotasUsuario.js";
import rotasTurma from "./routes/rotasTurma.js";

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json())
app.use(cors())

app.use("/usuario", rotasUsuario)
app.use("/turma", rotasTurma)

app.listen(port, () => {
    console.log("Server is running....")
})


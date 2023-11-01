import { db } from "../db.js";

export const getTurmas = (req, res) => {
    const q = "SELECT * FROM tb_turmas";

    db.query(q, (error, data) =>{
        if(error) return res.json(error);

        return res.status(200).json(data);
    })
}
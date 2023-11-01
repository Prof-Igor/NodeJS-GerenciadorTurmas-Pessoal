import conexao from "../database/index.js";

export const getTurmas = (req, res) => {
    const q = "SELECT * FROM tb_turmas";

    conexao.query(q, (error, data) =>{
        if(error) return res.json(error);

        return res.status(200).json(data);
    })
}
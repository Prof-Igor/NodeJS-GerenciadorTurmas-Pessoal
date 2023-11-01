import conexao from "../database/index.js";

export const turmasController = {
    getTurmas: async (req, res) => {
        try {
            const [data] = await conexao.query("SELECT * FROM tb_turmas");
            res.json(data).status(200);
        } catch (error) {
            res.json(error).status(501);
        }
    }
}
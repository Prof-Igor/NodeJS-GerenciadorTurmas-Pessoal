import conexao from "../database/index.js";

export const usuariosController = {
    getAll: async (req, res) => {
        try {
            const [data] = await conexao.query("SELECT * FROM tb_usuarios");
            res.json(data).status(200);
        } catch (error) {
            res.json(error).status(501);
        }
    },

    create: async (req, res) => {
        try {
            const values = [
                1,
                req.body.nome,
                req.body.usuario,
                req.body.senha,
                req.body.turma,
            ]
            const query = "INSERT INTO tb_usuarios(`tipo`, `nome`, `usuario`, `senha`, `fk_turma`) VALUES(?)";
            await conexao.query(query, [values]);
            res.json("Usuário cadastrado com sucesso").status(200);
        } catch (error) {
            res.json(error).status(501);
        }
    },

    update: async (req, res) => {
        try {
            const values = [
                req.body.nome,
                req.body.senha
            ]
            const query = "UPDATE tb_usuarios SET `nome` = ?, `senha` = ? WHERE `id` = ?";
            await conexao.query(query, [...values, req.params.id]);
            res.json("Usuário alterado com sucesso").status(200);
        } catch (error) {
            res.json(error).status(501);
        }
    },

    delete: async (req, res) => {
        try {
            const [data] = await conexao.query("DELETE FROM tb_usuarios WHERE `id` = ?", [req.params.id]);
            res.json("Usuário removido com sucesso").status(200);
        } catch (error) {
            res.json(error).status(501);
        }
    }
}
import conexao from "../database/index.js";

export const getUsuarios = (req, res) => {
    const q = "SELECT * FROM tb_usuarios";

    conexao.query(q, (error, data) =>{
        if(error) return res.json(error);

        return res.status(200).json(data);
    })
}

export const postUsuarios = (req, res) => {
    const q = "INSERT INTO tb_usuarios(`tipo`, `nome`, `usuario`, `senha`, `fk_turma`) VALUES(?)";

    const values = [
        1,
        req.body.nome,
        req.body.usuario,
        req.body.senha,
        req.body.turma,
    ]

    console.log(req.body)

    conexao.query(q, [values], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário criado com sucesso!");
    })
}

export const putUsuarios = (req, res) => {
    const q = "UPDATE tb_usuarios SET `nome` = ?, `email` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email
    ]

    conexao.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const deleteUsuarios = (req, res) => {
    const q = "DELETE FROM tb_usuarios WHERE `id` = ?";

    conexao.query(q, [req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário deletado com sucesso!");
    })
}
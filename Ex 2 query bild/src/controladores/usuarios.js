const knex = require('../conexão');

const listar = async (req, res)=>{
    try {
        const usuarios = await knex('agenda')
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obter = async (req, res)=>{
    const {id} = req.params;
    
    try {
        const usuario = await knex('agenda').where({id}).first();
        if(!usuario){
            return res.status(404).json({message: "Não encontramos esse usuario"});
        }
            return res.status(200).json(usuario)

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrar = async (req, res)=>{
    
        const { nome, email, telefone} = req.body;
        
            if(!nome){
                 return res.status(400).json({message: "Nome é obrigatorio"});
            }
            if(!email){
                return res.status(400).json({message: "Nome é obrigatorio"});
            }
            if(!telefone){
                return res.status(400).json({message: "Nome é obrigatorio"});
            }

        try {
                const usuarioNovo = {
                    nome, 
                    email,
                    telefone
                }

            const usuarioCad = await knex('agenda').insert(usuarioNovo).returning('*');
            if(usuarioCad.lenght === 0){
                return res.status(400).json({message: "Não foi possivel cadastrar usuario"});
            }
                return res.status(200).json(usuarioCad);

        } catch (error) {
        return res.status(400).json(error.message);
        }

}

async function editar (req, res){
    const {id} = req.params;
    const {nome, email, telefone} = req.body;

    try {
        const usuarioExiste = await knex('agenda').where({id}).first();

            if(!usuarioExiste){
              return res.status(400).json({message: "Usuario não encontrado!"});
            }
        
            const usuario = await knex('agenda').update({nome, email, telefone}).where({id});
            return res.status(200).json(usuario[0])

    } catch (error) {
            return res.status(400).json(error.message);
    }

}

async function excluir (req, res){
    const {id} = req.params;

    try {
        const usuarioExiste = await knex('agenda').where({id}).first();

            if(!usuarioExiste){
              return res.status(400).json({message: "Usuario não encontrado!"});
            }
            const usuario = await knex('agenda').delete().where({id});
            return res.status(200).json(usuarioExiste);
     
    } catch (error) {
            return res.status(400).json(error.message);
    }

}


module.exports = {
        listar,
        obter,
        editar,
        excluir,
        cadastrar
} 
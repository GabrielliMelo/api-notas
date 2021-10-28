const knex = require('../conexão');

const anotacao = async (req, res)=>{
    const {id} = req.params;

    try {
            const usuario = await knex('agenda').where({id}).first();
            const anotacaoUsuario = await knex('anotacoes').where({ 'agenda_id': usuario.id})

           console.log(anotacaoUsuario);
           res.json(anotacaoUsuario);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}


const anotacoes = async (req, res)=>{
        const {id} = req.params;
        try {
            
        } catch (error) {
            return res.status(400).json(error.message);
        }
}
const editarAnotacao = async (req, res)=>{
    
}
const deletarAnotacao = async (req, res)=>{
    
}
const cadastrarAnotacao = async (req, res)=>{
    const {id} = req.params;
    const {nota} = req.body;

    try {
            const inserir = {
                agenda_id: id,
                nota
            }
                const novaAnotacao = await knex('anotacoes').insert(inserir).returning('*')
                console.log(novaAnotacao)
                res.status(200).json(novaAnotacao)
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    anotacao,
    anotacoes,
    deletarAnotacao,
    editarAnotacao,
    cadastrarAnotacao
}
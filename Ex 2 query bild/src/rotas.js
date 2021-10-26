const {Router} = require('express');
const usuarios = require('./controladores/usuarios');
const {anotacao, anotacoes , editarAnotacao, deletarAnotacao, cadastrarAnotacao } = require('./controladores/anotacao')

const rotas = Router();

//usuarios;
rotas.get('/usuarios', usuarios.listar);
rotas.get('/usuarios/:id', usuarios.obter);
rotas.post('/usuario', usuarios.cadastrar);
rotas.put('/usuario/:id', usuarios.editar);
rotas.delete('/usuario/:id', usuarios.excluir);

//anotações;
rotas.get('/anotacoes', anotacoes);
rotas.get('/:id/anotacoes', anotacao);
rotas.post('/:id/anotacao', cadastrarAnotacao);
rotas.put('/:id/anotacao', editarAnotacao);
rotas.delete('/:id/anotacao', editarAnotacao);

module.exports = rotas
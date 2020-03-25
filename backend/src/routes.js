const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {

    const body = request.body;

    console.log(body);
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Gustavo de Melo Carvalho',
        idade: 26
    });     
});


module.exports = routes;

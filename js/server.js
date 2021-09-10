const express = require('express');
const app = express();
const axios = require('axios');

// conectar no banco de dados

app.get('/:cep', (req, res) => {
    axios.get(`http://viacep.com.br/ws/${req.params.cep}/json`).then(data => {
        const viaCepResponse = data.data;

        // busca o cep no banco de dados
        // validar se o cep já está no banco de dados

        // if (nao existir) grava o que retornar do viacep - boolean
        // if existir só responde o que estiver no banco de dados - boolean

        const response = {
            cep: viaCepResponse.cep,
            logradouro: viaCepResponse.logradouro,
            complemento: viaCepResponse.complemento,
            bairro: viaCepResponse.bairro,
            localidade: viaCepResponse.localidade,
            uf: viaCepResponse.uf,
            ddd: viaCepResponse.ddd
        }

        res.json(response);
    })
})

app.listen(3000, () => {
    console.log('Servidor on')
})
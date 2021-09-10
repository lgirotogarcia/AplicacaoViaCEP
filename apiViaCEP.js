let axios = require('axios');
let dados = function(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
};

dados('02316110').then(function(resposta){
    console.log(resposta.data);
}).catch(function(error){
    if(error){
        console.log(error);
    }
});
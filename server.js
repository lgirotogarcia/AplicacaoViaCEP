const axios = require('./apiViaCEP.js')

const http = require('http'),
porta = 3000,
host = '127.0.0.1'



const servidor = http.createServer((request, response) => {
    response.writeHead(200,{
        'Content-Type':'text/json'
    });
    response.write(axios);
    response.end();
})

servidor.listen(porta, host,()=>{console.log('server on')});
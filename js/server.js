const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../db.js'); /*conectar no banco de dados*/



app.get('/:cep', async (req, res) => {
    try {
        const data = await axios.get(`http://viacep.com.br/ws/${req.params.cep}/json`)
        const viaCepResponse = data.data;
        const Cep = db.Mongoose.model('cep', db.CepSchema);
        const docs = await Cep.findOne({cep: viaCepResponse.cep},{_id: 0, __v: 0, createdAt: 0, updatedAt: 0})
    
        if(!docs){
            const newDoc = new Cep(viaCepResponse);
            await newDoc.save();
            return res.json(newDoc);
        }
        if(new Date(docs.updatedAt).getMonth() < new Date().getMonth()){
            await Cep.findOneAndUpdate({cep: viaCepResponse.cep}, viaCepResponse);
        }
        return res.json(docs);  
    } catch (error) {
        return res.send('CEP não existente.')
    }
})

app.listen(3000, () => {
    console.log('Server on')
})
import express from 'express'
// conectar com o banco mongo DB
// importa o mongoose
import mongoose from 'mongoose';

// inicialização aplicação com express
const app = express();

// aqui fazemos a conexão com o mongo DB
mongoose.connect('mongodb+srv://matheus:130597@cluster0.l7ncc1c.mongodb.net/?retryWrites=true&w=majority')
.then((data) => {
  // caso apresente logado
  console.log('MongoDb Conectado')
})
.catch((err)=>{
  // caso apresente algum erro de conexão
  console.log('ERRO DE CONEXÃO COM O BANCO DE DADOS', err.message)
})


// porta onde aplicação vai rodar 
app.listen(4444)
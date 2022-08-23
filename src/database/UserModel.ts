import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserModel = new Schema ({

   rua: String,
   numero: Number,
   cep: Number, 
   cidade: String,
   bairro: String,
   nome: String,
   telefone: Number,
   email:String,
   Senha: String



},
{timestamps:true})

export default mongoose.model('usuarios', UserModel)
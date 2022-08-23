import { Request, Response} from 'express';
import UserModel from '../database/UserModel';


const UserController = {
async index(req:Request, res: Response): Promise<Response>{
 
 
  let users =  await UserModel.find()
  return res.json(users)
},
async findById(req:Request, res: Response): Promise<Response>{
  const { id} = req.params
  let users =  await UserModel.findById(id)
  return res.json(users)
}




}
export default UserController
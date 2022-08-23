import { json, Request, Response} from 'express';


const UserController = {
async index(req:Request, res: Response): Promise<Response>{

  let users = {}
  return res.json(users)
}



}
export default UserController
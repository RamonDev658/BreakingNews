import bcrypt from 'bcrypt'
import {loginService} from '../services/auth.service.js'

const login = async (req, res) => {
  const{ email, password} = req.body;

  try{
    const user =await loginService(email);

    if(!user) {
      return res.status(404).send({message:" User or Password not Found"})
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password); 
    
    if(!passwordIsValid || !user){
      return res.status(404).send({message:"User or Password not Found"})
    }

    res.send("Login ok")
  } catch (err) {
    res.status(500).send(err.message);
  }
 
};
export {login};
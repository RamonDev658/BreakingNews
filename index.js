import express from 'express';
import connectDatabase from './src/database/db.js';
import dotenv from "dotenv";


import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';

dotenv.config();

//Rota
    //http method(CRUD<CREATE,READ,UPDATE,DELETE>),
        //GET- pega uma info
        //POST- Cria uma info
        //PUT-Altera toda a info
        //PATCH-Altera parte da info
        //DELETE-Apaga uma info
    //Name>Um identificador da rota,
    //Function(Callback)-responsável por executar algum comando.
const port = process.env.PORT || 3000;
const app = express()

connectDatabase()
app.use(express.json());  

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, ()=> {
  console.log(`Servidor rodando na porta ${port}`)
});

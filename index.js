const express = require('express')
const userRoute= require('./src/routes/user.route')
const app = express()
const connectDatabase = require("./src/database/db")
//Rota
    //http method(CRUD<CREATE,READ,UPDATE,DELETE>),
        //GET- pega uma info
        //POST- Cria uma info
        //PUT-Altera toda a info
        //PATCH-Altera parte da info
        //DELETE-Apaga uma info
    //Name>Um identificador da rota,
    //Function(Callback)-responsável por executar algum comando.
const port = 3000;

connectDatabase()
app.use(express.json());  

app.use("/user", userRoute);

app.listen(port, ()=> {
  console.log(`Servidor rodando na porta ${port}`)
});

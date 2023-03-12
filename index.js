const express = require('express')
const userRoute= require('./src/routes/user.route')
const app = express()

app.use("/soma", userRoute)
//Rota
    //http method(CRUD<CREATE,READ,UPDATE,DELETE>),
        //GET- pega uma info
        //POST- Cria uma info
        //PUT-Altera toda a info
        //PATCH-Altera parte da info
        //DELETE-Apaga uma info
    //Name>Um identificador da rota,
    //Function(Callback)-responsável por executar algum comando.

app.listen(3000)
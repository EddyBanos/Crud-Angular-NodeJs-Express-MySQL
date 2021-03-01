const mysql= require('mysql');
const express=require('express');
const Sequelize = require('sequelize');
const cors = require('cors');


var app=express();
const bodyparser= require('body-parser');

app.use(bodyparser.json());

const sequelize = new Sequelize('tazas', 'root', 'admin1234', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })
  app.use(cors());
app.use(express.json());

app.use('/api/producto',require('./routes/producto'));

app.listen(3000,()=>console.log("Express server corriendo en puerto 3000"));

import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyparser.json())
app.use(cors())
const port = 3001

// simulo un usuario
// buscar en la base de dotos
const usuario = { email : "admin@admin.com" , password : "1234" }
//const usuario2 = { email : "usuario@admin.com" , password : "1234" }

app.post('/api/login', (req,res) => {
  if( req.body && req.body.email == usuario.email &&  req.body.password == usuario.password ) {
    res.status(200).json(req.body)
  } else {
    res.status(401).json({mensaje : 'no autenticado'})
  }
})

// //simulo base de datos: tipo de vacunas
//si llegara a hacer falta una lista de vacunas en el back dejamos esto
// const listaVacunas = [
//     {
//         codigo:1,
//         nombre:"Astrazeneca"
//     },
//     {
//         codigo:2,
//         nombre:"Moderna"
//     },
//     {
//         codigo:3,
//         nombre:"Pfizer"
//     },
//     {
//         codigo:4,
//         nombre:"Sinopharm"
//     }
// ];

// app.get('/api/getlistavacunas',(req,res)=>{
//     res.json(listaVacunas);
// })

// app.post('/api/setlistavacunas',(req,res)=>{
//     console.log(req.body);
//     listaVacunas.push(req.body);
//     res.json(req.body);
// })

// app.delete('/api/deletelistavacuna/:codigo', (req,res) => {
//     req.params.codigo = Number(req.params.codigo)
//     console.log(req.params.codigo);
//     const listaCodigos = listaVacunas.map(e => {return e.codigo} )
//     console.log(listaCodigos);
//     const indice = listaVacunas.indexOf(req.params.codigo);
//     console.log(indice);
//     lista.splice(indice,1);
//     res.json(req.params)
//   })
// //fin lista vacunas
//simulo base de datos: gestion turnos
const listaTurnos = [
    {
        centro:"centro 1",
        fecha:"fecha 1",
        vacuna:"vacuna1",
        codigo:"codigo",


    },

];

app.get('/api/getlistaTurnos',(req,res)=>{
    res.json(listaTurnos);
})

app.post('/api/setTurno',(req,res)=>{
    console.log(req.body);
    listaTurnos.push(req.body);
    res.json(req.body);
    console.log("creado")
})

app.delete('/api/deleteTurno/:codigo', (req,res) => {
    //req.params.codigo = Number(req.params.codigo)
    console.log("llegue")
    console.log(req.params.codigo);
    const listaCodigos = listaTurnos.map(e => {return e.codigo} )
    console.log(listaCodigos);
    const indice = listaTurnos.indexOf(req.params.codigo);
    console.log(indice);
    listaTurnos.splice(indice,1);
    res.json(req.params)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
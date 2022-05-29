import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyparser.json())
app.use(cors())
const port = 3001

//simulo base de datos: tipo de vacunas
const listaVacunas = [
    {
        codigo:1,
        nombre:"Astrazeneca"
    },
    {
        codigo:2,
        nombre:"Moderna"
    },
    {
        codigo:3,
        nombre:"Pfizer"
    },
    {
        codigo:4,
        nombre:"Sinopharm"
    }
];

app.get('/api/getlistavacunas',(req,res)=>{
    res.json(listaVacunas);
})

app.post('/api/setlistavacunas',(req,res)=>{
    console.log(req.body);
    listaVacunas.push(req.body);
    res.json(req.body);
})

app.delete('/api/deletelistavacuna/:codigo', (req,res) => {
    req.params.codigo = Number(req.params.codigo)
    console.log(req.params.codigo);
    const listaCodigos = listaVacunas.map(e => {return e.codigo} )
    console.log(listaCodigos);
    const indice = listaVacunas.indexOf(req.params.codigo);
    console.log(indice);
    lista.splice(indice,1);
    res.json(req.params)
  })
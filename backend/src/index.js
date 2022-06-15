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

//TURNOS
const listaTurnos = [
    {
        centro:"centro back 1",
        fecha:"fecha back 1",
        vacuna:"vacuna back",
        codigo:"2",
    },

];

app.get('/api/getlistaTurnos',(req,res)=>{
    res.json(listaTurnos);
})

app.post('/api/setTurno',(req,res)=>{
    console.log(req.body);
    listaTurnos.push(req.body);
    res.json(req.body);
})

app.delete('/api/deleteTurno/:codigo', (req,res) => {
    req.params.codigo = Number(req.params.codigo)
    console.log(req.params.codigo);
    const listaCodigos = listaTurnos.map(e => {return e.codigo} )
    console.log(listaCodigos);
    const indice = listaTurnos.indexOf(req.params.codigo);
    console.log(indice);
    lista.splice(indice,1);
    res.json(req.params)
  })

  //CENTROS
const listaCentros = [
  {
      direccion:"direc back 1",
      nombre:"nombre back 1",
      codigo:"1",
  },

];

app.get('/api/getlistaCentros',(req,res)=>{
  res.json(listaCentros);
})

app.post('/api/setCentro',(req,res)=>{
  console.log(req.body);
  listaCentros.push(req.body);
  res.json(req.body);
})

app.delete('/api/deleteCentro/:codigo', (req,res) => {
  req.params.codigo = Number(req.params.codigo)
  console.log(req.params.codigo);
  const listaCodigos = listaCentros.map(e => {return e.codigo} )
  console.log(listaCodigos);
  const indice = listaCentros.indexOf(req.params.codigo);
  console.log(indice);
  lista.splice(indice,1);
  res.json(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
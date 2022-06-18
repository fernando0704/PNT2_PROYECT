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
})

app.delete('/api/deleteTurno/:codigo', (req,res) => {
    //la siguiente linea de req params estaba comentada
    req.params.codigo = Number(req.params.codigo)
    console.log(req.params.codigo);
    const listaCodigos = listaTurnos.map(e => {return e.codigo} )
    console.log(listaCodigos);
    const indice = listaTurnos.indexOf(req.params.codigo);
    console.log(indice);
    listaTurnos.splice(indice,1);
    res.json(req.params)
  })

  //CENTROS
  const listaCentros = [
    {
        nombre:"centro 1",
        direccion:"fecha 1",
        codigoCentro:"codigo",
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

  app.delete('/api/deleteCentro/:codigoCentro', (req,res) => {
    //la siguiente linea de req params estaba comentada
    req.params.codigo = Number(req.params.codigo)
    console.log(req.params.codigo);
    const listaCodigosCentro = listaCentros.map(e => {return e.codigoCentro} )
    console.log(listaCodigosCentro);
    const indiceCentros = listaCentros.indexOf(req.params.codigoCentro);
    console.log(indiceCentros);
    listaCentros.splice(indiceCentros,1);
    res.json(req.params)
  })

  //VACUNAS
  const listaVacunas = [
    {
        nombre:"pfizer",
        codigoVacuna:"codigoBack",
    },
  ];

  app.get('/api/getlistaVacunas',(req,res)=>{
    res.json(listaVacunas);
  })

  app.post('/api/setVacuna',(req,res)=>{
    console.log(req.body);
    listaVacunas.push(req.body);
    res.json(req.body);
  })

  app.delete('/api/deleteVacuna/:codigoVacuna', (req,res) => {
    //la siguiente linea de req params estaba comentada
    req.params.codigo = Number(req.params.codigo)
    console.log(req.params.codigo);
    const listaCodigosVacuna = listaVacunas.map(e => {return e.codigoVacuna} )
    console.log(listaCodigosVacuna);
    const indiceVacuna = listaVacunas.indexOf(req.params.codigoVacuna);
    console.log(indiceVacuna);
    listaVacunas.splice(indiceVacuna,1);
    res.json(req.params)
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
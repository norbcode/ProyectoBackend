import express from "express";
import cors from 'cors'
//import { router } from './routes/routes.js'
const router = express.Router()

//import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
//app.use('/usuarios',blogRoutes)
app.use(router);

app.get('/', function (req,res){
    res.send('HOLA MUNDO G31 ♥♥ KANORB ♥♥ ☻ Desde la Raiz ☻')
    
})

app.listen(9000, ()=>{
    console.log('Servidor Corriendo en http://localhost:9000/')
})
import express from 'express'

import { authRouter , productRouter, userRouter } from './modules/index.js'
// file config ............................................
import { NODE_ENV, port } from '../config/config.service.js'
import { asyncDBConnection, checkConnectionDB } from './DB/connection.db.js';
import cors from "cors";

import './DB/model/index.js'  // Must

console.log({NODE_ENV});
async function bootstrap(){
const app = express()

// convert buffer data .....................
app.use(express.json())
app.use(cors())  // integration ....
//application routing ......................


await checkConnectionDB()
await asyncDBConnection()

app.get('/' , (req , res , next )=>{
    res.send('Hello')
    
})

app.use('/auth',authRouter)
app.use('/user', userRouter)
app.use('/products' , productRouter)

// invalid routing ....................
app.use('{/*dummy}' , (req , res , next)=>{
        return res.status(404).json({message : "invalid routing "})
})
// Handle Error ....................
app.use((error ,  req , res , next )=>{

    const status = error.cause?.status?? 500

    return res.status(status).json({
        error_message :   status == 500? 'something went wrong ': error.message ??'something went wrong ',
        // Node-Env ...........................................(development OR  production )
        stack : NODE_ENV == 'development' ? error.stack : undefined
    })
})
app.listen(port , ()=>{
    console.log(`Listening on port ${port} 🚀🚀🚀🚀`);
    
})
}
export default bootstrap
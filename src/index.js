import express, { request, response } from "express";
import cors from "cors";
import userRouter  from "./rutas/routes.user.js";
import mensajeRouter from "./rutas/routes.mensajes.js"
import conexionConMongoDb from "./conexionbd.js";
import authRouter from "./rutas/routes.auth.js"

//crear app express;
const app=express();


conexionConMongoDb.conectarConMongoDB();

app.use(cors());
app.use(express.json());
app.get("/",(request,response)=>{
    response.json({student:"Erick Martínez"})
})
app.use("/auth",authRouter)
app.use("/users",userRouter);
app.use("/messages",mensajeRouter);
const port=3000

app.listen(port,()=>{
    console.log("server running on port "+port)
})



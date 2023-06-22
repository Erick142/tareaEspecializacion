import express from "express"
import servicioMensaje from "../servicio/servicioMensaje.js";

const router=express.Router();

router.post("/",async (request,response)=>{
    const respuesta=await servicioMensaje.guardarMensaje(request);
    response.json(respuesta)
})
router.delete("/:messageId",async (request, response)=>{
    const respuesta= await servicioMensaje.eliminarPorId(request);
    if(respuesta.success==true){
        response.status(203).send('OK');
    }
    else{
        response.status(404).send('Not Found');
    }
})

export default router;
import express from "express";
import servicioUsuario from "../servicio/servicioUsuario.js";

const router= express.Router();
router.get("/",async (request, response)=>{
    try {
        const usuarios = await servicioUsuario.obtenerUsuarios();
        response.json(usuarios);
      } catch (error) {
        console.log(error);
        response.status(500).json("Error al obtener los usuarios");
      }
})

router.get("/:userId/messages/",async(request, response)=>{
    const respuesta=await servicioUsuario.obtenerMensajesPorUsuario(request);
    response.json(respuesta);
})
export default router;

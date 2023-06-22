import express from "express"
import servicioUsuario from "../servicio/servicioUsuario.js";
import bcrypt from "bcrypt"

const router=express.Router();


router.post("/register",async (request, response)=>{
    const resultado= await servicioUsuario.guardarUsuario(request);
    response.json(resultado);
})
router.post("/login", async (request, response)=>{
    const {email, password} = request.body;
    if (!email) response.json("falta el email")
    else if(!password) response.json("falta la password")
    else{
        const user= await servicioUsuario.buscarUsuarioPorEmail(email);
        if(!user) response.json("el usuario con ese email no existe");
        else{
            const isMatch=await bcrypt.compare(password,user.password);
            if(isMatch) response.json({logged:true});
            else response.json({logged:false})
        }
    }
})


export default router;
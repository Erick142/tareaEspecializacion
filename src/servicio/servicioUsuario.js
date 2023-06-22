import Usuario from "../model/usuario.js";
import bcrypt from "bcrypt"
import servicioMensaje from "./servicioMensaje.js";

const servicioUsuario={
    guardarUsuario: async function(request){
        try{
            const {name, email, dni, password}=request.body;
            const error=validar(name,email,dni,password)
            if(error) return error;

            const passwordEncrypted=bcrypt.hashSync(password,10)

            const newUsuario= new Usuario({
                name:name,
                email:email,
                dni:dni,
                password:passwordEncrypted
            })
            await newUsuario.save();
            return {success:true}
        }catch(e){
            return {
                success:false,
                error: "campo error"
            }
        }
    },
    obtenerUsuarios: async function() {
        try {
          const usuarios = await Usuario.find();
          return usuarios;
        } catch (e) {
          console.log(e);
          throw new Error("Error al obtener los usuarios");
        }   
    },
    obtenerUsuarioPorId : async function(id) {
      try {
        const usuario = await Usuario.findById(id);
        return usuario;
      } catch (error) {
        return null;
      }
    },
    obtenerMensajesPorUsuario: async function(request){
      try{
        const {userId}=request.params;
        const usuario=await servicioUsuario.obtenerUsuarioPorId(userId);
        if(!usuario) return {};
        const mensajes= await servicioMensaje.obtenerMensajesPorUsuario(userId);
        return mensajes;
      }catch(e){
        return {};
      }
    },
    buscarUsuarioPorEmail : async function(email){
      try {
        const usuariosEncontrados = await Usuario.findOne({ email: email });
        return usuariosEncontrados;
      } catch (error) {
        return null;
      }
    }

}
function validar(name,email,dni,password){
    if (!name) {
        return {
          success: false,
          error: "Falta el campo name"
        };
      }
    else if (!email) {
        return {
          success: false,
          error: "Falta el campo email"
        };
      }
    else if (!dni) {
        return {
          success: false,
          error: "Falta el campo dni"
        };
      }
    else if (!password) {
        return {
          success: false,
          error: "Falta el campo password"
        };
      }
}

export default servicioUsuario;
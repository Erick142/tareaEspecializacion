import Mensaje from "../model/mensaje.js";
import servicioUsuario from "../servicio/servicioUsuario.js";

const servicioMensaje={
    guardarMensaje: async function(request){
        try{
            const {userId,message}=request.body;
            const usuario=await servicioUsuario.obtenerUsuarioPorId(userId);

            if(!usuario) return {success:false}
            const newMensaje= new Mensaje({
                userId:userId,
                message:message
            })

            await newMensaje.save();
            return {success:true}
        }catch(e){
            console.log(e)
            return {success:false}
        }
    },
    obtenerMensajesPorUsuario: async function(userId){
        try {
            const mensajes = await Mensaje.find({ userId: userId });
            return mensajes;
        } catch (error) {
            return null;
        }
    },
    eliminarPorId: async function(request){
        try {
            const {messageId}=request.params;
            const mensaje = await Mensaje.findByIdAndRemove(messageId);
            if(!mensaje) return {success:false};
            return {success:true};
          } catch (error) {
            console.log(error);
            return {success:false};
          }
    }
}

export default servicioMensaje;
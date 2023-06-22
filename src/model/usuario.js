import mongoose from "mongoose";
const Schema= mongoose.Schema;

const usuarioSchema=new Schema(
    {
        name: {
            type:String,
            required:true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        dni: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

const Usuario= mongoose.model("Usuario", usuarioSchema);

export default Usuario;
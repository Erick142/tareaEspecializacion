import mongoose from "mongoose";

const Schema= mongoose.Schema;

const mensajeSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Mensaje=mongoose.model("Mensaje",mensajeSchema);

export default Mensaje;


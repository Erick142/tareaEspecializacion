import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config()

const user=process.env.USUARIO;
const pass=process.env.PASSWORD;
const db=process.env.DATABASE;
const url=`mongodb+srv://${user}:${pass}@cluster0.xtbjrzg.mongodb.net/${db}?retryWrites=true&w=majority`
const conexionbd={
    conectarConMongoDB: async function() {
        try {
          await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    
          console.log("Conexión exitosa a MongoDB");
    
        } catch (error) {
          console.log("Error al conectar a MongoDB:", error);
        }
    }
}



export default conexionbd;
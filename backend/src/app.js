// Crear un servidor Express básico para manejar las solicitudes de la API. Este servidor escuchará en el puerto 3000 y tendrá una ruta raíz que responde con un mensaje de confirmación. También se configura CORS para permitir solicitudes desde el frontend.
import { pool } from "./config/db.js";
import express from "express";  // Importar el módulo Express para crear el servidor y manejar las rutas.
import cors from "cors";        // Importar el módulo CORS para permitir solicitudes desde el frontend.
//  IMPORTAR RUTAS
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());        

//  USAR RUTAS
app.use("/api", authRoutes);

// Ruta raíz para verificar que la API está funcionando. Responde con un mensaje de confirmación.
app.get("/", (req, res) => {
  res.send("API funcionando"); 
});

//  PRUEBA DE CONEXIÓN
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error conexión DB", err);
  } else {
    console.log("DB conectada:", res.rows);
  }
});

console.log("ENV PASSWORD:", process.env.DB_PASSWORD);

// Iniciar el servidor en el puerto 3000 y mostrar un mensaje en la consola cuando esté listo.
app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
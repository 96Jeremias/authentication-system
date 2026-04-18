// Crear un servidor Express básico para manejar las solicitudes de la API. Este servidor escuchará en el puerto 3000 y tendrá una ruta raíz que responde con un mensaje de confirmación. También se configura CORS para permitir solicitudes desde el frontend.
import express from "express";  // Importar el módulo Express para crear el servidor y manejar las rutas.
import cors from "cors";        // Importar el módulo CORS para permitir solicitudes desde el frontend.

const app = express();

app.use(cors());                
app.use(express.json());        

// Ruta raíz para verificar que la API está funcionando. Responde con un mensaje de confirmación.
app.get("/", (req, res) => {
  res.send("API funcionando");
});

// Iniciar el servidor en el puerto 3000 y mostrar un mensaje en la consola cuando esté listo.
app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
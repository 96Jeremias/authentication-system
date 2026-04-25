// Configurar la conexión a la base de datos PostgreSQL utilizando el módulo `pg`. Se crea un pool de conexiones que se puede reutilizar en toda la aplicación para ejecutar consultas a la base de datos. Las credenciales de conexión se cargan desde variables de entorno utilizando `dotenv` para mantenerlas seguras y no hardcodeadas en el código fuente.
import pkg from "pg";
const { Pool } = pkg;

// Cargar las variables de entorno desde el archivo .env para acceder a las credenciales de la base de datos.
import dotenv from "dotenv";
dotenv.config(); // Cargar las variables de entorno desde el archivo .env

// Crear un pool de conexiones a la base de datos PostgreSQL utilizando las credenciales cargadas desde las variables de entorno.
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

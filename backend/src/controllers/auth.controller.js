import bcrypt from "bcrypt";
import { pool } from "../config/db.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validación
    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    // 2. Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Guardar en DB
    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    );

    // 4. Respuesta
    res.json({
      message: "Usuario registrado",
      user: result.rows[0],
    });

  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ error: "Email ya existe" });
    }

    res.status(500).json({ error: "Error del servidor" });
  }
};
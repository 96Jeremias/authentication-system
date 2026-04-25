
import express from "express";
import { register } from "../controllers/auth.controller.js";

// definimos las rutas
const router = express.Router();

// Alguien realiza una peticion post
router.post("/register", register);

export default router;
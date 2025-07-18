import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createClient } from "@supabase/supabase-js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const supabase = createClient(
  "https://fgfmtlvmpmiudjbufrjb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA"
);

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos de login" });
  }

  const cleanedEmail = email.trim().toLowerCase().replace(/\s/g, "");

  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("email", cleanedEmail);

  if (error || !data || data.length === 0) {
    return res.status(401).json({ message: "Usuario no encontrado" });
  }

  const user = data[0];

  if (user.password_hash.trim() !== password.trim()) {
    return res.status(401).json({ message: "Contraseña incorrecta" });
  }

  return res.status(200).json({
    message: "Login exitoso",
    user: {
      email: user.email,
      nombre: user.nombre ?? "Usuario",
    },
  });
});

app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});

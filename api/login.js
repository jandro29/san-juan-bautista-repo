import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  "https://fgfmtlvmpmiudjbufrjb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA"
);

const { data, error } = await supabase.from("usuarios").select("*");
console.log(" Todos los usuarios:", data);
console.log(" Error:", error);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { email, password } = req.body;

  console.log(" Email recibido:", email);
  console.log(" Password recibido:", password);

  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos de login" });
  }

  const cleanedEmail = email.trim().toLowerCase().replace(/\s/g, "");
  //  Este es el cambio crucial
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("email", cleanedEmail);

  console.log(" Resultado Supabase:", data);

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

  
}

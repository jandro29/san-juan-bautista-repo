import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fgfmtlvmpmiudjbufrjb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzIiwi...'
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña requeridos' });
  }

  const { data: user, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !user) {
    return res.status(401).json({ message: 'Usuario no encontrado' });
  }

  if (password !== user.password_hash) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  return res.status(200).json({
    message: 'Login exitoso',
    user: { id: user.id, email: user.email }
  });
}

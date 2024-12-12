require('dotenv').config();
console.log('Credenciales cargadas:', process.env.EMAIL_USER);
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, // Tu correo
    pass: process.env.EMAIL_PASS, // Contraseña o App Password
  },
});

// Ruta para enviar el formulario
app.post('/enviar-formulario', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: email,
      to: 'andres.herrera@mail.udp.cl',
      subject: 'Nuevo Mensaje de Contacto',
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Mensaje enviado' });
  } catch (error) {
    console.error('Error al enviar el correo', error);
    res.status(500).json({ success: false, message: 'Error al enviar el formulario' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await fetch('https://andreshf.cl/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      if (response.ok) {
        alert('Mensaje enviado con éxito');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Hubo un problema al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('No se pudo enviar el mensaje');
    }
  };

  return (
    <div id="contacto" className="container-fluid contacto">
      <div className="first-section">
        <h1>Contacto</h1>
        <p>Trabajemos juntos en tu próximo desafío.</p>
        <h2>Teléfono</h2>
        <p>+56 9 44177821</p>
        <h2>E-mail</h2>
        <p>andreshf@live.cl</p>
      </div>
      <div className="second-section">
        <form onSubmit={handleSubmit}>
          <div className="data-section">
            <div>
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="message-section">
            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <input className="btn_enviar" type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;

// src/components/Contacto.js
import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log('Formulario enviado:', formData);
        // Restablecer el formulario si es necesario
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container-fluid contacto">
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
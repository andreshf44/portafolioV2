// src/components/PersonalInfo.js
import React, { useState } from 'react';
import backgroundImage from '../../assets/pexels-junior-teixeira-2047905.jpg';
import perfilImage from '../../assets/perfilEditada.JPG';

const PersonalInfo = () => {

    const [showInfo, setShowInfo] = useState(false);
    
    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <section id="container-fluid">
            <div id="container-info" className="personal-info">
                <div id="img-background" className="img-container">
                    <img src={backgroundImage} alt="computadora" />
                </div>
                <div className="perfil">
                    <div className="presentacion-container">
                        <div id="foto-perfil" className="img-container">
                            <img src={perfilImage} alt="foto de perfil" />
                        </div>
                        <div id="subtitulo-perfil" className={`subtitulo ${showInfo ? 'show-info' : ''}`}>
                            <h1>Hola</h1>
                            <h3>Un poco de mi
                                <i className="fa-duotone fa-circle-chevron-down chevron-info" onClick={toggleInfo}></i>
                            </h3>
                            <p className="presentacion">
                                Mi experiencia abarca la creación de interfaces atractivas con CSS, HTML y 
                                JavaScript, complementada por un sólido manejo de Git y el uso de frameworks
                                como Vue.js. Además, tengo experiencia en el desarrollo con Ruby on Rails 
                                en entornos de consola Linux, lo que me permite abordar diversos desafíos 
                                tecnológicos con flexibilidad. He desempeñado roles clave como analista de
                                datos, destacando en el análisis y visualización de datos complejos con 
                                la herramienta Power BI. Mi historial en diseño y arte, así como en 
                                jefatura de proyectos, combinado con habilidades de comunicación y 
                                resolución de problemas, me posiciona como un profesional versátil y 
                                proactivo, enfocado en contribuir al éxito de proyectos y al crecimiento 
                                organizacional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalInfo;
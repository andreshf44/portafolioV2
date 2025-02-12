// src/components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={isScrolled ? 'scrolled' : ''} id="container-header">
            <div className="header-nombre">
                <a className='scrollActive'>
                    <h1>Andrés Enrique Herrera Frey</h1>
                </a>
                <ul id='social'>
                    <li><a href="https://www.linkedin.com/in/andres-herrera-frey-b4879335/">
                        <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=56944177821">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/andreshf44">
                        <i class="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="contacto.html">
                        <i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                </ul>
                <p>Ingeniero en informática y Gestión | Técnico en Programación Avanzada | Front-End Web Developer</p>
            </div>
            <div className="header-contenido">
                <a id="cv" href="curriculum.html">Currículum</a>
                <a id="pr" href="proyecto.html">Proyectos</a>
                <a id="cn" href="contacto.html">Contacto</a>
            </div>
        </header>
    );
};

export default Header;
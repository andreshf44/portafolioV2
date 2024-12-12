// src/components/Footer.js
import React from 'react';
import whatsappIcon from '../../assets/whatsapp (1).png';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin (3).png';

const Footer = () => {
    return (
        <footer>
            <a className='shareSocialIcon'> 
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
            </a>
            <ul className="social-icons">
                <li> 
                    <a href="https://api.whatsapp.com/send?phone=56944177821" id="whatsapp">
                        <img src={whatsappIcon} alt="Whatsapp" />
                    </a>
                    <div className="li-telefono">
                        <h3>Teléfono</h3>
                        <span>+56 9 44177821</span>
                    </div>
                </li>
                <li>
                    <a href="contacto.html" id="email">
                        <img src={emailIcon} alt="Email" />
                    </a>
                    <div className="li-telefono">
                        <h3>E-mail</h3>
                        <span>andreshf@live.cl</span>
                    </div>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andres-herrera-frey-b4879335/" id="linkedin">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <div className="li-telefono">
                        <h3>LinkedIn</h3>
                        <span>Andres Herrera Frey</span>
                    </div>
                </li>
            </ul>
            <li className="autor">
                    <p><a href="">Política de Privacidad</a></p>
                    <p>&copy; 2024 Creado por Andrés Herrera.</p>
            </li>
        </footer>
    );
};

export default Footer;
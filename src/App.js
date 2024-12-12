// src/App.js
import React from 'react';
import Header from './components/Header-Footer/Header';
import PersonalInfo from './components/Home/PersonalInfo';
import Curriculum from './components/Curriculum/Curriculum';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Header-Footer/Footer';
import './styles/style.css'; 

function App() {
    return (
        <div>
            <Header />
            <PersonalInfo />
            <Curriculum />
            <Contacto />
            <Footer />
        </div>
    );
}

export default App;
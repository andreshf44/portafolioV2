// src/App.js
import React from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Curriculum from './components/Curriculum';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
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
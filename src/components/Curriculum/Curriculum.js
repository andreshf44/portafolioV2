// src/components/Curriculum.js
import React, { useState } from 'react';

const Curriculum = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentDocument, setCurrentDocument] = useState('');

    const openModal = (document) => {
        setCurrentDocument(document);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentDocument('');
    };

    return(
        <div id="curriculum" className="container-fluid">
        <h1>Currículum</h1>
        <div className="container-trabajo">
            <div className="trabajo">
                <h2>Experiencia Laboral</h2>
                <div className="container-items">
                    <div className="item">
                        <div className="titulo-item">
                            <p>Julio 2024 - Presente</p>
                            <h3>Desarrollador Front-End, IDOK, Santiago</h3>
                        </div>
                        <p>
                            Actualmente, estoy liderando la implementación del área de Front-End en IDOK. 
                            Mi trabajo incluye el desarrollo de interfaces utilizando Ruby en un entorno 
                            de consola virtual Linux. Manejo el código a través de Git mediante Bitbucket 
                            y utilizo Visual Studio Code para la edición y depuración. Mi enfoque está en 
                            crear experiencias de usuario intuitivas y eficientes mientras colaboro con el 
                            equipo para integrar las mejores prácticas de desarrollo front-end.
                        </p>
                    </div> 
                    <div className="item">
                        <div className="titulo-item">
                            <p>Mayo 2023 - Septiembre 2024</p>
                            <h3>Desarrollador Front-End, Webclass, Santiago</h3>
                        </div>
                        <p>
                            Como Desarrollador Front-end, me especialicé en el diseño y la optimización 
                            de interfaces gráficas. Mis responsabilidades incluían la corrección y mejora 
                            de código CSS, así como la creación y mejora de funciones utilizando JavaScript.
                            También me encargué de la optimización de templates HTML y PHP. 
                            Utilicé herramientas como Visual Studio Code para el desarrollo y trabajé con 
                            frameworks como Laravel, Vanilla y Vue. Además, gestioné el control de versiones 
                            utilizando Git a través de Bitbucket y colaboré en la metodología de trabajo 
                            por medio de la herramienta Jira.
                        </p>
                    </div> 
                    <div className="item">
                        <div className="titulo-item">
                            <p>Febrero - Abril / 2023</p>
                            <h3>Práctica Ingeniero de Datos, Itaú, Santiago. </h3>
                        </div>
                        <p>
                            Durante mi práctica profesional en Itaú, en el área de Crédito Inmobiliario 
                            y Construcción, colaboré en diversas tareas. Utilicé ETL para el procesamiento 
                            de datos de Excel, creé informes usando herramientas como Excel y Power BI 
                            para la generación de dashboards. Además, participé en la automatización de 
                            procesos de ingesta de datos para mejorar la eficiencia del área.  
                        </p>
                    </div> 
                    <div className="item">
                        <div className="titulo-item">
                            <p>Diciembre - Febrero / 2023</p>
                            <h3>Práctica programador Frontend, Forcast, Santiago. </h3>
                        </div>
                        <p>
                            Colaboré con el equipo de desarrollo Front-end en la construcción de una 
                            Aplicación Web. Trabajé en Visual Studio Code utilizando el framework Angular, 
                            y desarrollé código en JavaScript, HTML y CSS para mejorar la interfaz y la 
                            experiencia de usuario.
                        </p>
                    </div> 
                    <div className="item">
                        <div className="titulo-item">
                            <p>Marzo 2017 - Marzo 2018</p>
                            <h3>Coordinador de proyecto, Servicio Nacional de la Mujer y la Equidad de Género, Santiago.  </h3>
                        </div>
                        <p>
                            Me desempeñé como encargado de la administración integral del programa, 
                            supervisando la gestión de la base de datos, presupuestos y trabajadores. 
                            Tuve a mi cargo la planificación y coordinación de todas las actividades 
                            anuales del programa, incluyendo la coordinación del personal, participantes 
                            y servicios externos. Además, gestioné los contratos y pagos del personal, 
                            realicé compras a través de mercado público y generé informes financieros y de 
                            ejecución del programa.
                        </p>
                    </div> 
                    <div className="item">
                        <div className="titulo-item">
                            <p>Marzo 2018 - Mayo 2023</p>
                            <h3>Bailarín / Intérprete en danza, Ballet Nacional Chile / Centro de Extensión artística de la Universidad de Chile, Santiago.  </h3>
                        </div>
                        <p>
                            Dentro de mis labores como intérprete en danza fueron:
                            Interpretar diversas coreografías y piezas escénicas de directores tanto 
                            nacionales como internacionales.
                            Crear piezas artísticas, liderando un grupo de bailarines y colaborando con 
                            un equipo multidisciplinario para la puesta en escena. Impartir clases de danza 
                            a bailarines/as en formación y profesionales independientes, contribuyendo a su 
                            desarrollo y crecimiento en la disciplina."
                        </p>
                    </div> 
                </div>
            </div>
            <div id="formacion" className="trabajo">
                <h2>Formación</h2>
                <div className="container-items">
                <div className="item">
                    <div className="titulo-item">
                        <p>Marzo 2020 - Diciembre 2023</p>
                        <h3>Ingeniería en informática y gestión, Universidad Diego Portales, Santiago. </h3>
                        <button className="expandir-doc" onClick={() => openModal('/documentos/certificado-Titulo.pdf')}>Ver documento</button>
                    </div>
                    <p>
                        Mi formación académica abarca una amplia gama de áreas relevantes para la ingeniería en 
                        informática y gestión, incluyendo programación, formulación de proyectos, contabilidad, 
                        cálculo, ingeniería de software, gestión de proyectos informáticos, bases de datos, 
                        administración, liderazgo, procesos y economía. Además, he desarrollado habilidades sólidas 
                        en comunicación, presentaciones y he participado en prácticas profesionales para fortalecer 
                        mi experiencia práctica. 
                    </p>
                    {modalOpen && (
                    <div id="modal-documento" className="modal">
                    <div className="modal-contenido">
                        <span className="cerrar-modal" onClick={closeModal}>&times;</span>
                        <embed src={currentDocument} type="application/pdf" width="100%" height="600px" />
                    </div>
                    </div>
                    )}
                </div> 
                <div className="item">
                    <div className="titulo-item">
                        <p>Marzo 2020 - Diciembre 2021</p>
                        <h3>Técnico en programación avanzada, Universidad Diego Portales, Santiago.</h3>
                        <button className="expandir-doc" onClick={() => openModal('/documentos/certificado-tecnico.pdf')}>Ver documento</button>
                    </div>
                    <p>
                        Durante mi formación, adquirí conocimientos especializados en diferentes lenguajes 
                        de programación, lo que me ha permitido desarrollar habilidades sólidas en el 
                        diseño, desarrollo y mantenimiento de software.
                    </p>
                </div>
                <div className="item">
                    <div className="titulo-item">
                        <p>Febrero 2012 - Diciembre 2014</p>
                        <h3>Intérprete en danza, Teatro San Martin, Buenos Aires.</h3>
                    </div>
                    <p>
                        Durante mi formación, adquirí habilidades en técnicas de danza e interpretación escénica, 
                        así como conocimientos en herramientas para la realización de trabajos escénicos, 
                        incluyendo iluminación, composición coreográfica y dirección escénica."
                    </p>
                </div>
                <div className="item">
                    <div className="titulo-item">
                        <p>Agosto 2023</p>
                        <h3>Curso Básico de JavaScript, Platzi.</h3>
                        <button className="expandir-doc" onClick={() => openModal('/documentos/diploma-basico-javascript.pdf')}>Ver documento</button>
                    </div>
                    <p>
                        -Conocer los conceptos básicos de JS 
                        -Descubrir la historia de JavaScript 
                        -Aprender cómo tomar decisiones y validarlas 
                        -Trabajar con objetos  
                    </p>
                </div> 
                <div className="item">
                    <div className="titulo-item">
                        <p>Agosto 2023</p>
                        <h3>Curso práctico de FRONTEND DEVELOPER, Patzi.</h3>
                        <button className="expandir-doc" onClick={() => openModal('/documentos/diploma-frontend-developer-practico.pdf')}>Ver documento</button>
                    </div>
                    <p>
                        -Bases de HTML y CSS 
                        -Anatomía de un documento HTML, sus elementos y las propiedades de CSS 
                        -Maquetación con responsive design 
                    </p>
                </div>
                <div className="item">
                    <div className="titulo-item">
                        <p>Mayo 2023</p>
                        <h3>Curso de FRONTEND DEVELOPER, Platzi.</h3>
                        <button className="expandir-doc" onClick={() => openModal('/documentos/diploma-frontend.pdf')}>Ver documento</button>
                    </div>
                    <p>
                        Introducción al desarrollo frontend / Maquetación con HTML / Maquetación con 
                        CSS / Diseño responsivo (Responsive Design) / Arquitecturas en CSS. 
                    </p>
                </div>
                <div className="item">
                    <div className="titulo-item">
                        <p>Abril-Mayo 2023</p>
                        <h3>Curso Básico de Manipulación y Transformación de Datos con Python (Pandas y NumPy), Platzi.</h3>
                        <button className="expandir-doc" onClick={() => openModal('/documentos/diploma-manipulacion-datos.pdf')}>Ver documento</button>
                    </div>
                    <p>
                        NumPy: Que es/ Que bondades tiene/ Porque se usa/ Crear arrays/ Hacer slicing/ 
                        Filtrar datos/ Aplicar funciones aritméticas. 
                        Pandas: Que son Series- DataFrames/ Como llevar diferentes archivos/ Iloc y loc/ 
                        Apply.
                    </p>
                </div>
                </div>
            </div>
            <div className="trabajo">
                <h2>Habilidades y Experiencias.</h2>
                <ul>
                    <li>
                        <span>
                            Experiencia en el diseño, mejora y mantenimiento de aplicaciones web, 
                            utilizando herramientas como HTML, PHP, CSS y JavaScript para desarrollar aplicaciones 
                            web efectivas y funcionales. Mi capacidad en estas áreas me ha permitido cumplir con los 
                            estándares de calidad y usabilidad requeridos.
                        </span>
                    </li>
                    <li>
                        <span>
                            Durante dos años, he trabajado con el framework Vue.js, participando en el desarrollo de 
                            diversas aplicaciones web. Además, tengo experiencia en el control de versiones utilizando 
                            Git a través de Bitbucket. He trabajado siguiendo metodologías ágiles, utilizando la plataforma
                            Jira para la gestión y seguimiento de proyectos. En cuanto a ETL y bases de datos, tengo 
                            experiencia en SQL y en el uso de Power BI para análisis y visualización de datos.
                        </span>
                    </li>
                    <li>
                        <span>
                            Idiomas: Español Nativo / Ingles Nivel avanzado.
                        </span>
                    </li>
                    <li>
                        <span>
                            Con más de 13 años de experiencia en trabajo en equipo, he desarrollado habilidades blandas 
                            esenciales para un entorno laboral colaborativo. Destaco en áreas como el compañerismo, la 
                            escucha activa, la resolución de conflictos, el liderazgo y la motivación grupal, entre otros 
                            aspectos. Estas habilidades me han permitido contribuir al éxito de los proyectos en los que he 
                            participado y mantener un ambiente laboral positivo y productivo.
                        </span>
                    </li>
                    <li>
                        <span>
                            Soy una persona proactiva, metódica y positiva, con habilidades para la resolución de conflictos 
                            y la conciliación. Mi enfoque multifocal me permite abordar los desafíos desde diferentes 
                            perspectivas, mientras que mi sensibilidad y pensamiento analítico me ayudan a entender y 
                            encontrar soluciones efectivas a diversas situaciones.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Curriculum;
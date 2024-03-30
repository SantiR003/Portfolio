import { useEffect, useState } from 'react';


import '../Styles/body.css'

export const Body = () => {

    const [words, SetWords] = useState(['Programador', 'Full-Stack', 'Santiago Rubini']);
    const [isDeleting, SetIsDeleting] = useState(false);
    const [wordIndex, SetwordIndex] = useState(0);
    const [charIndex, SetcharIndex] = useState(0);

    const typeEffect = () => {
        const dynamicText = document.querySelector("h1 span");
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        dynamicText.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            SetcharIndex(charIndex + 1);
        }
        else if (isDeleting && charIndex > 0) {
            SetcharIndex(charIndex - 1);
        }
        else {
            SetIsDeleting(!isDeleting);
            if (isDeleting && charIndex === 0) {
                SetwordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }
    }


    useEffect(() => {
        const timeoutId = setTimeout(typeEffect, 200);
        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, wordIndex, words]);

    useEffect(()=>{
        mail();
    },[]);

    
    const mail = () =>{
        const input = document.querySelector('.mail');
        const img = document.querySelector('.contenedor-detalle-mail img');
        const alerta = document.querySelector('.alerta'); 

      
        img.addEventListener('click', function() {
          input.select();
          document.execCommand('copy');
          alerta.classList.remove('esconder');
          alerta.classList.add('mostrar');
          alerta.classList.add('mostrarAlerta');
      
          setTimeout(function() {
            alerta.classList.remove('mostrar');
            alerta.classList.add('esconder');
          }, 4000);
        });
    }


    return (
        <>
            <main className="body-container">
                <h1>Soy <span></span></h1>
                <p className='texto-presentacion'>
                    Egresado de la UTN de Mar del Plata y con estudios en diversos cursos. Cuento con mucha motivacion para aprender, crecer y desarrollarme en el mundo de la tecnologia.
                </p>
                <div className='links'>
                    <div className='cv'>
                        <a download={'Cv-Santiago Rubini'} href="src\Cv\CV - Santiago Rubini.pdf">Descargar CV</a>
                    </div>
                    <div className='iconos'>
                        <a href="https://www.linkedin.com/in/santiago-rubini/"><img src="src\icons\logotipo-de-linkedin (3).png" alt="" /></a>
                        <a href="https://github.com/SantiR003"><img src="src\icons\signo-de-github.png" alt="" /></a>
                    </div>
                </div>

                <section id='proyectos' className='contenedor-cartas'>
                    <div className='titulo-proyectos'>
                        <img src="src\icons\code-solid (1).svg" alt="" />
                        <h2>Proyectos</h2>
                    </div>

                    <div className='carta'>
                        <figure>
                            <img className='imagen' src="src\img\Through the Darkness.png" alt="juego de terror" />
                        </figure>
                        <div className='contenido-carta'>
                            <h3>Through the Darkness</h3>
                            <p>Juego de terror desarrollado como proyecto final en el "Curso de Desarrollo de Videojuegos - Nivel 1".</p>
                            <div className='icono-carta'>
                                <div className='tecnologias'>
                                    <div className='elemento blender'>
                                        <img src="src\icons\png-transparent-blender-hd-logo-removebg-preview.png" alt="" />
                                    </div>
                                    <div className='elemento c-sharp'>
                                        <img src="src\icons\Logo_C_sharp.svg.png" alt="" />
                                    </div>
                                    <div className='elemento unity'>
                                        <img src="src\icons\images-removebg-preview.png" alt="" />
                                    </div>
                                </div>
                                <div className='link'>
                                    <a href="https://github.com/SantiR003/Through-the-Darkness"><img src="src\icons\signo-de-github.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carta'>
                        <figure>
                            <img className='imagen' src="src\img\InicioJuego.jpg" alt="juego de aprendizaje" />
                        </figure>
                        <div className='contenido-carta'>
                            <h3>My Java Academy</h3>
                            <p>Proyecto desarrollado en conjunto con compañeros para la universidad utilizando Java y JavaFX, el cual trataria de un curso visual e interactivo sobre Java.</p>
                            <div className='icono-carta'>
                                <div className='tecnologias'>
                                    <div className='elemento java'>
                                        <img src="src\icons\226777-removebg-preview.png" alt="" />
                                    </div>
                                    <div className='elemento scene-builder'>
                                        <img src="src\icons\SceneBuilderLogo-removebg-preview.png" alt="" />
                                    </div>
                                </div>
                                <div className='link'>
                                    <a href="https://github.com/LadyCari/TpFinalLabIII"><img src="src\icons\signo-de-github.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carta'>
                        <figure>
                            <img className='imagen' src="src\img\GymApi.jpg" alt="sitio web de ejercicios" />
                        </figure>
                        <div className='contenido-carta'>
                            <h3>GymAPI</h3>
                            <p>Proyecto diseñado en conjunto con compañeros de la univesidad. Sitio web donde se pueden visualizar ejercicios para entrenamiento diario.</p>
                            <div className='icono-carta'>
                                <div className='tecnologias'>
                                    <div className='elemento angular'>
                                        <img src="src\icons\download-removebg-preview.png" alt="" />
                                    </div>
                                    <div className='elemento html'>
                                        <img src="src\icons\gratis-png-html-diseno-web.png" alt="" />
                                    </div>
                                    <div className='elemento css'>
                                        <img src="src\icons\png-transparent-web-development.png" alt="" />
                                    </div>
                                    <div className='elemento ts'>
                                        <img src="src\icons\typescript_xfc5bs-removebg-preview (1).png" alt="" />
                                    </div>
                                </div>
                                <div className='link'>
                                    <a href="https://github.com/bmSgithub/tplab4"><img src="src\icons\signo-de-github.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carta'>
                        <figure>
                            <img className='imagen' src="src\img\Portfolio.jpg" alt="portfolio" />
                        </figure>
                        <div className='contenido-carta'>
                            <h3>Portfolio</h3>
                            <p>Proyecto personal para tener una presentacion mas profesional de mi. Desarrollado con el Framework React.</p>
                            <div className='icono-carta'>
                                <div className='tecnologias'>
                                    <div className='elemento html'>
                                        <img src="src\icons\gratis-png-html-diseno-web.png" alt="" />
                                    </div>
                                    <div className='elemento css'>
                                        <img src="src\icons\png-transparent-web-development.png" alt="" />
                                    </div>
                                    <div className='elemento react'>
                                        <img src="src\icons\png-react.png" alt="" />
                                    </div>
                                    <div className='elemento javascript'>
                                        <img src="src\icons\JavaScript-logo.png" alt="" />
                                    </div>
                                </div>
                                <div className='link'>
                                    <a href="https://github.com/SantiR003/Through-the-Darkness"><img src="src\icons\signo-de-github.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='sobreMi' className='contenedor-sobreMi'>

                    <div className='titulo-proyectos titulo-sobreMi'>
                        <img src="src\icons\perfil (2).png" alt="" />
                        <h2>Sobre Mi</h2>
                    </div>

                    <div className='contenedor-informacion-sobreMi'>
                        <div className='sobreMi-imagen'>
                            <img src="src\img\imagen de yo, recortada.png" alt="" />
                        </div>
                        <div className='sobreMi-texto'>
                            <p className='texto-sobreMi texto-presentacion'>
                                Soy Santiago Rubini, apasionado por la programación y sus distintas areas desde 2021. Graduado en la Tecnicatura en Programación de la Universidad Tecnológica Nacional de Mar del Plata, con experiencia en una variedad de cursos tanto en Front-End como en Back-End.                    </p>
                            <br />
                            <p className='texto-sobreMi texto-presentacion'>
                                Estoy en busca de mi primera experiencia como desarrollador, con un fuerte enfoque en el Back-End. Me apasiona resolver problemas, optimizar código y enfrentar desafíos técnicos. Estoy comprometido a mejorar mis habilidades a través de cursos y proyectos personales.                    </p>
                            <br />
                            <p className='texto-sobreMi texto-presentacion'>
                                Me caracterizo por mi perseverancia frente a las dificultades y activamente aplico mis conocimientos para fortalecer mis habilidades. Estoy entusiasmado por mejorar como desarrollador y explorar todo lo que este campo ofrece.                    </p>
                        </div>
                    </div>
                </section>

                <section id='habilidades' className='contenedor-habilidades'>
                    <div className='titulo-proyectos titulo-habilidades'>
                        <img src="src\icons\habilidades.png" alt="" />
                        <h2>Habilidades</h2>
                    </div>

                    <div className='contenedor-detalles-habilidades'>

                        <div className='habilidades'>
                            <div className='titulo-proyectos titulo-habilidad'>
                                <h3>Front-End</h3>
                                <img src="src\icons\programacion.png" alt="" />
                            </div>
                            <ul className='listas-habilidades'>
                                <li className='habilidad elemento html'>
                                    <img src="src\icons\gratis-png-html-diseno-web.png" alt="" />
                                    <p>HTML</p>
                                </li>
                                <li className='habilidad elemento css'>
                                    <img src="src\icons\png-transparent-web-development.png" alt="" />
                                    <p>CSS</p>
                                </li>
                                <li className='habilidad elemento javascript'>
                                    <img src="src\icons\JavaScript-logo.png" alt="" />
                                    <p>JavaScript</p>
                                </li>

                                <div className='separador'>
                                    <p className='lineas'>_________</p>
                                    <p className='texto-separador'>Aprendiendo</p>
                                    <p className='lineas'>_________</p>
                                </div>

                                <li className='habilidad elemento angular'>
                                    <img src="src\icons\download-removebg-preview.png" alt="" />
                                    <p>Angular</p>
                                </li>
                                <li className='habilidad elemento react'>
                                    <img src="src\icons\png-react.png" alt="" />
                                    <p>React</p>
                                </li>
                            </ul>

                        </div>

                        <div className='habilidades'>
                            <div className='titulo-proyectos titulo-habilidad'>
                                <h3>Back-End</h3>
                                <img src="src\icons\backend.png" alt="" />
                            </div>
                            <ul className='listas-habilidades'>
                                <li className='habilidad elemento java'>
                                    <img src="src\icons\226777-removebg-preview.png" alt="" />
                                    <p>Java</p>
                                </li>
                                <li className='habilidad elemento c'>
                                    <img src="src\icons\download-removebg-preview (1).png" alt="" />
                                    <p>C</p>
                                </li>
                                <li className='habilidad elemento mysql'>
                                    <img src="src\icons\528260-removebg-preview.png" alt="" />
                                    <p>MySQL</p>
                                </li>
                                <div className='separador'>
                                    <p className='lineas'>_________</p>
                                    <p className='texto-separador'>Aprendiendo</p>
                                    <p className='lineas'>_________</p>
                                </div>
                                <li className='habilidad elemento spring'>
                                    <img src="src\icons\spring-3-logo-png-transparent-removebg-preview.png" alt="" />
                                    <p>Spring</p>
                                </li>
                            </ul>
                        </div>

                        <div className='habilidades'>
                            <div className='titulo-proyectos titulo-habilidad'>
                                <h3>Habilidades Blandas</h3>
                                <img src="src\icons\interaction.png" alt="" />
                            </div>
                            <ul className='listas-habilidades blandas'>
                                <li className='habilidad-blanda elemento'>
                                    <p>Persistente</p>
                                </li>
                                <li className='habilidad-blanda elemento'>
                                    <p>Responsable</p>
                                </li>
                                <li className='habilidad-blanda elemento'>
                                    <p>Proactivo</p>
                                </li>
                                <li className='habilidad-blanda elemento'>
                                    <p>Entusiasta</p>
                                </li>
                                <li className='habilidad-blanda elemento'>
                                    <p>Comprometido</p>
                                </li>
                                <li className='habilidad-blanda elemento'>
                                    <p>Creativo</p>
                                </li>
                                <li className='habilidad-blanda elemento'>
                                    <p>Resolutivo</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id='mail' className='contenedor-mail'>
                    <div className='titulo-proyectos titulo-mail'>
                        <img src="src\icons\email.png" alt="" />
                        <h2>E-mail</h2>
                    </div>
                    <div className='contenedor-detalle-mail'>
                        <input type="text" className='mail' readOnly defaultValue={"rubinisantiago@hotmail.com"} />
                        <img src="src\icons\copiar-el-simbolo-de-interfaz-de-dos-hojas-de-papel.png" alt="" />
                    </div>
                    <div className='alerta esconder'>
                        <span className='mensaje'>Mail copiado en el portapapeles</span>
                    </div>
                </section>
            </main>
        </>
    );
}
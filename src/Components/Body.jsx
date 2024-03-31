import { useEffect, useState } from 'react';
import { SobreMi } from './Seccion-sobreMi';


import '../Styles/body.css'
import { Proyectos } from './Seccion-proyectos';
import { Habilidades } from './Seccion-habilidades';
import { Email } from './Seccion-email';

export const Body = () => {

    const [words, SetWords] = useState(['Resolutivo', 'Full-Stack', 'Ambicioso','Apasionado']);
    const [isDeleting, SetIsDeleting] = useState(false);
    const [wordIndex, SetwordIndex] = useState(0);
    const [charIndex, SetcharIndex] = useState(0);

    const typeEffect = () => {
        const dynamicText = document.querySelector(".presentacion-subtitulo span");
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
            setTimeout(()=>{
                SetIsDeleting(!isDeleting);
            },1000);
            if (isDeleting && charIndex === 0) {
                SetwordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }
    }


    useEffect(() => {
        const timeoutId = setTimeout(typeEffect, 200);
        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, wordIndex, words]);

    useEffect(() => {
        mail();
    }, []);


    const mail = () => {
        const input = document.querySelector('.mail');
        const img = document.querySelector('.contenedor-detalle-mail img');
        const alerta = document.querySelector('.alerta');


        img.addEventListener('click', function () {
            input.select();
            document.execCommand('copy');
            alerta.classList.remove('esconder');
            alerta.classList.add('mostrar');
            alerta.classList.add('mostrarAlerta');

            setTimeout(function () {
                alerta.classList.remove('mostrar');
                alerta.classList.add('esconder');
            }, 4000);
        });
    }


    return (
        <>
            <main className="body-container">
                <div className='contenedor-presentacion'>
                <h1>Santiago Rubini</h1>
                <h2 className='presentacion-subtitulo'>Soy <span></span></h2>
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
                </div>

                <section id='sobreMi' className='contenedor-sobreMi'>
                  <SobreMi/>
                </section>

                <section id='proyectos' className='contenedor-cartas'>
                    <Proyectos/>
                </section>

                <section id='habilidades' className='contenedor-habilidades'>
                    <Habilidades/>
                </section>

                <section id='mail' className='contenedor-mail'>
                   <Email/>
                </section>
            </main>
        </>
    );
}
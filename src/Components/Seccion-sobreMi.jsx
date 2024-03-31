import '../Styles/body.css'

export const SobreMi = () => {

    return (
        <>
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
                        Soy Santiago Rubini, apasionado por la programación y sus distintas areas desde 2021. <span>Graduado en la Tecnicatura en Programación de la Universidad Tecnológica Nacional</span> de Mar del Plata, con experiencia en una variedad de cursos <span>tanto en Front-End como en Back-End</span>.                    </p>
                    <br />
                    <p className='texto-sobreMi texto-presentacion'>
                        Estoy en busca de mi primera experiencia como desarrollador, con un <span>fuerte enfoque en el Back-End</span>. Me apasiona resolver problemas, optimizar código y enfrentar desafíos técnicos. Estoy <span>comprometido a mejorar mis habilidades</span> a través de cursos y proyectos personales.                    </p>
                    <br />
                    <p className='texto-sobreMi texto-presentacion'>
                        Me caracterizo por mi <span>perseverancia frente a las dificultades</span> y activamente aplico mis conocimientos para fortalecer mis habilidades. Estoy <span>entusiasmado por mejorar</span> como desarrollador y explorar todo lo que este campo ofrece.                    </p>
                </div>
            </div>
        </>

    );
}
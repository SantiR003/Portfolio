import '../Styles/body.css'

export const Proyectos = () => {

    return (
        <>
            <div className='titulo-proyectos'>
                <img src="\icons\code-solid (1).svg" alt="" />
                <h2>Proyectos</h2>
            </div>

            <div className='carta'>
                <figure>
                    <img className='imagen' src="\img\Through the Darkness.png" alt="juego de terror" />
                </figure>
                <div className='contenido-carta'>
                    <h3>Through the Darkness</h3>
                    <p>Juego de terror desarrollado como proyecto final en el "Curso de Desarrollo de Videojuegos - Nivel 1".</p>
                    <div className='icono-carta'>
                        <div className='tecnologias'>
                            <div className='elemento blender'>
                                <img src="\icons\png-transparent-blender-hd-logo-removebg-preview.png" alt="" />
                            </div>
                            <div className='elemento c-sharp'>
                                <img src="\icons\Logo_C_sharp.svg.png" alt="" />
                            </div>
                            <div className='elemento unity'>
                                <img src="\icons\images-removebg-preview.png" alt="" />
                            </div>
                        </div>
                        <div className='link'>
                            <a href="https://github.com/SantiR003/Through-the-Darkness"><img src="\icons\signo-de-github.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='carta'>
                <figure>
                    <img className='imagen' src="\img\InicioJuego.jpg" alt="juego de aprendizaje" />
                </figure>
                <div className='contenido-carta'>
                    <h3>My Java Academy</h3>
                    <p>Proyecto desarrollado en conjunto con compañeros para la universidad utilizando Java y JavaFX, el cual trataria de un curso visual e interactivo sobre Java.</p>
                    <div className='icono-carta'>
                        <div className='tecnologias'>
                            <div className='elemento java'>
                                <img src="\icons\226777-removebg-preview.png" alt="" />
                            </div>
                            <div className='elemento scene-builder'>
                                <img src="\icons\SceneBuilderLogo-removebg-preview.png" alt="" />
                            </div>
                        </div>
                        <div className='link'>
                            <a href="https://github.com/LadyCari/TpFinalLabIII"><img src="\icons\signo-de-github.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='carta'>
                <figure>
                    <img className='imagen' src="\img\GymApi.jpg" alt="sitio web de ejercicios" />
                </figure>
                <div className='contenido-carta'>
                    <h3>GymAPI</h3>
                    <p>Proyecto diseñado en conjunto con compañeros de la univesidad. Sitio web donde se pueden visualizar ejercicios para entrenamiento diario.</p>
                    <div className='icono-carta'>
                        <div className='tecnologias'>
                            <div className='elemento angular'>
                                <img src="\icons\download-removebg-preview.png" alt="" />
                            </div>
                            <div className='elemento html'>
                                <img src="\icons\gratis-png-html-diseno-web.png" alt="" />
                            </div>
                            <div className='elemento css'>
                                <img src="\icons\png-transparent-web-development.png" alt="" />
                            </div>
                            <div className='elemento ts'>
                                <img src="\icons\typescript_xfc5bs-removebg-preview (1).png" alt="" />
                            </div>
                        </div>
                        <div className='link'>
                            <a href="https://github.com/bmSgithub/tplab4"><img src="\icons\signo-de-github.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='carta'>
                <figure>
                    <img className='imagen' src="\img\portfolio-img.jpg" alt="portfolio" />
                </figure>
                <div className='contenido-carta'>
                    <h3>Portfolio</h3>
                    <p>Proyecto personal para tener una presentacion mas profesional de mi. Desarrollado con el Framework React.</p>
                    <div className='icono-carta'>
                        <div className='tecnologias'>
                            <div className='elemento html'>
                                <img src="\icons\gratis-png-html-diseno-web.png" alt="" />
                            </div>
                            <div className='elemento css'>
                                <img src="\icons\png-transparent-web-development.png" alt="" />
                            </div>
                            <div className='elemento react'>
                                <img src="\icons\png-react.png" alt="" />
                            </div>
                            <div className='elemento javascript'>
                                <img src="\icons\JavaScript-logo.png" alt="" />
                            </div>
                        </div>
                        <div className='link'>
                            <a href="https://github.com/SantiR003/Through-the-Darkness"><img src="\icons\signo-de-github.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
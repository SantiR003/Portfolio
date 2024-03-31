import '../Styles/body.css'

export const Habilidades = () => {

    return (
        <>
            <div className='titulo-proyectos titulo-habilidades'>
                <img src="\icons\habilidades.png" alt="" />
                <h2>Habilidades</h2>
            </div>

            <div className='contenedor-detalles-habilidades'>

                <div className='habilidades'>
                    <div className='titulo-proyectos titulo-habilidad'>
                        <h3>Front-End</h3>
                        <img src="\icons\programacion.png" alt="" />
                    </div>
                    <ul className='listas-habilidades'>
                        <li className='habilidad elemento html'>
                            <img src="\icons\gratis-png-html-diseno-web.png" alt="" />
                            <p>HTML</p>
                        </li>
                        <li className='habilidad elemento css'>
                            <img src="\icons\png-transparent-web-development.png" alt="" />
                            <p>CSS</p>
                        </li>
                        <li className='habilidad elemento javascript'>
                            <img src="\icons\JavaScript-logo.png" alt="" />
                            <p>JavaScript</p>
                        </li>

                        <div className='separador'>
                            <p className='lineas'>_________</p>
                            <p className='texto-separador'>Aprendiendo</p>
                            <p className='lineas'>_________</p>
                        </div>

                        <li className='habilidad elemento angular'>
                            <img src="\icons\download-removebg-preview.png" alt="" />
                            <p>Angular</p>
                        </li>
                        <li className='habilidad elemento react'>
                            <img src="\icons\png-react.png" alt="" />
                            <p>React</p>
                        </li>
                    </ul>

                </div>

                <div className='habilidades'>
                    <div className='titulo-proyectos titulo-habilidad'>
                        <h3>Back-End</h3>
                        <img src="\icons\backend.png" alt="" />
                    </div>
                    <ul className='listas-habilidades'>
                        <li className='habilidad elemento java'>
                            <img src="\icons\226777-removebg-preview.png" alt="" />
                            <p>Java</p>
                        </li>
                        <li className='habilidad elemento c'>
                            <img src="src\icons\download-removebg-preview (1).png" alt="" />
                            <p>C</p>
                        </li>
                        <li className='habilidad elemento mysql'>
                            <img src="\icons\528260-removebg-preview.png" alt="" />
                            <p>MySQL</p>
                        </li>
                        <div className='separador'>
                            <p className='lineas'>_________</p>
                            <p className='texto-separador'>Aprendiendo</p>
                            <p className='lineas'>_________</p>
                        </div>
                        <li className='habilidad elemento spring'>
                            <img src="\icons\spring-3-logo-png-transparent-removebg-preview.png" alt="" />
                            <p>Spring</p>
                        </li>
                    </ul>
                </div>

                <div className='habilidades'>
                    <div className='titulo-proyectos titulo-habilidad'>
                        <h3>Habilidades Blandas</h3>
                        <img src="\icons\interaction.png" alt="" />
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
        </>
    );

}
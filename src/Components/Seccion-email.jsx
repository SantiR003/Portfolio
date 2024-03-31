import '../Styles/body.css'

export const Email = () => {

    return (
        <>
            <div className='titulo-proyectos titulo-mail'>
                <img src="\icons\email.png" alt="" />
                <h2>E-mail</h2>
            </div>
            <div className='contenedor-detalle-mail'>
                <input type="text" className='mail' readOnly defaultValue={"rubinisantiago@hotmail.com"} />
                <img src="\icons\copiar-el-simbolo-de-interfaz-de-dos-hojas-de-papel.png" alt="" />
            </div>
            <div className='alerta esconder'>
                <span className='mensaje'>Mail copiado en el portapapeles</span>
            </div>
        </>
    );

}
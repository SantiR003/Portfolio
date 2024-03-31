import '../Styles/body.css';
import '../Styles/footer.css';

export const Footer = () => {

    return (
        <div className="contenedor-footer">
            <div className="iconos iconos-footer">
                <a href="https://www.linkedin.com/in/santiago-rubini/"><img src="src\icons\logotipo-de-linkedin (3).png" alt="" /></a>
                <a href="https://github.com/SantiR003"><img src="src\icons\signo-de-github.png" alt="" /></a>
            </div>
            <div className="texto-footer">
                <p>© 2024 <a href="#">Santiago Rubini</a>
                </p>
            </div>
        </div>
    );
}
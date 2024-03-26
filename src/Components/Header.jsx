import { useState,useEffect } from 'react';
import '../Styles/Header.css'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <header className={`container-header ${isScrolled ? 'scrolled' : ''}`}>
                <nav>
                    <ul>
                        <li><a href="#" className='elemento-nav'>Sobre mi</a></li>
                        <li><a href="#" className='elemento-nav'>Proyectos</a></li>
                        <li><a href="#" className='elemento-nav'>Tecnologias</a></li>
                        <li><a href="#" className='elemento-nav'>Contacto</a></li>
                    </ul>
                </nav>
            </header>
    );
};
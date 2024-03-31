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
                        <li><a href="#sobreMi" className='elemento-nav'>Sobre mi</a></li>
                        <li><a href="#proyectos" className='elemento-nav'>Proyectos</a></li>
                        <li><a href="#habilidades" className='elemento-nav'>Habilidades</a></li>
                        <li><a href="#mail" className='elemento-nav'>E-mail</a></li>
                    </ul>
                </nav>
            </header>
    );
};
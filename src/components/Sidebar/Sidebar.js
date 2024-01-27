import React from 'react';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import '../../styles/vars.css';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="Logo do Spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span><i className="fa fa-home"></i></span>
                            <span className="text-menu-sidebar">Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><i className="fa fa-search"></i></span>
                            <span className="text-menu-sidebar">Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <div className="tooltip"><span className="fa fa-plus"></span>
                        <span className="tooltip-text">Criar playlist ou pasta</span>
                    </div>
                    
                </div>
                
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;
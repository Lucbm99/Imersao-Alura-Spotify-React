import React, { useEffect, useState } from 'react';
import search from '../../assets/icons/search.png';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import './Header.css';

const Header = ({ setFilteredArtists }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false); // State variable to track loading state
    const baseURL = "https://my-json-server.typicode.com/Lucbm99/API-Artists-Spotify/artists";

    useEffect(() => {
        let timeoutId;

        const fetchData = async () => {
            setLoading(true); // Set loading to true when fetching data
            const response = await fetch(`${baseURL}?name_like=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Resposta sem sucesso. Verifique e tente novamente.');
            }
            const data = await response.json();

            if (data.length > 0) {
                setFilteredArtists(data); // Update filtered artists
            } else {
                alert('Artista informado na pesquisa não encontrado. Verifique e tente novamente.');
            }
            setLoading(false); // Set loading to false when data fetching is complete
        }

        // Execute fetchData after 3 seconds if searchTerm changes
        const delaySearch = () => {
            timeoutId = setTimeout(() => {
                fetchData();
            }, 3000); // 3000 milliseconds = 3 seconds
        };

        if (searchTerm.trim() !== '') {
            delaySearch();
        } else {
            setFilteredArtists([]); // Clear filtered artists when search term is empty
        }

        // Clear timeout if searchTerm changes before the delay expires
        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchTerm, setFilteredArtists]); // Update useEffect dependencies

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>

                <div className="header__search">
                    <img src={search} alt="" />
                    <input
                        type="text"
                        value={searchTerm}
                        maxLength="800"
                        placeholder="O que você quer ouvir?"
                        autoFocus
                        onChange={handleInputChange}
                    />
                {loading && <p className="loading">Carregando...</p>} {/* Display loading indicator */}
                </div>
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}

export default Header;

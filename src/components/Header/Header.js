import React, { useEffect, useState } from 'react';
import search from '../../assets/icons/search.png';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import './Header.css';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const baseURL = "https://my-json-server.typicode.com/Lucbm99/API-Artists-Spotify/artists";
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${baseURL}?name_like=${searchTerm}`);
                console.log(response);
                if (!response.ok) {
                    throw new Error('Resposta sem sucesso. Verifique e tente novamente.');
                }
                const data = await response.json();
                    setSearchResults(data);
                    setLoading(false);
            } catch (error) {
                setError('Ocorreu um erro ao buscar os dados. Verifique e tente novamente.');
                setLoading(false);
            }
        };
    
        // Buscar dados apenas se "searchTerm" não estiver vazio
        if (searchTerm.trim() !== '') {
            fetchData();
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);
    
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
                    {/* <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" autofocus /> */}
                    <input
                        type="text"
                        value={searchTerm}
                        maxLength="800" 
                        placeholder="O que você quer ouvir?" 
                        autoFocus
                        onChange={handleInputChange}
                    />
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <div>
                        {searchResults.map((artist) => (
                        <div key={artist.id}>
                            <h3>{artist.name}</h3>
                            <p>{artist.genre}</p>
                            <img src={artist.urlImg} alt={artist.name} />
                        </div>
                        ))}
                    </div>
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
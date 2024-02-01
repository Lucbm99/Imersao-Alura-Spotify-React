import React, { useEffect, useState } from 'react';

import ArtistCard from '../ArtistCard/Artist';
import './Main.css';

const Main = () => {
    const [greeting, setGreeting] = useState('');
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Lucbm99/API-Artists-Spotify/artists')
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const currentHour = new Date().getHours();
    
        if (currentHour >= 5 && currentHour < 12) {
            setGreeting('Bom dia 🌥️');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa tarde ☀️');
        } else {
            setGreeting('Boa noite 🌙');
        }
    }, []);
    
    
    return (
        <main>
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <div className="greeting__text">
                            {greeting}
                        </div>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                <div className="cards-container">
                                    {artists.map(artist => (
                                        <ArtistCard key={artist.id} artist={artist} />
                                    ))}                      
                                </div>              
                            </section>
                        </div>
                    </div>
                </div>


                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href=""></a>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie" id="artist-categorie"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>

    )
}

export default Main;
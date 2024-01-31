import React, { useEffect, useState } from 'react';

import card1 from '../../assets/playlist/1.jpeg';
import card10 from '../../assets/playlist/10.jpeg';
import card11 from '../../assets/playlist/11.jpeg';
import card12 from '../../assets/playlist/12.jpeg';
import card2 from '../../assets/playlist/2.png';
import card3 from '../../assets/playlist/3.jpeg';
import card4 from '../../assets/playlist/4.jpeg';
import card5 from '../../assets/playlist/5.jpeg';
import card6 from '../../assets/playlist/6.jpeg';
import card7 from '../../assets/playlist/7.jpeg';
import card8 from '../../assets/playlist/8.jpeg';
import card9 from '../../assets/playlist/9.jpeg';
import './Main.css';

const Main = () => {
    const [greeting, setGreeting] = useState('');

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
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src={card1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src={card2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src={card3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src={card4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src={card5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src={card6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src={card7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src={card8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src={card9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src={card10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src={card11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src={card12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>
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
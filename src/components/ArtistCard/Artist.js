import React from 'react';
import './Artist.css';

function ArtistCard({ artist }) {
    return (
        <div className="card">
            <img src={artist.urlImg} alt={artist.name} />
            <div className="card-content">
                <h2>{artist.name}</h2>
                <p>Genre: {artist.genre}</p>
            </div>
        </div>
    );
}


export default ArtistCard;

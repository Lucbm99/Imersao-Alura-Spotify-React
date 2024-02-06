import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/Lucbm99/API-Artists-Spotify/artists");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <body>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <main>
        <div className='main-container'>
          <Header setFilteredArtists={setFilteredArtists} />
          <Main artists={artists} filteredArtists={filteredArtists} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;

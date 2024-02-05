import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [filteredArtists, setFilteredArtists] = useState([]);

  return (
    <body>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <main>
        <div className='main-container'>
          <Header setFilteredArtists={setFilteredArtists} />
          <Main filteredArtists={filteredArtists} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;

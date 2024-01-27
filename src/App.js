import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <body>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <main>
        <div className='main-container'>
          <Header />
          <Main />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;

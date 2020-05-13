import React from 'react';
import HomePage from './pages/homePage'
import NavbarComponent from './components/Navbar'
import { NotesProvider } from './hooks/context/notesContext'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <NavbarComponent />
        <HomePage />
      </NotesProvider>
    </div>
  );
}

export default App;

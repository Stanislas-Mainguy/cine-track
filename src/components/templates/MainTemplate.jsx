import React from 'react';
import './MainTemplate.css';

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template">
      <header className="main-header">
        <h1>Mon Projet Films et Séries et d'animés</h1>
      </header>
      
      <main className="main-content">
        {children}
      </main>
      
      <footer className="main-footer">
        <p>© 2024 Mon Projet Films et Séries. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;

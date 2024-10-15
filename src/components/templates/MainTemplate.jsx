import React from 'react';
import './MainTemplate.css';

const MainTemplate = ({ children, extraSection }) => {
  return (
    <div className="main-template">
      <header className="main-header">
        <div className="banner">
          <h1 className="banner-title">
            {/* Texte Marvel-like avec jaquettes en arrière-plan */}
            Mon Projet Films et Séries
          </h1>
        </div>
        {/* Ici sera le menu de navigation plus tard */}
      </header>

      {/* Section supplémentaire visible uniquement si elle est passée en prop */}
      {extraSection && (
        <section className="extra-section">
          {extraSection}
        </section>
      )}

      <main className="main-content">
        {children}  {/* Contenu qui change selon la page */}
      </main>

      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Mon Projet Films et Séries. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;

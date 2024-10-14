import React from 'react';
import './MainTemplate.css';

const MainTemplate = ({ children }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="main-template">
            <header className="main-header">
                <h1>Mon Projet Films et Séries et d'Animés</h1>
            </header>
            
            <main className="main-content">
                {children}
            </main>
            
            <footer className="main-footer">
                <p>© {currentYear} Mon Projet Films, Séries et Animés. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default MainTemplate;

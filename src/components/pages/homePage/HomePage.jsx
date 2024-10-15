import React from 'react';
import MainTemplate from '../../templates/MainTemplate';

const HomePage = () => {
  // Section des carrousels (toujours présente entre le header et le main)
  const carouselsSection = (
    <section className="carousels-section">
      <h2>Films</h2>
      <div className="carousel">Carrousel des films (aléatoire)</div>

      <h2>Séries</h2>
      <div className="carousel">Carrousel des séries (aléatoire)</div>

      <h2>Animes</h2>
      <div className="carousel">Carrousel des animes (aléatoire)</div>
    </section>
  );

  return (
    <MainTemplate extraSection={carouselsSection}>
      {/* Ceci est injecté dans le <main> de MainTemplate */}
      <div className="main-cards-container">
        <h2>Résultats du filtrage</h2>
        <div className="cards-container">
          {/* Affichage des cartes filtrées */}
          Ici apparaîtront les cartes filtrées selon les choix du menu
        </div>
      </div>
    </MainTemplate>
  );
};

export default HomePage;

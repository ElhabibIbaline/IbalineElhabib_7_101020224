// // Fonction pour appliquer le style
// function updateAccueilLinkStyle() {
//   const accueilLink = document.querySelector('.accueil'); // Sélectionner le lien "Accueil"
//   const isLogementPage = window.location.pathname.startsWith('/logement'); // Vérifie si c'est la page logement
//   const isDesktop = window.innerWidth > 768; // Vérifie si c'est la version desktop

//   if (accueilLink) {
//     if (isLogementPage && isDesktop) {
//       accueilLink.style.textDecoration = 'none';
//     } else {
//       accueilLink.style.textDecoration = ''; // Réinitialiser le style
//     }
//   }
// }

// // Appliquer les styles au chargement de la page
// updateAccueilLinkStyle();

// // Appliquer les styles lors du redimensionnement de la fenêtre
// window.addEventListener('resize', updateAccueilLinkStyle);

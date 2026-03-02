const slides = document.querySelectorAll('.slide');
const nextBtns = document.querySelectorAll('.bottom-part a');
const skipBtns = document.querySelectorAll('.skip'); // Sélectionne tous les spans Skip

let currentSlide = 0;

// Fonction pour afficher une slide spécifique
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Gestion des boutons "Suivant" / "C'est parti !"
nextBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien <a>

        if (currentSlide < slides.length - 1) {
            // On passe à la slide suivante
            currentSlide++;
            showSlide(currentSlide);
        } else {
            // On est sur la dernière slide, on redirige
            window.location.href = "home.html";
        }
    });
});

// Gestion des boutons "Skip"
skipBtns.forEach((skip) => {
    skip.addEventListener('click', () => {
        window.location.href = "home.html";
    });
});

// Initialisation
showSlide(currentSlide);
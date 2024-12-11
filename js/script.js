document.addEventListener('DOMContentLoaded', () => {
    console.log("Sitio Web Listo");
    
    // Ejemplo: Cambiar color de fondo al hacer clic en un botón
    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', () => {
        alert('¡Has hecho clic en el título!');
    });
});


// Buscar productos en tiempo real//
const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    cards.forEach((card) => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        const description = card.querySelector(".card-text").textContent.toLowerCase();
        if (title.includes(searchText) || description.includes(searchText)) {
            card.parentElement.style.display = "block"; // Mostrar card
        } else {
            card.parentElement.style.display = "none"; // Ocultar card
        }
    });
});

// Categoria de productos en tiempo real//
document.addEventListener("DOMContentLoaded", () => {
    const categoryLinks = document.querySelectorAll(".category");
    const products = document.querySelectorAll(".product");

    categoryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            const category = e.target.dataset.category; // Obtener la categoría seleccionada

            products.forEach(product => {
                if (category === "all" || product.dataset.category === category) {
                    product.style.display = "block"; // Mostrar el producto si coincide la categoría
                } else {
                    product.style.display = "none"; // Ocultar el producto si no coincide
                }
            });
        });
    });
});


// Control automático del carrusel
const saboresCarrusel = document.getElementById('saboresCarrusel');

// Pausar el carrusel al pasar el cursor
saboresCarrusel.addEventListener('mouseover', () => {
    const carousel = bootstrap.Carousel.getInstance(saboresCarrusel);
    carousel.pause();
});

// Reanudar el carrusel al quitar el cursor
saboresCarrusel.addEventListener('mouseout', () => {
    const carousel = bootstrap.Carousel.getInstance(saboresCarrusel);
    carousel.cycle();
});
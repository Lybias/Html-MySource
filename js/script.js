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

// Acordeon
const faqAccordion = document.querySelectorAll('.accordion-button');
faqAccordion.forEach((button) => {
    button.addEventListener('click', () => {
        // Cierra todas las respuestas
        faqAccordion.forEach((btn) => {
            const collapse = btn.getAttribute('data-bs-target');
            if (collapse !== button.getAttribute('data-bs-target')) {
                document.querySelector(collapse).classList.remove('show');
            }
        });
    });
});


// MENSAJE POP OUT DE SUSCRIPCION
const subscriptionForm = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const subscriptionMessage = document.getElementById('subscription-message');

// Agregamos un evento para manejar el envío del formulario
subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que la página se recargue

    const email = emailInput.value.trim(); // Obtenemos el correo ingresado

    if (email) {
        // Mostramos el mensaje de suscripción exitosa
        subscriptionMessage.textContent = '¡Suscripción realizada correctamente!';
        subscriptionMessage.style.display = 'block';

        // Limpiamos el campo de correo después de enviar
        emailInput.value = '';

        // Ocultamos el mensaje después de 3 segundos
        setTimeout(() => {
            subscriptionMessage.style.display = 'none';
        }, 3000);
    } else {
        // Si el correo está vacío, mostramos un mensaje de error
        subscriptionMessage.textContent = 'Por favor, ingresa un correo válido.';
        subscriptionMessage.style.color = 'red';
        subscriptionMessage.style.display = 'block';
    }
    if (email) {
        subscriptionMessage.textContent = '¡Suscripción realizada correctamente!';
        subscriptionMessage.className = 'success'; // Mensaje en verde
    } else {
        subscriptionMessage.textContent = 'Por favor, ingresa un correo válido.';
        subscriptionMessage.className = 'error'; // Mensaje en rojo
    
    }
});



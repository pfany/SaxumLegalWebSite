document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    let indiceActual = 0;
  
    function mostrarImagen(indice) {
      imagenes.forEach((img, i) => {
        img.classList.toggle('activo', i === indice);
      });
    }
  
    prevBtn?.addEventListener('click', () => {
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  
    nextBtn?.addEventListener('click', () => {
      indiceActual = (indiceActual + 1) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  });
  
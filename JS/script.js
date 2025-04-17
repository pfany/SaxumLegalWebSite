  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contacto");
    const resumenSection = document.getElementById("resumen-section");
    const resumenDiv = document.getElementById("resumen");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío real

      // Obtener los valores del formulario
      const nombre = form.nombre.value;
      const email = form.email.value;
      const telefono = form.tlfno.value;
      const horario = form.p1.value;
      const medios = [...form.querySelectorAll('input[name="p2"]:checked')].map(input => input.value).join(", ");
      const especialidad = form.p3.options[form.p3.selectedIndex].text;
      const comentario = form.respuesta.value.trim();

      // Mostrar los datos en el resumen
      resumenDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Horario preferido:</strong> ${horario}</p>
        <p><strong>Medio de contacto:</strong> ${medios}</p>
        <p><strong>Especialidad elegida:</strong> ${especialidad}</p>
        <p><strong>Comentario:</strong> ${comentario || "Sin comentarios"}</p>
      `;

      // Mostrar resumen, ocultar formulario
      document.getElementById("formulario-section").style.display = "none";
      resumenSection.style.display = "block";
    });
  });


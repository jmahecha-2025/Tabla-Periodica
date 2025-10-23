function mostrarModal() {
  document.getElementById('modal').style.display = 'block';
}
function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

// Función para actualizar la fecha
function actualizarFecha() {
  const fechaElemento = document.getElementById('fecha');
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaActual = new Date().toLocaleDateString('es-ES', opciones);
  fechaElemento.textContent = fechaActual;
}

// Actualizar la fecha al cargar la página
window.onload = actualizarFecha;




const colores = {
  'HIDRÓGENO': 'no-metal',
  'HELIO': 'gas-noble',
  'SODIO': 'metal-alcalino',
  'CALCIO': 'metal-alcalinoterreo',
  'ITERBIO': 'lantanido'
};

document.querySelectorAll('.nombre-elemento').forEach(el => {
  const tipo = colores[el.textContent.trim().toUpperCase()];
  if (tipo) el.parentElement.classList.add(tipo);
});


for (let i = 0; i < no - metal.length; i++) {
  no - metal[i].addEventListener("click", () => {
    alert("hola");
    gota.style.animation = "gotaanimada";
    gota.style.animationDuration = "2s";
    gota.style.animationIterationCount = "infinite";
    gota.style.animationTimingFunction = "ease-in-out";
  });
}

document.addEventListener("DOMContentLoaded", () => {

  // Selecciona todos los elementos con la clase "diseño"
  const elementos = document.querySelectorAll(".diseño");

  elementos.forEach(el => {

    // Detecta el tipo de estado según la clase
    if (el.classList.contains("gaseoso")) {
      // Efecto de "volatilidad" al pasar el mouse
      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.1) translateY(-10px)";
        el.style.filter = "blur(1px)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.filter = "blur(0)";
      });
    }

    if (el.classList.contains("liquidos")) {
      // Efecto de "onda" al hacer clic
      el.addEventListener("click", () => {
        el.animate([
          { transform: "scale(1)" },
          { transform: "scale(1.15) rotate(3deg)" },
          { transform: "scale(1)" }
        ], {
          duration: 800,
          easing: "ease-in-out"
        });
      });
    }

    if (el.classList.contains("solido")) {
      // Vibración suave (efecto firme)
      el.addEventListener("mouseenter", () => {
        el.animate([
          { transform: "translateX(0)" },
          { transform: "translateX(3px)" },
          { transform: "translateX(-3px)" },
          { transform: "translateX(0)" }
        ], {
          duration: 400,
          iterations: 2
        });
      });
    }

  });

});

document.addEventListener("DOMContentLoaded", () => {
      const liquidos = document.querySelectorAll(".liquidos");

      liquidos.forEach(el => {
        el.addEventListener("click", () => {
          const gota = document.createElement("span");
          gota.classList.add("gota-caida");

          // Insertar la gota dentro del elemento
          el.appendChild(gota);

          // Eliminar después de la animación
          setTimeout(() => gota.remove(), 800);
        });
      });
    });
     
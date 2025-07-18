
const ramos = [
  {
    codigo: "QQUI101",
    nombre: "Química General I",
    semestre: 1,
    prerrequisitos: [],
    abre: ["QQUI202"],
    creditos: 9
  },
  {
    codigo: "QQUI202",
    nombre: "Química General II",
    semestre: 2,
    prerrequisitos: ["QQUI101"],
    abre: [],
    creditos: 8
  },
  {
    codigo: "FPED126",
    nombre: "Pedagogía e Identidad Profesional Docente",
    semestre: 1,
    prerrequisitos: [],
    abre: ["QQUI204"],
    creditos: 4
  },
  {
    codigo: "QQUI204",
    nombre: "Práctica I",
    semestre: 2,
    prerrequisitos: ["FPED126"],
    abre: [],
    creditos: 2
  }
];

const estadoRamos = {};
const promedios = {};
const creditos = {};

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  ramos.forEach(ramo => {
    const aprobado = estadoRamos[ramo.codigo] || false;
    const promedio = promedios[ramo.codigo] || "";
    const requisitosCumplidos = ramo.prerrequisitos.every(pr => estadoRamos[pr]);

    const card = document.createElement("div");
    card.className = "card";

    if (aprobado) {
      card.classList.add("aprobado");
    } else if (requisitosCumplidos) {
      card.classList.add("habilitado");
    } else {
      card.classList.add("bloqueado");
    }

    card.innerHTML = `
      <h3>${ramo.nombre}</h3>
      <p><strong>Código:</strong> ${ramo.codigo}</p>
      <p><strong>Semestre:</strong> ${ramo.semestre}</p>
      <p><strong>Créditos:</strong> ${ramo.creditos}</p>
      <p><strong>Prerrequisitos:</strong> ${ramo.prerrequisitos.join(", ") || "Ninguno"}</p>
      <label>Promedio: <input type="number" step="0.1" min="1.0" max="7.0" value="${promedio}" id="prom-${ramo.codigo}"></label><br>
      <button onclick="aprobarRamo('${ramo.codigo}')" ${aprobado || !requisitosCumplidos ? "disabled" : ""}>Aprobar ramo</button>
    `;

    container.appendChild(card);
  });

  actualizarEstadisticas();
}

function aprobarRamo(codigo) {
  const input = document.getElementById(`prom-${codigo}`);
  const promedio = parseFloat(input.value);
  const ramo = ramos.find(r => r.codigo === codigo);

  if (!isNaN(promedio) && promedio >= 1.0 && promedio <= 7.0) {
    estadoRamos[codigo] = true;
    promedios[codigo] = promedio;
    creditos[codigo] = ramo.creditos;
    renderMalla();
  } else {
    alert("Por favor ingresa un promedio válido entre 1.0 y 7.0.");
  }
}

function actualizarEstadisticas() {
  const promediosAprobados = Object.values(promedios);
  const creditosTotales = Object.values(creditos).reduce((a, b) => a + b, 0);

  if (promediosAprobados.length === 0) {
    document.getElementById("promedio-general").innerText = "-";
  } else {
    const promedioFinal = (promediosAprobados.reduce((a, b) => a + b, 0) / promediosAprobados.length).toFixed(2);
    document.getElementById("promedio-general").innerText = promedioFinal;
  }

  document.getElementById("creditos-aprobados").innerText = creditosTotales;
}

window.onload = renderMalla;

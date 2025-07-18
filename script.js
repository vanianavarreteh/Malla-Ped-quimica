const ramos = [
  {
    codigo: "QQUI101",
    nombre: "Química General I",
    prerrequisitos: [],
    abre: ["QQUI202"]
  },
  {
    codigo: "QQUI202", 
    nombre: "Química General II",
    prerrequisitos: ["QQUI101"],
    abre: ["QQUI303"]
  },
  {
    codigo: "FPED126",
    nombre: "Pedagogía e Identidad Profesional Docente",
    prerrequisitos: [],
    abre: ["QQUI204"]
  },
  {
    codigo: "QQUI204",
    nombre: "Práctica I",
    prerrequisitos: ["FPED126"],
    abre: ["QQUI305"]
  },
  {
    codigo: "QQUI303",
    nombre: "Química Orgánica I",
    prerrequisitos: ["QQUI202"],
    abre: ["QQUI404"]
  },
  {
    codigo: "QQUI305",
    nombre: "Práctica II",
    prerrequisitos: ["QQUI204"],
    abre: []
  },
  {
    codigo: "QQUI404",
    nombre: "Química Orgánica II",
    prerrequisitos: ["QQUI303"],
    abre: []
  }
];

const estadoRamos = {};
const promedios = {};
const creditos = {};

let ramosFiltrados = [...ramos];

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  ramosFiltrados.forEach(ramo => {
    const aprobado = estadoRamos[ramo.codigo] || false;
    const requisitosCumplidos = ramo.prerrequisitos.every(pr => estadoRamos[pr]);
    const promedio = promedios[ramo.codigo] || "";

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
      <div class="botones">
        <button onclick="aprobarRamo('${ramo.codigo}')" ${aprobado || !requisitosCumplidos ? "disabled" : ""}>Aprobar</button>
        ${aprobado ? `<button onclick="desaprobarRamo('${ramo.codigo}')" class="btn-desaprobar">Desaprobar</button>` : ''}
      </div>
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

function desaprobarRamo(codigo) {
  // Verificar si otros ramos dependen de este
  const ramosQueDependenDeEste = ramos.filter(r => r.prerrequisitos.includes(codigo) && estadoRamos[r.codigo]);

  if (ramosQueDependenDeEste.length > 0) {
    const nombres = ramosQueDependenDeEste.map(r => r.nombre).join(", ");
    if (!confirm(`Al desaprobar este ramo también se desaprobarán: ${nombres}. ¿Continuar?`)) {
      return;
    }
    // Desaprobar ramos dependientes
    ramosQueDependenDeEste.forEach(r => desaprobarRamo(r.codigo));
  }

  delete estadoRamos[codigo];
  delete promedios[codigo];
  delete creditos[codigo];
  renderMalla();
}

function actualizarEstadisticas() {
  const promediosAprobados = Object.values(promedios);
  const creditosTotales = Object.values(creditos).reduce((a, b) => a + b, 0);
  const ramosAprobados = Object.keys(estadoRamos).filter(codigo => estadoRamos[codigo]).length;

  if (promediosAprobados.length === 0) {
    document.getElementById("promedio-general").innerText = "-";
  } else {
    const promedioFinal = (promediosAprobados.reduce((a, b) => a + b, 0) / promediosAprobados.length).toFixed(2);
    document.getElementById("promedio-general").innerText = promedioFinal;
  }

  document.getElementById("creditos-aprobados").innerText = creditosTotales;
  document.getElementById("total-ramos").innerText = ramos.length;
  document.getElementById("ramos-aprobados").innerText = ramosAprobados;
}

window.onload = function() {
  renderMalla();
};

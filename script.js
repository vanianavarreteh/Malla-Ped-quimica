const mallaData = [
        // Primer semestre
        {
            semestre: 1,
            ramos: [
                { codigo: "QQUI101",
                 nombre: "Química General I",
                 creditos: 9,
                 prerequisitos: [],
                 abre: ["QQUI202"],
                 nota: 0
                },
                { codigo: "FPED126",
                  nombre: "Pedagogía e identidad profesional docente",
                 creditos: 4, prerequisitos: [],
                 abre: ["QQUI204"],
                 nota: 0
                },
                { codigo: "QQUI103",
                 nombre: "Habilidades comunicacionales",
                 creditos: 4,
                 prerequisitos: [],
                 abre: [],
                 nota: 0
                },
                { codigo: "QQUI104",
                 nombre: "Introducción al aprendizaje de las ciencias",
                 creditos: 4,
                 prerequisitos: [],
                 abre: ["QQUI503"],
                 nota: 0
                },
                { codigo: "QQUI02",
                 nombre: "Matemática I",
                 creditos: 6,
                 prerequisitos: [],
                 abre: ["QQUI201", "QQUI205"],
                 nota: 0
                },
                { codigo: "QQUI105",
                 nombre: "Fortalecimiento de habilidades científicas de entrada",
                 creditos: 3,
                 prerequisitos: [],
                 abre: [],
                 nota: 0 
                }
            ]
        },
        // Segundo semestre
        {
            semestre: 2,
            ramos: [
                { codigo: "QQUI204",
                 nombre: "Práctica I: interacción con el contexto educativo",
                 creditos: 2,
                 prerequisitos: ["FPED126"],
                 abre: [],
                 nota: 0
                },
                { codigo: "QQUI202",
                 nombre: "Química general II",
                 creditos: 8,
                 prerequisitos: ["QQUI101"],
                 abre: [],
                 nota: 0 
                },
                { codigo: "FPED214",
                 nombre: "Reflexión crítica y filosófica de los procesos educativos",
                 creditos: 4,
                 prerequisitos: [],
                 abre: [],
                 nota: 0
                },
                { codigo: "QQUI205",
                 nombre: "Física I",
                 creditos: 5,
                 prerequisitos: ["QQUI02"],
                 abre: ["QQUI301"],
                 nota: 0 },
                { codigo: "QQUI203",
                 nombre: "Informática aplicada",
                 creditos: 3,
                 prerequisitos: [],
                 abre: [],
                 nota: 0
                },
                { codigo: "QQUI201",
                 nombre: "Matemática II",
                 creditos: 4,
                 prerequisitos: ["QQUI02"],
                 abre: ["QQUI304"],
                 nota: 0
                },
                { codigo: "FPED213",
                 nombre: "Contextos socioculturales de los procesos educativos",
                 creditos: 4,
                 prerequisitos: [],
                 abre: [], 
                 nota: 0 
                }
            ]
        },
        // Tercer semestre
        {
            semestre: 3,
            ramos: [
                { codigo: "FPED315", nombre: "Psicología del aprendizaje y transformación educativa", creditos: 3, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "FPED316", nombre: "Políticas públicas de la educación", creditos: 3, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUI301", nombre: "Física II", creditos: 5, prerequisitos: ["QQUI205"], abre: ["QQUI405"], nota: 0 },
                { codigo: "QQUI302", nombre: "Química orgánica I", creditos: 6, prerequisitos: [], abre: ["QQUI403"], nota: 0 },
                { codigo: "QQUI303", nombre: "Química Inorgánica I", creditos: 6, prerequisitos: [], abre: ["QQUI404", "QQUI502"], nota: 0 },
                { codigo: "QQUI304", nombre: "Matemática III", creditos: 3, prerequisitos: ["QQUI201"], abre: ["QQUI501"], nota: 0 },
                { codigo: "", nombre: "Segundo Idioma I", creditos: 4, prerequisitos: [], abre: ["Segundo Idioma II"], nota: 0 }
            ]
        },
        // Cuarto semestre
        {
            semestre: 4,
            ramos: [
                { codigo: "QQUI405", nombre: "Práctica II: colaboración con la gestión pedagógica", creditos: 4, prerequisitos: ["QQUI301"], abre: ["QQUI702"], nota: 0 },
                { codigo: "QQUI401", nombre: "Biología", creditos: 4, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "FPED412", nombre: "Paradigmas, teorías y enfoques contemporáneos de la educación", creditos: 4, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUI402", nombre: "Fundamentos epistemológicos de las ciencias", creditos: 2, prerequisitos: ["QQUI104"], abre: ["QQUI503"], nota: 0 },
                { codigo: "QQUI403", nombre: "Química orgánica II", creditos: 6, prerequisitos: ["QQUI302"], abre: ["QQUI501"], nota: 0 },
                { codigo: "QQUI404", nombre: "Química inorgánica II", creditos: 6, prerequisitos: ["QQUI303"], abre: ["QQUI501", "QQUI502"], nota: 0 },
                { codigo: "", nombre: "Segundo idioma II", creditos: 4, prerequisitos: ["Segundo Idioma I"], abre: ["Segundo idioma III"], nota: 0 }
            ]
        },
        // Quinto semestre
        {
            semestre: 5,
            ramos: [
                { codigo: "FPED512", nombre: "Curriculum educacional", creditos: 4, prerequisitos: [], abre: ["FPED615"], nota: 0 },
                { codigo: "QQUI501", nombre: "Fisicoquímica I", creditos: 6, prerequisitos: ["QQUI403", "QQUI404", "QQUI304"], abre: ["QQUI601"], nota: 0 },
                { codigo: "QQUI502", nombre: "Química analítica I", creditos: 6, prerequisitos: ["QQUI303"], abre: ["QQUI602"], nota: 0 },
                { codigo: "QQUI503", nombre: "Fundamentos del aprendizaje de las ciencias", creditos: 3, prerequisitos: ["QQUI104", "QQUI402"], abre: [], nota: 0 },
                { codigo: "", nombre: "Mención I", creditos: 5, prerequisitos: [
                    "QQUI101", "FPED126", "QQUI103", "QQUI104", "QQUI02", "QQUI105", 
                    "QQUI204", "QQUI202", "FPED214", "QQUI205", "QQUI203", "QQUI201", 
                    "FPED213", "FPED315", "FPED316", "QQUI301", "QQUI302", "QQUI303", 
                    "QQUI304", "Segundo Idioma I", "QQUI405", "QQUI401", "FPED412", 
                    "QQUI402", "QQUI403", "QQUI404", "Segundo idioma II"
                ], abre: ["Mención II"], nota: 0 },
                { codigo: "", nombre: "Electivo I", creditos: 2, prerequisitos: [], abre: ["Electivo II"], nota: 0 },
                { codigo: "", nombre: "Segundo idioma III", creditos: 4, prerequisitos: ["Segundo idioma II"], abre: [], nota: 0 }
            ]
        },
        // Sexto semestre
        {
            semestre: 6,
            ramos: [
                { codigo: "FPED615", nombre: "Evaluación educacional", creditos: 3, prerequisitos: ["FPED512"], abre: [], nota: 0 },
                { codigo: "QQUI601", nombre: "Fisicoquímica II", creditos: 6, prerequisitos: ["QQUI501"], abre: [], nota: 0 },
                { codigo: "QQUI602", nombre: "Química analítica II", creditos: 6, prerequisitos: ["QQUI502"], abre: [], nota: 0 },
                { codigo: "QQUI603", nombre: "Didáctica de las ciencias", creditos: 4, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "", nombre: "Mención II", creditos: 6, prerequisitos: ["Mención I"], abre: ["Mención III"], nota: 0 },
                { codigo: "QQUI609", nombre: "Metodología de la investigación I", creditos: 3, prerequisitos: [], abre: ["QQUI805"], nota: 0 },
                { codigo: "", nombre: "Electivo II", creditos: 2, prerequisitos: [], abre: [], nota: 0 }
            ]
        },
        // Séptimo semestre
        {
            semestre: 7,
            ramos: [
                { codigo: "QQUI702", nombre: "Práctica III: intervención didáctica en el aula", creditos: 5, prerequisitos: ["QQUI405"], abre: [], nota: 0 },
                { codigo: "FPED712", nombre: "Gestión e innovación curricular", creditos: 4, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUI701", nombre: "Teoría del enlace químico I", creditos: 4, prerequisitos: [], abre: ["QQUI801"], nota: 0 },
                { codigo: "QQUI703", nombre: "Bioquímica", creditos: 6, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUI704", nombre: "Didáctica de la química", creditos: 5, prerequisitos: [], abre: ["QQUI804"], nota: 0 },
                { codigo: "", nombre: "Mención III", creditos: 6, prerequisitos: ["Mención II"], abre: ["Mención IV"], nota: 0 }
            ]
        },
        // Octavo semestre
        {
            semestre: 8,
            ramos: [
                { codigo: "FPED809", nombre: "Orientación y convivencia educacional", creditos: 4, prerequisitos: [], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
                { codigo: "QQUI801", nombre: "Teoría del enlace II", creditos: 4, prerequisitos: ["QQUI701"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
                { codigo: "QQUI802", nombre: "Métodos instrumentales de análisis", creditos: 5, prerequisitos: [], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
                { codigo: "QQUI803", nombre: "Educación en energía", creditos: 3, prerequisitos: [], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
                { codigo: "QQUI804", nombre: "Proyecto didactico", creditos: 4, prerequisitos: ["QQUI704"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
                { codigo: "QQUI805", nombre: "Metodología de la investigación II", creditos: 4, prerequisitos: ["QQUI609"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
                { codigo: "", nombre: "Mención IV", creditos: 6, prerequisitos: ["Mención III"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 }
            ]
        },
        // Noveno semestre
        {
            semestre: 9,
            ramos: [
                { codigo: "QQUI901", nombre: "Práctica profesional", creditos: 24, prerequisitos: ["FPED809", "QQUI801", "QQUI802", "QQUI803", "QQUI804", "QQUI805"], abre: [], nota: 0 },
                { codigo: "QQUI902", nombre: "Comunidades de aprendizaje", creditos: 3, prerequisitos: ["FPED809", "QQUI801", "QQUI802", "QQUI803", "QQUI804", "QQUI805"], abre: [], nota: 0 },
                { codigo: "QQUI903", nombre: "Fortalecimiento de competencias de egreso I", creditos: 3, prerequisitos: ["FPED809", "QQUI801", "QQUI802", "QQUI803", "QQUI804", "QQUI805"], abre: ["QQUIX02"], nota: 0 }
            ]
        },
        // Décimo semestre
        {
            semestre: 10,
            ramos: [
                { codigo: "QQUIX01", nombre: "Trabajo de Título", creditos: 26, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUIX02", nombre: "Fortalecimiento de competencias de egreso II", creditos: 4, prerequisitos: ["QQUI903"], abre: [], nota: 0 }
            ]
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

function agregarOptativo() {
  const semestre = parseInt(document.getElementById("semestre-opt").value);
  const nombre = document.getElementById("nombre-opt").value;
  const creditos = parseInt(document.getElementById("creditos-opt").value);
  const codigo = "OPT" + Math.floor(Math.random() * 10000);

  if (semestre >= 3 && nombre && creditos > 0) {
    ramos.push({
      codigo,
      nombre,
      semestre,
      prerrequisitos: [],
      abre: [],
      creditos
    });
    renderMalla();
  } else {
    alert("Completa todos los campos correctamente (desde semestre 3 y al menos 1 crédito).");
  }
}

window.onload = renderMalla;

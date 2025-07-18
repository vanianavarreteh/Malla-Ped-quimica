const mallaData = [
  // Primer semestre
  {
    semestre: 1,
    ramos: [
      { codigo: "QQUI101", nombre: "Química General I", creditos: 9, prerrequisitos: [], abre: ["QQUI202"], nota: 0 },
      { codigo: "FPED126", nombre: "Pedagogía e identidad profesional docente", creditos: 4, prerrequisitos: [], abre: ["QQUI204"], nota: 0 },
      { codigo: "QQUI103", nombre: "Habilidades comunicacionales", creditos: 4, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUI104", nombre: "Introducción al aprendizaje de las ciencias", creditos: 4, prerrequisitos: [], abre: ["QQUI503"], nota: 0 },
      { codigo: "QQUI02", nombre: "Matemática I", creditos: 6, prerrequisitos: [], abre: ["QQUI201", "QQUI205"], nota: 0 },
      { codigo: "QQUI105", nombre: "Fortalecimiento de habilidades científicas de entrada", creditos: 3, prerrequisitos: [], abre: [], nota: 0 }
    ]
  },
  // Segundo semestre
  {
    semestre: 2,
    ramos: [
      { codigo: "QQUI204", nombre: "Práctica I: interacción con el contexto educativo", creditos: 2, prerrequisitos: ["FPED126"], abre: ["QQUI405"], nota: 0 },
      { codigo: "QQUI202", nombre: "Química general II", creditos: 8, prerrequisitos: ["QQUI101"], abre: ["QQUI302", "QQUI303"], nota: 0 },
      { codigo: "FPED214", nombre: "Reflexión crítica y filosófica de los procesos educativos", creditos: 4, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUI205", nombre: "Física I", creditos: 5, prerrequisitos: ["QQUI02"], abre: ["QQUI301"], nota: 0 },
      { codigo: "QQUI203", nombre: "Informática aplicada", creditos: 3, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUI201", nombre: "Matemática II", creditos: 4, prerrequisitos: ["QQUI02"], abre: ["QQUI304"], nota: 0 },
      { codigo: "FPED213", nombre: "Contextos socioculturales de los procesos educativos", creditos: 4, prerrequisitos: [], abre: [], nota: 0 }
    ]
  },
  // Tercer semestre
  {
    semestre: 3,
    ramos: [
      { codigo: "FPED315", nombre: "Psicología del aprendizaje y transformación educativa", creditos: 3, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "FPED316", nombre: "Políticas públicas de la educación", creditos: 3, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUI301", nombre: "Física II", creditos: 5, prerrequisitos: ["QQUI205"], abre: ["QQUI405"], nota: 0 },
      { codigo: "QQUI302", nombre: "Química orgánica I", creditos: 6, prerrequisitos: ["QQUI202"], abre: ["QQUI403"], nota: 0 },
      { codigo: "QQUI303", nombre: "Química Inorgánica I", creditos: 6, prerrequisitos: ["QQUI202"], abre: ["QQUI404", "QQUI502"], nota: 0 },
      { codigo: "QQUI304", nombre: "Matemática III", creditos: 3, prerrequisitos: ["QQUI201"], abre: ["QQUI501"], nota: 0 },
      { codigo: "IDIO101", nombre: "Segundo Idioma I", creditos: 4, prerrequisitos: [], abre: ["IDIO102"], nota: 0 }
    ]
  },
  // Cuarto semestre
  {
    semestre: 4,
    ramos: [
      { codigo: "QQUI405", nombre: "Práctica II: colaboración con la gestión pedagógica", creditos: 4, prerrequisitos: ["QQUI204", "QQUI301"], abre: ["QQUI702"], nota: 0 },
      { codigo: "QQUI401", nombre: "Biología", creditos: 4, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "FPED412", nombre: "Paradigmas, teorías y enfoques contemporáneos de la educación", creditos: 4, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUI402", nombre: "Fundamentos epistemológicos de las ciencias", creditos: 2, prerrequisitos: ["QQUI104"], abre: ["QQUI503"], nota: 0 },
      { codigo: "QQUI403", nombre: "Química orgánica II", creditos: 6, prerrequisitos: ["QQUI302"], abre: ["QQUI501"], nota: 0 },
      { codigo: "QQUI404", nombre: "Química inorgánica II", creditos: 6, prerrequisitos: ["QQUI303"], abre: ["QQUI501", "QQUI502"], nota: 0 },
      { codigo: "IDIO102", nombre: "Segundo idioma II", creditos: 4, prerrequisitos: ["IDIO101"], abre: ["IDIO103"], nota: 0 }
    ]
  },
  // Quinto semestre
  {
    semestre: 5,
    ramos: [
      { codigo: "FPED512", nombre: "Curriculum educacional", creditos: 4, prerrequisitos: [], abre: ["FPED615"], nota: 0 },
      { codigo: "QQUI501", nombre: "Fisicoquímica I", creditos: 6, prerrequisitos: ["QQUI403", "QQUI404", "QQUI304"], abre: ["QQUI601"], nota: 0 },
      { codigo: "QQUI502", nombre: "Química analítica I", creditos: 6, prerrequisitos: ["QQUI303", "QQUI404"], abre: ["QQUI602"], nota: 0 },
      { codigo: "QQUI503", nombre: "Fundamentos del aprendizaje de las ciencias", creditos: 3, prerrequisitos: ["QQUI104", "QQUI402"], abre: [], nota: 0 },
      { codigo: "MENCION01", nombre: "Mención I", creditos: 5, prerrequisitos: [], abre: ["MENCION02"], nota: 0 },
      { codigo: "ELECT01", nombre: "Electivo I", creditos: 2, prerrequisitos: [], abre: ["ELECT02"], nota: 0 },
      { codigo: "IDIO103", nombre: "Segundo idioma III", creditos: 4, prerrequisitos: ["IDIO102"], abre: [], nota: 0 }
    ]
  },
  // Sexto semestre
  {
    semestre: 6,
    ramos: [
      { codigo: "FPED615", nombre: "Evaluación educacional", creditos: 3, prerrequisitos: ["FPED512"], abre: [], nota: 0 },
      { codigo: "QQUI601", nombre: "Fisicoquímica II", creditos: 6, prerrequisitos: ["QQUI501"], abre: [], nota: 0 },
      { codigo: "QQUI602", nombre: "Química analítica II", creditos: 6, prerrequisitos: ["QQUI502"], abre: [], nota: 0 },
      { codigo: "QQUI603", nombre: "Didáctica de las ciencias", creditos: 4, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "MENCION02", nombre: "Mención II", creditos: 6, prerrequisitos: ["MENCION01"], abre: ["MENCION03"], nota: 0 },
      { codigo: "QQUI609", nombre: "Metodología de la investigación I", creditos: 3, prerrequisitos: [], abre: ["QQUI805"], nota: 0 },
      { codigo: "ELECT02", nombre: "Electivo II", creditos: 2, prerrequisitos: ["ELECT01"], abre: [], nota: 0 }
    ]
  },
  // Séptimo semestre
  {
    semestre: 7,
    ramos: [
      { codigo: "QQUI702", nombre: "Práctica III: intervención didáctica en el aula", creditos: 5, prerrequisitos: ["QQUI405"], abre: [], nota: 0 },
      { codigo: "FPED712", nombre: "Gestión e innovación curricular", creditos: 4, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUI701", nombre: "Teoría del enlace químico I", creditos: 4, prerrequisitos: [], abre: ["QQUI801"], nota: 0 },
      { codigo: "QQUI703", nombre: "Bioquímica", creditos: 6, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUI704", nombre: "Didáctica de la química", creditos: 5, prerrequisitos: [], abre: ["QQUI804"], nota: 0 },
      { codigo: "MENCION03", nombre: "Mención III", creditos: 6, prerrequisitos: ["MENCION02"], abre: ["MENCION04"], nota: 0 }
    ]
  },
  // Octavo semestre
  {
    semestre: 8,
    ramos: [
      { codigo: "FPED809", nombre: "Orientación y convivencia educacional", creditos: 4, prerrequisitos: [], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
      { codigo: "QQUI801", nombre: "Teoría del enlace II", creditos: 4, prerrequisitos: ["QQUI701"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
      { codigo: "QQUI802", nombre: "Métodos instrumentales de análisis", creditos: 5, prerrequisitos: [], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
      { codigo: "QQUI803", nombre: "Educación en energía", creditos: 3, prerrequisitos: [], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
      { codigo: "QQUI804", nombre: "Proyecto didáctico", creditos: 4, prerrequisitos: ["QQUI704"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
      { codigo: "QQUI805", nombre: "Metodología de la investigación II", creditos: 4, prerrequisitos: ["QQUI609"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 },
      { codigo: "MENCION04", nombre: "Mención IV", creditos: 6, prerrequisitos: ["MENCION03"], abre: ["QQUI901", "QQUI902", "QQUI903"], nota: 0 }
    ]
  },
  // Noveno semestre
  {
    semestre: 9,
    ramos: [
      { codigo: "QQUI901", nombre: "Práctica profesional", creditos: 24, prerrequisitos: ["FPED809", "QQUI801", "QQUI802", "QQUI803", "QQUI804", "QQUI805", "MENCION04"], abre: [], nota: 0 },
      { codigo: "QQUI902", nombre: "Comunidades de aprendizaje", creditos: 3, prerrequisitos: ["FPED809", "QQUI801", "QQUI802", "QQUI803", "QQUI804", "QQUI805", "MENCION04"], abre: [], nota: 0 },
      { codigo: "QQUI903", nombre: "Fortalecimiento de competencias de egreso I", creditos: 3, prerrequisitos: ["FPED809", "QQUI801", "QQUI802", "QQUI803", "QQUI804", "QQUI805", "MENCION04"], abre: ["QQUIX02"], nota: 0 }
    ]
  },
  // Décimo semestre
  {
    semestre: 10,
    ramos: [
      { codigo: "QQUIX01", nombre: "Trabajo de Título", creditos: 26, prerrequisitos: [], abre: [], nota: 0 },
      { codigo: "QQUIX02", nombre: "Fortalecimiento de competencias de egreso II", creditos: 4, prerrequisitos: ["QQUI903"], abre: [], nota: 0 }
    ]
  }
];

const estadoRamos = {};
const promedios = {};

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  mallaData.forEach(semesterData => {
    // Crear contenedor del semestre
    const semesterDiv = document.createElement("div");
    semesterDiv.className = "semester-container";
    
    const title = document.createElement("h2");
    title.textContent = `Semestre ${semesterData.semestre}`;
    title.className = "semester-title";
    semesterDiv.appendChild(title);

    const semesterGrid = document.createElement("div");
    semesterGrid.className = "semester-grid";

    semesterData.ramos.forEach(ramo => {
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
        <p><strong>Semestre:</strong> ${semesterData.semestre}</p>
        <p><strong>Créditos:</strong> ${ramo.creditos}</p>
        <p><strong>Prerrequisitos:</strong> ${ramo.prerrequisitos.join(", ") || "Ninguno"}</p>
        ${aprobado && promedio ? `<p><strong>Nota:</strong> ${promedio}</p>` : ''}
        <div class="botones">
          ${!aprobado && requisitosCumplidos ? `
            <label>Nota: 
              <input type="number" step="0.1" min="1.0" max="7.0" value="${promedio}" id="prom-${ramo.codigo}" style="width: 60px;">
            </label><br>
            <button onclick="aprobarRamo('${ramo.codigo}')" style="margin-top: 10px;">Aprobar</button>
          ` : ''}
          ${aprobado ? `<button onclick="desaprobarRamo('${ramo.codigo}')" class="btn-desaprobar">Desaprobar</button>` : ''}
        </div>
      `;

      semesterGrid.appendChild(card);
    });

    semesterDiv.appendChild(semesterGrid);
    container.appendChild(semesterDiv);
  });

  actualizarEstadisticas();
}

function aprobarRamo(codigo) {
  const input = document.getElementById(`prom-${codigo}`);
  const promedio = parseFloat(input.value);

  if (!isNaN(promedio) && promedio >= 1.0 && promedio <= 7.0) {
    estadoRamos[codigo] = true;
    promedios[codigo] = promedio;
    renderMalla();
  } else {
    alert("Por favor ingresa una nota válida entre 1.0 y 7.0.");
  }
}

function desaprobarRamo(codigo) {
  // Verificar si otros ramos dependen de este
  const ramosQueDependenDeEste = [];
  mallaData.forEach(semester => {
    semester.ramos.forEach(ramo => {
      if (ramo.prerrequisitos.includes(codigo) && estadoRamos[ramo.codigo]) {
        ramosQueDependenDeEste.push(ramo);
      }
    });
  });

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
  renderMalla();
}

function actualizarEstadisticas() {
  const promediosAprobados = Object.values(promedios);
  const ramosAprobados = Object.keys(estadoRamos).length;
  
  // Calcular créditos totales aprobados
  let creditosAprobados = 0;
  mallaData.forEach(semester => {
    semester.ramos.forEach(ramo => {
      if (estadoRamos[ramo.codigo]) {
        creditosAprobados += ramo.creditos;
      }
    });
  });

  // Calcular total de ramos
  let totalRamos = 0;
  mallaData.forEach(semester => {
    totalRamos += semester.ramos.length;
  });

  // Mostrar estadísticas en la consola o crear elementos para mostrarlas
  console.log(`Créditos aprobados: ${creditosAprobados}`);
  console.log(`Ramos aprobados: ${ramosAprobados}/${totalRamos}`);
  
  if (promediosAprobados.length > 0) {
    const promedioGeneral = (promediosAprobados.reduce((a, b) => a + b, 0) / promediosAprobados.length).toFixed(2);
    console.log(`Promedio general: ${promedioGeneral}`);
  }
}

window.onload = function() {
  renderMalla();
};

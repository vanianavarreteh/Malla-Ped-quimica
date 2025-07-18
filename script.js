
const ramos = [
         { 
                { 
                  codigo: "QQUI101",
                 nombre: "Química General I",
                 creditos: 9,
                  Semestre: 1, 
                 prerequisitos: [],
                 abre: ["QQUI202"],
                 nota: 0
                },
                {  
                  codigo :  "FPED126" ,
                 nombre :  "Pedagogía e identidad profesional docente" ,
                 créditos :  4 ,
                 prerequisitos :  [],
                 abre :  [ "QQUI204" ],
                 nota :  0
                }, 
                {  
                  codigo :  "QQUI103" ,
                 nombre :  "Habilidades comunicacionales" ,
                 créditos :  4 ,
                 prerequisitos :  [],
                 abre :  [],  nota :  0
                }, 
                {  
                  codigo :  "QQUI104" ,
                  nombre :  "Introducción al aprendizaje de las ciencias" ,
                  creditos :  4 ,
                  prerequisitos :  [],
                  abre :  [ "QQUI503" ],
                  nota :  0 
                }, 
                {  codigo :  "QQUI02" ,  nombre :  "Matemática I" ,  creditos :  6 ,  prerequisitos :  [],  abre :  [ "QQUI201" ,  "QQUI205" ],  nota :  0  }, 
                {  codigo :  "QQUI105" ,  nombre :  "Fortalecimiento de habilidades científicas de entrada" ,  créditos :  3 ,  prerequisitos :  [], abre :  [],  nota:  0  } 
            ] 
        }, 
        // Segundo semestre 
        { 
            semestre :  2 , 
            ramos :  [ 
                {  codigo :  "QQUI204" ,  nombre :  "Práctica I: interacción con el contexto educativo" ,  créditos :  2 ,  prerequisitos :  [ "FPED126" ],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI202" ,  nombre :  "Química general II" ,  creditos :  8 ,  prerequisitos :  [ "QQUI101" ],  abre :  [],  nota :  0  }, 
                {  codigo :  "FPED214" ,  nombre :  "Reflexión crítica y filosófica de los procesos educativos" ,  créditos :  4 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI205" ,  nombre :  "Física I" ,  créditos :  5 ,  prerrequisitos :  [ "QQUI02" ],  abre :  [ "QQUI301" ],  nota :  0  }, 
                {  codigo :  "QQUI203" ,  nombre :  "Informática aplicada" ,  créditos :  3 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI201" ,  nombre :  "Matemática II" ,  créditos :  4 ,  prerrequisitos :  [ "QQUI02" ],  abre :  [ "QQUI304" ],  nota :  0  }, 
                {  codigo :  "FPED213" , nombre : "Contextos socioculturales de los procesos educativos" ,  créditos :  4 ,  prerequisitos :  [],  abre :  [],  nota :  0  } 
            ] 
        }, 
        // Tercer semestre 
        { 
            semestre :  3 , 
            ramos :  [ 
                {  codigo :  "FPED315" ,  nombre :  "Psicología del aprendizaje y transformación educativa" ,  creditos :  3 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "FPED316" ,  nombre :  "Políticas públicas de la educación" ,  créditos :  3 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI301" ,  nombre :  "Física II" ,  créditos :  5 ,  prerequisitos :  [ "QQUI205" ],  abre :  [ "QQUI405" ],  nota :  0  }, 
                {  código :  "QQUI302" ,  nombre :  "Química orgánica I" ,  créditos :  6 ,  prerrequisitos :  [],  abre :  [ "QQUI403" ],  nota :  0  }, 
                {  código :  "QQUI303" ,  nombre :  "Química Inorgánica I" ,  créditos :  6 ,  prerequisitos :  [],  abre :  [ "QQUI404" ,  "QQUI502" ],  nota :  0  }, 
                {  codigo :  "QQUI304" ,  nombre :  "Matemática III" ,  créditos :  3 ,  prerrequisitos : [ "QQUI201" ],  abre :  [ "QQUI501" ],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Segundo Idioma I" ,  créditos :  : "QQUI404" , nombre : "Química inorgánica II" , créditos : 6 , prerequisitos : [ "QQUI303 " ], abre : [ 0 }, { codigo : "" , nombre : "Mención I" , créditos : 5 , prerequisitos : [ "QQUI101" , "FPED126" , "Fisicoquímica II" , créditos : 6 , prerequisitos : [ "QQUI501" ], abre : [], nota : 0 }, { codigo : "QQUI602" , nombre 0 }, { codigo : "FPED712" , nombre : "Gestión e innovación curricular" , créditos : 4 , prerequisitos : [], abre : [], nota : 0 créditos : 4 , prerequisitos : [ "QQUI701" ], abre : [ "QQUI901" , "QQUI902" , "QQUI903" ],nota : 0 }, { código }, 4 ,  prerequisitos :  [],  abre :  [ "Segundo Idioma II" ],  nota :  0  } 
            ] 
        }, 
        // Cuarto semestre 
        { 
            semestre :  4 , 
            ramos :  [ 
                {  codigo :  "QQUI405" ,  nombre :  "Práctica II: colaboración con la gestión pedagógica" ,  créditos :  4 ,  prerequisitos :  [ "QQUI301" ],  abre :  [ "QQUI702" ],  nota :  0  }, 
                {  codigo :  "QQUI401" ,  nombre :  "Biología" ,  créditos :  4 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "FPED412" ,  nombre :  "Paradigmas, teorías y enfoques contemporáneos de la educación" ,  créditos :  4 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI402" ,  nombre :  "Fundamentos epistemológicos de las ciencias" ,  créditos :  2 ,  prerequisitos :  [ "QQUI104" ],  abre :  [ "QQUI503" ],  nota :  0  }, 
                {  codigo :  "QQUI403" ,  nombre :  "Química orgánica II" ,  créditos :  6 ,  prerequisitos :  [ "QQUI302" ],  abre :  [ "QQUI501" ], nota :  0  }, 
                {  código          "QQUI501" ,  "QQUI502" ],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Segundo idioma II" ,  créditos :  4 ,  prerequisitos :  [ "Segundo Idioma I" ],  abre :  [ "Segundo idioma III" ],  nota :  0  } 
            ] 
        }, 
        // Quinto semestre 
        { 
            semestre :  5 , 
            ramos :  [ 
                {  codigo :  "FPED512" ,  nombre :  "Curriculum educacional" ,  creditos :  4 ,  prerequisitos :  [],  abre :  [ "FPED615" ],  nota :  0  }, 
                {  codigo :  "QQUI501" ,  nombre :  "Fisicoquímica I" ,  créditos :  6 ,  prerequisitos :  [ "QQUI403" ,  "QQUI404" ,  "QQUI304" ],  abre :  [ "QQUI601" ],  nota :  0  }, 
                {  codigo :  "QQUI502" ,  nombre :  "Química analítica I" ,  créditos :  6 ,  prerequisitos :  [ "QQUI303" ],  abre :  [ "QQUI602" ],  nota :  0  }, 
                {  codigo :  "QQUI503" ,  nombre :  "Fundamentos del aprendizaje de las ciencias" ,  creditos :  3 ,  prerequisitos : [ "QQUI104" ,  "QQUI402" ],  abre :  [],  nota :  
                        
                       "QQUI103" ,  "QQUI104" ,  "QQUI02" ,  "QQUI105" ,  
                    "QQUI204" ,  "QQUI202" ,  "FPED214" ,  "QQUI205" ,  "QQUI203" ,  "QQUI201" ,  
                    "FPED213" ,  "FPED315" ,  "FPED316" ,  "QQUI301" ,  "QQUI302" ,  "QQUI303" ,  
                    "QQUI304" ,  "Segundo Idioma I" ,  "QQUI405" ,  "QQUI401" ,  "FPED412" ,  
                    "QQUI402" ,  "QQUI403" ,  "QQUI404" ,  "Segundo idioma II" 
                ],  abre :  [ "Mención II" ],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Electivo I" ,  creditos :  2 ,  prerequisitos :  [],  abre :  [ "Electivo II" ],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Segundo idioma III" ,  créditos :  4 ,  prerequisitos :  [ "Segundo idioma II" ],  abre :  [],  nota :  0  } 
            ] 
        }, 
        // Sexto semestre 
        { 
            semestre :  6 , 
            ramos :  [ 
                {  codigo :  "FPED615" ,  nombre :  "Evaluación educativa" ,  créditos :  3 ,  prerequisitos : [ "FPED512" ],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI601" ,  nombre :          
                    :  "Química analítica II" ,  créditos :  6 ,  prerequisitos :  [ "QQUI502" ],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI603" ,  nombre :  "Didáctica de las ciencias" ,  créditos :  4 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Mención II" ,  créditos :  6 ,  prerequisitos :  [ "Mención I" ],  abre :  [ "Mención III" ],  nota :  0  }, 
                {  codigo :  "QQUI609" ,  nombre :  "Metodología de la investigación I" ,  créditos :  3 ,  prerequisitos :  [],  abre :  [ "QQUI805 " ],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Electivo II" ,  créditos :  2 ,  prerequisitos :  [],  abre :  [],  nota :  0  } 
            ] 
        }, 
        // Séptimo semestre 
        { 
            semestre :  7 , 
            ramos :  [ 
                {  codigo :  "QQUI702" ,  nombre :  "Práctica III: intervención didáctica en el aula" ,  créditos :  5 ,  prerequisitos :  [ "QQUI405" ], abre :  [],  nota :  
                              }, 
                {  codigo :  "QQUI701" ,  nombre :  "Teoría del enlace químico I" ,  créditos :  4 ,  prerequisitos :  [],  abre :  [ "QQUI801" ],  nota :  0  }, 
                {  codigo :  "QQUI703" ,  nombre :  "Bioquímica" ,  creditos :  6 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI704" ,  nombre :  "Didáctica de la química" ,  creditos :  5 ,  prerequisitos :  [],  abre :  [ "QQUI804" ],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Mención III" ,  créditos :  6 ,  prerequisitos :  [ "Mención II" ],  abre :  [ "Mención IV" ],  nota :  0  } 
            ] 
        }, 
        // Octavo semestre 
        { 
            semestre :  8 , 
            ramos :  [ 
                {  codigo :  "FPED809" ,  nombre :  "Orientación y convivencia educativa" ,  créditos :  4 ,  prerequisitos :  [],  abre :  [ "QQUI901" ,  "QQUI902" ,  "QQUI903" ],  nota :  0  }, 
                {  codigo :  "QQUI801" , nombre :  "Teoría del enlace II" ,           
                  :  "QQUI802" ,  nombre :  "Métodos instrumentales de análisis" ,  créditos :  5 ,  prerequisitos :  [],  abre :  [ "QQUI901" ,  "QQUI902" ,  "QQUI903" ],  nota :  0  }, 
                {  codigo :  "QQUI803" ,  nombre :  "Educación en energía" ,  créditos :  3 ,  prerequisitos :  [],  abre :  [ "QQUI901" ,  "QQUI902" ,  "QQUI903" ],  nota :  0  }, 
                {  codigo :  "QQUI804" ,  nombre :  "Proyecto didáctico" ,  créditos :  4 ,  prerequisitos :  [ "QQUI704" ],  abre :  [ "QQUI901" ,  "QQUI902" ,  "QQUI903" ],  nota :  0  }, 
                {  codigo :  "QQUI805" ,  nombre :  "Metodología de la investigación II" ,  créditos :  4 ,  prerequisitos :  [ "QQUI609" ],  abre :  [ "QQUI901 " ,  "QQUI902 " ,  "QQUI903 " ],  nota :  0  }, 
                {  codigo :  "" ,  nombre :  "Mención IV" ,  créditos :  6 ,  prerequisitos :  [ "Mención III" ],  abre : [ "QQUI901" ,  "QQUI902" ,  "QQUI903" ],  nota :  0  } 
            ]
        
        // Noveno semestre 
        { 
            semestre :  9 , 
            ramos :  [ 
                {  codigo :  "QQUI901" ,  nombre :  "Práctica profesional" ,  créditos :  24 ,  prerequisitos :  [ "FPED809" ,  "QQUI801" ,  "QQUI802" ,  "QQUI803" ,  "QQUI804" ,  "QQUI805" ],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI902" ,  nombre :  "Comunidades de aprendizaje" ,  creditos :  3 ,  prerequisitos :  [ "FPED809" ,  "QQUI801" ,  "QQUI802" ,  "QQUI803" ,  "QQUI804" ,  "QQUI805" ],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUI903" ,  nombre :  "Fortalecimiento de competencias de egreso I" ,  créditos :  3 ,  prerequisitos :  [ "FPED809" ,  "QQUI801" ,  "QQUI802" ,  "QQUI803" ,  "QQUI804" ,  "QQUI805" ],  abre :  [ "QQUIX02" ],  nota :  0  } 
            ] 
        }, 
        // Décimo semestre 
        { 
            semestre :  10 , 
            ramos :  [ 
                {  codigo :  "QQUIX01" ,  nombre :  "Trabajo de Título" ,  creditos :  26 ,  prerequisitos :  [],  abre :  [],  nota :  0  }, 
                {  codigo :  "QQUIX02" ,  nombre :  "Fortalecimiento de competencias de egreso II" , créditos :  4 ,  prerrequisitos :  [ "QQUI903" ],  abre : [],  nota :  0  } 
            ] 
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

function filtrarRamos() {
  const busqueda = document.getElementById("buscar").value.toLowerCase();
  const semestreSeleccionado = document.getElementById("filtro-semestre").value;

  ramosFiltrados = ramos.filter(ramo => {
    const coincideBusqueda = ramo.codigo.toLowerCase().includes(busqueda) || 
                           ramo.nombre.toLowerCase().includes(busqueda);
    const coincideSemestre = !semestreSeleccionado || ramo.semestre.toString() === semestreSeleccionado;
    
    return coincideBusqueda && coincideSemestre;
  });

  renderMalla();
}

function configurarEventos() {
  document.getElementById("buscar").addEventListener("input", filtrarRamos);
  document.getElementById("filtro-semestre").addEventListener("change", filtrarRamos);
}

window.onload = function() {
  renderMalla();
  configurarEventos();
};


const ramos = [
  {
    codigo: "QQUI101",
    nombre: "Química General I",
    semestre: 1,
    prerrequisitos: [],
    abre: ["QQUI202"],
    creditos: 9
  }
];

const mallaData = [
        // Primer semestre
        {
            semestre: 1,
            ramos: [
                { codigo: "QQUI101", nombre: "Química General I", creditos: 9, prerequisitos: [], abre: ["QQUI202"], nota: 0 },
                { codigo: "FPED126", nombre: "Pedagogía e identidad profesional docente", creditos: 4, prerequisitos: [], abre: ["QQUI204"], nota: 0 },
                { codigo: "QQUI103", nombre: "Habilidades comunicacionales", creditos: 4, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUI104", nombre: "Introducción al aprendizaje de las ciencias", creditos: 4, prerequisitos: [], abre: ["QQUI503"], nota: 0 },
                { codigo: "QQUI02", nombre: "Matemática I", creditos: 6, prerequisitos: [], abre: ["QQUI201", "QQUI205"], nota: 0 },
                { codigo: "QQUI105", nombre: "Fortalecimiento de habilidades científicas de entrada", creditos: 3, prerequisitos: [], abre: [], nota: 0 }
            ]
        },
        // Segundo semestre
        {
            semestre: 2,
            ramos: [
                { codigo: "QQUI204", nombre: "Práctica I: interacción con el contexto educativo", creditos: 2, prerequisitos: ["FPED126"], abre: [], nota: 0 },
                { codigo: "QQUI202", nombre: "Química general II", creditos: 8, prerequisitos: ["QQUI101"], abre: [], nota: 0 },
                { codigo: "FPED214", nombre: "Reflexión crítica y filosófica de los procesos educativos", creditos: 4, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUI205", nombre: "Física I", creditos: 5, prerequisitos: ["QQUI02"], abre: ["QQUI301"], nota: 0 },
                { codigo: "QQUI203", nombre: "Informática aplicada", creditos: 3, prerequisitos: [], abre: [], nota: 0 },
                { codigo: "QQUI201", nombre: "Matemática II", creditos: 4, prerequisitos: ["QQUI02"], abre: ["QQUI304"], nota: 0 },
                { codigo: "FPED213", nombre: "Contextos socioculturales de los procesos educativos", creditos: 4, prerequisitos: [], abre: [], nota: 0 }
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

    // Variables globales
    let approvedCourses = [];
    let currentCourseEditing = null;
    let currentSemesterForElectivo = null;
    let electivos = [];

    // Inicializar la aplicación
    function init() {
        renderSemesters();
        updateStats();
        setupEventListeners();
        loadFromLocalStorage();
    }

    // Renderizar todos los semestres
    function renderSemesters() {
        const container = document.getElementById('semesters-container');
        container.innerHTML = '';

        mallaData.forEach(semesterData => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';
            
            const header = document.createElement('div');
            header.className = 'semester-header';
            
            const title = document.createElement('h2');
            title.className = 'semester-title';
            title.textContent = `Semestre ${semesterData.semestre}`;
            
            header.appendChild(title);
            
            // Agregar botón para electivos solo a partir del tercer semestre
            if (semesterData.semestre >= 3) {
                const addButton = document.createElement('button');
                addButton.className = 'add-electivo-btn';
                addButton.textContent = '+ Electivo';
                addButton.dataset.semester = semesterData.semestre;
                header.appendChild(addButton);
            }
            
            semesterElement.appendChild(header);
            
            const coursesGrid = document.createElement('div');
            coursesGrid.className = 'courses-grid';
            
            // Renderizar ramos normales
            semesterData.ramos.forEach(course => {
                coursesGrid.appendChild(createCourseElement(course, semesterData.semestre));
            });
            
            // Renderizar electivos si existen para este semestre
            const semesterElectivos = electivos.filter(e => e.semestre === semesterData.semestre);
            semesterElectivos.forEach(electivo => {
                coursesGrid.appendChild(createCourseElement(electivo, semesterData.semestre));
            });
            
            semesterElement.appendChild(coursesGrid);
            container.appendChild(semesterElement);
        });
    }

    // Crear elemento de curso
    function createCourseElement(course, semester) {
        const courseElement = document.createElement('div');
        
        // Determinar el estado del curso
        const isApproved = approvedCourses.includes(course.codigo || course.nombre);
        const prereqsMet = checkPrerequisites(course.prerequisitos);
        
        if (isApproved) {
            courseElement.className = 'course approved';
        } else if (prereqsMet) {
            courseElement.className = 'course unlocked';
        } else {
            courseElement.className = 'course locked';
        }
        
        // Información del curso
        const codeElement = document.createElement('div');
        codeElement.className = 'course-code';
        codeElement.textContent = course.codigo || 'Electivo';
        
        const nameElement = document.createElement('div');
        nameElement.className = 'course-name';
        nameElement.textContent = course.nombre;
        
        const creditsElement = document.createElement('div');
        creditsElement.className = 'course-credits';
        creditsElement.textContent = `${course.creditos} créditos`;
        
        // Mostrar nota si está aprobado
        if (isApproved && course.nota > 0) {
            const gradeElement = document.createElement('div');
            gradeElement.className = 'course-grade';
            gradeElement.textContent = course.nota.toFixed(1);
            courseElement.appendChild(gradeElement);
        }
        
        // Información de prerrequisitos si está bloqueado
        if (!prereqsMet && course.prerequisitos.length > 0) {
            const prereqInfo = document.createElement('div');
            prereqInfo.className = 'prereq-info';
            prereqInfo.textContent = `Prerrequisitos: ${course.prerequisitos.join(', ')}`;
            courseElement.appendChild(prereqInfo);
        }
        
        courseElement.appendChild(codeElement);
        courseElement.appendChild(nameElement);
        courseElement.appendChild(creditsElement);
        
        // Configurar evento de clic
        if (!isApproved && prereqsMet) {
            courseElement.addEventListener('click', () => openGradeModal(course, semester));
        }
        
        return courseElement;
    }

    // Verificar si se cumplen los prerrequisitos
    function checkPrerequisites(prereqs) {
        if (!prereqs || prereqs.length === 0) return true;
        
        return prereqs.every(prereq => {
            // Verificar si es un ramo aprobado o un electivo aprobado
            return approvedCourses.includes(prereq) || 
                   electivos.some(e => e.nombre === prereq && approvedCourses.includes(e.nombre));
        });
    }

    // Abrir modal para ingresar nota
    function openGradeModal(course, semester) {
        currentCourseEditing = { ...course, semester };
        
        const modal = document.getElementById('grade-modal');
        const title = document.getElementById('modal-title');
        const input = document.getElementById('grade-input');
        
        title.textContent = `Ingresar nota para ${course.nombre}`;
        input.value = course.nota > 0 ? course.nota : '';
        
        modal.style.display = 'block';
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Guardar nota
        document.getElementById('save-grade').addEventListener('click', saveGrade);
        
        // Cerrar modales
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('grade-modal').style.display = 'none';
                document.getElementById('electivo-modal').style.display = 'none';
            });
        });
        
        // Cerrar modal al hacer clic fuera
        window.addEventListener('click', (event) => {
            if (event.target.className === 'modal') {
                event.target.style.display = 'none';
            }
        });
        
        // Agregar electivo
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('add-electivo-btn')) {
                currentSemesterForElectivo = parseInt(event.target.dataset.semester);
                document.getElementById('electivo-modal').style.display = 'block';
            }
        });
        
        // Guardar electivo
        document.getElementById('save-electivo').addEventListener('click', saveElectivo);
    }

    // Guardar nota
    function saveGrade() {
        const input = document.getElementById('grade-input');
        const grade = parseFloat(input.value);
        
        if (isNaN(grade) || grade < 1 || grade > 7) {
            alert('Por favor ingrese una nota válida entre 1.0 y 7.0');
            return;
        }
        
        // Actualizar el curso en los datos
        const semesterIndex = mallaData.findIndex(s => s.semestre === currentCourseEditing.semester);
        if (semesterIndex !== -1) {
            const courseIndex = mallaData[semesterIndex].ramos.findIndex(
                c => (c.codigo === currentCourseEditing.codigo && c.codigo) || 
                     (c.nombre === currentCourseEditing.nombre && !c.codigo)
            );
            
            if (courseIndex !== -1) {
                mallaData[semesterIndex].ramos[courseIndex].nota = grade;
                approvedCourses.push(currentCourseEditing.codigo || currentCourseEditing.nombre);
            } else {
                // Buscar en electivos
                const electivoIndex = electivos.findIndex(
                    e => e.semestre === currentCourseEditing.semester && 
                         e.nombre === currentCourseEditing.nombre
                );
                
                if (electivoIndex !== -1) {
                    electivos[electivoIndex].nota = grade;
                    approvedCourses.push(currentCourseEditing.nombre);
                }
            }
        }
        
        // Guardar en localStorage
        saveToLocalStorage();
        
        // Actualizar la vista
        renderSemesters();
        updateStats();
        
        // Cerrar modal
        document.getElementById('grade-modal').style.display = 'none';
    }

    // Guardar electivo
    function saveElectivo() {
        const nameInput = document.getElementById('electivo-name');
        const creditsInput = document.getElementById('electivo-credits');
        
        const name = nameInput.value.trim();
        const credits = parseInt(creditsInput.value);
        
        if (!name || isNaN(credits) || credits < 1) {
            alert('Por favor ingrese un nombre válido y créditos mayores a 0');
            return;
        }
        
        // Crear nuevo electivo
        const newElectivo = {
            nombre: name,
            creditos: credits,
            prerequisitos: [],
            abre: [],
            semestre: currentSemesterForElectivo,
            nota: 0
        };
        
        electivos.push(newElectivo);
        
        // Guardar en localStorage
        saveToLocalStorage();
        
        // Actualizar la vista
        renderSemesters();
        
        // Limpiar y cerrar modal
        nameInput.value = '';
        creditsInput.value = '';
        document.getElementById('electivo-modal').style.display = 'none';
    }

    // Actualizar estadísticas
    function updateStats() {
        // Calcular créditos aprobados
        let totalCredits = 0;
        let totalCourses = 0;
        let sumGrades = 0;
        
        // Recorrer ramos normales
        mallaData.forEach(semester => {
            semester.ramos.forEach(course => {
                if (approvedCourses.includes(course.codigo || course.nombre) {
                    totalCredits += course.creditos;
                    if (course.nota > 0) {
                        sumGrades += course.nota;
                        totalCourses++;
                    }
                }
            });
        });
        
        // Recorrer electivos
        electivos.forEach(course => {
            if (approvedCourses.includes(course.nombre)) {
                totalCredits += course.creditos;
                if (course.nota > 0) {
                    sumGrades += course.nota;
                    totalCourses++;
                }
            }
        });
        
        // Actualizar UI
        document.getElementById('creditos-aprobados').textContent = totalCredits;
        
        const average = totalCourses > 0 ? (sumGrades / totalCourses).toFixed(1) : 0;
        document.getElementById('promedio-general').textContent = average;
    }

    // Guardar en localStorage
    function saveToLocalStorage() {
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
        localStorage.setItem('mallaData', JSON.stringify(mallaData));
        localStorage.setItem('electivos', JSON.stringify(electivos));
    }

    // Cargar desde localStorage
    function loadFromLocalStorage() {
        const savedCourses = localStorage.getItem('approvedCourses');
        const savedMalla = localStorage.getItem('mallaData');
        const savedElectivos = localStorage.getItem('electivos');
        
        if (savedCourses) {
            approvedCourses = JSON.parse(savedCourses);
        }
        
        if (savedMalla) {
            const parsedMalla = JSON.parse(savedMalla);
            // Actualizar las notas en mallaData
            parsedMalla.forEach((semester, sIdx) => {
                semester.ramos.forEach((course, cIdx) => {
                    if (mallaData[sIdx] && mallaData[sIdx].ramos[cIdx]) {
                        mallaData[sIdx].ramos[cIdx].nota = course.nota;
                    }
                });
            });
        }
        
        if (savedElectivos) {
            electivos = JSON.parse(savedElectivos);
        }
        
        // Actualizar la vista
        renderSemesters();
        updateStats();
    }

    // Iniciar la aplicación
    init();
});

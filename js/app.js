// Configuración de la aplicación
const CONFIG = {
    totalSlides: 9,
    quizQuestions: 10,
    timeLimit: 600,
    maxAttempts: 3
};

// Base de datos COMPLETA de 20 preguntas
const QUESTIONS_DB = [
    // LOE General (3 preguntas)
    {
        id: 1,
        question: "¿Qué regula principalmente la Ley de Ordenación de la Edificación (LOE)?",
        options: [
            "Los precios de los materiales de construcción",
            "El proceso de edificación, incluyendo plazos, garantías y agentes",
            "Los diseños arquitectónicos de los edificios",
            "La fiscalidad de las obras de construcción"
        ],
        correct: 1,
        explanation: "La LOE (Ley 38/1999) regula específicamente el proceso de edificación, estableciendo responsabilidades, plazos y definiendo los agentes que intervienen.",
        area: "loe",
        difficulty: "baja"
    },
    {
        id: 2,
        question: "¿En qué año se publicó la LOE?",
        options: ["1995", "1999", "2003", "2006"],
        correct: 1,
        explanation: "La Ley de Ordenación de la Edificación (LOE) se publicó en 1999 (Ley 38/1999, de 5 de noviembre).",
        area: "loe",
        difficulty: "baja"
    },
    {
        id: 3,
        question: "¿Qué establece el artículo 1591 del Código Civil?",
        options: [
            "La responsabilidad del constructor por ruina del edificio durante 10 años",
            "Los derechos de los inquilinos en alquileres urbanos",
            "La normativa sobre propiedad horizontal",
            "Los plazos para reclamar daños por vicios de construcción"
        ],
        correct: 0,
        explanation: "El artículo 1591 establece la responsabilidad del contratista por ruina del edificio durante 10 años, norma con la que convive la LOE.",
        area: "loe",
        difficulty: "alta"
    },
    
    // Responsabilidades (4 preguntas)
    {
        id: 4,
        question: "¿Cuánto dura la responsabilidad decenal según la LOE?",
        options: ["1 año", "3 años", "5 años", "10 años"],
        correct: 3,
        explanation: "La responsabilidad decenal cubre daños estructurales durante 10 años desde la recepción de la obra.",
        area: "responsabilidad",
        difficulty: "baja"
    },
    {
        id: 5,
        question: "¿Qué tipo de defectos cubre la responsabilidad trienal?",
        options: [
            "Defectos estructurales graves",
            "Problemas de habitabilidad como filtraciones o mal funcionamiento de instalaciones",
            "Defectos de acabado como grietas en la pintura",
            "Problemas en el terreno de cimentación"
        ],
        correct: 1,
        explanation: "La responsabilidad trienal (3 años) cubre vicios o defectos que afectan la habitabilidad del edificio.",
        area: "responsabilidad",
        difficulty: "media"
    },
    {
        id: 6,
        question: "¿Qué cubre la responsabilidad anual?",
        options: [
            "Daños estructurales",
            "Problemas de habitabilidad",
            "Defectos de acabado fácilmente subsanables",
            "Defectos en el terreno"
        ],
        correct: 2,
        explanation: "La responsabilidad anual cubre defectos de acabado que obstaculizan el uso pero son fácilmente subsanables.",
        area: "responsabilidad",
        difficulty: "media"
    },
    {
        id: 7,
        question: "¿Qué ejemplo corresponde a responsabilidad decenal?",
        options: [
            "Grietas en el revestimiento de paredes",
            "Problemas de estanqueidad en cubiertas",
            "Daños estructurales en la cimentación",
            "Puertas que no cierran correctamente"
        ],
        correct: 2,
        explanation: "Los daños estructurales en la cimentación son responsabilidad decenal (10 años).",
        area: "responsabilidad",
        difficulty: "media"
    },
    
    // Agentes (4 preguntas)
    {
        id: 8,
        question: "¿Qué agente de la edificación redacta el proyecto?",
        options: ["Promotor", "Proyectista", "Constructor", "Director de Obra"],
        correct: 1,
        explanation: "El proyectista es el agente que redacta el proyecto de edificación por encargo del promotor.",
        area: "agentes",
        difficulty: "baja"
    },
    {
        id: 9,
        question: "¿Qué agente impulsa y financia las obras?",
        options: ["Promotor", "Proyectista", "Constructor", "Director de Ejecución"],
        correct: 0,
        explanation: "El promotor es quien decide, impulsa, programa y financia las obras de edificación.",
        area: "agentes",
        difficulty: "baja"
    },
    {
        id: 10,
        question: "¿Qué agente se conoce como aparejador o arquitecto técnico?",
        options: ["Director de Obra", "Director de la Ejecución", "Jefe de Obra", "Proyectista"],
        correct: 1,
        explanation: "El Director de la Ejecución de la Obra es el aparejador o arquitecto técnico.",
        area: "agentes",
        difficulty: "media"
    },
    {
        id: 11,
        question: "¿Qué agente responde solidariamente ante defectos constructivos?",
        options: ["Promotor", "Proyectista", "Constructor", "Todos los anteriores"],
        correct: 3,
        explanation: "El promotor responde solidariamente junto con otros agentes ante defectos constructivos.",
        area: "agentes",
        difficulty: "alta"
    },
    
    // CTE (5 preguntas)
    {
        id: 12,
        question: "¿Qué significa que el CTE es una normativa de prestaciones?",
        options: [
            "Establece precios máximos para las obras",
            "Define métodos de cálculo específicos que deben seguirse obligatoriamente",
            "Establece objetivos que deben cumplirse, permitiendo libertad en los métodos",
            "Regula únicamente las prestaciones sociales de los trabajadores"
        ],
        correct: 2,
        explanation: "El CTE establece estados límite y prestaciones que deben cumplir los elementos, pero no especifica métodos de cálculo.",
        area: "cte",
        difficulty: "media"
    },
    {
        id: 13,
        question: "¿Cuál de las siguientes NO es una exigencia básica del CTE?",
        options: [
            "Seguridad Estructural (SE)",
            "Seguridad en caso de Incendio (SI)",
            "Aislamiento Acústico (AA)",
            "Ahorro de Energía (HE)"
        ],
        correct: 2,
        explanation: "Las exigencias básicas del CTE son: SE, SI, SUA, HS, HR y HE.",
        area: "cte",
        difficulty: "media"
    },
    {
        id: 14,
        question: "¿Qué Documento Básico (DB) regula la protección frente al ruido?",
        options: ["DB-SE", "DB-SI", "DB-HR", "DB-HE"],
        correct: 2,
        explanation: "El DB-HR es el Documento Básico que establece las exigencias de protección frente al ruido.",
        area: "cte",
        difficulty: "baja"
    },
    {
        id: 15,
        question: "¿En qué año se aprobó el CTE?",
        options: ["1999", "2003", "2006", "2010"],
        correct: 2,
        explanation: "El Código Técnico de la Edificación se aprobó por Real Decreto 314/2006, de 17 de marzo.",
        area: "cte",
        difficulty: "baja"
    },
    {
        id: 16,
        question: "¿Qué exigencia básica del CTE garantiza la accesibilidad universal?",
        options: ["SE", "SI", "SUA", "HE"],
        correct: 2,
        explanation: "El SUA (Seguridad de Utilización y Accesibilidad) garantiza la accesibilidad universal.",
        area: "cte",
        difficulty: "media"
    },
    
    // Colegiación (4 preguntas)
    {
        id: 17,
        question: "Según la LOE, ¿qué documentación debe visar el colegio profesional?",
        options: [
            "La licencia municipal de obras",
            "El proyecto de ejecución",
            "El contrato de compraventa",
            "El presupuesto de la obra"
        ],
        correct: 1,
        explanation: "Los colegios profesionales visan los proyectos para verificar que cumplen con la normativa aplicable.",
        area: "colegiacion",
        difficulty: "alta"
    },
    {
        id: 18,
        question: "¿Qué titulación NO permite la colegiación como decorador/diseñador de interiores?",
        options: [
            "Graduado en Diseño (especialidad Interiores)",
            "Estudios Superiores de Diseño (Interiores)",
            "Técnico Superior en Edificación y Obra Civil",
            "Técnico Superior de Artes Plásticas y Diseño de Proyectos y Dirección de Obras de Decoración"
        ],
        correct: 2,
        explanation: "Para colegiarse como decorador/diseñador de interiores se requieren titulaciones específicas del área de diseño.",
        area: "colegiacion",
        difficulty: "media"
    },
    {
        id: 19,
        question: "¿Qué decreto establece la obligatoriedad de colegiación para decoradores?",
        options: [
            "Decreto 893/1972",
            "Decreto 314/2006",
            "Decreto 732/2019",
            "Decreto 450/2022"
        ],
        correct: 0,
        explanation: "El Decreto 893/1972, de 24 de marzo, establece la obligatoriedad de colegiación.",
        area: "colegiacion",
        difficulty: "alta"
    },
    {
        id: 20,
        question: "¿Cuál es la cuota de incorporación al colegio de decoradores?",
        options: ["50€", "100€", "150€", "200€"],
        correct: 2,
        explanation: "La cuota de incorporación al colegio de decoradores es de 150 euros.",
        area: "colegiacion",
        difficulty: "baja"
    }
];

// Estado de la aplicación
let appState = {
    currentSlide: 0,
    quizAnswers: {},
    quizResults: [],
    startTime: null,
    timeSpent: 0,
    timerInterval: null,
    score: 0,
    attempts: 0,
    studentInfo: {
        nombre: "",
        apellidos: "",
        fecha: "",
        horaInicio: "",
        horaFin: "",
        intentoActual: 1
    },
    areas: {
        loe: { correct: 0, total: 0 },
        responsabilidad: { correct: 0, total: 0 },
        agentes: { correct: 0, total: 0 },
        cte: { correct: 0, total: 0 },
        colegiacion: { correct: 0, total: 0 }
    }
};

// Variables globales
let activityStartTime = null;
let attemptsHistory = [];

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    activityStartTime = Date.now();
    appState.studentInfo.horaInicio = new Date().toLocaleTimeString('es-ES');
    appState.studentInfo.fecha = new Date().toLocaleDateString('es-ES');
    
    // Cargar intentos previos
    loadAttemptsFromStorage();
    
    updateProgressBar();
    updateSlideCounter();
    generateQuiz();
    setupEventListeners();
}

function loadAttemptsFromStorage() {
    try {
        const savedAttempts = localStorage.getItem('loe_cte_attempts');
        if (savedAttempts) {
            attemptsHistory = JSON.parse(savedAttempts);
            appState.studentInfo.intentoActual = attemptsHistory.length + 1;
        }
    } catch (e) {
        console.log('No hay intentos previos o error al cargarlos');
        attemptsHistory = [];
    }
}

function saveAttemptToStorage(attemptData) {
    attemptsHistory.push(attemptData);
    try {
        localStorage.setItem('loe_cte_attempts', JSON.stringify(attemptsHistory));
    } catch (e) {
        console.error('Error al guardar en localStorage:', e);
    }
}

function setupEventListeners() {
    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Botón de enviar cuestionario
    const submitBtn = document.getElementById('submit-quiz-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitQuiz);
    }
    
    // Botón de revisión
    const reviewBtn = document.querySelector('.btn-review');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', reviewQuiz);
    }
    
    // Botón de reinicio
    const restartBtn = document.querySelector('.btn-restart');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }
    
    // Botón de finalizar - DEBE llamar a showStudentInfoModal
    const finishBtn = document.querySelector('.btn-finish');
    if (finishBtn) {
        finishBtn.addEventListener('click', showStudentInfoModal);
    }
    
    // También configurar el onclick del botón por si acaso
    if (finishBtn) {
        finishBtn.onclick = showStudentInfoModal;
    }
}

// Funciones de navegación
function nextSlide() {
    if (appState.currentSlide < CONFIG.totalSlides - 1) {
        if (appState.currentSlide === 7 && appState.timerInterval) {
            clearInterval(appState.timerInterval);
        }
        
        appState.currentSlide++;
        showSlide(appState.currentSlide);
        updateProgressBar();
        updateSlideCounter();
        
        if (appState.currentSlide === 7) {
            startTimer();
        }
    }
}

function prevSlide() {
    if (appState.currentSlide > 0) {
        if (appState.currentSlide === 7 && appState.timerInterval) {
            clearInterval(appState.timerInterval);
        }
        
        appState.currentSlide--;
        showSlide(appState.currentSlide);
        updateProgressBar();
        updateSlideCounter();
        
        if (appState.currentSlide === 7) {
            startTimer();
        }
    }
}

function showSlide(slideNumber) {
    if (appState.startTime && slideNumber !== 7) {
        appState.timeSpent += Math.floor((Date.now() - appState.startTime) / 1000);
    }
    
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    const slideElement = document.getElementById(`slide-${slideNumber}`);
    if (slideElement) {
        slideElement.classList.add('active');
    }
    
    if (slideNumber !== 7) {
        appState.startTime = Date.now();
    }
}

function updateProgressBar() {
    const progress = (appState.currentSlide / (CONFIG.totalSlides - 1)) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
}

function updateSlideCounter() {
    const currentSlide = document.getElementById('currentSlide');
    const totalSlides = document.getElementById('totalSlides');
    
    if (currentSlide && totalSlides) {
        currentSlide.textContent = appState.currentSlide + 1;
        totalSlides.textContent = CONFIG.totalSlides;
    }
}

// Temporizador
function startTimer() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
    }
    appState.startTime = Date.now();
    appState.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = appState.timeSpent + Math.floor((Date.now() - appState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (elapsed >= CONFIG.timeLimit - 60) {
            timerElement.style.color = 'var(--warning-color)';
        }
        
        if (elapsed >= CONFIG.timeLimit) {
            clearInterval(appState.timerInterval);
            timerElement.style.color = 'var(--danger-color)';
            alert('¡Tiempo agotado! Se procederá a corregir el cuestionario.');
            submitQuiz();
        }
    }
}

// Generación del cuestionario - VERSIÓN MEJORADA
function generateQuiz() {
    const quizForm = document.getElementById('quiz-form');
    if (!quizForm) return;
    
    quizForm.innerHTML = '';
    
    // Reiniciar contadores
    Object.keys(appState.areas).forEach(area => {
        appState.areas[area] = { correct: 0, total: 0 };
    });
    
    appState.quizAnswers = {};
    appState.quizResults = [];
    appState.score = 0;
    
    // Verificar límite de intentos
    if (attemptsHistory.length >= CONFIG.maxAttempts) {
        quizForm.innerHTML = `
            <div class="attempts-limit" style="text-align: center; padding: 2rem; background: #fff3cd; border-radius: var(--border-radius);">
                <h3 style="color: #856404;"><i class="fas fa-exclamation-triangle"></i> Límite de intentos alcanzado</h3>
                <p>Has alcanzado el máximo de ${CONFIG.maxAttempts} intentos permitidos.</p>
                <p>Contacta con tu instructor para más información.</p>
            </div>
        `;
        return;
    }
    
    // Estrategia: seleccionar 2 preguntas de cada área (total 10)
    const questionsByArea = {
        loe: QUESTIONS_DB.filter(q => q.area === 'loe'),
        responsabilidad: QUESTIONS_DB.filter(q => q.area === 'responsabilidad'),
        agentes: QUESTIONS_DB.filter(q => q.area === 'agentes'),
        cte: QUESTIONS_DB.filter(q => q.area === 'cte'),
        colegiacion: QUESTIONS_DB.filter(q => q.area === 'colegiacion')
    };
    
    let selectedQuestions = [];
    
    // Seleccionar 2 preguntas de cada área
    Object.keys(questionsByArea).forEach(area => {
        const availableQuestions = [...questionsByArea[area]];
        for (let i = 0; i < 2 && availableQuestions.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            selectedQuestions.push(availableQuestions[randomIndex]);
            availableQuestions.splice(randomIndex, 1);
        }
    });
    
    // Mezclar todas las preguntas seleccionadas
    selectedQuestions = selectedQuestions.sort(() => Math.random() - 0.5);
    
    // Si por alguna razón no tenemos 10 preguntas, completar con aleatorias
    while (selectedQuestions.length < CONFIG.quizQuestions) {
        const randomQuestion = QUESTIONS_DB[Math.floor(Math.random() * QUESTIONS_DB.length)];
        if (!selectedQuestions.some(q => q.id === randomQuestion.id)) {
            selectedQuestions.push(randomQuestion);
        }
    }
    
    // Generar preguntas
    selectedQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.dataset.questionId = question.id;
        questionDiv.dataset.area = question.area;
        
        // Mezclar opciones
        const shuffledOptions = [...question.options];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        const correctIndex = shuffledOptions.indexOf(question.options[question.correct]);
        
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            <div class="quiz-options" id="options-${index}">
                ${shuffledOptions.map((option, optIndex) => `
                    <div class="quiz-option" onclick="selectOption(this, ${index}, ${optIndex})">
                        <input type="radio" name="q${index}" id="q${index}_opt${optIndex}" value="${optIndex}">
                        <label for="q${index}_opt${optIndex}">${option}</label>
                    </div>
                `).join('')}
            </div>
        `;
        
        quizForm.appendChild(questionDiv);
        
        // Guardar en estado
        appState.quizAnswers[index] = {
            questionId: question.id,
            selected: null,
            correct: correctIndex,
            area: question.area,
            questionText: question.question,
            explanation: question.explanation,
            options: shuffledOptions
        };
        
        // Actualizar contador de área
        appState.areas[question.area].total++;
    });
    
    // Actualizar contador de preguntas
    const totalQuestionsElement = document.getElementById('total-questions');
    if (totalQuestionsElement) {
        totalQuestionsElement.textContent = CONFIG.quizQuestions;
    }
    
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = '0';
    }
}

// Función para seleccionar opción (debe ser global)
window.selectOption = function(element, questionIndex, optionIndex) {
    const optionsContainer = element.closest('.quiz-options');
    if (!optionsContainer) return;
    
    const options = optionsContainer.querySelectorAll('.quiz-option');
    
    // Remover selección previa
    options.forEach(opt => {
        opt.classList.remove('selected');
        const input = opt.querySelector('input');
        if (input) input.checked = false;
    });
    
    // Marcar como seleccionada
    element.classList.add('selected');
    const input = element.querySelector('input');
    if (input) input.checked = true;
    
    // Guardar respuesta
    if (appState.quizAnswers[questionIndex]) {
        appState.quizAnswers[questionIndex].selected = optionIndex;
    }
    
    updateScoreDisplay();
};

function updateScoreDisplay() {
    let score = 0;
    
    Object.values(appState.quizAnswers).forEach(answer => {
        if (answer.selected !== null && answer.selected === answer.correct) {
            score++;
        }
    });
    
    appState.score = score;
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = score;
    }
}

// Corrección del cuestionario
function submitQuiz() {
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
    }
    
    appState.quizResults = [];
    appState.attempts++;
    
    // Reiniciar contadores de áreas
    Object.keys(appState.areas).forEach(area => {
        appState.areas[area].correct = 0;
    });
    
    // Calcular resultados
    let score = 0;
    Object.values(appState.quizAnswers).forEach((answer, index) => {
        const isCorrect = answer.selected === answer.correct;
        if (isCorrect) {
            score++;
            if (appState.areas[answer.area]) {
                appState.areas[answer.area].correct++;
            }
        }
        
        appState.quizResults.push({
            ...answer,
            isCorrect,
            index: index + 1
        });
    });
    
    appState.score = score;
    showResults();
}

function showResults() {
    appState.currentSlide = 8;
    showSlide(appState.currentSlide);
    updateProgressBar();
    updateSlideCounter();
    
    const percentage = Math.round((appState.score / CONFIG.quizQuestions) * 100);
    
    // Actualizar elementos de resultados
    const finalScoreElement = document.getElementById('final-score');
    const maxScoreElement = document.getElementById('max-score');
    
    if (finalScoreElement) finalScoreElement.textContent = appState.score;
    if (maxScoreElement) maxScoreElement.textContent = CONFIG.quizQuestions;
    
    const resultMessage = document.getElementById('result-message');
    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent = '¡Excelente! Dominas completamente la normativa LOE y CTE.';
            resultMessage.style.color = 'var(--success-color)';
        } else if (percentage >= 70) {
            resultMessage.textContent = '¡Muy bien! Tienes un buen conocimiento de la normativa.';
            resultMessage.style.color = 'var(--success-color)';
        } else if (percentage >= 50) {
            resultMessage.textContent = 'Aprobado. Conviene repasar algunos conceptos.';
            resultMessage.style.color = 'var(--warning-color)';
        } else {
            resultMessage.textContent = 'Necesitas estudiar más la normativa. Revisa los conceptos clave.';
            resultMessage.style.color = 'var(--danger-color)';
        }
    }
    
    updateAreaCharts();
}

function updateAreaCharts() {
    const areas = ['loe', 'responsabilidad', 'agentes', 'cte', 'colegiacion'];
    
    areas.forEach(area => {
        const areaData = appState.areas[area];
        const percentage = areaData.total > 0 ? 
            Math.round((areaData.correct / areaData.total) * 100) : 0;
        
        const fillElement = document.getElementById(`area-${area}`);
        if (fillElement) {
            setTimeout(() => {
                fillElement.style.width = `${percentage}%`;
            }, 100 * areas.indexOf(area));
        }
        
        const percentElement = document.getElementById(`area-${area}-percent`);
        if (percentElement) {
            percentElement.textContent = `${percentage}%`;
        }
    });
}

// Modal de datos del estudiante
window.showStudentInfoModal = function() {
    // Actualizar información en el modal
    updateStudentModalInfo();
    
    // Mostrar modal
    const modal = document.getElementById('student-info-modal');
    if (modal) {
        modal.style.display = 'flex';
        
        // Enfocar primer campo
        const nameInput = document.getElementById('student-name');
        if (nameInput) {
            setTimeout(() => nameInput.focus(), 100);
        }
    }
};

function updateStudentModalInfo() {
    const percentage = Math.round((appState.score / CONFIG.quizQuestions) * 100);
    const totalTime = Math.floor((Date.now() - activityStartTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    // Actualizar puntuación y porcentaje
    const puntuacionElement = document.getElementById('modal-puntuacion');
    const porcentajeElement = document.getElementById('modal-porcentaje');
    const duracionElement = document.getElementById('modal-duracion');
    const intentoElement = document.getElementById('modal-intento');
    
    if (puntuacionElement) puntuacionElement.textContent = `${appState.score}/${CONFIG.quizQuestions}`;
    if (porcentajeElement) porcentajeElement.textContent = `${percentage}%`;
    if (duracionElement) duracionElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (intentoElement) intentoElement.textContent = attemptsHistory.length + 1;
    
    // Actualizar lista de áreas
    const areasList = document.getElementById('areas-results-list');
    if (areasList) {
        let areasHTML = '';
        
        Object.entries(appState.areas).forEach(([area, data]) => {
            const areaName = {
                loe: 'LOE General',
                responsabilidad: 'Responsabilidades',
                agentes: 'Agentes',
                cte: 'CTE',
                colegiacion: 'Colegiación'
            }[area];
            
            const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            
            areasHTML += `
                <div class="area-result-item">
                    <span class="area-name">${areaName}</span>
                    <span class="area-score">${data.correct}/${data.total} (${percentage}%)</span>
                </div>
            `;
        });
        
        areasList.innerHTML = areasHTML;
    }
    
    // Mostrar advertencia si se acerca al límite
    const attemptsWarning = document.getElementById('attempts-warning');
    const currentAttempts = document.getElementById('current-attempts');
    
    if (attemptsWarning && currentAttempts) {
        if (attemptsHistory.length >= CONFIG.maxAttempts - 1) {
            attemptsWarning.style.display = 'flex';
            currentAttempts.textContent = attemptsHistory.length + 1;
        } else {
            attemptsWarning.style.display = 'none';
        }
    }
}

// Función para procesar la información del estudiante
window.processStudentInfo = function() {
    const nameInput = document.getElementById('student-name');
    const surnameInput = document.getElementById('student-surname');
    
    const nombre = nameInput ? nameInput.value.trim() : '';
    const apellidos = surnameInput ? surnameInput.value.trim() : '';
    
    // Validar campos
    if (!nombre || !apellidos) {
        alert('Por favor, introduce tu nombre y apellidos.');
        return;
    }
    
    if (nombre.length < 2 || apellidos.length < 2) {
        alert('El nombre y apellidos deben tener al menos 2 caracteres.');
        return;
    }
    
    // Verificar límite de intentos
    if (attemptsHistory.length >= CONFIG.maxAttempts) {
        alert(`Has alcanzado el máximo de ${CONFIG.maxAttempts} intentos permitidos.`);
        return;
    }
    
    // Guardar información del estudiante
    appState.studentInfo.nombre = nombre;
    appState.studentInfo.apellidos = apellidos;
    appState.studentInfo.horaFin = new Date().toLocaleTimeString('es-ES');
    appState.studentInfo.intentoActual = attemptsHistory.length + 1;
    
    // Crear datos del intento
    const totalTime = Math.floor((Date.now() - activityStartTime) / 1000);
    const percentage = Math.round((appState.score / CONFIG.quizQuestions) * 100);
    
    const attemptData = {
        fecha: appState.studentInfo.fecha,
        horaInicio: appState.studentInfo.horaInicio,
        horaFin: appState.studentInfo.horaFin,
        nombre: nombre,
        apellidos: apellidos,
        intento: appState.studentInfo.intentoActual,
        score: appState.score,
        total: CONFIG.quizQuestions,
        percentage: percentage,
        duracion: totalTime,
        areas: { ...appState.areas }
    };
    
    // Guardar en localStorage
    saveAttemptToStorage(attemptData);
    
    // Cerrar modal
    closeStudentModal();
    
    // Generar certificado
    generateCertificateImage(attemptData);
};

// Cerrar modal del estudiante
window.closeStudentModal = function() {
    const modal = document.getElementById('student-info-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// Generar certificado en imagen
function generateCertificateImage(attemptData) {
    // Crear overlay de procesamiento
    const overlay = document.createElement('div');
    overlay.id = 'processing-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        color: white;
        font-size: 18px;
    `;
    overlay.innerHTML = `
        <div style="text-align: center; background: white; padding: 30px; border-radius: 10px; color: #333;">
            <i class="fas fa-spinner fa-spin" style="font-size: 40px; color: #005caa; margin-bottom: 15px;"></i>
            <p style="font-size: 18px; margin: 10px 0;">Generando certificado...</p>
            <p style="font-size: 14px; color: #666;">Por favor, espera unos segundos</p>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Crear contenido del certificado
    const certificateContent = createCertificateHTML(attemptData);
    
    // Crear contenedor temporal para html2canvas
    const tempContainer = document.createElement('div');
    tempContainer.id = 'certificate-temp';
    tempContainer.style.cssText = `
        position: absolute;
        left: -9999px;
        top: -9999px;
        width: 1000px;
        background: white;
        padding: 40px;
        font-family: Arial, sans-serif;
    `;
    tempContainer.innerHTML = certificateContent;
    document.body.appendChild(tempContainer);
    
    // Usar html2canvas
    setTimeout(() => {
        html2canvas(tempContainer, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: 1000,
            height: tempContainer.scrollHeight
        }).then(canvas => {
            // Convertir a imagen
            const image = canvas.toDataURL('image/jpeg', 0.9);
            
            // Crear enlace de descarga
            const link = document.createElement('a');
            const fileName = `Certificado_LOE_CTE_${attemptData.nombre}_${attemptData.apellidos}_${new Date().toISOString().slice(0,10)}.jpg`;
            link.download = fileName;
            link.href = image;
            
            // Descargar
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Limpiar
            document.body.removeChild(tempContainer);
            document.body.removeChild(overlay);
            
            // Mostrar mensaje de éxito
            alert(`✅ Certificado generado con éxito!\n\n📁 Archivo: ${fileName}\n\nEl certificado se ha descargado automáticamente.`);
            
        }).catch(error => {
            console.error('Error al generar certificado:', error);
            document.body.removeChild(tempContainer);
            document.body.removeChild(overlay);
            alert('❌ Error al generar el certificado. Por favor, intenta de nuevo.');
        });
    }, 1000);
}

function createCertificateHTML(attemptData) {
    const minutes = Math.floor(attemptData.duracion / 60);
    const seconds = attemptData.duracion % 60;
    
    return `
        <div style="font-family: 'Arial', sans-serif; color: #333; line-height: 1.5; max-width: 900px; margin: 0 auto;">
            <!-- Encabezado -->
            <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #005caa;">
                <h1 style="color: #005caa; font-size: 32px; margin: 0 0 10px 0;">
                    🏗️ CERTIFICADO DE EVALUACIÓN
                </h1>
                <h2 style="color: #00a8a8; font-size: 24px; margin: 0 0 5px 0;">
                    UD06 - LOE y CTE
                </h2>
                <p style="color: #666; font-size: 16px; margin: 0;">
                    Normativa de Edificación - Formación y Orientación Laboral
                </p>
            </div>
            
            <!-- Información del alumno -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
                <h3 style="color: #005caa; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                    👤 INFORMACIÓN DEL ALUMNO
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <p style="margin: 8px 0;"><strong>Nombre:</strong> ${attemptData.nombre}</p>
                        <p style="margin: 8px 0;"><strong>Apellidos:</strong> ${attemptData.apellidos}</p>
                        <p style="margin: 8px 0;"><strong>Fecha:</strong> ${attemptData.fecha}</p>
                    </div>
                    <div>
                        <p style="margin: 8px 0;"><strong>Intento Nº:</strong> ${attemptData.intento}</p>
                        <p style="margin: 8px 0;"><strong>Hora inicio:</strong> ${attemptData.horaInicio}</p>
                        <p style="margin: 8px 0;"><strong>Hora fin:</strong> ${attemptData.horaFin}</p>
                    </div>
                </div>
            </div>
            
            <!-- Resultados principales -->
            <div style="background: linear-gradient(135deg, #005caa, #00a8a8); color: white; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                <div style="display: flex; justify-content: space-around; text-align: center;">
                    <div>
                        <div style="font-size: 42px; font-weight: bold;">${attemptData.score}/${attemptData.total}</div>
                        <div style="font-size: 16px;">Puntuación</div>
                    </div>
                    <div>
                        <div style="font-size: 42px; font-weight: bold;">${attemptData.percentage}%</div>
                        <div style="font-size: 16px;">Porcentaje</div>
                    </div>
                    <div>
                        <div style="font-size: 42px; font-weight: bold;">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                        <div style="font-size: 16px;">Duración</div>
                    </div>
                </div>
            </div>
            
            <!-- Resultados por áreas -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #005caa; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                    📊 RESULTADOS POR ÁREAS
                </h3>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                    ${Object.entries(attemptData.areas).map(([area, data]) => {
                        const areaName = {
                            loe: 'LOE General',
                            responsabilidad: 'Responsabilidades',
                            agentes: 'Agentes',
                            cte: 'CTE',
                            colegiacion: 'Colegiación'
                        }[area];
                        
                        const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                        
                        return `
                            <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 15px; text-align: center;">
                                <div style="font-weight: bold; color: #005caa; margin-bottom: 5px;">${areaName}</div>
                                <div style="font-size: 22px; font-weight: bold;">${data.correct}/${data.total}</div>
                                <div style="font-size: 14px; color: #666;">${percentage}% correcto</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <!-- Nivel y firma -->
            <div style="border-top: 2px solid #eee; padding-top: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                    <div>
                        <div style="font-weight: bold; color: #005caa; margin-bottom: 5px;">Nivel obtenido:</div>
                        <div style="font-size: 20px; color: ${attemptData.percentage >= 70 ? '#28a745' : attemptData.percentage >= 50 ? '#ffc107' : '#dc3545'};">
                            ${attemptData.percentage >= 70 ? 'EXCELENTE' : attemptData.percentage >= 50 ? 'APROBADO' : 'REPASAR'}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="margin-top: 30px; color: #666; font-size: 14px;">
                            Generado: ${new Date().toLocaleDateString('es-ES')} ${new Date().toLocaleTimeString('es-ES')}
                        </div>
                        <div style="margin-top: 5px; color: #999; font-size: 12px;">
                            ID: ${generateCertificateId()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateCertificateId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 12; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
        if ((i + 1) % 4 === 0 && i < 11) id += '-';
    }
    return id;
}

// Revisión de respuestas
function reviewQuiz() {
    const modal = document.getElementById('review-modal');
    const content = document.getElementById('review-content');
    
    if (!modal || !content) return;
    
    let html = `
        <div class="review-summary">
            <h3>Revisión de respuestas</h3>
            <p>Has acertado ${appState.score} de ${CONFIG.quizQuestions} preguntas (${Math.round((appState.score / CONFIG.quizQuestions) * 100)}%)</p>
        </div>
    `;
    
    appState.quizResults.forEach((result, index) => {
        const selectedOption = result.selected !== null ? result.options[result.selected] : 'Sin responder';
        const correctOption = result.options[result.correct];
        
        html += `
            <div class="review-question ${result.isCorrect ? 'correct' : 'incorrect'}">
                <h4>Pregunta ${index + 1}: ${result.questionText}</h4>
                <div class="review-answer">
                    <p><strong>Tu respuesta:</strong> ${selectedOption}</p>
                    ${!result.isCorrect ? `<p><strong>Respuesta correcta:</strong> ${correctOption}</p>` : ''}
                    <p class="explanation"><i class="fas fa-info-circle"></i> ${result.explanation}</p>
                </div>
                <div class="review-status">
                    ${result.isCorrect ? 
                        '<span class="status-correct"><i class="fas fa-check-circle"></i> Correcta</span>' : 
                        '<span class="status-incorrect"><i class="fas fa-times-circle"></i> Incorrecta</span>'
                    }
                </div>
            </div>
        `;
    });
    
    content.innerHTML = html;
    modal.style.display = 'flex';
}

// Reiniciar cuestionario
function restartQuiz() {
    if (attemptsHistory.length >= CONFIG.maxAttempts) {
        alert(`Has alcanzado el máximo de ${CONFIG.maxAttempts} intentos.`);
        return;
    }
    
    appState.quizAnswers = {};
    appState.quizResults = [];
    appState.score = 0;
    appState.timeSpent = 0;
    
    Object.keys(appState.areas).forEach(area => {
        appState.areas[area] = { correct: 0, total: 0 };
    });
    
    generateQuiz();
    
    appState.currentSlide = 7;
    showSlide(appState.currentSlide);
    updateProgressBar();
    updateSlideCounter();
    
    startTimer();
}

// Cerrar modal de revisión
window.closeModal = function() {
    const modal = document.getElementById('review-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// Exportar funciones globales
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.reviewQuiz = reviewQuiz;
window.restartQuiz = restartQuiz;
window.showStudentInfoModal = showStudentInfoModal;
window.closeStudentModal = closeStudentModal;
window.processStudentInfo = processStudentInfo;
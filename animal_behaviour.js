const questions = [
    {
        question: "Define the study of Animal Behaviour (what is it?).",
        answer: "The scientific study of what animals do, how they interact with each other and their environment, and the underlying mechanisms behind these behaviours."
    },
    {
        question: "What is the study of Animal Behaviour called (scientific name)?",
        answer: "Ethology."
    },
    {
        question: "Why do we study Animal Behaviour (identify four reasons)?",
        answer: [
            "To understand animal welfare",
            "Improve training methods",
            "Aid conservation efforts",
            "Enhance human-animal interactions"
        ]
    },
    {
        question: "What are the 4 questions of Animal Behaviour?",
        answer: [
            "Causation (mechanism)",
            "Development (ontogeny)",
            "Evolution (phylogeny)",
            "Function (adaptive value)."
        ]
    },
    {
        question: "What are two possible origins of behaviour?",
        answer: "Innate (genetic) and learned (environmental influences/experience)."
    },
    {
        question: "Distinguish between instinct and learned behaviour.",
        answer: "Instinct is inherited and present at birth (e.g., suckling), while learned behaviour is acquired through experience (e.g., training a dog to sit)."
    },
    {
        question: "What is Kin Selection?",
        answer: "A form of natural selection where individuals help relatives reproduce, even at a cost to their own survival or reproduction, increasing shared genetic success."
    },
    {
        question: "What is imprinting?",
        answer: "A type of learning that occurs at a specific age or life stage, where an animal forms a strong attachment to a particular stimulus, usually a parent."
    },
    {
        question: "What are cognitive behaviours?",
        answer: "Behaviours involving thinking, problem-solving, memory, and decision-making."
    },
    {
        question: "Identify four communication techniques used by animals.",
        answer: "Visual, vocal, chemical and tactile."
    }
];

// Variável para controlar qual pergunta está sendo exibida
let currentQuestionIndex = 0; // Defina 0 para começar com a primeira pergunta

// Função para exibir uma pergunta na página
function showQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";

    const questionData = questions[currentQuestionIndex];

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-container");

    // Verifica se a resposta é array ou string
    let answerHTML = "";
    if (Array.isArray(questionData.answer)) {
        answerHTML = "<ul>" + questionData.answer.map(item => `<li>${item}</li>`).join("") + "</ul>";
    } else {
        answerHTML = `<p>${questionData.answer}</p>`;
    }

    questionDiv.innerHTML = `
        <h2>Question ${currentQuestionIndex + 1}: ${questionData.question}</h2>
        <p class="hint"><em>Click below to see the answer</em></p>
        <div id="answer" style="display: none;">${answerHTML}</div>
        <div class="show-answer-container">
            <button onclick="toggleAnswer()">Show Answer</button>
        </div>
    `;

    container.appendChild(questionDiv);
}

// Função para mostrar/ocultar a resposta
function toggleAnswer() {
    const answer = document.getElementById("answer");
    const hint = document.querySelector(".hint");
    
    if (answer.style.display === "none") {
        answer.style.display = "block";
        hint.style.display = "none";
    } else {
        answer.style.display = "none";
        hint.style.display = "block";
    }
}

// Função para mostrar a próxima pergunta
function showNext() {
    console.log("showNext called, currentQuestionIndex:", currentQuestionIndex); // Verificando o índice atual
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// Função para mostrar a pergunta anterior
function showPrevious() {
    console.log("showPrevious called, currentQuestionIndex:", currentQuestionIndex); // Verificando o índice atual
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Exibir a primeira pergunta ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded triggered");
    showQuestion();
});
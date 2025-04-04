const questions = [
    {
        question: "Name 3 types of scissors used in the grooming salon and state a use for each.",
        answer: `
            <ul>
                <li><strong>Thinning Scissors</strong>: Used for blending and reducing bulk in the fur.</li>
                <li><strong>Curved Scissors</strong>: Helps shape rounded areas like paws and faces.</li>
                <li><strong>Straight Scissors</strong>: Used for general trimming and shaping.</li>
            </ul>
        `
    },
    {
        question: "When using a clipper, what must you consider? Give 4 consideration points.",
        answer: `
            <ul>
                <li>Ensure the blades are sharp to avoid pulling the fur.</li>
                <li>Regularly check the blade temperature to prevent burns.</li>
                <li>Clip in the direction of hair growth for a smoother finish.</li>
                <li>Clean and oil the clippers after each use.</li>
            </ul>
        `
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";

    const questionData = questions[currentQuestionIndex];

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-container");

    questionDiv.innerHTML = `
        <h2>Question ${currentQuestionIndex + 1}: ${questionData.question}</h2>
        <p class="hint"><em>Click below to see the answer</em></p>
        <p id="answer" style="display: none;">${questionData.answer}</p>
        <div class="show-answer-container">
            <button onclick="toggleAnswer()">Show Answer</button>
        </div>
    `;

    container.appendChild(questionDiv);
}

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

function showNext() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function showPrevious() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

document.addEventListener("DOMContentLoaded", showQuestion);
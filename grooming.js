const now = new Date();
const currentHour = now.getHours();
const currentDay = now.getDay(); // 1 = Monday

if (currentDay === 1 && currentHour >= 9 && currentHour < 11) {
  document.body.innerHTML = "<h2 style='text-align:center; margin-top: 20%'>Conteúdo de Grooming indisponível durante o horário da prova.</h2>";
}

const questions = [
        // Perguntas e respostas sobre Grooming
        {
            id: 1,
            question: "Name 3 types of scissors used in the grooming salon and state a use for each.",
            answer: [
               "Thinning Scissors: Used for blending and reducing bulk in the fur.",
                "Straight Shears: Ideal for straight cuts and shaping the coat.",
                "Curved Shears: Helps shape rounded areas like paws and faces."
            ]
        },
        {
            id: 2,
            question: "When using a clipper, what must you consider? Give 4 consideration points.",
            answer: [
                "Ensure the blade is clean and lubricated.",
                "Choose the right blade number for the coat type.",
                "Regularly check if the blade is getting too hot to prevent burns.",
                "Keep the dog’s skin taut to avoid accidental cuts."
            ]
        },
        {
            id: 3,
            question: "When washing a dog, what advice would you give about using the shower head? Give 4 points.",
            answer: [
                "Use lukewarm water for comfort.",
                "Adjust the water pressure to avoid scaring the dog.",
                "Avoid directing water into the dog’s eyes and ears.",
                "Wet the dog gradually to reduce stress."
            ]
        },
        {
            id: 4,
            question: "How long does mixed shampoo keep for (at what point must it be disposed of?).",
            answer: "Mixed shampoo should be used within 24 hours to prevent bacterial growth."
        },
        {
            id: 5,
            question: "When dog is on table, what must you consider? (Identify 4 considerations).",
            answer: [
                "Always use a proper safety restraint.",
                "Never leave the dog unattended.",
                "Ensure the table height is comfortable for grooming.",
                "Watch for signs of stress or discomfort."
            ]
        },
        {
            id: 6,
            question: "What health and safety concerns are on grooming salon? (Give 4 points).",
            answer: [
                "Keep the environment clean and sanitized.",
                "Avoid direct contact with aggressive dogs without protection.",
                "Use masks for protection your face against excessive hair.",
                "Keep cables and equipment organized to prevent accidents."
            ]
        },
        {
            id: 7,
            question: "What signs or signals might a dog give you when they are getting stressed during the grooming process? (Identify 4 signals/signs).",
            answer: [
                "Excessive panting.",
                "Trembling or cowering.",
                "Repetitive nose licking.",
                "Trying to escape or pull away."
            ]
        },
        {
            id: 8,
            question: "What would you do if a dog is getting stressed during the grooming process?",
            answer: [
                "Pause the grooming session and give the dog a break.",
                "Use a calming voice and gentle handling.",
                "Offer treats or reassurance to create a positive experience.",
                "Adjust your approach, using slower and softer movements."
            ]
        },
        {
            id: 9,
            question: "What steps would you take if you cut the quick while clipping a dog's nails?",
            answer: "Grab some styptic powder and apply it to a cotton bud and hold the powder to the bleeding part of the nail for about 10 seconds at least. This will stop the bleeding."
        },
        {
            id: 10,
            question: "Why should you clip a dog's nails after you have bathed them?",
            answer: "Because after the bath the nails are softer and easy to cut, it reduces the risk of splitting or cracking your nails. Also, clean paws make it easy to see the quick."
        },
        {
            id: 11,
            question: "What is a sanitary clip/cut?",
            answer: "A trim done around the genital and anal areas to maintain hygiene and prevent matting."
        },
        {
            id: 12,
            question: "What is a UV sterilizer used for?",
            answer: "To disinfect grooming tools by killing bacteria and viruses with ultraviolet light."
        },
        {
            id: 13,
            question: "What would you do if you notice any lumps, bumps, cuts or other ailments on a dog during the grooming process?",
            answer: [
                "Inform the owner immediately.",
                "Avoid touching or irritating the affected area.",
                "Recommend a vet visit if necessary."
            ]
        },
        {
            id: 14,
            question: "What number blade would you use under a clipper guard (aka attachment or snap-on comb)?",
            answer: "Usually a #30 or #40 blade is used under a snap-on comb."
        },
        {
            id: 15,
            question: "When using a restraint, such as a noose or belly restraint, what should you always have to hand in case of an emergency and why?",
            answer: "A quick-release (scissors) tool to cut the restraint if the dog gets tangled or panics."
        },
        {
            id: 16,
            question: "Identify 2 reasons why a clipper blade might get hot and how would you cool the blade down?",
            answer: {
                reasons: [
                    "Friction from extended use",
                    "Lack of lubrication"
                ],
                coolingMethods: [
                    "Use clipper spray",
                    "Switch to a cool blade",
                    "Place the blade on a cooling mat"
                ]
            }
        },
        {
            id: 17,
            question: "Name 2 types of shampoo available for dog grooming and suggest when each could be used?",
            answer: [
                { type: "Hypoallergenic shampoo", description: "For dogs with sensitive skin." },
                { type: "Medicated shampoo", description: "For dogs with skin conditions like infections (dermatitis)." }
            ]
        },
        {
            id: 18,
            question: "A dog's nail is made up of a tough protective protein called what?",
            answer: "Keratin"
        },
        {
            id: 19,
            question: "What is the blood vessel in the core of the nail called?",
            answer: "Quick"
        },
        {
            id: 20,
            question: "Name two risks posed to a groomer by the grooming salon?",
            answer: [
                "Bites and scratches from anxious dogs.",
                "Exposure to airborne allergens from fur."
            ]
        },
        {
            id: 21,
            question: "Name a type of dryer used in the grooming salon?",
            answer: "Stand dryer"
        },
        {
            id: 22,
            question: "When greeting a dog for the first time, should you approach the dog first? Briefly explain your answer.",
            answer: "No, let the dog approach you to avoid making them feel threatened. Use calm body language and offer a hand for sniffing."
        },
        {
            id: 23,
            question: "What colours can a dog's nails be?",
            answer: "Black Nails (grey quick), Clear Nail (pink quick) or Mixed"
        },
        {
            id: 24,
            question: "Name four parasites you may see on dogs in the grooming salon?",
            answer: "Fleas, ticks, lice, and mites."
        },
        {
            id: 25,
            question: "List 4 medical conditions that might be diagnosed by an examination of the skin and coat.",
            answer: "Mange, dermatitis, fungal infections, and allergies."
        },
        {
            id: 26,
            question: "Give an example of types of scissors used for trimming and explain when their use would be suitable.",
            answer: [
                { type: "Thinning scissors", description: "Used for blending and reducing bulk in thick coats." },
                { type: "Curved scissors", description: "Used for shaping rounded areas like feet and tails." }
            ]
        },
        {
            id: 27,
            question: "Describe the care of clippers and blades.",
            answer: [
                "Clean blades after each use.",
                "Lubricate regularly to reduce friction.",
                "Store in a dry place to prevent rust.",
                "Replace dull blades."
            ]
        },
        {
            id: 28,
            question: "Describe how nails are clipped.",
            answer: [
                "Hold the paw firmly.",
                "Clip small amounts at a time, avoiding the quick.",
                "Use a 45-degree angle cut for a natural shape."
            ]
        },
        {
            id: 29,
            question: "Describe some ways to build rapport with a dog throughout the groom.",
            answer: [
                "Use a calm and friendly tone.",
                "Give treats and praise.",
                "Take breaks if the dog seems stressed.",
                "Be patient and gentle during handling."
            ]
        },
        {
            id: 30,
            question: "What information should you retrieve from the owner prior to a groom?",
            answer: [
                "Dog’s medical history and allergies.",
                "Preferred grooming style.",
                "Behavioral concerns.",
                "Any recent injuries or sensitivities."
            ]
        },
        {
            id: 31,
            question: "Name 4 coat types and identify a breed with that coat type.",
            answer: [
                { coat: "Smooth coat", breed: "Beagle" },
                { coat: "Curly coat", breed: "Poodle" },
                { coat: "Double coat", breed: "Golden Retriever" },
                { coat: "Wire coat", breed: "Schnauzer" }
            ]
        },
        {
            id: 32,
            question: "Name 4 types of brushes used in grooming.",
            answer: ["Slicker", "Bristle", "Pin brush", "Undercoat rake"]
        },
        {
            id: 33,
            question: "Describe 3 things to consider when bathing a dog.",
            answer: [
                "Use a shampoo suited for the dog’s coat and skin.",
                "Rinse thoroughly to avoid skin irritation.",
                "Dry the dog properly to prevent chills or matting."
            ]
        }
];

// Variável para controlar qual pergunta está sendo exibida
let currentQuestionIndex = 0; // Defina 0 para começar com a primeira pergunta

// Função para exibir uma pergunta na página
function showQuestion() {
    console.log("showQuestion called, currentQuestionIndex:", currentQuestionIndex); // Verificando o índice da pergunta

    const container = document.getElementById("question-container");
    if (!container) {
        console.log("Container not found!");
    }

    container.innerHTML = ""; // Limpa a pergunta anterior

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
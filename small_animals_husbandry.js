const questions = [

    {
        question: "List 2 factors that might impact the effectiveness of an disinfectant.",
        answer: [
            "Presence of organic matter",
            "Incorrect concentration/dilution",
            "Contact time",
        ]
    },
    {
        question: "List 2 effective strategies for controlling and preventing infectious disease on animal premises.",
        answer: [
            "Proper vaccination of all animals",
            "Maintaining clean and desinfected premises",

        ]
    },
    {
        question: "What are the signs of general ill health in a small animal? (Physical and behavioral)",
        answer: [
            "Physical signs: lethargy, vomiting, diarrhea, coughing, sneezing",
            "Behavioral signs: hiding, aggression, excessive grooming, loss of appetite",
        ]
    },
    {
        question: "Explain the main difference between monogastric and ruminant digestive systems.",
        answer: [
            "Monogastric animals have a single-chambered stomach and rely on enzymes for digestion, while ruminants have a multi-chambered stomach that allows for fermentation and microbial digestion.",
        ]
    },
    {
        question: "List the core and non-core vaccines for dogs.",
        answer: [
            "Core vaccines: Distemper, Parvovirus, Adenovirus",
            "Non-core vaccines: Rabies, Bordetella, Lyme disease, Leptospirosis",
        ]
    },
    {
        question: "What are the benefits of neutering a male animal and spaying a female animal?",
        answer: "Reduced risk of reproductive cancers, prevention of unwanted pregnancies, decrease in aggressive behaviours."
    },
    {
        question: "What is a pathogen and what temperature should a washing machine be set to kill pathogens?",
        answer: [
            "A pathogen is a microorganism that can cause disease. A washing machine should be set to at least 60°C (140°F) to effectively kill most pathogens.",
        ]
    },
    {
        question: "Distinguish between cleaning and disinfecting.",
        answer: "Cleaning removes dirt and organic matter, while disinfecting kills or inactivates pathogens on surfaces.",
    },
    {
        question: "Discuss general requirements for keeping a small animal.",
        answer: "Proper housing, clean water, nutrition, veterinary care, socialization, and exercise are essential for the well-being of small animals.",
    },
    {
        question: "Discuss the effects of poor kennel design on both the human and the animal.",
        answer: [
            "<strong>For Animals:</strong> Stress, anxiety, aggression, and health issues due to inadequate space, ventilation, and sanitation.",
            "<strong>For Humans:</strong> Increased risk of injury, difficulty in handling animals, and challenges in maintaining cleanliness and hygiene.",
        ]
    },
    {
        question: "Explain the isolation process.",
        answer: "Isolation involves separating sick animals from healthy ones to prevent the spread of disease. It includes quarantine, monitoring for symptoms, and providing separate care and sanitation.",
    },
    {
        question: "What is a vaccination record?",
        answer: "A document that records vaccines administered to an animal. It includes details such as vaccine type, date of administration, and the veterinarian's signature.",
    },
    {
        question: "What information should be on a vaccination record?",
        answer: "Animal’s name, species, vaccination date, vaccine type, batch number, veterinarian’s details."
    },
    { 
        question: "Poor kennel design could result in what?",
        answer: "Disease outbreaks, maintenance difficulties, animal discomfort."
    },
    {
        question: "Give two advantages of vaccinating animals.",
        answer: [
            "Prevention of serious diseases.",
            "Protection of public health by reducing zoonotic disease transmission.",
        ]
    },
    {
        question: "When designing a kennel or cattery, what factors should you consider?",
        answer: [
            "Space requirements for each animal.",
            "Ventilation and temperature control.",
            "Sanitation and cleaning protocols.",
            "Safety features to prevent escapes and injuries.",
            "Noise reduction to minimize stress.",
        ]
    },
    {
        question: "How can inadequate housing cause behavioural abnormalities?",
        answer: "Inadequate housing can lead to stress, anxiety, and frustration in animals, resulting in abnormal behaviours such as excessive barking, pacing, or aggression.",
    },
    {
        question: "What factors need to be taken into account when designing kennels?",
        answer: [
            "Animal species and size.",
            "Number of animals to be housed.",
            "Environmental conditions (temperature, humidity).",
            "Ease of cleaning and maintenance.",
            "Safety and security features.",
        ]
    },
    { 
        question: "Name 3 microorganisms",
        answer: [
            "Bacteria",
            "Viruses",
            "Fungi",
        ]
    },
    {
        question: "What are the general signs of internal parasites in a small animal?",
        answer: [
            "Weight loss",
            "Diarrhea",
            "Vomiting",
            "Poor coat condition",
            "Anemia",
            "Bloating abdomen",
        ]
    },
    {
        question: "What factors should you consider when bedding small animals?",
        answer: [
            "Absorbency",
            "Comfort",
            "Dust levels",
            "Non-toxicity",
            "Ease of cleaning",
            "Cost",
        ]
    },
    {
        question: "What are 2 main diseases rabbits are vaccinated against?",
        answer: [
            "Myxomatosis",
            "Rabbit Viral Haemorrhagic Disease (RVHD)",
        ]
    },
    {
        question: "What are ectoparasites? Give an example.",
        answer: "External parasites, e.g., fleas."
    },
    {
        question: "List 3 properties of an ideal vaccine.",
        answer: [
            "Safe and non-toxic",
            "Effective in preventing disease",
            "Long-lasting immunity",
            "Stable and easy to store",
            "Cost-effective",
        ]
    },
    { 
        question: "How is ringworm treated?",
        answer: "Topical and systemic antifungal treatments (e.g., miconazole, terbinafine)."
    },
    {
        question: "What disease can ticks cause in animals?",
        answer: "Lyme disease",
    },
    {
        question:"What is key in infection control?",
        answer: "Strict hygiene practices: Hand hygiene, proper sanitation, and disinfection of surfaces and equipment are key in infection control."
    },
    {
        question: "What does the term Zoonosis mean?",
        answer: "Zoonosis refers to diseases that can be transmitted from animals to humans.",
    },
    {
        question: "Discuss advantages and disadvantages for 3 different types of bedding.",
        answer: [
            "<strong>Wood Shavings:</strong> Advantages: Absorbent, provides warmth. Disadvantages: Dusty, can cause respiratory issues.",
            "<striong>Straw:</strong> Advantages: Natural, good insulation. Disadvantages: Can harbor pests, less absorbent.",
            "<strong>Washable mats:</strong> Reusable but require frequent washing."
        ]
    },
    {
        question: "What specific leginslation must kennel owners adhere to?",
        answer: [
            "Dog Breeding and Sale Act 2010",
            "Animal Health and Welfare Act 2013",
            "Welfare of Animals Regulations 2018",
            "Control of Dogs Order 1992",
        ]
    },
    {
        question: "What is the first step for someone planning to build a kennel in Ireland?",
        answer: "Obtain planning permission and ensure compliance with local council regulations."
    },
    {
        question: "Why is cattery design more complex than that of boarding kennels?",
        answer: "Cats require more vertical space, separate sleeping and litter areas, and reduced stress levels. They are more territorial and sensitive to noise, so cattery design must minimize stress and provide enrichment.",
    },
    {
        question: "What are the minimum measurement requirements of a single barrack kennel?",
        answer: "The kennel should provide at least 1.5m² per small dog, 2.5m² per medium dog, and 3.5m² per large dog, with adequate ventilation and drainage."
    },
    { 
        question: "What are signs of abnormal behavior in animals?",
        answer: [
            "Excessive barking or vocalization",
            "Pacing or repetitive movements",
            "Aggression towards humans or other animals",
            "Self-mutilation or excessive grooming",
            "Hiding or withdrawal from social interaction",
            "Changes in eating or drinking habits",
            "Destructive behavior",
        ]
    },
    {
        question: "Give four reasons for vaccine failure.",
        answer: [
            "Improper storage or handling of vaccines",
            "Incorrect administration technique",
            "Animal's immune system compromised (e.g., illness, stress)",
            "Inadequate vaccination schedule or missed boosters",
        ]
    },
    {
        question: "Give 2 reasons why good ventilation is essential in kennels and catteries.",
        answer: [   
            "Prevents the buildup of harmful gases (e.g., ammonia) from waste/urine.",
            "Reduces humidity and temperature, minimizing stress and disease transmission (by airbone).",
        ]
    },
    {
        question: "List the core and non-core vaccines for cats.",
        answer: [
            "Core vaccines: Feline Panleukopenia, Feline Calicivirus, Feline Herpesvirus (Rhinotracheitis)",
            "Non-core vaccines: Rabies, Feline Leukemia Virus (FeLV), Feline Immunodeficiency Virus (FIV)",
        ]
    },
    {
        question: "List 2 disadvantages of wooden kennels.",
        answer: [
            "Difficult to disinfect.",
            "Prone to wear, rot, and parasite infestations."
        ]
    },
    {
        question: "Briefly discuss the cleaning process involved in cleaning a kennel.",
        answer: "Remove waste, clean surfaces with detergent, rinse, apply disinfectant, allow proper drying."
    },
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
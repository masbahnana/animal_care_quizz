const question = [
    {
      question: "Define the study of Animal Behaviour (what is it?)",
      answer: "The scientific study of what animals do, how they interact with each other and their environment, and the underlying mechanisms behind these behaviours."
    },
    {
      question: "What is the study of Animal Behaviour called (scientific name)?",
      answer: "Ethology."
    },
    {
      question: "Why do we study Animal Behaviour – identify four reasons.",
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
        "Function (adaptive value)"
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
      answer: "Visual signals, auditory calls, chemical pheromones, and tactile (touch) cues."
    },
    {
      question: "What does the term adaptation mean and give four examples.",
      answer: "Adaptation is a characteristic that improves an organism's ability to survive and reproduce in its environment. Examples: thick fur in arctic animals, camouflage in chameleons, web-spinning in spiders, migration in birds."
    },
    {
      question: "A place where an organism or group of organisms live.",
      answer: "Habitat."
    },
    {
      question: "Name the six common groups of animals.",
      answer: "Mammals, Birds, Reptiles, Amphibians, Fish, Invertebrates."
    },
    {
      question: "Which of the common groups of animals depends on external sources for body heat?",
      answer: "Reptiles, Amphibians, and Fish – these are ectothermic (cold-blooded)."
    },
    {
      question: "What does the term Taxonomy mean?",
      answer: "The scientific system of classifying and naming organisms based on shared characteristics."
    },
    {
      question: "Name the 7 levels of animal classification (taxonomic ranks).",
      answer: "Kingdom, Phylum, Class, Order, Family, Genus, Species."
    },
    {
      question: "Migration is an example of a behavioural adaptation. True or False?",
      answer: "True."
    },
    {
      question: "Distinguish between a prey animal and a predator animal.",
      answer: "Prey animals are hunted by others (e.g., rabbits), while predator animals hunt and eat others (e.g., lions)."
    },
    {
      question: "Organisms survive in habitats in which their basic needs are met. Name five basic needs of animals.",
      answer: "."
    },
    {
      question: "Define the following terms: a) Nocturnal; b) Camouflage; c) Metamorphose; d) Mimicry; e) Hibernation",
      answer: [
        "a) <strong>Nocturnal:</strong> Active at night",
        "b) <strong>Camouflage:</strong> Blending into surroundings",
        "c) <strong>Metamorphose:</strong> Transformation from larva to adult",
        "d) <strong>Mimicry:</strong> Imitating another species for protection or advantage",
        "e) <strong>Hibernation:</strong> "
      ]
    },
    {
      question: "Why must animals reproduce?",
      answer: "To ensure the survival of their species and pass on genetic material to the next generation."
    },
    {
      question: "What is courtship and why is courtship important? Give 4 reasons.",
      answer: "Courtship is the behavior animals use to attract a mate. It helps ensure mating between compatible partners and can indicate health and strength."
    },
    {
      question: "Name and explain the two types of animal reproduction.",
      answer: "Asexual reproduction: offspring arise from one parent, no gametes involved. Sexual reproduction: involves two parents and the fusion of male and female gametes."
    },
    {
      question: "What are five types of asexual reproduction?",
      answer: "Binary fission, budding, fragmentation, parthenogenesis, and spore formation."
    },
    {
      question: "Describe the five types of asexual reproduction? and give an example of each.",
      answer: [
        "Binary fission single cell splits (e.g., bacteria).",
        "Budding – growth forms and detaches (e.g., hydra).",
        "Fragmentation – body part breaks off and grows (e.g., starfish).",
        "Parthenogenesis – offspring from unfertilized egg (e.g., some lizards).",
        "Spore formation – spores spread and grow (e.g., fungi)."
      ]
    },
    {
      question: "In sexual reproduction; the genetic make-up of offspring comes from where?",
      answer: "A combination of both parents, making it genetically unique."
    },
    {
      question: "Name the two ways sexual reproduction can happen.",
      answer: "Internal fertilisation and external fertilisation."
    },
    {
      question: "Compare sexual and asexual reproduction: a) Speed; b) Energy; c) Genetic variation; d) Number of parents.",
      answer: "a) Asexual is faster. b) Asexual requires less energy. c) Sexual has more genetic variation. d) Asexual: 1 parent; Sexual: 2 parents."
    },
    {
      question: "Give four advantages and four disadvantages of sexual reproduction.",
      answer: [
        "<strong>Advantages:</strong> genetic diversity, adaptability, reduced disease transmission, species survival.",
        "<strong>Disadvantages:</strong> slower process, requires more energy, finding a mate, fewer offspring in less time."
      ]
    },
    {
      question: "A spider spinning a web or a cub hunting prey is an example of what type of behaviour?",
      answer: "Instinctive (innate) behaviour."
    }
  ];

// Variável para controlar qual pergunta está sendo exibida
let currentQuestionIndex = 0; // Defina 0 para começar com a primeira pergunta

// Função para exibir uma pergunta na página
function showQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";

    const questionData = question[currentQuestionIndex];

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-container");

    let answerHTML = "";
    if (Array.isArray(questionData.answer)) {
        answerHTML = "<ul>" + questionData.answer.map(item => {
            // Se você quiser deixar uma palavra em negrito em uma das respostas
            return `<li>${item.replace('wild animals', '<strong>wild animals</strong>')}</li>`;
        }).join("") + "</ul>";
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
    if (currentQuestionIndex < question.length - 1) {
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
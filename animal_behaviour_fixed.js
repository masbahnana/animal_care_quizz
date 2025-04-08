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
      answer: [
        "Courtship is a set of behavioural displays or actions used by animals to attract a mate. It is important because:",
        "1) It helps individuals choose a healthy and compatible mate.",
        "2) It ensures species recognition to prevent mating with the wrong species.",
        "3) It strengthens pair bonds in monogamous species.",
        "4) It increases the chance of successful reproduction."
      ]
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
      question: "In sexual reproduction, the genetic make-up of the offspring comes from where?",
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
    },
    {
         question: "What is the main difference between internal and external fertilization?",
        answer: "Internal fertilization occurs inside the body of the female, while external fertilization happens outside the body, usually in the environment."
    },
    {
        question: "Name a group of animals that commonly use (a) internal fertilization and (b) external fertilization",
        answer: "(a) Mammals commonly use internal fertilization. (b) Fish and amphibians commonly use external fertilization."
    },
    {
         question: "Why does a fish produce millions of eggs each year, while a rabbit only produces a couple of thousand?",
        answer: "Because fish rely on external fertilization with low survival rates, so they produce many eggs. Rabbits use internal fertilization and provide parental care, increasing offspring survival."
      },
      {
        question: "Differentiate between monogamy and polygamy",
        answer: "Monogamy is when an animal has one mate, while polygamy involves having multiple mates."
      },
      {
        question: "Give an example of (a) a monogamous and (b) a polygamous animal",
        answer: "(a) Swans are monogamous. (b) Lions are polygamous."
      },
      {
        question: "In relation to animal reproduction what does the R and K strategies refer to?",
        answer: "R-strategists produce many offspring with low parental investment. K-strategists produce fewer offspring but invest heavily in their care."
      },
      {
        question: "Give one animal that is (a) R-selection and (b) K-selection",
        answer: "(a) Frogs are R-strategists. (b) Elephants are K-strategists."
      },
      {
        question: "What is the ‘gestation period’?",
        answer: "The time between fertilization and birth during which the embryo develops inside the mother."
      },
      {
        question: "What is metamorphosis, giving an example of animal that goes through the process.",
        answer: "Metamorphosis is a biological process in which an animal undergoes a dramatic change in form. Example: A caterpillar turning into a butterfly."
      },
      {
        question: "Identify the importance of sound breeding/reproduction practices in agriculture and what are two main things that agricultural breeders should consider?",
        answer: "Good breeding improves productivity and animal welfare. Breeders should consider genetic quality and health of the animals."
      },
      {
        question: "Explain the following terms:\na) Fertilization\nb) Ovulation\nc) Gestation\nd) Ovaries and Testes",
        answer: "a) Fertilization: Union of sperm and egg.\nb) Ovulation: Release of an egg from the ovary.\nc) Gestation: Development period of embryo.\nd) Ovaries produce eggs; testes produce sperm."
      },
      {
        question: "Explain the following terms in relation to male and female reproductive tracts:\nFemale\nMale\nVulva\nEpididymis\nCervix\nVas Deferens\nUterus\nScrotum\nFallopian Tube\nSheath",
        answer: "Female: Vulva - external opening, Cervix - opening to uterus, Uterus - site of embryo development, Fallopian Tube - where fertilization occurs.\nMale: Epididymis - stores sperm, Vas Deferens - carries sperm, Scrotum - holds testes, Sheath - protects penis."
      },
      {
        question: "What are the four stages of the Oestrous Cycle and give four general signs of receptiveness in animals.",
        answer: "The four stages: Proestrus, Estrus, Metestrus, Diestrus.\nSigns: Mounting, swollen vulva, increased vocalization, restlessness."
      },
      {
        question: "What are the gestation periods for the following animals:\na) Horse\nb) Sheep\nc) Dog\nd) Cat",
        answer: "a) Horse: ~11 months\nb) Sheep: ~5 months\nc) Dog: ~63 days\nd) Cat: ~63-65 days"
      },
      {
        question: "What is meant by the term Parturition and what are the general signs of parturition?",
        answer: "Parturition is the act of giving birth. Signs: restlessness, nesting behaviour, swollen vulva, and loss of appetite."
      },
      {
        question: "What are the four stages of mammal parturition?",
        answer: "1. Preparation (nesting/restlessness)\n2. Cervical dilation\n3. Delivery of fetus\n4. Expulsion of placenta"
      },
      {
        question: "Explain the term Dystocia, give four reasons for Dystocia and give two solutions.",
        answer: "Dystocia is difficult or abnormal birth. Reasons: large fetus, wrong position, weak contractions, narrow birth canal.\nSolutions: veterinary assistance, cesarean section."
      },
      {
        question: "What is AI and give four advantages of AI.",
        answer: "AI stands for Artificial Insemination.\nAdvantages: genetic improvement, disease control, cost-effective, no need to keep males."
      },
      {
        question: "What is cloning?",
        answer: "Cloning is producing a genetically identical copy of an organism, often through somatic cell nuclear transfer."
      },
      {
        question: "Define Juvenile Behaviour, giving an example.",
        answer: "Juvenile behaviour refers to the actions and responses shown by young animals, often including play. Example: A puppy chasing its tail."
      },
      {
        question: "Define Neoteny, giving example of such.",
        answer: "Neoteny is the retention of juvenile traits into adulthood. Example: Domestic dogs often retain playful behaviour seen in puppies."
      },
      {
        question: "Give an example of a dog breed that has high level of neoteny and an example of a breed with low levels.",
        answer: "High neoteny: Cavalier King Charles Spaniel. Low neoteny: Basenji."
      },
      {
        question: "What are the effects of puberty on males?",
        answer: "Puberty in males leads to the development of secondary sexual characteristics, such as increased aggression, scent marking, and testicle development."
      },
      {
        question: "Give some signs of puberty in females.",
        answer: "Signs include the start of the oestrous cycle, vulva swelling, changes in behaviour, and interest in males."
      },
      {
        question: "Differentiate between innate and learned behaviours.",
        answer: "Innate behaviours are inborn and automatic, while learned behaviours are acquired through experience and environment."
      },
      {
        question: "Why is innate behaviour so important?",
        answer: "Innate behaviours are crucial for survival, especially in young animals who may not have time to learn through trial and error."
      },
      {
        question: "Who is associated with ‘Classical Conditioning’?",
        answer: "Ivan Pavlov is associated with classical conditioning."
      },
      {
        question: "Discuss the process of classical conditioning.",
        answer: "Classical conditioning is when an animal learns to associate a neutral stimulus with a significant one, such as a bell with food, leading to a conditioned response like salivation."
      },
      {
        question: "Who is associated with ‘Operant Conditioning’?",
        answer: "B.F. Skinner is associated with operant conditioning."
      },
      {
        question: "Explain the process of operant conditioning.",
        answer: "Operant conditioning is learning through consequences. Behaviours are strengthened by rewards or weakened by punishments."
      },
      {
        question: "What is abnormal behaviour?",
        answer: "Abnormal behaviour refers to actions that deviate from normal patterns and may indicate stress, illness, or poor welfare."
      },
      {
        question: "What are abnormal behaviours often the result of?",
        answer: "They are often the result of stress, boredom, confinement, or frustration."
      },
      {
        question: "What are the consequences to the animals of abnormal behaviour?",
        answer: "Consequences include self-injury, reduced quality of life, and difficulty in social integration or reproduction."
      },
      {
        question: "What is a social animal, giving an example of one?",
        answer: "A social animal lives and interacts in groups. Example: Wolves."
      },
      {
        question: "“Social animal must cooperate”, what does that mean, giving one example of how social animals cooperate?",
        answer: "It means animals work together for mutual benefit. Example: Meerkats take turns watching for predators while others forage."
      },
      {
        question: "Why is communication important for social living?",
        answer: "Communication helps animals coordinate activities, warn of danger, find mates, and maintain social bonds."
      },
      {
        question: "Animals often compete for resources; list some resources they may compete for.",
        answer: "Food, mates, territory, water, and shelter."
      },
      {
        question: "Distinguish between interspecific and intraspecific competition.",
        answer: "Interspecific competition occurs between different species; intraspecific is between individuals of the same species."
      },
      {
        question: "What is mating?",
        answer: "Mating is the act of pairing between male and female animals for the purpose of reproduction."
      },
      {
        question: "What is courtship, and why is it important?",
        answer: "Courtship is the set of behaviours animals perform to attract a mate. It ensures mate selection, species recognition, and reproductive success."
      },
      {
        question: "Some animals are territorial; what does that mean?",
        answer: "Territorial animals defend a specific area against others, usually for resources like food or mates."
      },
      {
        question: "What do we mean by ‘Behavioural Extinction’?",
        answer: "Behavioural extinction is the loss of a learned behaviour when reinforcement is no longer given."
      },
      {
        question: "In relation to animal behaviour, discrimination means what?",
        answer: "Discrimination means the animal's ability to distinguish between different stimuli and respond appropriately."
      },
      {
        question: "What is animal migration?",
        answer: "Migration is the regular, often seasonal, movement of animals from one region to another for breeding, food, or climate reasons."
      },
      {
        question: "Name the 8 types of animal migration.",
        answer: [
            "1) Seasonal",
            "2) Reproductive",
            "3) Latitudinal",
            "4) Longitudinal",
            "5) Vertical",
            "6) Nomadic",
            "7) Irruptive",
            "8) Altitudinal"
        ]
      },
      {
        question: "What is the difference between internal and external stimulus, giving an example of each?",
        answer: "Internal stimulus comes from inside the body (e.g., hunger). External stimulus comes from the environment (e.g., light or sound)."
      },
      {
        question: "What is a stimuli?",
        answer: "A stimuli is any change in the environment that triggers a response from an animal."
      },
      {
        question: "Give four reasons why animals migrate.",
        answer: [
            "1) To find food",
            "2) To escape harse climates",
            "3) To reprodume",
            "4) To avoid predator"
        ]
      },
      {
        question: "Give four examples of animals that migrate and the type of migration they undergo.",
        answer: [
            "1) Arctic Tern - long-distance, seasonal",
            "2) Wildebeest - nomadic, seasonal",
            "3) Salmon - reproductive",
            "4) Monarch Butterfly - latitudinal"
        ]
      },
      {
        question: "Give some examples of migration cues",
        answer: "Examples of migration cues include changes in day length, temperature, food availability, magnetic fields, and celestial cues like the position of the sun and stars."
      },
      {
        question: "Distinguish between Interspecies and Intraspecies communication",
        answer: "Interspecies communication occurs between different species (e.g., a dog barking at a human), while intraspecies communication happens within the same species (e.g., wolves howling to communicate with other wolves)."
      },
      {
        question: "Name and explain four types of animal communication",
        answer: [
            "1. Visual: using body language or color changes (e.g., peacocks).",
            "2. Auditory: using sounds (e.g., bird songs).",
            "3. Chemical: using pheromones (e.g., ants following a scent trail).",
            "4. Tactile: physical touch (e.g., grooming in primates)."
        ]
      },
      {
        question: "Are internal or external cues to migration more common and why?",
        answer: "External cues are more common because animals often rely on environmental changes such as daylight length, temperature, and food availability to trigger migration."
      },
      {
        question: "List six methods of navigation used by animals",
        answer: [
            "1. Sun orientation",
            "2. Star orientation",
            "3. Magnetic fields", 
            "4. Landmarks", 
            "5. Olfactory cues",
            "6. Polarized light patterns."
        ]
      },
      {
        question: "Distinguish between a social animal and solitary animal, giving example of each",
        answer: "Social animals live and interact in groups (e.g., elephants), while solitary animals live alone and interact mainly for mating (e.g., leopards)."
      },
      {
        question: "What is the name given to scientists who study animal behaviour?",
        answer: "Scientists who study animal behaviour are called ethologists."
      },
      {
        question: "List a chemical used for animal communication.",
        answer: "Pheromones are chemicals commonly used for animal communication, especially for marking territory or signaling readiness to mate."
      },
      {
        question: "Define ‘Reflex’ and give an example of a reflex that an animal might display.",
        answer: "A reflex is an automatic, involuntary response to a stimulus. Example: A dog pulling its paw away from a hot surface."
      },
      {
        question: "What are the 5 steps of ‘Reflex Action’?",
        answer: [
            "1. Stimulus",
            "2. Receptor",
            "3. Sensory neuron",
            "4. Motor neuron",
            "5. Response by effector (muscle or gland)"
        ]
      },
      {
        question: "Distinguish between ‘Learned Reaction’ and ‘Reflex’.",
        answer: "A reflex is innate and automatic, while a learned reaction is acquired through experience or conditioning."
      },
      {
        question: "What is habituation and give an example of this behaviour in action.",
        answer: "Habituation is when an animal stops responding to a repeated, harmless stimulus. Example: A cat ignoring the sound of a vacuum after being exposed to it frequently."
      },
      {
        question: "What is observation learning?",
        answer: "Observation learning is learning by watching the behavior of others and mimicking it. Example: A young chimp learning to use a stick to get termites by watching adults."
      },
      {
        question: "Distinguish between ‘Classical’ and ‘Operant’ Conditioning.",
        answer: "Classical conditioning pairs a neutral stimulus with a response (Pavlov's dogs). Operant conditioning involves learning through rewards or punishments for behavior (Skinner’s box)."
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
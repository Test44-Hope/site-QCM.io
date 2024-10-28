let currentQuestion = -1;
let answered = false;
let score = 0;

let drapeau = 0;
let emojie ; 

const questions = [
    {
        text: "Qu'est-ce qui cause souvent le diabète de type 2 ?",
        answers: [
            "Mauvaise alimentation",
            "Hérédité",
            "Manque d'exercice physique",
            "Fumer"
        ],
        correctAnswer: 1,
        explanation: "Le diabète de type 2 est souvent causé par une mauvaise alimentation et un manque d'exercice.",
        conseil: "Faites des promenades régulières. Cela aide à garder un bon poids et améliore l'insuline."
    },
    {
        text: "Quelle maladie est causée par une pression artérielle trop élevée ?",
        answers: [
            "Diabète",
            "Asthme",
            "Maladies cardiaque",
            "Ostéoporose"
        ],
        correctAnswer: 3,
        explanation: "Une pression artérielle trop élevée peut abîmer les artères et causer des problèmes cardiaques.",
        conseil: "Essayez le yoga ou le tai-chi pour réduire le stress et abaisser la pression."
    },
    {
        text: "Quelle est une cause de l'obésité ?",
        answers: [
            "Manque de sommeil",
            "Manger trop de calories",
            "Être stressé",
            "Hydratation insuffisante "
        ],
        correctAnswer: 2,
        explanation: "Manger trop de calories, souvent à cause d'une alimentation déséquilibrée, est une cause fréquente de l'obésité.",
        conseil: "Rejoignez des cours de danse ou de fitness, c'est amusant et ça aide à brûler des calories."
    },
    {
        text: "Comment le stress affecte-t-il la santé ?",
        answers: [
            "Le stress peut aggraver des maladies",
            "Le stress n'affecte rien",
            "Le stress est bon pour la santé",
            "Le stress aide à guérir"
        ],
        correctAnswer: 1,
        explanation: "Le stress peut rendre de nombreuses maladies chroniques plus graves.",
        conseil: "Faites des activités créatives. Cela peut réduire le stress et améliorer votre bien-être."
    },
    {
        text: "Quel type de régime aide à éviter les maladies ?",
        answers: [
            "Régime végétalien",
            "Régime riche en sucres",
            "Régime équilibré",
            "Jeûne prolongé"
        ],
        correctAnswer: 3,
        explanation: "Un régime équilibré et varié aide à réduire le risque de maladies.",
        conseil: "Mangez des fruits et légumes à chaque repas pour rester en bonne santé."
    },
    {
        text: "Quelle activité physique aide les personnes avec de l'arthrite ?",
        answers: [
            "Course",
            "Natation",
            "Soulever des poids",
            "Yoga intense"
        ],
        correctAnswer: 2,
        explanation: "La natation est douce pour les articulations et aide à garder la souplesse.",
        conseil: "La natation est bonne pour les articulations sans faire mal."
    },
    {
        text: "Quel sport est recommandé pour ceux qui ont des problèmes respiratoires ?",
        answers: [
            "Escalade",
            "Course rapide",
            "Marche tranquille",
            "Plongée"
        ],
        correctAnswer: 3,
        explanation: "La marche tranquille est idéale pour renforcer les poumons sans trop forcer.",
        conseil: "Marchez à un rythme modéré pour aider vos poumons."
    },
    {
        text: "Comment bien gérer la sclérose en plaques ?",
        answers: [
            "Faire de la réhabilitation et suivre un traitement",
            "Ignorer les problèmes",
            "Utiliser seulement des remèdes naturels",
            "Faire du sport sans aide"
        ],
        correctAnswer: 1,
        explanation: "Il est important de suivre un traitement et de participer à des programmes de réhabilitation.",
        conseil: "L'exercice comme la natation peut améliorer la mobilité."
    },
    {
        text: "Quel symptôme est commun dans l'insuffisance cardiaque ?",
        answers: [
            "Pas de douleur thoracique",
            "Vision trouble",
            "Douleurs dans les articulations",
            "Essoufflement pendant l'effort"
        ],
        correctAnswer: 4,
        explanation: "L'insuffisance cardiaque rend le cœur moins efficace pour pomper le sang.",
        conseil: "Un entraînement supervisé peut améliorer la force musculaire."
    },
    {
        text: "Quel changement peut aider à prévenir l'asthme ?",
        answers: [
            "Réduire les allergènes",
            "Boire plus d'eau",
            "Éviter la viande",
            "Se coucher tôt"
        ],
        correctAnswer: 1,
        explanation: "L'asthme est souvent déclenché par des allergènes dans l'environnement.",
        conseil: "Portez un masque en jardinant pour éviter les particules."
    },
    {
        text: "Quels sont les comportements à adopter en conséquence face à une personne souffrant d'hypertension artérielle ?",
        answers: [
            "Secouer la personne",
            "Allonger la personne",
            "Donner à manger",
            "Appeler les secours"
        ],
        correctAnswer: 4,
        explanation: "Il est important d'appeler les secours en cas de crise d'hypertension.",
        conseil: "En attendant les secours, placez la personne dans une position confortable (de préférence assise et légèrement inclinée)."
    },
    {
        text: "Quel test est souvent utilisé pour diagnostiquer l'apnée du sommeil ?",
        answers: [
            "Polysomnographie (étude du sommeil)",
            "Radiographie des poumons",
            "Électrocardiogramme (ECG)",
            "Test de glycémie"
        ],
        correctAnswer: 1,
        explanation: "La polysomnographie permet de surveiller diverses fonctions corporelles pendant le sommeil pour diagnostiquer l'apnée.",
        conseil: "Maintenez un poids santé par des activités régulières, comme la natation, pour améliorer votre sommeil."

    }
    
];



function loadQuestion() {
    let questionObj = questions[currentQuestion];
    
    if (drapeau == 0){
        drapeau = 1;
        document.getElementById('question').innerHTML = "Vous avez quelques minutes ? 🤔 Pourquoi ne pas en profiter pour apprendre quelque chose de nouveau sur les maladies chroniques !<br>Testez vos connaissances et découvrez des conseils utiles pour mieux vivre au quotidien. Chaque petit geste compte pour une vie plus saine ! 😀";
        document.getElementById('btn1').style.display = 'none';
        document.getElementById('btn2').style.display = 'none';
        document.getElementById('btn3').style.display = 'none';
        document.getElementById('btn4').style.display = 'none';
        document.getElementById('info').style.display = 'none';
        document.getElementById('emoji').style.display = 'none';

        document.getElementById('nextBtn').style.display = 'block'; 
        document.getElementById('nextBtn').textContent = 'Commencer !';
        answered = false;
    }
    else{
        document.getElementById('btn1').style.display = 'block';
        document.getElementById('btn2').style.display = 'block';
        document.getElementById('btn3').style.display = 'block';
        document.getElementById('btn4').style.display = 'block';

        document.getElementById('question').textContent = questionObj.text;
        document.getElementById('btn1').textContent = questionObj.answers[0];
        document.getElementById('btn2').textContent = questionObj.answers[1];
        document.getElementById('btn3').textContent = questionObj.answers[2];
        document.getElementById('btn4').textContent = questionObj.answers[3];
        document.getElementById('info').style.display = 'none';
        document.getElementById('emoji').style.display = 'none';

        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('nextBtn').textContent = 'Question suivante';

        answered = false;
    }
}

function checkAnswer(answer) {
    if (answered) return;
    answered = true;
    let questionObj = questions[currentQuestion];
    let buttons = document.querySelectorAll('button');
    if (answer === questionObj.correctAnswer) {
        buttons[answer - 1].classList.add('correct');
        document.getElementById('emoji').textContent = "😀 Bonne réponse !";
        score++;
    } else {
        buttons[answer - 1].classList.add('wrong');
        buttons[questionObj.correctAnswer - 1].classList.add('correct');
        document.getElementById('emoji').textContent = "😞 Mauvaise réponse !";
    }
    document.getElementById('info').innerHTML = questionObj.explanation +"<br>"+ questionObj.conseil;
    document.getElementById('info').style.display = 'block';
    document.getElementById('emoji').style.display = 'block';

    document.getElementById('nextBtn').style.display = 'block';

    if (currentQuestion === questions.length - 1) {
        document.getElementById('nextBtn').textContent = 'Voir le score final';
    }
}

function nextQuestion() {
    document.getElementById('emoji').style.display = 'none';

    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
    });
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        if (score <= 5){
            document.getElementById('finalScore').textContent = '😞 Votre score final est : ' + score + '/' + questions.length;

        }
        else{
            document.getElementById('finalScore').textContent = '😀 Votre score final est : ' + score + '/' + questions.length;

        }
        document.getElementById('finalScore').style.display = 'block';
        document.getElementById('resources').style.display = 'block';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
        document.getElementById('info').style.display = 'none';
        document.getElementById('emoji').style.display = 'none';

    }
}

loadQuestion();

function goTo(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
    }

    function login() {
    const username = document.getElementById("username").value;
    if (username.trim() === "") return;

    localStorage.setItem("user", username);
    goTo("home");
    }

    function logout() {
    localStorage.clear();
    goTo("auth");
    }

    function generateSummary() {
    const summary = "Ce document explique les bases de la programmation orientée objet avec des exemples simples.";
    localStorage.setItem("summary", summary);
    document.getElementById("summaryText").innerText = summary;
    goTo("summary");
    }

    function openCourse() {
    const summary = "La programmation est un ensemble de règles permettant de donner des instructions à un ordinateur.";
    document.getElementById("summaryText").innerText = summary;
    goTo("summary");
    }

    /* QUIZ SIMPLE */
    const quizData = [
    {
        question: "Qu'est-ce qu'une variable ?",
        answers: ["Une fonction", "Un stockage de donnée", "Une boucle"],
        correct: 1
    }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuiz() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(index);
        answersDiv.appendChild(btn);
    });
    }

    function checkAnswer(index) {
    if (index === quizData[currentQuestion].correct) {
        score++;
    }
    showResult();
    }

    function showResult() {
    document.getElementById("scoreText").innerText =
        "Votre score : " + score + "/1";
    goTo("result");
    }

    document.getElementById("quiz").addEventListener("click", loadQuiz);

    window.onload = () => {
    const user = localStorage.getItem("user");
    if (user) {
        document.getElementById("profileName").innerText = "Utilisateur : " + user;
    }
};


// ondboarding script
let currentSlide = 0;

function nextSlide() {
  const slider = document.querySelector(".slider");
  currentSlide++;

  if (currentSlide > 2) currentSlide = 2;

  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}
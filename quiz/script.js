const questions = [
    {
        question: "Tag used to define the largest heading.",
        answers: ["<h1>", "<h2>", "<h3>", "<h4>"],
        correct: "<h1>"
    },
    {
        question: "HTML tag used to create line break.",
        answers: ["<p>", "<br>", "<hr>", "<div>"],
        correct: "<br>"
    },
    {
        question: "HTML tag used to define the paragraph.",
        answers: ["<p>", "<h1>", "<span>", "<b>"],
        correct: "<p>"
    },
    {
        question: "HTML attribute used to specify the source URL of an image.",
        answers: ["src", "href", "alt", "title"],
        correct: "src"
    },
    {
        question: "HTML tag used to create bold text.",
        answers: ["<strong>", "<b>", "<em>", "<i>"],
        correct: "<b>"
    },
    {
        question: "The <span> element is often used to group sections of a web page together.",
        answers: ["Yes", "No"],
        correct: "No"
    },
    {
        question: "You can't have many <div> containers on the same page.",
        answers: ["Yes", "No"],
        correct: "No"
    },
    {
        question: "The CSS Flex is an easier way to design the flexible responsive layout structure without using float or positioning.",
        answers: ["Yes", "No"],
        correct: "Yes"
    },
    {
        question: "Can a <div> element contain other <div> element?",
        answers: ["Yes", "No"],
        correct: "Yes"
    },
    {
        question: "Set the CSS margin property to 50% if you want to center-align a <div> element is not 100% wide.",
        answers: ["Yes", "No"],
        correct: "No"
    },
    {
        question: "Attributes are always specified in the opening tag and follow the tag name.",
        answers: ["True", "False"],
        correct: "True"
    },
    {
        question: "Formatting elements were designed to display special types of text.",
        answers: ["True", "False"],
        correct: "True"
    },
    {
        question: "Headings are used to give structures to your webpage's content.",
        answers: ["True", "False"],
        correct: "True"
    },
    {
        question: "The alt attribute provides alternative text for an image.",
        answers: ["True", "False"],
        correct: "True"
    },
    {
        question: "Scr attribute is used with the <a> tag to specify the destination URL of the hyperlink.",
        answers: ["True", "False"],
        correct: "False"
    },
    {
        question: "Double quotes arround attribute values are the most common in HTML, but the single qoutes is not allowed to used.",
        answers: ["True", "False"],
        correct: "False"
    },
    {
        question: "Title attribute is a text that appears when the mouse passes over the heading.",
        answers: ["True", "False"],
        correct: "False"
    },
    {
        question: "The text attribute was used to set the default text color for the entire page.",
        answers: ["True", "False"],
        correct: "False"
    },
    {
        question: "The CSS font-style property defines the font to be used for an HTML element.",
        answers: ["True", "False"],
        correct: "False"
    },
    {
        question: "The CSS font-size property defines the text size for an HTML element.",
        answers: ["True", "False"],
        correct: "True"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => checkAnswer(answer));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correct) {
        score++;
    }
    // Automatically load the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').innerHTML = `<h1>Your score: ${score} / ${questions.length}</h1>`;
}

loadQuestion();

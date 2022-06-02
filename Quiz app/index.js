const quizData = [
    {
        question: 'When was javascript was introduced?',
        a: '1995',
        b: '1996',
        c: '1997',
        d: '1998',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2022?',
        a: 'Python',
        b: 'Javascript',
        c: 'Go',
        d: 'Java',
        correct: 'b'
    }, {
        question: 'Which is the most fundamental programming language?',
        a: 'c',
        b: 'c++',
        c: 'Javascript',
        d: 'Python',
        correct: 'a'
    }, {
        question: 'Which is the first programming language introduced in the world ?',
        a:'Javascript',
        b: 'c',
        c: 'Python',
        d: 'FORTAN',
        correct: 'd'
    }
];
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
       dselectAnswers();
       const currentQuizData = quizData[currentQuiz];
       questionEl.innerText = currentQuizData.question;

       a_text.innerText = currentQuizData.a;
       b_text.innerText = currentQuizData.b;
       c_text.innerText = currentQuizData.c;
       d_text.innerText = currentQuizData.d;
    }
    function getSelected(){
        let answer = undefined;
        answersEls.forEach((answerEl) => {
           if(answerEl.checked){
               answer = answerEl.id;
           }
        });
        return answer;
    }

    function dselectAnswers(){
        answersEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }
    submitBtn.addEventListener("click", () => {
        // check to see the answer
        const answer = getSelected();
        if(answer){
            if(answer && answer === quizData[currentQuiz].correct) 
            { 
                score++;
                
            }
                currentQuiz++;
                if(currentQuiz < quizData.length){
                    loadQuiz();
                }  else{
                   quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}questions.</h2>`;
                }
        }
    
    });
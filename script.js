const container = document.querySelector('.container')
const firstPage = document.querySelector('.first-page');
const intermediaryPage = document.querySelector('.intermediary-page')
const secondPage = document.querySelector('.second-page')
const thirdPage = document.querySelector('.third-page');
// Overlay divs
const overlay =  document.querySelector('.overlay')
const overlayBtn = document.querySelector('.overlay-btn')
const startQuizBtn = document.querySelector('.start-btn');
//creating custom alert fuction
function customAlert() {
    this.render = function (dialogue) {
      const dialogueBody = document.querySelector('.dialogue-body')
      dialogueBody.innerText = dialogue;
      overlay.classList.add('alert-user');  
    }
}
overlayBtn.addEventListener('click', () => {
    overlay.classList.remove('alert-user');
})
const AlertUser = new customAlert();





//Grabing the input tags
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const userNameInputed = document.querySelector('.input-name');
{/* <div class="countdown">
5
</div> */}
//counting down before quiz starts
let i = 0;
const countdown = document.querySelector('.countdown')
let clearCounter;
function countdownFunc() {
    i--
    countdown.innerText = i
    if( i < 0) {
       clearInterval(clearCounter)
       beginQuiz();
    }
}

//Adding click event to startBtn
startQuizBtn.addEventListener('click', startQuizFunc)
function startQuizFunc() {
   if(!firstname.value || !lastname.value ) {
       AlertUser.render('Please input your name and lastname')
       return;
   }
   if(firstname.value.length > 10 || lastname.value.length > 10) {
       AlertUser.
       render(`Name or lastname too long. Name/lastname should not be more than 10 characters`);
       return;
   }
    firstPage.classList.add('hide');
    userNameInputed.innerText = firstname.value;
    i = 5;
    countdown.innerText = i;
    intermediaryPage.classList.add('show');
    /*
    when the intermediary page gets the display of flex,
    so that it can show, I don't understand why the height 
    of this container would not fit into the intermediary 
    page. The height of the intermediary page is bigger than 
    that of then container.
    */
    clearCounter = setInterval(countdownFunc, 1000)
}
//Timeleft variables
const secsLeft = document.querySelector('.secs-left');
const minsLeft = document.querySelector('.mins-left');
let clearTime;
let secs = 0;
let mins = 0;

//Next question/end quiz button variables
const nextQuestionBtn = document.
querySelector('.next-question-btn');
const endQuizBtn = document.querySelector('.end-quiz-btn');

const questionNumber = document.querySelector('.question-number')
const question = document.querySelector('.question');
const optionSection = document.querySelector('.options')
const options = document.querySelectorAll('.option')
const selectOption = document.querySelectorAll('.select-option')
// const optionA = document.querySelector('.a');
// const optionB = document.querySelector('.b');
// const optionC = document.querySelector('.c');
// const optionD = document.querySelector('.d');
// console.log(selectOption[0].innerText);

//Questions Array
const questionsArray = [
    { 
      number: 1,
      question: "Where would you be if you were standing on spanish steps?",
      options:
      ['Spain',"Italy","Rome","Greece",],
      answer: "Rome",
    },
    { 
      number: 2,
      question: "Who was the first elected President of Nigeria?",
      options:
      [ "Nnamdi Azikiwe",
      "General Sani Abacha",
      "Chief Awolowo",
     "Alhaji Shehu Shagari",],
      answer: "Alhaji Shehu Shagari",
    },
    { 
      number: 3,
      question: "Which artist has the most streams on spotify?",
      options:
      [ "Micheal Jackson",
      "Beyonce",
      "Ed sheeran",
     "Drake",],
      answer: "Drake",
    },
    { 
      number: 4,
      question: "What is the max length of a Tik Tok video?",
      options:
      [ "30 seconds",
      "45 seconds",
      "60 seconds",
     "Unlimited",],
      answer: "60 seconds",
    },
    { 
      number: 5,
      question: "Which country has the most World Cups?",
      options:
      [ "Brazil",
      "England",
      "Germany",
     "Argentina",],
      answer: "Brazil",
    },
    { 
      number: 5,
      question: "Which Netflix show had the most streaming views in 2021?",
      options:
      [ "Army Of The Dead",
      "Red Notice",
      "Sex Life",
     "Squid Game",],
      answer: "Squid Game",
    },
    { 
      number: 6,
      question: "Acrophobia is a fear of?",
      options:
      [ "Spiders",
      "Height",
      "Crowded places",
     "Elevators",],
      answer: "Height",
    },
    { 
      number: 7,
      question: "Which country has the most islands?",
      options:
      [ "Sweden",
      "Canada",
      "Ukraine",
     "Singapore",],
      answer: "Sweden",
    },
    { 
      number: 8,
      question: "Which country was Elon Musk born?",
      options:
      [ "USA",
      "Canada",
      "South Africa",
     "Germany",],
      answer: "South Africa",
    },
    { 
      number: 9,
      question: "On what continent would you find the world's largest desert?",
      options:
      [ "Antarctica",
      "Africa",
      "Europe",
     "North America",],
      answer: "Antarctica",
    },
    { 
      number: 10,
      question: "On what continent would you find the city of Baku?",
      options:
      [ "South America",
      "Africa",
      "Europe",
     "Asia",],
      answer: "Asia",
    },
    { 
      number: 11,
      question: "What was the first name Argentinian soccer star Maradona?",
      options:
      [ "Luiz",
      "Messi",
      "Ronaldo",
     "Diego",],
      answer: "Diego",
    },
    { 
      number: 12,
      question: "Who was the Ancient Greek God of the Sun?",
      options:
      ["Apollo",
      "Zeus",
      "Odin",
      "Hercules",],
      answer: "Apollo",
    },
    { 
      number: 13,
      question: "Which football club is the best in the world?",
      options:
      ["Chelsea",
      "Chelsea",
      "Chelsea",
      "Chelsea",],
      answer: "Chelsea",
    }
]
// console.log(questionsArray[0].options[0])

//Begin Quiz
let p = 0; //QuestionsArray index
function beginQuiz()  {
    mins = 10;
    secs = 60;
    minsLeft.innerText = mins;
    if(mins < 10) {
        minsLeft.innerText = '0'+mins;
    }
    secsLeft.innerText = '00'; 
    intermediaryPage.classList.remove('show');
    // intermediaryPage.style.display = 'none';
    secondPage.classList.add('show');
    clearTime = setInterval(secsLeftFunc, 1000);
    questionNumber.innerText = questionsArray[p].number
    let totalNumber = document.
    querySelector('.total-number');
    totalNumber.innerText = questionsArray.length;
    question.innerText = questionsArray[p].question;
    let j = 0;
    options.forEach( (option) => {
        option.innerText = questionsArray[0].options[j];
        j++
    })
}
function secsLeftFunc() {
    if(secs === 60 ) {
       mins--
       minsLeft.innerText = mins;
    }
    if(mins < 10) {
        minsLeft.innerText = '0'+mins;
    }
    secs--
   secsLeft.innerText = secs; 
   if(secs < 10) {
    secsLeft.innerText  = '0'+secs;
   }
   if(mins === 0 && secs === 0) {
     clearInterval(clearTime);
     endQuizFunc2();
     //sorry you have exhausted your time

   }
   if(secs === 0) {
    secs = 60
    // minsLeft.innerText = mins;
   }  
}
let lastClicked;
let countClicks = 0;
let finalChoice = "";
selectOption.forEach( (item) => {
    item.addEventListener('click', (e) => {
        // let firstChild = item.firstElementChild;
        if(countClicks > 0 && (e.target.
            parentElement !== lastClicked && e.
            target !== lastClicked)) {
            lastClicked.classList.remove('color-blue')
        }
        item.classList.toggle('color-blue');

        lastClicked = item;
        finalChoice = lastClicked.innerText;
        // console.log(finalChoice);
        countClicks++;
    })
})

let points = 0;
nextQuestionBtn.addEventListener('click', () => {
    selectOption.forEach( (item) => { 
        if(item.classList.contains('color-blue')) {
            item.classList.remove('color-blue');
        }
    })
    // console.log(finalChoice);
    // console.log(questionsArray[p].answer);
    if(finalChoice === questionsArray[p].answer) {
        points++
        // console.log(points);
    }
    p++
    questionNumber.innerText = questionsArray[p].number
    question.innerText = questionsArray[p].question;
    let k = 0;
    options.forEach( (option) => {
        option.innerText = questionsArray[p].options[k];
        k++
    })
    if(p >= questionsArray.length-1) {
        nextQuestionBtn.classList.add('hide');
    }

} )  
const thankyou = document.querySelector('.thank-you');
endQuizBtn.addEventListener('click', endQuizFunc)

function endQuizFunc() {
    secondPage.classList.remove('show');
    thirdPage.classList.add('show');
    clearInterval(clearTime);
    if(finalChoice === questionsArray[p].answer) {
        points++
    }
    thankyou.innerText = `${firstname.value} ${lastname.
        value}, thank you for trying.`;
    // your time is up message, if the time elapses
}
function endQuizFunc2() {
    secondPage.classList.remove('show');
    thirdPage.classList.add('show');
    clearInterval(clearTime);
    if(finalChoice === questionsArray[p].answer) {
        points++
    }
    thankyou.innerText = `Time Exausted.
    ${firstname.value} ${lastname.
        value}, thank you for trying.`;
    // your time is up message, if the time elapses
}

const clickScore = document.querySelector('.users-score');
let usersScore;
clickScore.addEventListener('click', () => {
     usersScore = (Math.
        trunc((points/(questionsArray.length))*100));
    clickScore.innerText = usersScore+'%';
})


const tryAgainBtn = document.querySelector('.try-again');
tryAgainBtn.addEventListener('click', () => {
    firstPage.classList.remove('hide')
    thirdPage.classList.remove('show');
    firstname.value = "";
    lastname.value = "";
    p = 0;
    points = 0;
    selectOption.forEach( (item) => { 
        if(item.classList.contains('color-blue')) {
            item.classList.remove('color-blue');
        }
    })
    nextQuestionBtn.classList.remove('hide');
    clickScore.innerText = 'click here to see your score';
})

/*
user, thank you for trying click here to see your score
*/
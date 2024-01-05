const questions =[
    {
        question: "if α and β are the roots of the equation 2x^2-3x+4=0.Find  α/β+β/α",
        answers: [
          { text: "(-9)/8", correct: false},
          { text: "-7/8", correct: true},
          { text: "7/8", correct: false},
          { text: "9/8", correct: false},
        ]
    },
    {
      question: "Solve 2x + 4 = 0 (mod5)",
        answers: [
          { text: "1", correct: false},
          { text: "2", correct: false}, 
          { text: "3", correct: true},
          { text: "4", correct: false},
        ]
    },
    {
      question: "A straight line 2x+3y=6,passes through the point (-1,2).Find the equation of the line.",
      answers: [
        { text: "2x-3y =2", correct: false},
        { text: "2x-3y =2", correct: false},
        { text: "2x+3y =-4", correct: false},
        { text: "2x+3y =4", correct: true },
      ]
    },
    {
      question: "Evaluate 6 – 36 in mod9 ",
        answers: [
          { text: "1", correct: false},
          { text: "6", correct: true},
          { text: "8", correct: false},
          { text: "7", correct: false},
        ]
    },
    {
        question: "A curve is given by y=5-x-2x^2.Find the equation of its line of symmetry. ",
          answers: [
            { text: "x =(-41)/8", correct: false},
            { text: " x =  (-1)/4", correct: true},
            { text: " x = 1/4", correct: false},
            { text: "x = 41/8", correct: false},
          ]
      }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex  + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion. 
    question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  } 
  
   function resetState(){
     nextButton.style.display = "none";
     while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
     }
   }
  
  function selectAnswer(e){
    const selectedBtn =e.target; 
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");  
    }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore(){
    resetState();
    questionElement.innerHTML =`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block"; 
  }
  function handleNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex < questions. length){
        showQuestion();
      }else{
        showScore();
      }
  }
  nextButton.addEventListener("click", () =>{
      if(currentQuestionIndex < questions.length){
        handleNextButton();
      }else{
            startQuiz();
      }
  });
  
  startQuiz();

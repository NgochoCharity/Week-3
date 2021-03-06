(function(){
    
    function buildQuiz(){
      
      const output = [];
      
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `
            <div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  

      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
          // color the answers purple
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
        nextButton.style.display='none';
      }
      else{
        previousButton.style.display = 'inline-block';
    
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        
      {
        question: "What is CSS in full?",
        answers: {
          a: "Coding Style Sheets",
          b: "Cascading Style Sheets",
          c: "Cascading Strand Sheets"
        },
        correctAnswer: "b"
      },
      {
        question: "Who invented the computer?",
        answers: {
          a: "Charles Babbage",
          b: "Issac Newton",
          c: "Alexander Graham"
        },
        correctAnswer: "a"
      },
      {
        question: "What does HTML stand for?",
        answers: {
          a: "How To Master Languages",
          b: "HyperText Markdown Language",
          c: "HyperText Markup Language",
    
        },
        correctAnswer: "c"
      },
      {
        question: "Which is not a type of CSS?",
        answers: {
          a: "Inline CSS",
          b: "Hover CSS",
          c: "Embedded CSS",
    
        },
        correctAnswer: "b"
      },
      {
        question: "Which of the following is not a JS data type?",
        answers: {
          a: "strings",
          b: "Boolean",
          c: "Function",
    
        },
        correctAnswer: "c"
      }
    ];
  
    
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
 
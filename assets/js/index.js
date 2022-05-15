
(function(){
    
    function buildQuiz()
    {
      
      const output = [];

      // for each question
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];

          for(letter in currentQuestion.answers){
  
            // adding an HTML radio button
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
    
            answerContainers[questionNumber].style.color = 'purple';
          }
          
          else{
            
            answerContainers[questionNumber].style.color = 'red';
          }
        });

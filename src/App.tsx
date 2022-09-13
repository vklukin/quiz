import React, { useState } from 'react';
import './app.css'

function App() {

  const questions = [
    {
      quizQuestion: 'Кто такой Пушкин?',
      quizAnswer: [
        {answerText: 'Писатель', isCorrect: true},
        {answerText: 'Художник', isCorrect: false},
        {answerText: 'Певец', isCorrect: false},
        {answerText: 'Артист', isCorrect: false},
      ],
    },
    {
      quizQuestion: 'Кто тут лишний?',
      quizAnswer: [
        {answerText: 'Халк', isCorrect: false},
        {answerText: 'Алая ведьма', isCorrect: false},
        {answerText: 'Бетмен', isCorrect: true},
        {answerText: 'Ракета', isCorrect: false},
      ],
    },
    {
      quizQuestion: 'Что делает стол?',
      quizAnswer: [
        {answerText: 'Лежит', isCorrect: false},
        {answerText: 'Стоит', isCorrect: true},
        {answerText: 'Бежит', isCorrect: false},
        {answerText: 'Сидит', isCorrect: false},
      ],
    },
    {
      quizQuestion: 'На чем это сделано?',
      quizAnswer: [
        {answerText: 'React', isCorrect: true},
        {answerText: 'HTML', isCorrect: false},
        {answerText: 'CSS', isCorrect: false},
        {answerText: 'Js', isCorrect: false},
      ],
    }
  ]


  const [curQuestions, setCurQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const answerOptionClick = (isCorrect:boolean) =>{
    if(isCorrect){
      setScore(score+1)
    }

    const nextQuestion = curQuestions +1;
    if(nextQuestion<questions.length){
      setCurQuestions(nextQuestion)
    }else{
      setShowScore(true)
    }
  }

  const refresh = ()=>{
    setShowScore(false)
    setCurQuestions(0)
    setScore(0)
  }


  return (
    <div className="App">

      {
        showScore 
        ? <div className="section__score">
            <div>Правильных ответов {score} из {questions.length}</div>
            <button className='refresh' onClick={()=>refresh()}>Попробовать еще раз</button>
          </div>
        : <div className="quizzz">
            <div className="question__section">
              <div className="question__count">
                <span>Вопрос {curQuestions + 1}</span> / {questions.length}
              </div>
              <div className="question__question">{questions[curQuestions].quizQuestion}</div>
            </div>
            <div className="buttons">
              {questions[curQuestions].quizAnswer.map(item=>
                (<button onClick={()=>{
                  answerOptionClick(item.isCorrect)
                }}>{item.answerText}</button>)
              )}
            </div>
          </div>
      }

    </div>
  );
}

export default App;

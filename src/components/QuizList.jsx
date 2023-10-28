import React from 'react';

const QuizList = ({ questions }) => {
  return (
    <div className="quiz-list">
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="quiz-question">
            <h2>Question {index + 1}:</h2>
            <p>{question.question}</p>
            <div className="answers">
              {Object.keys(question.answers).map((key) => (
                <div key={key} className="answer">
                  <strong>{key}:</strong> {question.answers[key]}
                </div>
              ))}
            </div>
            <p>Category: {question.category}</p>
            <p>Difficulty: {question.difficulty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;

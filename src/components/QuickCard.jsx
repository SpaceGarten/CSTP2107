import React from 'react';
import QuizList from './QuizList';
import './QuizList.css';

const QuickCard = ({ questions }) => {
  return (
    <div className="quick-card">
      <h2 className="quick-card-title">Quiz Questions</h2>
      <QuizList questions={questions} />
    </div>
  );
};

export default QuickCard;

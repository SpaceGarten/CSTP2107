import React, { useState, useEffect } from 'react';
import QuickCard from './QuickCard';

const QuickCardContainer = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const API_KEY = 'ljR0HDZFJC0UGaKax8IxVPbilItcvCFWg8qHIAV9'; 

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=bash&difficulty=Easy&limit=10`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data from the Quiz API');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
      }
    };

    fetchData();
  }, []);

  return <QuickCard questions={questions} />;
};

export default QuickCardContainer;

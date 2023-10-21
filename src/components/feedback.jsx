import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div>
      <h1>Please leave your feedback</h1>
      <FeedbackOptions onLeaveFeedback={handleFeedback} />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
    </div>
  );
};

export default Feedback;

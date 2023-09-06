import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div>
      <h1>Please leave your feedback</h1>
      <FeedbackOptions onLeaveFeedback={handleFeedback} />

      <Statistics feedback={feedback} total={total} positivePercentage={positivePercentage} />
    </div>
  );
};

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
  </div>
);

const Statistics = ({ feedback, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    {total === 0 ? (
      <p>No feedback given</p>
    ) : (
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    )}
  </div>
);

export default Feedback;

import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    {total === 0 ? (
      <p>No feedback given</p>
    ) : (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    )}
  </div>
);

export default Statistics;

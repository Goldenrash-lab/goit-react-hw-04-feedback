import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedBackOptions } from './FeedBackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);

        break;
      case 'neutral':
        setNeutral(prev => prev + 1);

        break;
      case 'bad':
        setBad(prev => prev + 1);

        break;
      default:
    }
  };
  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    if (countTotalFeedback() > 0) {
      const result = (good / countTotalFeedback()) * 100;
      return result.toFixed(0) + '%';
    }
  }
  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '50px',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedBackOptions options={options} onLeaveFeedback={handlerClick} />
      </Section>
      <Section title="Statistics">
        {!totalFeedback ? (
          <h5>Not feedback given</h5>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </div>
  );
};

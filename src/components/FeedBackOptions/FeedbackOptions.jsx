import React from 'react';
import { Button, WrapperButton } from './FeedbackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperButton>
      {options.map(el => (
        <Button
          key={crypto.randomUUID()}
          onClick={onLeaveFeedback}
          name={el.toLowerCase()}
        >
          {el}
        </Button>
      ))}
    </WrapperButton>
  );
};

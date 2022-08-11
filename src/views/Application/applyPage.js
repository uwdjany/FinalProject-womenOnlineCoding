import React, { useState } from 'react';
import 'antd/dist/antd.css';

import { Button, message, Steps } from 'antd';
import ThirdStep from './thirdStep';
import FirstPage from './FirstStep';
import SecondStep from './secondStep';

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <FirstPage/>,
  },
  {
    title: 'Second',
    content: <SecondStep/>,
  },
  {
    title: 'Last',
    content: <ThirdStep/>,
  },
];

const ApplicationPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
    <h1 style={{float:"left",marginTop:"40px"}}>Apply Form</h1>
      <Steps current={current} style={{width:"80%" , marginLeft:'120px'}}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default  ApplicationPage;
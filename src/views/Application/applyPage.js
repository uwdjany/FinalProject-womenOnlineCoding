import React, { useState } from 'react';
import 'antd/dist/antd.css';

import { Button, message, Steps } from 'antd';

import FirstPage from './FirstStep';
import SecondStep from './secondStep';
import ApplicationServices from "../../services/applicationServices"

const { Step } = Steps;
const steps = [
  {
    title: 'First Stage',
    content: <FirstPage/>,
  },
  {
    title: 'Second Stage',
    content: <SecondStep/>,
  },

];

const ApplicationPage = () => {

  // const onFinish = async(values)=>{

  //   const appObj ={
  //     ...values,



  //   }

  // }
  const onFinish = async(values) => {
    const appObj = {
      ...values,
   
     
    };
    console.log("Received values of form: ", values);

    console.log("Apply: ", appObj);

    const res =  await ApplicationServices.crateApplication(appObj);

    console.group("<<<<<<<<:",res)
  };



  
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
    <h1 style={{marginTop:"5%",color:"#f7941e",marginLeft:"50px"}}>Apply Form</h1>
      <Steps current={current} style={{width:"80%" , marginLeft:'120px',}} onFinish={onFinish}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} style={{marginLeft:"380px"}}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}  style={{marginLeft:"380px"}}>
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
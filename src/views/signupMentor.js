import React,  { useState ,useEffect } from 'react';
import 'antd/dist/antd.css';
import ApplicationServices from '../services/applicationServices';

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  RadioGroup,
  FormControlLabel
} from 'antd';


const Signin = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const course = ["HTML","CSS","JAVASCRIPT","REACT JS","NODE JS"];

const gender = ["Female","Male","Other"]

   const formSubmit = (values) =>{
  const firstName = values.firstName;
  const lastName = values.lastName;
  const phoneNumber = values.phoneNumber;
  const email = values.email;
  const password = values.password;
  const gender = values.gender;
  const language = values.language;
    
     console.log("Answer:::",firstName,lastName,phoneNumber,email,password,gender,language)
    }
const res = ApplicationServices.createMentor(formSubmit);
console.log("++++++++++",res)
  return (
    <>
    <header style={{fontSize:"40px",textAlign:"center",fontWeight:"600"}}>SignUp Form</header>
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}

      onFinish={(values) =>this.formSubmit(values)}

     
    >
   
      <Form.Item label="First Name" name="firstName">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name"name="lastName">
      <Input />
    </Form.Item>
    <Form.Item label="Phone Number" required="Number" name="phoneNumber">
    <Input />
  </Form.Item>
  <Form.Item label="E mail" required="email" name="email">
  <Input />
</Form.Item>
<Form.Item label="Password" required="password" name="password">
<Input />
</Form.Item>

<Form.Item label="Gender" name="gender">

<Select>

{gender.map((gend) =>(
  <Select.Option>{gend}</Select.Option>

))}


</Select>


</Form.Item>


      <Form.Item label="Language" name="language">
      <Select>
      {/*{course.map((cour)<Option value={course}>{cour}</Option>)};*/}
      
      {course.map((cor) =>(
<Select.Option>{cor}</Select.Option>

      ))}
      </Select>

      </Form.Item>
      

     
     
     
     
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default Signin;
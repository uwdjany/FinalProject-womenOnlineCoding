import { useState } from "react";
import "./Signin.css"
import FormInput from "./FormInput";


const Signin = () => {
const [values,setValues] = useState({
 
  
    
username: "",
email : "",
birthday: "",
password: "",
confirmpassword:"",
gender:"",
ID:""
 });


 const inputs = [
   
    {
       
        id:1,
        name:"Username",
        type:"text",
        placeholder:"Username",
        errorMessage:"username should be 3-16 characters and shouldn't include any special xharacter!",
        label:"Username",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required:true,
    },
    {
        id:2,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage:"it should be a valid email dress!",
        label:"Email",
        required:true,
    },
    {
        id:3,
        name:"birthday",
        type:"date",
        placeholder:"Birthday",
        label:"Birthday",
    },
    {
        id:4,
        name:"Password",
        type:"password",
        placeholder:"Password",
        errorMessage:
        "password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character !",
        label:"Password",
        pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&^&*])[a-zA-z0-9!@#$%^&*]{8,20}$`,
        required:true,
    },
    {
        id:5,
        name:"confirmPassword",
        type:"password",
        placeholder:"ConfirmPassword",
        errorMessage:"password don't match!",
        label:"ConfirmPassword",
        pattern:values.password,
        required:true,
    },
    {
        id:6,
        name:"gender",
        type:"gender",
        placeholder:"You must be a female",
        errorMessage:"Gender!",
        label:"Gender",
        // pattern:values.password,
        required:true,
    
    },

    {
        id:7,
        name:"ID",
        type:"ID",
        placeholder:"Write your Identification Card Here",
        errorMessage:"Identification Card is not matching",
        label:"ID",
        // pattern:values.password,
        required:true,
    
    },
    
 ];

const handleSubmit = (e) => {
    e.preventDefault();
};

const Onchange =(e)=> {
    setValues({...values, [e.target.name]: e.target.value });
};


console.log(values);
    return(
    <>
        {/* <div className="oo">Signin page</div> */}
    <div className="Signin">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) =>(
            <FormInput 
            key={input.id} 
            {...input}
             value={values[input.name]}
            onChange={ Onchange}
            />
            ))}
            {/* <p>Already have an account?   login</p> */}
          
 <button >Submit</button>

            {/* <FormInput placeholder="phoneNumber"/>
            <FormInput placeholder="Gender"/>
            
            <div id="choose">
                <label for="yes-no-radio">Gender</label>
                <p>
                    <input type="radio" name="yes-no" checked>Male</input>
                </p>
                <p>
                <input type="radio" name="yes-no">Female</input>
                </p>
                </div>

            
            <FormInput placeholder="YourAge"/>
            <p>Education/Work Details
            <FormInput placeholder="Your Education"/>
            <FormInput placeholder="Do you have experience with software Development?"/>

            <div id="choose">
                <label for="yes-no-radio">Do you have experience with software Development?</label>
                <p>
                    <input type="radio" name="yes-no" checked>yes</input>
                </p>
                <p>
                <input type="radio" name="yes-no">No</input>
                </p>
                </div>


            <FormInput placeholder="If yes, How many Hours do you spend coding?"/>
            <FormInput placeholder="Do you have GitHub Account?"/>

            <div id="choose">
                <label for="yes-no-radio">Do you have GitHub Account?</label>
                <p>
                    <input type="radio" name="yes-no" checked>yes</input>
                </p>
                <p>
                <input type="radio" name="yes-no">No</input>
                </p>
                </div>
            
            <FormInput placeholder="If yes, please include your GitHub link"/>
            <FormInput placeholder="Your competency in ICT/skills:"/> */}

            {/* </p> */}
            </form>
        </div>
        </>
    );
}; 

export default Signin;
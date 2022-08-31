import React, {useState,useEffect} from "react";
import "./Attendance.css";
//import userData from "../../assets/json/attendence.json";
import {Form,Select} from "antd"
import DashAdmin from "./dashAdmin";

import ApplicationServices from "../../services/applicationServices"


const Attendance = () => {

const [userData,setuserData] = useState([]);
  useEffect(()=>{
    ApplicationServices.getAllApplication().then((res) =>{
      // console.log("this is the reso",res)
       setuserData(res?.data)
    })
  },[])
  return (
    < DashAdmin>
    <>
    
      <header style={{fontSize:"40px",textAlign:"center",color:"#f7941e",fontWeight:"900"}}> Our Applicants</header> 

      <div className="date1">
        <h5 className="selectdateAttendance">Date:</h5>
      
        <input type="date" id="date" name="date" className="dateattendance" />
        
         
        <Form.Item label="Subject">
          <Select>
            <Select.Option value="F">Figma</Select.Option>
            <Select.Option value="T">Typing Master</Select.Option>
            <Select.Option value="H">Html</Select.Option>
            <Select.Option value="U">Css</Select.Option>
            <Select.Option value="F">Frontend</Select.Option>
            <Select.Option value="B">Backend</Select.Option>
          </Select>
        </Form.Item>
          
       
        
      </div>
      <div className="deta">
        <table>
          <thead>
            <tr>
              <td> No</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Phone Number</td>
              <td>Your Provence</td>
              <td>Residence Provence</td>
              <td>Gender</td>
              <td>Education Qualification</td>

              <td>Decision</td>
              {/*

<td>
                <label for="vehicle2">Attendance</label>
              </td>
  */}
            </tr>
          </thead>
          <tbody>
            {userData.map((apply) => (
              <tr>
                <td>{apply.No}</td>
                <td>{apply.firstName}</td>
                <td>{apply.lastName}</td>
                <td>{apply.email}</td>
                <td>{apply.phoneNumber}</td>
                <td>{apply.yourProvence}</td>
                <td>{apply.residenceProvence}</td>
                <td>{apply.gender}</td>
                <td>{apply.educationQualification}</td>
                <td ><a href style={{background:"skyblue",padding:"10px",color:"black",fontWeight:"500"}}>Accept</a></td>
                <td><a href style={{background:"red",padding:"10px",color:"black",fontWeight:"500"}}>Reject</a></td>
             {
             /*<td>
                  {apply.Attendance}
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                  />
             </td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
    </DashAdmin>
  );
};
export default Attendance;
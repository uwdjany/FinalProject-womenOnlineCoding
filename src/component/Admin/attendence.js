import react from "react";
import "./Attendance.css";
import userData from "../../assets/json/attendence.json";
import {Form,Select} from "antd"
import DashAdmin from "./dashAdmin";
const Attendance = () => {
  return (
    < DashAdmin>
    <>
    
      <h1> Take Attendance </h1>

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
              <td>Names</td>
              <td>Email</td>
              <td>
                <label for="vehicle2">Attendance</label>
              </td>
            </tr>
          </thead>
          <tbody>
            {userData.map((index) => (
              <tr>
                <td>{index.No}</td>
                <td>{index.Names}</td>
                <td>{index.Email}</td>

                <td>
                  {index.Attendance}
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                  />
                </td>
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
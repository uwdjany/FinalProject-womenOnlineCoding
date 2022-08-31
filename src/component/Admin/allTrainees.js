import React from "react";
import DashAdmin from "./dashAdmin";


const AllMentor =()=>{

return(

  <DashAdmin>

  <header style={{fontSize:"40px",textAlign:"center",color:"black",fontWeight:"900"}}> ALL Mentors</header> 
  
<div>
<table>
<thead style={{background:"#f7941e" , fontWeight:"600"}}>

<tr>
<td>First Name</td>
<td>Last Name</td>
<td>Email</td>
<td>Phone Number</td>
<td>Password</td>
<td>Gender</td>
<td>Role</td>
<td>Language</td>
</tr>
</thead>

<tbody>

<tr>

<td>uwase</td>
<td>djanati</td>
<td>djanatiuwase@gmail</td>
<td>0784875126</td>
<td>uwasedjany123</td>
<td>female</td>
<td>user</td>
<td>Frontend</td>

</tr>

</tbody>


</table>





</div>
</DashAdmin>

)


}


export default AllMentor
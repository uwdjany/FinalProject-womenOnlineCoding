import React from 'react';
import {TextField,MenuItem,FormLabel,Radio,RadioGroup,FormControlLabel} from '@material-ui/core';
 const SecondStep =()=>{

    return(
        <div>
        <h5 style={{marginLeft : '30%' ,fontSize:'20px'}}>BACKGROUND EDUCATION</h5>
        <div>
        
        <TextField id="select" label="Education Qualification" value="20" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} select>
  <MenuItem value="20">High School</MenuItem>
  <MenuItem value="10">University</MenuItem>
  <MenuItem value="15">Postgraduate Degree </MenuItem>
  <MenuItem value="25">Undergraduate Degree </MenuItem>
</TextField>
        </div>
        <div style={{width:'40%', marginLeft : '30%'}}>

<FormLabel id="demo-row-radio-buttons-group-label"> Do You Have Experience With SoftwareDevelopment</FormLabel>
<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
>
  <FormControlLabel value="YES" control={<Radio />} label="YES" />
  <FormControlLabel value="NO" control={<Radio />} label="NO" />
 

</RadioGroup>
</div>
<div>
        
<TextField id="select" label="if Yes How Many Hours Do You spend Coding" value="20" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} select>
<MenuItem value="20">Above 3 hours</MenuItem>
<MenuItem value="10">5 hours</MenuItem>
<MenuItem value="15">Above 5 hours </MenuItem>
</TextField>
</div>
        
<div style={{width:'40%', marginLeft : '30%'}}>

<FormLabel id="demo-row-radio-buttons-group-label"> doYouHaveGitHubAccount </FormLabel>
<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
>
  <FormControlLabel value="YES" control={<Radio />} label="YES" />
  <FormControlLabel value="NO" control={<Radio />} label="NO" />
 

</RadioGroup>
</div>

<div>
<TextField label="If Yes Please Include Your GitHubLink" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} />

</div>
        </div>
        

    )
 }

 export default SecondStep
import React , {useContext} from 'react';
import {TextField,MenuItem,FormLabel,Radio,RadioGroup,FormControlLabel} from '@material-ui/core';


export default function FirstPage (){

return(
<div>
<h5 style={{marginLeft : '30%' ,fontSize:'20px',}}>PERSONAL INFORMATION</h5>
<div>

<TextField label="First name" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%' ,marginTop: '50px'}} />
</div>
<div>
<TextField label="Last name" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} />

</div>
<div>

<TextField label="Email" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}}/>
</div>

<div>

<TextField label="PhoneNumber" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}}/>
</div>

<div>
<TextField id="select" label="Your Provence" value="20" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} select>
<MenuItem value="20">North Provence</MenuItem>
<MenuItem value="10">South Provence</MenuItem>
<MenuItem value="15">East Provence</MenuItem>
<MenuItem value="25">West Provence</MenuItem>
</TextField>
</div>
<div>
<TextField id="select" label="residenceProvence" value="20" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} select>
  <MenuItem value="20">North Provence</MenuItem>
  <MenuItem value="10">South Provence</MenuItem>
  <MenuItem value="15">East Provence</MenuItem>
  <MenuItem value="25">West Provence</MenuItem>
</TextField>
</div>

<div style={{width:'40%', marginLeft : '30%'}}>

<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"

>
  <FormControlLabel value="female" control={<Radio />} label="Female"  />
  <FormControlLabel value="male" control={<Radio />} label="Male" />
  <FormControlLabel value="other" control={<Radio />} label="Other" />

</RadioGroup>
</div>
</div>




)
}


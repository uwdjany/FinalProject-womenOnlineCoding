import React , {useContext} from 'react';
import {Button,TextField} from '@material-ui/core';


export default function FirstPage (){

return(
<div>
<h5 style={{marginLeft : '30%' ,fontSize:'20px',}}>PERSONAL INFORMATION</h5>
<div>

<TextField label="First name" margin="normal" variant="outlined" color="secondary" style={{width:'41%', marginLeft : '30%' ,marginTop: '50px'}} />
</div>
<div>
<TextField label="Last name" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} />

</div>
<div>

<TextField label="PhoneNumber" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}}/>
</div>


</div>




)
}


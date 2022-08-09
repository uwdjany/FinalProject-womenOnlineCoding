import React , {useContext} from 'react';
import {Button,TextField} from '@material-ui/core';
import  { multiStepContext } from './StepContex';

export default function ApplyPage (){
    const {setStep , userData ,setUserData} = useContext(multiStepContext);
return(
<div>
<h5 style={{marginLeft : '30%' ,fontSize:'20px'}}>PERSONAL INFORMATION</h5>
<div>

<TextField label="First name" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%' ,marginTop: '50px'}} />
</div>
<div>
<TextField label="Last name" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} />

</div>
<div>

<TextField label="Contact Number" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}}/>
</div>

<div>
<Button variant="contained" onClick={()=>setStep(2)} color="primary" style={{width:'40%', marginLeft : '30%'}}>Next</Button>

</div>

</div>

)
}


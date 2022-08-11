import React from 'react';
import {Button,TextField} from '@material-ui/core';
 const SecondStep =()=>{

    return(

<div>
<h5 style={{marginLeft : '30%' ,fontSize:'20px'}}>EDUCATION BACKGROUND</h5>
<div>

<TextField label="Email" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%' ,marginTop: '50px'}}/>
</div>
<div>
<TextField label="Adress" margin="normal" variant="outlined" color="secondary"style={{width:'40%', marginLeft : '30%'}}/>

</div>
<div>

<TextField label="District" margin="normal" variant="outlined" color="secondary" style={{width:'40%', marginLeft : '30%'}} />
</div>

<div>
<Button variant="contained" color="primary" style={{width:'40%', marginLeft : '30%'}}>Next</Button>

</div>

</div>

    )
 }

 export default SecondStep
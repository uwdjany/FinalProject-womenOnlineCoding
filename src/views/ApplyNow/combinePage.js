
import React, { useContext } from 'react';
import ApplyPage from './FirstStep';
import SecondStep from './secondStep';
import ThirdStep from './thirdStep';
import { Stepper,Step, StepLabel } from '@material-ui/core';
import {multiStepContext} from './StepContex'
import './index.css'
 function Combine (){
    const {currentStep , finalData} = useContext(multiStepContext);
function showStep(step) {
switch(step){
    case 1 :
        return <ApplyPage />
        case 2 :
            return <SecondStep />
            case 3 :
                return <ThirdStep /> 
}
    }

    return(
<>
<div className='Apply'>
<header className='ApplyHeader'>
<h3 style={{textDecoration:'underline',color:'#f7941e',fontSize:'40px',marginLeft:'40%',marginTop:'3%' }}>Apply Form</h3>
<div className='center-stepper'>
<Stepper style={{width : '80%',marginLeft:'10%',marginTop:'3%'}} activestep={currentStep - 1} orientation="horizontal">
<Step >
<StepLabel></StepLabel>
</Step>
<Step>
<StepLabel></StepLabel>
</Step>
<Step>
<StepLabel></StepLabel>
</Step>

</Stepper>

</div>
{showStep(currentStep)}

</header>

</div>


</>

    )
}

export default Combine
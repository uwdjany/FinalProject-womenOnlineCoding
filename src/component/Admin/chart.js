import Reacte from 'react'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import DashAdmin from './dashAdmin'
 import './style.css'

import {Card} from 'antd';
// import Piechart from './Piechart';


const data = [


  {
    name: 'Tranee',
    uv: 900,
    pv: 800,
    amt: 290,
  },
  {
    name: 'Mentors',
    uv: 280,
    pv: 908,
    amt: 100,
  },
  {
    name: 'Applicants',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'certicified',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Parternship',
    uv: 0,
    pv: 0,
    amt: 0,
  },
];




const Chartline =()=>
{
  return(
  

<DashAdmin>
 <Card>
 <div className='widg'>
<button className='span-one'>Trainee
< br/>
40%

</button>
<button className='span-one'>Mentors
<br />
10%
</button>
<button className='span-one'>Applicants
< br/>
50%
</button>
<button className='span-one'>certicified
< br/>
0%
</button>
<button className='span-one'>Parternship
< br/>
0%
</button>
</div>

 
<Card.Grid style={{width:"80%",height:"20rem"}} className="container-card">
<ResponsiveContainer width="100%" height="100%">
{/* <Piechart/> */}
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          
        </AreaChart>
       
      </ResponsiveContainer>
      </Card.Grid>

      
      </Card>
      </DashAdmin>
    
   

  )
}
export default Chartline
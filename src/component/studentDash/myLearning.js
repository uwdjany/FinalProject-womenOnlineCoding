import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LandingPageAppBar from '../../components/LandingPageAppBar';
import ImgMediaCard from './cardLearning';
import Archive from './archive';
import ListCourse from './list';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
  
   
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <LandingPageAppBar/>
    <Box sx={{ width: '90%',height:"80vh", marginLeft:"7.5rem",marginTop:"8rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Courses" {...a11yProps(0)} sx={{fontSize:"20px"}}/>
          <Tab label="List" {...a11yProps(1)} sx={{fontSize:"20px"}}/>
          <Tab label="Archive" {...a11yProps(2)} sx={{fontSize:"20px"}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ImgMediaCard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <ListCourse/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Archive/>
      </TabPanel>
    </Box>
    </>
    
  );
}

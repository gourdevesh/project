import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid ,Button} from '@mui/material'; 
import { CardActionArea } from '@mui/material';
import { Slide } from "react-awesome-reveal";
import useMediaQuery from '@mui/material/useMediaQuery';
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
   
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index:number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const matches=useMediaQuery(theme.breakpoints.up('md'));
const sm = useMediaQuery(theme.breakpoints.down('sm'));
const md=useMediaQuery(theme.breakpoints.down('md'));
const lg= useMediaQuery(theme.breakpoints.down('lg'));  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
<div  > 
    <Grid item container spacing ={4}  id="about"> 
    <Grid item xs={sm?10:md?8:6}>
    <Slide direction="left">
    <div style={{display:'flex',width:'100%',height:'395px',justifyContent:'center',alignItems:'center'}}> 
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>                    
    {/* <img src="images/men3.jpeg " style={{width:'65%'}}/> */}
    <Card sx={{ maxWidth: 430 }}>
      <CardActionArea>
      <img src="images/men3.jpeg " style={{width:'100%'}}/>
      </CardActionArea>
    </Card>
       </div>         
       </div> 
       </Slide > 
     </Grid>   
     <Grid item xs={sm?10:md?8:5}>
      <div style={{display:'flex',width:'100%',fontFamily:'popins',fontSize:'46px',fontWeight:'bold'}}> 
      <Grid item xs={12}>About Me </Grid>
      
      </div>
      <div style={{display:'flex',width:'100%',fontSize:'14px'}}> 
      <Grid item xs={12}>B.Tech intermediate with a focus on web development. Proficient in JavaScript, React.js, and Node.js. Eager to contribute to innovative projects and continuously expand my skill set.  </Grid>
      
      </div>
    <Slide direction="right">      
    <Box >
      <div position="static" style={{backgroundColor:'#fff',color:'black'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Main Skill" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label=" Exprerience" {...a11yProps(2)} />
        </Tabs>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
           <div>
           <div style={{display:'flex',flexDirection:'column',width:'100%',height:'200px',justifyContent:'space-between',fontSize:'13px'}}>
         
          <div>        
          <div> 
            Front-End Developer - Numeric Infosystem
          </div>
          <div> 
       2022-Current
          </div>
          </div>
          <div>        
          <div> 
            Front-End Developer  - Numeric Infosystem
          </div>
          <div> 
          2022-2023
          </div>
          </div>
          <div>        
          <div> 
            Front-End Developer  - Numeric Infosystem
          </div>
          <div> 
          2022-2023
          </div>
          </div>
          <div>
          <a href="devesh.pdf" download='devesh.pdf'>              
          <Button variant="contained"  style={{ backgroundColor:"#2832e9",color:'#fff',fontWeight:'bold'}}>download cv</Button></a>
          </div>
        </div>
         
      
  
           </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div style={{display:'flex',flexDirection:'column',width:'100%',height:'200px',justifyContent:'space-between',fontSize:'13px'}}>
          <div>        
          <div> 
          B.tech In CSE - RGPV University Bhopal
          </div>
          <div> 
       2020-Current
          </div>
          </div>
          <div>        
          <div> 
          12 In PCM - Bright Convent Hr Sec School
          </div>
          <div> 
            2020
          </div>
          </div>
          <div>        
          <div> 
            Web-Developer -  Numeric Infosystem Institute
          </div>
          <div> 
          2023
          </div>
          </div>
          <div>
          <a href="devesh.pdf" download='devesh.pdf'>              
          <Button variant="contained"  style={{ backgroundColor:"#2832e9",color:'#fff',fontWeight:'bold'}}>download cv</Button></a>
          </div>
        </div>
         
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div style={{display:'flex',flexDirection:'column',width:'100%',height:'200px',justifyContent:'space-between',fontSize:'13px'}}>
          <div>        
          <div> 
            Front-End Developer - Numeric Infosystem
          </div>
          <div> 
       2022-Current
          </div>
          </div>
          <div>        
          <div> 
            Front-End Developer  - Numeric Infosystem
          </div>
          <div> 
          2022-2023
          </div>
          </div>
          <div>        
          <div> 
            Front-End Developer  - Numeric Infosystem
          </div>
          <div> 
          2022-2023
          </div>
          </div>
          <div>
          <a href="devesh.pdf" download='devesh.pdf'>              
          <Button variant="contained"  style={{ backgroundColor:"#2832e9",color:'#fff',fontWeight:'bold'}}>download cv</Button></a>
          </div>
        </div>
         
      
  
        </TabPanel>
      </SwipeableViews>
    </Box>
    </Slide>

    </Grid>  

    </Grid>
    </div>
  );
}
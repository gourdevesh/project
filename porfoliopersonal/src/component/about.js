import React from "react";
import { Grid, Slider,Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typewriter } from 'react-simple-typewriter'
import { Slide } from "react-awesome-reveal";
import { useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles'
export default function About(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const ld = useMediaQuery(theme.breakpoints.down('ld'));

    return(
      <div style={{backgroundColor:'#F8F9F9',width:'100%'}}>
            <Grid container spacing={sm?6:md?6:24} >
            <Grid item xs={sm?12:md?8:6} style={{marginLeft:'5%'}}>
            <Slide direction="left">
                <div style={{display:'flex',width:'100%',flexDirection:'column',marginLeft:'0%',marginTop:'8%',height:'auto',justifyContent:'space-between',fontFamily:'Poppins'}}>   
             <div style={{fontSize:'16px',fontWeight:'400px'}}>
              WelCome TO MY World
             </div>
             <div style={{fontSize:'32px',fontWeight:'600'}}>
                Hi, I'm <span style={{color:'red'}}>   Devesh Gour     </span>
             </div>
             <div style={{fontSize:'32px',fontWeight:'600',fontFamily:'cursive'}}>
             <span style={{ color: 'red', fontWeight: 'bold' }}>a </span>
             <span style={{ fontFamily:'cursive', fontWeight: 'bold' }}> 
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'full stack developer', 'web developer', 'react developer', 'mern stack', 'mobile developer!']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
             </div>
             <div style={{width:'80%',fontSize:'13px',fontWeight:'300',marginTop:'4%'}}>
             I specialize in crafting clean and engaging web experiences using the latest front-end technologies.
         With a strong foundation in HTML, CSS, and JavaScript, I love turning creative ideas into functional and user-friendly websites
             </div>
             <div>
              <div style={{marginTop:'1%'}}>
                <a href="devesh.pdf" download='devesh.pdf'>              
             <Button variant="contained"  style={{ backgroundColor:"#2832e9",color:'#fff',fontWeight:'bold'}}>Resume</Button>  </a>      
             </div>
             </div>
             <div style={{display:'flex', width:'70%',justifyContent:'space-between',marginTop:'70px '}}>               
               <div >
                <div style={{fontSize:'14px',fontWeight:'400',marginBottom:'15px'}}>     
                find with me
                 </div>
                 <div style={{display:'flex',flexDirection:'row',width:'200px',justifyContent:'space-between'}}>                  
                        <Paper elevation={10} style={{width:'47px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                        <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
                        </Paper>
              
                        <Paper elevation={10} style={{width:'47px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
                        </Paper>
                        <Paper elevation={10} style={{width:'47px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                        <a href="https://www.linkedin.com/in/devesh-gour-302025268/"> <LinkedInIcon/> </a> 
                        </Paper>
                    </div>
                </div>
                
             </div>
             </div> 
             </Slide>
            </Grid>
            {/* <Slide direction="right"> */}
            <Grid item xs={sm?10:md?8: 5}>
              <div >             
                <img src="images/men.png " style={{width:'80%'}}/>
                </div>
            </Grid>
            {/* </Slide> */}

        </Grid>

        

      </div>
      
    )
}

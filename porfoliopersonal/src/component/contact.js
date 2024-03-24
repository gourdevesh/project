import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid,Button } from "@mui/material";
import { Paper } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Slide } from "react-awesome-reveal";
import { useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles'
export default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9cz7yg', 'template_5z603qn', form.current, 'DYi6AjOR8Ci1ZNYkA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const ld = useMediaQuery(theme.breakpoints.down('ld'));
    return(
        <div >
            
            <div style={{width:'100%',textAlign:'center',fontFamily:'popins',fontSize:'37px',fontWeight:'bold'}}> Contact With Me     </div>
            <div  style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>     
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >        
            <Grid container spacing={sm?2:md?2:4} >
                 <Grid item xs={sm?12:md?6:5}>
                 <Slide direction="left">

                <div style={{width:'100%'}}>   
                
                    <Paper elevation={5} style={{width:'100%',height:'sm?550px:md?560:450',backgroundColor:'#F8F9F9',borderColor:'#fff',borderStyle:'solid'}}> 
                    <div>              
                        <img  src="images/hande.webp" style={{width:'90%',alignItems:'center',justifyContent:'center',margin:'4%'}}/>
                           </div>      
                    <div style={{fontFamily:'Popins',fontSize:'20px',fontWeight:'bold',marginLeft:'7%'}}>
                        Address
                    </div>
                    <div style={{fontSize:'14px',fontWeight:'200',fontFamily:'Popins',color:'grey',padding:'3%'}}>
                       I am a d devesh gourfoe freelancerwork 
                    </div>
                    <div>
                        <span style={{fontFamily:'Popins',fontSize:'14px',fontWeight:'bold',marginLeft:'2%'}}>
                            Phone :
                        </span>
                        <span style={{fontFamily:'Popins',fontSize:'14'}}>
                            7509400387
                        </span>
                    </div>
                    <div style={{padding:'2%'}}>
                    <span style={{fontFamily:'Popins',fontSize:'14px',fontWeight:'bold'}}>
                           Email :
                        </span>
                        <span style={{fontFamily:'Popins',fontSize:'14'}}>
                       <a href="gourdevesh2@gmail.com"> gourdevesh2@gmail.com </a>
                        </span>
                    </div>
                    <div style={{margin:'2%' }}>         
                    <div style={{fontSize:'16px',fontWeight:'600',marginBottom:'15px'}}>     
                find with me
                 </div>
                 <div style={{display:'flex',flexDirection:'row',width:'200px',justifyContent:'space-between'}}>                  
                        <Paper elevation={10} style={{width:'47px',height:'44px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                          <FacebookIcon/>
                        </Paper>
              
                        <Paper elevation={10} style={{width:'47px',height:'44px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                          <InstagramIcon/>
                        </Paper>
                        <Paper elevation={10} style={{width:'47px',height:'44px',alignItems:'center',display:'flex',justifyContent:'center'}}>
                        <a href="https://www.linkedin.com/in/devesh-gour-302025268/"> <LinkedInIcon/> </a> 
                        </Paper>
                    </div>
                    </div>
                      
                          </Paper>
                </div>
                </Slide>

                 </Grid>
                 <Grid item xs={sm?12:md?6:6}>
              <div>
              <Slide direction="right">
                    <Paper elevation={5} style={{width:'100%',height:'390px',backgroundColor:'#F8F9F9',borderColor:'#fff',borderStyle:'solid'}}> 
                    <form ref={form} onSubmit={sendEmail}>
                    <div style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-between',marginLeft:'3%',marginTop:'2%'}}>  
                    <div style={{display:'flex',flexDirection:'column'}}> 
      
                       <div style={{margin:'2%',fontFamily:'Ppopins',fontSize:'14px',fontWeight:'600',width:'92%'}}>  Your Name   </div>
                    <div> <input style={{borderColor:'#fff',height:'30px',borderStyle:'solid',width:'92%'}}name="user_name" /></div>
                      </div> 
                    {/* <div style={{display:'flex',flexDirection:'column'}}>        */}
                       {/* <div style={{margin:'2%',fontFamily:'Ppopins',fontSize:'14px',fontWeight:'600'}}> Phone Number  </div> */}
                    {/* <div> <input style={{borderColor:'#fff',width:'92%',height:'30px',borderStyle:'solid'}}/></div> */}
                      {/* </div>  */}
                     </div>
                     <div style={{margin:'2%',fontFamily:'Ppopins',fontSize:'14px',fontWeight:'600'}} name="user_email"> Email </div>
                    <div> <input style={{borderColor:'#fff',width:'92%',height:'30px',borderStyle:'solid',marginLeft:'3%'}}/></div>
                    <div>
                          <div style={{marginTop:'2%',fontFamily:'Popins',fontSize:'14px',fontWeight:'800',marginLeft:'5%'}}>Subject</div>
                          <textarea  style={{width:'92%',height:'120px',margin:'1%',borderColor:'#fff',borderStyle:'solid'}} name="message" ></textarea>
                          <div style={{marginTop:'1%',fontFamily:'Popins',fontSize:'14px',fontWeight:'800',marginLeft:'5%',width:'85%'}}>
                          <input type="submit" value="Send" fullwidth />
</div>

                    </div>
                    </form>
                 </Paper>
                

                 </Slide >

              </div>
                 


</Grid>
            </Grid>
            </div>
            </div>      
        </div>
    )
}

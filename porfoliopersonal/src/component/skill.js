import React from "react";
import { Grid } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles'
export default function Skill(){
    const theme = useTheme();
    const matches=useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md=useMediaQuery(theme.breakpoints.down('md'));
  const lg= useMediaQuery(theme.breakpoints.down('lg'));

    const progressPercentage = 80;
    var category=[ {
 
        html:"html  .",
        percentage:"80",
       
    
    },
    {
 
        html:"Css",
        percentage:"50",
       
    
    }, {
 
        html:"Javascript  .",
        percentage:"77",
       
    
    }, {
 
        html:"reactjs",
        percentage:"70",
       
    
    }, {
 
        html:"nodejs  .",
        percentage:"60",
       
    
    }, {
 
        html:"react-native  .",
        percentage:"50",
       
    
    },
    {
 
        html:"sql  .",
        percentage:"75",
       
    
    }, 

    
    ]
     function PlayImages(){

        return category.map((item)=>{
            return(
              
              <div> 
                <div style={{display:'flex',flexDirection:'row',width:'70%',justifyContent:'space-between'}}>
                    <div style={{margin:'4px',fontSize:'14px',fontFamily:'Popins',}}>  {item.html}</div>
                    <div style={{fontSize:'14px'}}>
                        {item.percentage}
                    </div>
                    </div>
        <div style={{display:'flex',width:'70%',height:'3px',backgroundColor:'white',borderColor:' #f0f0f0',borderStyle:'solid', borderRadius:'5px'}}>
        <div  style={{ backgroundColor:'red',width: `${item.percentage}%`,transition:'width 0.3s ease-in-out',backgroundColor: 'red'}}></div>
        </div>
            </div>
            
            )
            })

     }
     return(
        <div> 
        <div item xs={12} style={{marginLeft:'50%',display:'flex',marginBottom:'2%',fontSize:'32px',fontFamily:'Popins',fontWeight:'bold'}}>
        Skill
      </div>
        <Grid item container spacing={2}>
             
        <Grid item xs={sm?12:md?11:6}>
            <Slide direction="left">
            <div style={{fontFamily:'popins',fontSize:'32px',fontWeight:'bold',textAlign:'center'}}> My Skill </div>
                <div style={{width:'100%',alignItems:'center',justifyContent:'center',display:'flex',height:'200px'}}>
                 
                <div style={{width:'80%',alignItems:'center',justifyContent:'center',display:'flex',height:'200px',fontSize:'14px'}}>
          
"To understand my good knowledge, I assessed my expertise, recognized my strengths and weaknesses, sought new knowledge, received feedback, applied it in practical situations, and shared it with others. This way, I improved and enhanced my knowledge."
              </div>  
              </div> 
              </Slide>      
            </Grid>
            <Grid item xs={sm?12:md?11:6}>
            <Slide direction="right">

                     <div style={{justifyContent:'center',alignItems:'center',width:'100%',display:'flex'}}>
                     <div style={{justifyContent:'center',alignItems:'center',width:'80%'}}>
                         {PlayImages()}</div>
                         </div>
                     </Slide>

               </Grid>
               </Grid>
               </div>
        )
   
}

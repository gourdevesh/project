import React from "react";
import { Paper } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useStyles } from "./serviceCss";
import { Slide } from "react-awesome-reveal";
export default function Service(){
    var classes=useStyles()
   var category=[ {
 
    discraption:"Experienced app developer, skilled in React.js, crafting intuitive mobile designs for captivating user experience",
    image:"app.jpg",
    heating:' App Development'

},
{
 
    discraption:"Web developer crafting dynamic websites with reactjs for seamless user experiences.",
    image:"p.png",

    heating:'Web Development'

},
{
 
    discraption:"Mobile web developer creating seamless and responsive user experiences",
    image:"m.png",
    heating:'mobile developer'

},


]

var color=['#27ae60','#fab1a0','#dfe6e9','#ffeaa7','#a29bfe','#81ecec','#badc58','#7ed6df','#D980FA','#7d5fff','#18dcff']

function PlayImages(){
    return category.map((item)=>{
    return(
        <Paper elevation={4} style={{width:'300px',height:'250px',borderWidth:'4px',borderColor:'#fff',borderStyle:'solid',margin:'25px'}}  className={classes.bar} >
          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',background:color[parseInt(Math.random()*(color.length-1))]}}>
            <div  style={{width:'80%',height:'70%',display:'flex',justifyContent:'center',flexDirection:'column',paddingLeft:'7%',justifyContent:'space-between',marginLeft:'5%',marginTop:'10%'}} className={classes.imageStyle}>               
            <div> <img src={`images/${item.image}` }  style={{width:'25%'}}/> </div>
            <div style={{fontFamily:'Popins',fontSize:'21px',fontWeight:'bold'}}>{item.heating} </div>
            <div style={{fontFamily:'popins',fontSize:'16px',fontWeight:'100'}} >{item.discraption} </div>
          </div>
          </div>
        </Paper>        
        )
    })
}
return(
<div style={{}}>
     <div style={{fontFamily:'monospace',fontSize:'14',fontWeight:'100',marginLeft:'5%',color:'red'}}>
                Features
            </div>
            <div style={{fontSize:'32px',fontFamily:'popins',fontWeight:'bold',marginLeft:'5%',marginTop:'1%'}}> 
                What I DO
             <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}> {PlayImages()}</div>
           
          
       </div>
    </div>
)

}


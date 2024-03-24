import React from "react";
import { Paper } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Slide } from "react-awesome-reveal";
import { useStyles } from "./projectcss";
export default function Project(){
    var classes=useStyles()
   var category=[ {
 
    discraption:"An e-commerce project involves creating and managing online platforms where goods or services are bought and sold. It includes setting up online stores, secure payment gateways, product listings, shopping carts, and order processing systems.",
    image:"1.png",
    heating:'e-commerce project'

},
{
 
    discraption:" my portfolio involves presenting a curated selection of my top projects, skills, and accomplishments. It provides a glimpse into my abilities and expertise, serving as a showcase for potential employers or clients to understand my capabilities ",
    image:"porfolio.png",
    heating:'porfolio project'

},
{
 
    discraption:"Node.js project focused on books: Web app to manage and display book collection, with features like adding, editing, searching, and displaying book details",
    image:"porfolio.png",
    heating:'backend project'

},



]

 
function PlayImages(){
    return category.map((item)=>{
    return(
        <div  >
                        <Slide direction="left">

        <Paper elevation={4} style={{width:'370px',height:'350px',borderWidth:'4px',borderColor:'#fff',display:'flex',borderStyle:'solid',margin:'3px'}}>
          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',backgroundColor:'#F8F9F9 ',}}>
            <div  style={{width:'100%',height:'80%',display:'flex',justifyContent:'center',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>               
            <div style={{height:'100%',width:'100%',alignItems:'center'}}> <img src={`images/${item.image}` } style={{width:'100%',height:'190px',objectFit:'cover'}}  className={classes.imageStyle} /></div>
            <div style={{fontFamily:'Popins',fontSize:'24px',fontWeight:'bold'}}>{item.heating} </div>
            <div style={{fontFamily:'popins',fontSize:'16px',fontWeight:'100',color:' #808080 ',width:'90%',marginTop:'3%'}}>{item.discraption} </div>
          </div>
          </div>
        </Paper>
        </Slide >
        </div>
        
        )
    })
}
return(
<div style={{ }}>
            <div style={{fontSize:'40px',fontFamily:'popins',fontWeight:'bold',marginLeft:'5%',marginTop:'1%',textAlign:'center'}}> 
                My Project
             <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}> {PlayImages()}</div>
           
          
       </div>
    </div>
)

}


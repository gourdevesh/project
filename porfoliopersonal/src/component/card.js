
import * as React from 'react';
import './bar.css';
export default function MediaCard() {
    var category=[ {
 
        discraption:"This is a backend project, it is dynamic and working,  .",
        image:"6.jpg",
        heating:'backebd-project'
    
    },
    {
     
        discraption:"This is a backend project, it is dynamic and working,  ",
        image:"7.jpg",
        heating:'backebd-project'
    
    },
    {
     
        discraption:"This is a backend project, it is dynamic and working,   .",
        image:"5.jpg",
        heating:'backebd-project'
    
    },
    {
     
        discraption:"This is a backend project, it is dynamic and working,  .",
        image:"9.jpg",
        heating:'backebd-project'
    
    },
    {
     
        discraption:"This is a backend project, it is dynamic and working,   .",
        image:"13.jpg",
        heating:'backebd-project'
    
    },
    {
     
        discraption:"This is a backend project, it is dynamic and working,  .",
        image:"img.jpg",
        heating:'backebd-project'
    
    },
    
    
    
    ]
    function PlayImages(){
    return category.map((item)=>{
  return (
    <div style={{width:'330px',height:'450px',borderWidth:'4px',borderColor:'#fff',borderStyle:'solid',margin:'25px'}} >      
<div class='card'>
   <img src={`images/${item.image}`} class='card-image'/ >
         <div class='card-body'>           
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
   

      </div>
    </div>
    </div>
  );
})
}
return(
<div >
    <div style={{fontFamily:'popins',fontSize:"32px",fontWeight:"bold",textAlign:"center"}}>Blog</div>
             <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}> {PlayImages()}</div>
           
          
    </div>
)

}


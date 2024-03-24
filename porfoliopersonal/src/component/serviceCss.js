import { makeStyles } from "@mui/styles"
import { margin } from "@mui/system"

export const  useStyles=makeStyles({

    position:{
        position:'relative'
    },
    

    imageStyle:{
       
        cursor:'pointer',
        "&:hover":{
            transform:'Scale(1.1)',
            // backgroundColor:'rgb(231,61,85)',
            color:'#fff',
            cursor:'pointer',
         },
    },
 
    bar:{
       
        cursor:'pointer',
        "&:hover":{
            transform:'Scale(1.1)',
            cursor:'pointer',
           
         },
    },

})
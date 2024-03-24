import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  imageStyle: {
    content: " ",
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '3px',
    width: '0%',
    transition: 'all ease 1s',
    backgroundColor: 'red',
    '&:hover': {
      width: '100%',
    },
  },
});
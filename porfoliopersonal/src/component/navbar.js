// // Navbar.js
// import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";

// export default function Navbar({
//   scrollToHome,
//   scrollToAbout,
//   scrollToService,
//   scrollToSkill,
//   scrollToProject,
//   scrollToblog,
//   scrollToContact,
// }) {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up("sm"));


//   const [isNavbarFixed, setIsNavbarFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Add a scroll threshold (e.g., 50) to determine when to fix the navbar
//       if (window.scrollY > 50) {
//         setIsNavbarFixed(true);
//       } else {
//         setIsNavbarFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <AppBar
//     position={isNavbarFixed ? "fixed" : "initial"}
//       style={{
//         backgroundColor: "#F8F9F9",
//         height: "50px",
//         justifyContent: "center",
//         width: "100%",
//       }}
//     >
//       <Toolbar>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             width: "100%",
//             justifyContent: "space-between",
//             color: "black",
//             fontFamily: "Poppins",
//             fontSize: "15px",
//             fontWeight: "400",

//             zIndex: isNavbarFixed ? 1 : "auto"

            
//           }}
//         >
//           <div style={{ marginLeft: "25px" }}>Portfolio</div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "50%",
//               color: "black",
//               fontSize: "15px",
//               fontFamily: "Poppins",
//               justifyContent: "space-evenly",
//             }}
//           >
//             {matches ? (
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "space-evenly",
//                   color: "black",
//                   fontSize: "15px",
//                   fontFamily: "Poppins",
//                   width: "80%",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div onClick={scrollToHome}>Home</div>
//                 <div onClick={scrollToAbout}>About</div>
//                 <div onClick={scrollToService}>Service</div>
//                 <div onClick={scrollToSkill}>Skill</div>
//                 <div onClick={scrollToProject}>Project</div>
//                 <div onClick={scrollToblog}>blog</div>
//                 <div onClick={scrollToContact}>Contact</div>
//               </div>
//             ) : (
//               <div>Menu Icon (for small screens)</div>
//             )}
//           </div>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }
import React, { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({
  scrollToHome,
  scrollToAbout,
  scrollToService,
  scrollToSkill,
  scrollToProject,
  scrollToblog,
  scrollToContact,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add a scroll threshold (e.g., 50) to determine when to fix the navbar
      if (window.scrollY > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", onClick: scrollToHome },
    { label: "About", onClick: scrollToAbout },
    { label: "Service", onClick: scrollToService },
    { label: "Skill", onClick: scrollToSkill },
    { label: "Project", onClick: scrollToProject },
    { label: "Blog", onClick: scrollToblog },
    { label: "Contact", onClick: scrollToContact },
  ];

  return (
    <AppBar
      position={isNavbarFixed ? "fixed" : "initial"}
      style={{
        backgroundColor: "#F8F9F9",
        height: "50px",
        width: "100%",
      }}
    >
      <Toolbar>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            color: "black",
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: "400",
            zIndex: isNavbarFixed ? 1 : "auto",
          }}
        >
          <div style={{ marginLeft: "25px" }}>Portfolio</div>
          {matches ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "50%",
                color: "black",
                fontSize: "15px",
                fontFamily: "Poppins",
                justifyContent: "space-evenly",
              }}
            >
              {menuItems.map((item, index) => (
                <div key={index} onClick={item.onClick}>
                  {item.label}
                </div>
              ))}
            </div>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </Toolbar>
      <Drawer anchor="right" open={isMenuOpen} onClose={closeMenu}>
        <CloseIcon onClick={closeMenu} style={{margin:'17%'}}/>
        <List>
          {menuItems.map((item, index) => (
            <ListItem  key={index} onClick={() => {
              item.onClick();
              closeMenu();
            }}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}


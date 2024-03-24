import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import About from './component/about';
import Service from './component/service';
import Project from './component/project';
import Contact from './component/contact';
import FullWidthTabs from './component/aboutdetails';
import Skill from './component/skill';
import MediaCard from './component/card';
import { color } from '@mui/system';
import { useRef } from 'react';
import Footer from './component/footer';
function App() {
// Create refs for each section
const homeRef = useRef(null);
const serviceRef = useRef(null);
const contactRef = useRef(null);
const aboutRef = useRef(null);
const blogRef = useRef(null);
const projectRef = useRef(null);
const skillRef = useRef(null);


const scrollToHome = () => {
  if (homeRef.current) {
    homeRef.current.scrollIntoView({ behavior: "smooth" });


}
};

const scrollToAbout = () => {
  if (aboutRef.current) {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToService = () => {
  if (serviceRef.current) {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToSkill= () => {
  if (skillRef.current) {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToProject= () => {
  if (projectRef.current) {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToblog= () => {
  if (blogRef.current) {
    blogRef.current.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToContact= () => {
  if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
   
  <div>         
 <div >
<Navbar    scrollToHome={scrollToHome}scrollToService={scrollToService}scrollToContact={scrollToContact} scrollToProject={scrollToProject}scrollToSkill={scrollToSkill}scrollToblog={scrollToblog} scrollToAbout={scrollToAbout}/>
</div>
 <div style={{marginTop:'4%'}} ref={homeRef}>
<About />
</div> 
<div style={{marginTop:'4%'}}  ref={aboutRef}>
  <FullWidthTabs/>
</div>
 <div  style={{marginTop:'4%'}}  ref={serviceRef}  >
<Service/>
</div>
<div  style={{marginTop:'4%'}}  ref={skillRef}>
 <Skill/>
</div>
<div  style={{marginTop:'4%'}}  ref={projectRef}>
 <Project/>
</div>
<div  style={{marginTop:'4%'}}  ref={blogRef}>
  <MediaCard/>
</div>

 <div ref={contactRef} >
<Contact/>
</div> 

<div ref={contactRef}  style={{marginTop:'4%'}}>
<Footer/>
</div> 
</div>
  );
}

export default App;

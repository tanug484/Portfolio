import React,{lazy,Suspense} from "react";
import "./index.css";
import { Route,Routes } from "react-router-dom";
const Home=lazy(()=>import('./routes/Home'))
const About=lazy(()=>import('./routes/About'))
const Contact=lazy(()=>import('./routes/Contact'))
const Project=lazy(()=>import('./routes/Project'))


function App() {
  return (
    <>
      <Suspense fallback={<div className='d-flex justify-content-center align-item-center'>
    <div className='spinner-border'role="status"  style={{width:'3rem',height:'3rem',marginTop:'20%',color:'white'}}>
      <span className='sr-only'></span>
    </div>
   </div>}>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        </Suspense>
    </>
  );
}

export default App;

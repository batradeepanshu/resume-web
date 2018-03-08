import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/Header.css'

 const Header=(props)=>{
   return (
     <div className='header-wrapper clearfix' ref={props.heightRef}>
       <ul>
         <Link to={"/resume-web"}>HOME</Link>
         <Link to='/skills'>SKILLStest22</Link>
         <Link to='/kills'>EXPERIENCE</Link>
         <Link to='/'>PROJECTS</Link>
         <Link to='/'>CONTACT</Link>
       </ul>
     </div>
   )
 };
 export default Header;

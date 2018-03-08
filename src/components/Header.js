import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/Header.css'

 const Header=(props)=>{
   return (
     <div className='header-wrapper clearfix' ref={props.heightRef}>
       <ul>
         <Link to={process.env.PUBLIC_URL + '/'}>HOME</Link>
         <Link to='/skills'>SKILLS</Link>
         <Link to='/'>EXPERIENCE</Link>
         <Link to='/'>PROJECTS</Link>
         <Link to='/'>CONTACT</Link>
       </ul>
     </div>
   )
 };
 export default Header;

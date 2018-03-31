import React,{Component} from 'react';
import { Link,withRouter } from 'react-router-dom';
import '../stylesheet/Header.css'

 export const Header=(props)=>{
   return (
     <div className='header-wrapper clearfix' ref={props.heightRef}>
       <ul>
         <Link to={"/"}>HOME</Link>
         <Link to='/skills'>SKILLS</Link>
         <Link to='/experience'>EXPERIENCE</Link>
         <Link to='/projects'>PROJECTS</Link>
         <Link to='/'>CONTACT</Link>
       </ul>
     </div>
   )
 };
 class ResponsiveHeader extends Component{
   render(){
     return (
       <div className='responsive-header'>
        {this.props.history.location.pathname=='/' && (
          <React.Fragment>
          <div className='name-head'>John Doe</div>
          <div className='role-head'>Web Developer</div>
        </React.Fragment>
        )}
       </div>
     );
   }
 }
 export default withRouter(ResponsiveHeader)

import React,{Component} from 'react';
import { Link,withRouter } from 'react-router-dom';
import '../stylesheet/Hamburger.css';
import '../stylesheet/Header.css';

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
   constructor(){
     super();
     this.state={
       hamburgerOpen:false
     };
   }
   openHamMenu(){
     this.setState({hamburgerOpen:!this.state.hamburgerOpen})
   }
   renderPageName(){

     return <div className='me-wrapper'>
     <div className='page-head-resp'>{this.props.history.location.pathname.split('/')[1]}</div>
   </div>

   }
   render(){
     return (
       <div className='resp responsive-header clearfix' ref={this.props.respHeaderRef}>
        {this.props.history.location.pathname=='/' ? (
          <div className='me-wrapper'>
          <div className='name-head'>{(process.env.NODE_ENV=='development')?'John Doe':'Deepanshu Batra'}</div>
          <div className='role-head'>Web Developer</div>
        </div>
      ):this.renderPageName()}

        <button className={"hamburger hamburger--collapse "+(this.state.hamburgerOpen?"is-active":"")} onClick={this.openHamMenu.bind(this)} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
        </button>
        <div className={'responsive-header-menu'+(this.state.hamburgerOpen?'-show':'-hide')}>
          <div className='close-nav' onClick={this.openHamMenu.bind(this)}>x</div>
          <ul>
            <Link to={"/"} onClick={this.openHamMenu.bind(this)}>HOME</Link>
            <Link to='/skills' onClick={this.openHamMenu.bind(this)}>SKILLS</Link>
            <Link to='/experience' onClick={this.openHamMenu.bind(this)}>EXPERIENCE</Link>
            <Link to='/projects' onClick={this.openHamMenu.bind(this)}>PROJECTS</Link>
            <Link to='/' onClick={this.openHamMenu.bind(this)}>CONTACT</Link>
          </ul>
        </div>
       </div>
     );
   }
 }
 export default withRouter(ResponsiveHeader)

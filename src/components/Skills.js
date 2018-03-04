import React,{Component} from "react";
import "../stylesheet/Skills.css";

class Skills extends Component{
  render(){
    return(
      <div className='skills-wrapper'>
        <div className='skills-head'>Skills</div>
        <div className='sub-section'>
          <div className='sub-head'>TECHNOLOGIES</div>
          <div className='sub-content'>

          </div>
        </div>
        <div className='sub-section'>
          <div className='sub-head'>TOOLS</div>
          <div className='sub-content'></div>
        </div>
        <div className='sub-section'>
          <div className='sub-head'>LIBRARIES/FRAMEWORKS</div>
          <div className='sub-content'></div>
        </div>
      </div>
    );
  }
}
export default Skills;

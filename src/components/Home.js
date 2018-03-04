import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import "../stylesheet/Home.css";

class Home extends Component{
  changeRoute(route){
    this.props.history.push(route);
  }
  render(){
    const {homeHeight,setPage}=this.props;
    return <div className='home-wrap' style={{height:homeHeight}}>
      <div className='left-section col-md-6'>
        <div className='me-container'>
        <div className='name'>John Doe</div>
        <div className='job-role'>Web Developer</div>
        <img src='https://static.wixstatic.com/media/84770f_71b71726d1644b0baa8482970c919460.jpg/v1/fill/w_385,h_380,al_c,q_80,usm_0.66_1.00_0.01/84770f_71b71726d1644b0baa8482970c919460.webp'/>
        </div>
      </div>
      <div className='right-section col-md-6'>
        <div className='me-container2'>
        <div className='salutation'>Hello,</div>
        <div className='brief-about-me'>We come from the land of the ice and snow,
        From the midnight sun where the hot spring flows</div>
        <div className='res-wor-ski'>
          <div className='r-w-s'>
            My Work
          </div>
          <div className='r-w-s' onClick={this.changeRoute.bind(this,"/skills")}>
            My Skills
          </div>
          <div className='r-w-s'>
            My Resume
          </div>
        </div>
        </div>
      </div>
    </div>;
  }

};
export default withRouter(Home);

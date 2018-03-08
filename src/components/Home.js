import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import "../stylesheet/Home.css";

class Home extends Component{
  constructor(){
    super();

  }
  changeRoute(route){
    this.props.history.push(route);
  }


  render(){
    const {homeHeight,setPage}=this.props;
    return <div className={'home-wrap transition-item'} style={{height:homeHeight}}>
      <div className='left-section col-md-6'>
        <div className='me-container'>
        <div className='name'>John Doe</div>
        <div className='job-role'>Web Developer</div>
        <img className='animate' src='http://indiannerve.com/wp-content/uploads/2013/10/HughJackman_micrmax-brand-ambassador.jpg'/>
        {/* <img src='https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/15230797_1194780783902576_8799157982835144409_n.jpg?oh=2cb47e2eb5b6dd27e451cb5fe3feae2a&oe=5B456484'/> */}

        </div>
      </div>
      <div className='right-section col-md-6'>
        <div className='me-container2'>
        <div className='salutation'>Hello,</div>
        <div className='brief-about-me'>We come from the land of the ice and snow,
        From the midnight sun where the hot spring flows</div>
        <div className='res-wor-ski'>
          <div className='r-w-s animate'>
            Projects
          </div>
          <div className='r-w-s animate' onClick={this.changeRoute.bind(this,"/skills")}>
            Skills
          </div>
          <div className='r-w-s animate'>
            My Resume
          </div>
        </div>
        </div>
      </div>
    </div>;
  }
  componentDidMount(){

      // this.setState({animate:true});

  }

};
export default withRouter(Home);

import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import Loader from './Loader';
import "../stylesheet/Home.css";

class Home extends Component{
  constructor(){
    super();
    this.state={loading:true};
    this.imagesLoaded=0;
  }
  changeRoute(route){
    this.props.history.push(route);
  }
  onImageLoad(){
      this.imagesLoaded++;
      if(this.imagesLoaded===this.totalImages){
        this.setState({loading:false});
      }
  }
  componentDidMount(){
    let imageElements=document.getElementsByTagName('img');
    this.totalImages=imageElements.length;
    for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].addEventListener("load", this.onImageLoad.bind(this));
      }
  }

  render(){
    const {homeHeight,setPage}=this.props;
    return (
      <React.Fragment>
      {this.state.loading && <Loader height={this.props.homeHeight}/>}
      <div className={'home-wrap transition-item '+(this.state.loading?'hide':'')} style={{height:homeHeight}}>
        <div className='left-section col-md-6'>
          <div className='me-container'>
          <div className='name'>John Doe</div>
          <div className='job-role'>Web Developer</div>
          <img className='animate' src={process.env.PUBLIC_URL+"/assets/me3.jpeg"}/>
          {/* <img src='https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/15230797_1194780783902576_8799157982835144409_n.jpg?oh=2cb47e2eb5b6dd27e451cb5fe3feae2a&oe=5B456484'/> */}

          </div>
        </div>
        <div className='right-section col-md-6'>
          <div className='me-container2'>
          <div className='salutation'>Hello,</div>
          <div className='brief-about-me'>We come from the land of the ice and snow,
          From the midnight sun where the hot spring flows
          The hammer of the gods<br/>
          W'ell drive our ships to new lands<br/>
          To fight the horde, and sing and cry<br/>
          Valhalla, I am coming!

        </div>
          <div className='res-wor-ski'>
            <div className='r-w-s animate'>
              Projects
            </div>
            <div className='r-w-s animate' onClick={this.changeRoute.bind(this,"/skills")}>
              Skills
            </div>
            <div className='r-w-s green animate'>
              My Resume
            </div>
          </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }


};
export default withRouter(Home);

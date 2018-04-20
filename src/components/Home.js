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
  calculateHeight(homeHeight){
    let height =(window.innerWidth>480?
      (window.innerWidth>935?homeHeight:(homeHeight*.9)):'auto');
      return height;
  }

  render(){
    const {homeHeight,setPage}=this.props;
    return (
      <React.Fragment>
      {this.state.loading && <Loader height={this.props.homeHeight}/>}
      <div className={'home-wrap transition-item '+(this.state.loading?'hide':'')} style={{height:this.calculateHeight(homeHeight)}}>
        <div className='resp resp-r-w-s-wrap'>
          {/* <div onClick={this.changeRoute.bind(this,"/projects")} className='resp-r-w-s'>Projects</div>
          <div onClick={this.changeRoute.bind(this,"/skills")} className='resp-r-w-s'>Skills</div> */}
          <div onClick={this.changeRoute.bind(this,"/projects")} className='resp-r-w-s'>Download Resume</div>
        </div>
        <div className='left-section col-md-6 col-xs-6 col-sm-6'>
          <div className={(window.innerWidth>480?'me-container':'')}>
          <div className='name'>John Doe</div>
          <div className='job-role'>Web Developer</div>
          <img className='animate' src={process.env.PUBLIC_URL+"/assets/me3.jpeg"}/>
          </div>

        </div>
        <div className='right-section col-xs-6 col-md-6 col-sm-6'>
          <div className={(window.innerWidth>480?'me-container2':'')}>
          <div className='salutation'>Hello,</div>
          <div className='brief-about-me'>We come from the land of the ice and snow,
          From the midnight sun where the hot spring flows
          The hammer of the gods
          W'ell drive our ships to new lands
          To fight the horde, and sing and cry
          Valhalla, I am coming!

        </div>
          <div className='res-wor-ski non-resp clearfix'>
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

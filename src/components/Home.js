import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import Loader from './Loader';
import "../stylesheet/Home.css";


const PROD_DEV_STRINGS_MAP={
  aboutMe:{
    development:'We come from the land of the ice and snow, From the midnight sun where the hot spring flows The hammer of the gods Well drive our ships to new lands To fight the horde, and sing and cry Valhalla, I am coming!',
    production: 'I am a UI Developer based in Noida,India with 4 years of extensive experince in developing large and small Web applications ,with large MNCs and even startups.\r\n            <p> I work with the latest UI technologies to make responsive Web applications\/PWAs which are :-<\/p>\r\n            <ul>\r\n            <li>high in performance<\/li>\r\n            <li>are scalable and maintainable<\/li>\r\n          <\/ul>'
  }
}
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
      return height-10;
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
          <a href={process.env.PUBLIC_URL+"/assets/Resume 16 April.docx"} className='resp-r-w-s'>Download Resume
          <img className={process.env.NODE_ENV=='development'?'dev animate':'animate'} src={process.env.PUBLIC_URL+"/assets/download.png"}/>
        </a>
        </div>
        <div className='left-section col-md-6 col-xs-6 col-sm-6'>
          <div className={(window.innerWidth>480?'me-container':'')}>
          <div className='name'>{process.env.NODE_ENV=='development'?'John Doe':'Deepanshu Batra'}</div>
          <div className='job-role'>Web Developer</div>
          <img className={process.env.NODE_ENV=='development'?'dev animate':'animate'} src={process.env.PUBLIC_URL+"/assets/me3.jpeg"}/>
          </div>

        </div>
        <div className='right-section col-xs-6 col-md-6 col-sm-6'>
          <div className={(window.innerWidth>480?'me-container2':'')}>
          <div className='salutation'>Hello,</div>
          <div className='brief-about-me' dangerouslySetInnerHTML={{__html:PROD_DEV_STRINGS_MAP.aboutMe[process.env.NODE_ENV]}}>
        </div>
          <div className='res-wor-ski non-resp clearfix'>
            <div className='r-w-s animate' onClick={this.changeRoute.bind(this,"/projects")}>
              Projects
            </div>
            <div className='r-w-s animate' onClick={this.changeRoute.bind(this,"/skills")}>
              Skills
            </div>
            <a href={process.env.PUBLIC_URL+"/assets/Resume 16 April.docx"} className='r-w-s green animate'>
               Resume
             </a>
          </div>
          </div>
        </div>
      </div>
      {/* <div className='separation-stripe'></div> */}
      </React.Fragment>
    );
  }


};
export default withRouter(Home);

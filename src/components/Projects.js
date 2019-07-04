import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loader from "./Loader";
import ScreenshotsModal from "./ScreenShotsModal";
import {PROJECTS} from "../constants/const";
import "../stylesheet/Projects.css";

class Projects extends Component {
  constructor() {
    super();
    this.imagesLoaded = 0;
    this.projects = PROJECTS;
    this.state = {
      selectedProject: this.projects[2],
      loading: true
    };
  }
  onScreenShotClicked(source) {
    window.scrollTo(0,0);
    this.setState({
      screenShotSrc: source
    });
  }
  renderScreenShots() {
    return this.state.selectedProject.screenshots.map((source, index) => {
      let imgSrc = process.env.PUBLIC_URL + "/assets/screenshots/" + source + ".png";
      return (
        <img
          onClick={this.onScreenShotClicked.bind(this, imgSrc)}
          src={imgSrc}
          key={source + index}
        />
      );
    });
  }
  onImageLoad() {
    this.imagesLoaded++;
    if (this.imagesLoaded === this.totalImages) {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    let imageElements = document.getElementsByTagName("img");
    this.totalImages = imageElements.length;
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].addEventListener("load", this.onImageLoad.bind(this));
    }
  }
  setSelectedProject(project) {
    this.setState({
      selectedProject: project
    });
  }
  renderProjects() {
    return this.projects.map((project, index) => {
      return (
        <div className="project col-md-4 col-xs-4">
          <div className="project-image" onClick={this.setSelectedProject.bind(this, project)}>
            <div className="overlay" />
            {this.state.selectedProject.name == project.name && <div className="active-project" />}
            <img src={project.imageSrc} />
          </div>
          <div className="project-name">{project.name}</div>
        </div>
      );
    });
  }
  goToNextPreviousImage(flag){
    let futureIndex;
    let currentSrc=this.state.screenShotSrc;
    currentSrc=currentSrc.split('/');
    currentSrc=currentSrc[currentSrc.length-1].split('.')[0];
    let currentPro=this.projects.filter((project)=>{
      return project.screenshots.indexOf(currentSrc)!=-1
    });
    let {screenshots}=currentPro[0];
    if(flag=='next'){
      let currentIndex=screenshots.indexOf(currentSrc);
      if(currentIndex==(screenshots.length-1)){
      futureIndex=0;
      }
      else{
        futureIndex=currentIndex+1
      }
    }else{
      let currentIndex=screenshots.indexOf(currentSrc);
      if(currentIndex==0){
      futureIndex=screenshots.length-1;
      }
      else{
        futureIndex=currentIndex-1
      }
    }
    let imgSrc = process.env.PUBLIC_URL + "/assets/screenshots/" + screenshots[futureIndex] + ".png";
    this.setState({
      screenShotSrc:imgSrc
    });

  }
  render() {
    const { name, summary, webLink } = this.state.selectedProject;
    return (
      <React.Fragment>
      {this.state.loading && <Loader height={this.props.height}/>}


        <div className={"projects-wrapper animate "+(this.state.loading?'hide':'')}>
          {this.state.screenShotSrc && (
            <ScreenshotsModal onScreenShotClicked={this.onScreenShotClicked.bind(this)}
              goToNextPreviousImage={this.goToNextPreviousImage.bind(this)}
              >
              <img src={this.state.screenShotSrc} />
            </ScreenshotsModal>
          )}
          <div className="page-head pro-head">Projects</div>
          <div className="pro-left col-md-6 clearfix">{this.renderProjects()}</div>
          <div className="pro-right col-md-6 clearfix">
            <div className="project-detail">
              <div className="pro-name">{name}</div>
              <div className="web-link">
                <a href={"//" + webLink} target="_blank">
                  <span>Link to website</span>
                </a>
              </div>
              <div className="pro-summary" dangerouslySetInnerHTML={{ __html: summary }}></div>
              <div className="screenshots">
                {Boolean(this.state.selectedProject.screenshots.length)? <div className="screen-head">Screenshots</div>:''}
                <div className="images">{this.renderScreenShots()}</div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
    );
  }
}

export default Projects;

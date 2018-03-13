import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import Loader from './Loader';
import ScreenshotsModal from './ScreenShotsModal';
import "../stylesheet/Projects.css";

class Projects extends Component{
  constructor(){
    super();
    this.projects=[
      {
        name:'Sears parts direct',
        imageSrc:process.env.PUBLIC_URL+"/assets/searsproject.jpg",
        webLink:'www.searspartsdirect.com',
        summary:"<p>Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum</p><p>Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum</p><p>Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum,Lorel Ipsum</p>",
        screenshots:['choosemission','embibe_home_page','learn','searchResults','searchResults2']
      },
      {
        name:'Quote 2 Order',
        imageSrc:process.env.PUBLIC_URL+"/assets/q2o.jpg",
        webLink:'www.searspartsdirect.com',
        summary:'Q2o summary',
        screenshots:['choosemission','embibe_home_page','learn','searchResults','searchResults2']
      },
      {
        name:'Embibe',
        imageSrc:process.env.PUBLIC_URL+"/assets/embibeproject.jpg",
        webLink:'www.embibe.com/landing',
        summary:'embie summary',
        screenshots:['choosemission','embibe_home_page','learn','searchResults','searchResults2']
      },

    ];
    this.state={selectedProject:this.projects[0]};
  }
  onScreenShotClicked(source){
    this.setState({
      screenShotSrc:source
    });
  }
  renderScreenShots(){
    return this.state.selectedProject.screenshots.map((source,index)=>{
      let imgSrc=process.env.PUBLIC_URL+"/assets/screenshots/"+source+".png";
      return (
        <img onClick={this.onScreenShotClicked.bind(this,imgSrc)} src={imgSrc} key={source+index}/>
      );
    })

  }
  setSelectedProject(project){
    this.setState({
      selectedProject:project
    });
  }
  renderProjects(){
    return this.projects.map((project,index)=>{
      return (
        <div className='project col-md-4 col-xs-4' key={project.name+index}>
          <div className='project-image' onClick={this.setSelectedProject.bind(this,project)}>
            <div className='overlay'></div>
            {this.state.selectedProject.name==project.name && <div className='active-project'></div>}
            <img src={project.imageSrc}/>
          </div>
        <div className='project-name'>
          {project.name}
        </div>
      </div>
    );
    })

  }
  render(){
    const {name,summary,webLink}=this.state.selectedProject;
    return (
      <div className='projects-wrapper animate'>
        {this.state.screenShotSrc && <ScreenshotsModal>
          <img src={this.state.screenShotSrc}/>
        </ScreenshotsModal>}
        <div className="page-head pro-head">Projects</div>
        <div className='pro-left col-md-6'>
          {this.renderProjects()}
          </div>
        <div className='pro-right col-md-6'>
          <div className='project-detail'>
            <div className='pro-name'>{name}</div>
            <div className='web-link'>
              <a href={'//'+webLink} target='_blank'><span>Link to website</span></a></div>
            <div className='pro-summary' dangerouslySetInnerHTML={{__html:summary}}/>
            <div className='screenshots'>
              <div className='screen-head'>
                Screenshots
              </div>
              <div className='images'>
                {this.renderScreenShots()}
              </div>
            </div>
          </div>
        </div>

    </div>
    );
  }

}

export default Projects;

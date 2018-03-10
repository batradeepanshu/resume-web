import React, { Component } from "react";
import Loader from './Loader.js';
import "../stylesheet/Timeline.css";

const TimelineElement = ({ date, company, description,color,imgSrc,logo}) => {
  return (
    <div className="timeline-element clearfix animate">
      <div className="line-circle">
        <div className="timeline-circle" style={{backgroundColor:color,borderRadius:logo!=='rect'?'50%':'0'}}>
          <img src={imgSrc}/>
        </div>
        <div className="timeline-line" />
      </div>
      <div className="timeline-content">
        <div className="content-date">{date}</div>
        <div className="content-profile">{company}</div>
        <div className="content-description" dangerouslySetInnerHTML={{__html:description}}></div>
      </div>
    </div>
  );
};
class Timeline extends Component {
  constructor(){
    super();
    this.state={loading:true};
    this.imagesLoaded=0;
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
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loader/>}
        <div className={"timeline-wrap "+ (this.state.loading?'hide':'')}>
          <div className='page-head'>Experience</div>
          <TimelineElement
            date={"Feb 2017-Present"}
            company={"Embibe (Indiavidual Private Ltd)"}
            description={"Looking for new opportunities I joined Embibe <a href='//www.embibe.com/landing' target='_blank'>(www.embibe.com)</a>  Embibe is a Ed-Tech Startup that uses AI(Artificial Intelligence) to provide personalised Education guides and Packs to students preparing for various competetive Exams.I was involved in rearchitecturing the application's front End using ReactJs/Redux.I worked in a Team of 3 Front End Developers and was involved in architecting and developing the application from scratch"}
            color='white'
            imgSrc='https://d13l3vrk0vhr9w.cloudfront.net/images/common/embibelogo.svg'
          />
          <TimelineElement
            date={"Nov 2015-Feb 2017"}
            company={"Hewlett Packard Enterprise"}
            description={
              "HPE i.e Hewlett Packard was my First Company as a Full Time Employee,I worked with senior developers to manage large, complex design projects and involved in architecting the applications and development of common components."
            }
            color='white'
            imgSrc='https://s3.amazonaws.com/freebiesupply/large/2x/hewlett-packard-logo-png-transparent.png'
          />
          <TimelineElement
            date={"July 2015-Nov 2015"}
            company={"SEARS IT"}
            description={
              "I joined SEARS IT Pune as an Intern.The four months I worked there were Big Learning Experience."
            }
            color='white'
            logo='rect'
            imgSrc='https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062012/sears-thumb.png?itok=LktqWr5E'
          />
        </div>
      </React.Fragment>

    );
  }
}

export default Timeline;

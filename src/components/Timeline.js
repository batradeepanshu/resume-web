import React, { Component } from "react";
import Loader from "./Loader.js";
import "../stylesheet/Timeline.css";

const TimelineElement = ({
  date,
  company,
  description,
  color,
  imgSrc,
  logo
}) => {
  return (
    <div className="timeline-element clearfix animate">
      <div className="line-circle">
        <div
          className="timeline-circle"
          style={{
            backgroundColor: color,
            borderRadius: logo !== "rect" ? "50%" : "0"
          }}
        >
          <img src={imgSrc} />
        </div>
        <div className="timeline-line" />
      </div>
      <div className="timeline-content">
        <div className="content-date">{date}</div>
        <div className="content-profile">{company}</div>
        <div
          className="content-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
class Timeline extends Component {
  constructor() {
    super();
    this.state = { loading: true };
    this.imagesLoaded = 0;
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
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loader height={this.props.homeHeight} />}
        <div className={"timeline-wrap " + (this.state.loading ? "hide" : "")}>
          <div className="page-head">Experience</div>
          <TimelineElement
            date={"May 2018-Present"}
            company={"Publicis Sapient"}
            description={"Presently Working."}
            color="white"
            logo="rect"
            imgSrc={
              "data:image/png;base64,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"
            }
            // imgSrc='https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062012/sears-thumb.png?itok=LktqWr5E'
          />
          <TimelineElement
            date={"Feb 2017-May 2018"}
            company={"Embibe (Indiavidual Private Ltd)"}
            description={
              "Looking for new opportunities I joined Embibe <a href='//www.embibe.com/landing' target='_blank'>(www.embibe.com)</a>.I was involved in rearchitecturing the Embibe's Web Application's Front-End using ReactJs/Redux. I worked in a Team of 3 Front End Developers and was involved in developing the application from scratch.This is the place where I got to learn the most."
            }
            color="white"
            imgSrc="https://d13l3vrk0vhr9w.cloudfront.net/images/common/embibelogo.svg"
          />
          <TimelineElement
            date={"Nov 2015-Feb 2017"}
            company={"Hewlett Packard Enterprise"}
            description={
              "HPE i.e Hewlett Packard was my First Company as a Full Time/Permanent Employee.I worked on a Project as an AngularJS(ver 1) Developer.It was a great learning experience. I learned to develop large and scalable Websites"
            }
            color="white"
            imgSrc={process.env.PUBLIC_URL + "/assets/hplogo.jpg"}
            // imgSrc='https://s3.amazonaws.com/freebiesupply/large/2x/hewlett-packard-logo-png-transparent.png'
          />
          <TimelineElement
            date={"July 2015-Nov 2015"}
            company={"SEARS IT"}
            description={
              "I joined SEARS IT Pune as an Intern. I spent 4 months fixing the application's bugs and doing UI enhancements. It really got me interested in the UI development"
            }
            color="white"
            logo="rect"
            imgSrc={process.env.PUBLIC_URL + "/assets/searslogo.jpg"}
            // imgSrc='https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062012/sears-thumb.png?itok=LktqWr5E'
          />
          <TimelineElement
            date={"2011-May 2015"}
            company={"Btech-Computer Science"}
            description={"I graduated from college with an aggregate of 74%."}
            color="white"
            imgSrc={process.env.PUBLIC_URL + "/assets/degree.png"}
            // imgSrc='https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062012/sears-thumb.png?itok=LktqWr5E'
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Timeline;

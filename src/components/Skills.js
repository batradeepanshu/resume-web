import React, { Component } from "react";
import Loader from './Loader.js'
import "../stylesheet/Skills.css";
import axios from 'axios';

class Skills extends Component {
  constructor(){
    super();
    this.state={
      loading:true
    }
    this.imagesLoaded=0;
  }

  googleThisTech(e){
    let techName;
    if(e.target.tagName && e.target.hasAttribute('src')){
    let urlArray=e.target.src.split('/');
    techName=urlArray[urlArray.length-1].split(".")[0];
    window.open('http://google.com/search?q='+techName,'_blank');
    }
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
    const { minHeight } = this.props;

      return (<React.Fragment>
        {this.state.loading && <Loader height={this.props.minHeight}/>}
        <div className={'skills-wrapper transition-item '+ (this.state.loading && 'hide')} style={{ minHeight }}>
        <div className="skills-container" >
          <div className="page-head animate">Skills</div>
          <div className="sub-section" onClick={this.googleThisTech.bind(this)}>
            <div className="sub-head animate">TECHNOLOGIES</div>
            <div className="sub-content clearfix">
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/html.png"} />
                <span>HTML 5</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL +"/assets/css.png"} />
                <span>CSS 3</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/sass.png"} />
                <span>SASS</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/js.png"} />
                <span>Javascript</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/es6.png"} />
                <span>ECMAScript 6</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/node.png"} />
                <span>NodeJs</span>
              </div>
            </div>
          </div>
          <div className="sub-section" onClick={this.googleThisTech.bind(this)}>
            <div className="sub-head animate">TOOLS</div>
            <div className="sub-content clearfix">
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/npm.png"} />
                <span>npm</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/git.png"} />
                <span>Git</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/webpack.png"} />
                <span>Webpack</span>
              </div>
            </div>
          </div>
          <div className="sub-section" onClick={this.googleThisTech.bind(this)}>
            <div className="sub-head animate">LIBRARIES & FRAMEWORKS</div>
            <div className="sub-content">
              <div className="tech-ico-name" >
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/react.png"} />
                <span>React 16</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/redux.png"} />
                <span>Redux</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/angular.png"} />
                <span>Angular 1</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/jquery.png"} />
                <span>JQuery</span>
              </div>

              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/d3.png"} />
                <span>D3js</span>
              </div>
              <div className="tech-ico-name">
                <img className='animate' src={process.env.PUBLIC_URL+"/assets/bootstrap.png"} />
                <span>BOOTSTRAP 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
      );


  }
}
export default Skills;


// componentWillMount(){
  // axios.get('https://api.myjson.com/bins/j4khl').then((resp)=>{
  //   let buy=0,sell=0;
  //   resp.data.forEach((trade)=>{
  //     if(trade.Type=="Sell"){
  //       sell=sell+Number(trade['Amount'].split('.')[0]);
  //     }else{
  //       buy=buy+Number(trade['Amount'].split('.')[0]);
  //     }
  //   });
  // });

// }

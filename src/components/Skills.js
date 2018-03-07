import React, { Component } from "react";
import "../stylesheet/Skills.css";
import axios from 'axios';

class Skills extends Component {
  componentWillMount(){
    axios.get('https://api.myjson.com/bins/j4khl').then((resp)=>{

      let buy=0,sell=0;
      resp.data.forEach((trade)=>{
        if(trade.Type=="Sell"){
          sell=sell+Number(trade['Amount'].split('.')[0]);
        }else{
          buy=buy+Number(trade['Amount'].split('.')[0]);
        }
      });
      debugger;
    });
  }
  googleThisTech(e){
    let techName;
    if(e.target.tagName && e.target.hasAttribute('src')){
    let urlArray=e.target.src.split('/');
    techName=urlArray[urlArray.length-1].split(".")[0];
    }
    window.open('http://google.com/search?q='+techName,'_blank');
  }
  render() {
    const { minHeight } = this.props;
    return (
      <div className='skills-wrapper' style={{ minHeight }}>


      <div className="skills-container" >
        <div className="skills-head">Skills</div>
        <div className="sub-section" onClick={this.googleThisTech.bind(this)}>
          <div className="sub-head">TECHNOLOGIES</div>
          <div className="sub-content clearfix">
            <div className="tech-ico-name">
              <img src="/assets/html.png" />
              <span>HTML 5</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/css.png" />
              <span>CSS 3</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/sass.png" />
              <span>SASS</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/js.png" />
              <span>Javascript</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/es6.png" />
              <span>ECMAScript 6</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/node.png" />
              <span>NodeJs</span>
            </div>
          </div>
        </div>
        <div className="sub-section" onClick={this.googleThisTech.bind(this)}>
          <div className="sub-head">TOOLS</div>
          <div className="sub-content clearfix">
            <div className="tech-ico-name">
              <img src="/assets/npm.png" />
              <span>npm</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/git.png" />
              <span>Git</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/webpack.png" />
              <span>Webpack</span>
            </div>
          </div>
        </div>
        <div className="sub-section" onClick={this.googleThisTech.bind(this)}>
          <div className="sub-head">LIBRARIES & FRAMEWORKS</div>
          <div className="sub-content">
            <div className="tech-ico-name" >
              <img src="/assets/react.png" />
              <span>React 16</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/redux.png" />
              <span>Redux</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/angular.png" />
              <span>Angular 1</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/jquery.png" />
              <span>JQuery</span>
            </div>

            <div className="tech-ico-name">
              <img src="/assets/d3.png" />
              <span>D3js</span>
            </div>
            <div className="tech-ico-name">
              <img src="/assets/bootstrap.png" />
              <span>BOOTSTRAP 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Skills;

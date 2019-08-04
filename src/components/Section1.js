import React, { Component } from "react";
import ResponsiveHeader, { Header } from "./Header";
import { HashRouter, Route, Switch } from "react-router-dom";
// import AnimateHOC from './AnimateHOC';
import Home from "./Home";
import Skills from "./Skills";
import Loader from "./Loader";
import Projects from "./Projects";
import Timeline from "./Timeline";
import "../stylesheet/Section1.css";
class Section1 extends Component {
  constructor() {
    super();
    this.state = {
      page: "home"
    };
  }
  render() {
    return (
      <div className="section1-wrap">
        <HashRouter>
          <div>
            <Header
              heightRef={header => {
                this.header = header;
              }}
            />
            <ResponsiveHeader
              respHeaderRef={respHeaderRef => {
                this.respHeaderRef = respHeaderRef;
              }}
            />
            <Switch>
              {/* <Route exact path={'/'} component={AnimateHOC(Home)}/>
            <Route exact path={'/'} component={AnimateHOC(Skills)}/> */}
              {/* <Route exact path={'/resume-web'} render={()=>{return (<Home homeHeight={this.state.homeHeight || null}/>)}}/> */}
              <Route
                exact
                path={"/"}
                render={() => {
                  return <Home homeHeight={this.state.homeHeight || null} />;
                }}
              />
              <Route
                exact
                path="/skills"
                render={() => {
                  return <Skills minHeight={this.state.homeHeight || null} />;
                }}
              />
              <Route
                exact
                path="/experience"
                render={() => {
                  return (
                    <Timeline homeHeight={this.state.homeHeight || null} />
                  );
                }}
              />
              <Route
                exact
                path="/freelance"
                render={() => {
                  return <Projects height={this.state.homeHeight || null} />;
                }}
              />
              <Route
                exact
                path="/projects"
                render={() => {
                  return <Projects height={this.state.homeHeight || null} />;
                }}
              />
              <Route exact path="/loader" component={Loader} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
  componentDidMount() {
    let homeHeight;
    if (window.innerWidth <= 480) {
      homeHeight = window.innerHeight - this.respHeaderRef.offsetHeight;
    } else {
      homeHeight = window.innerHeight - this.header.offsetHeight;
    }
    this.setState({ homeHeight });
  }
}
export default Section1;

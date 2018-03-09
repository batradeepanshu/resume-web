import React,{Component} from "react";
import Header from "./Header";
import { HashRouter,Route,Switch } from 'react-router-dom';
// import AnimateHOC from './AnimateHOC';
import Home from "./Home";
import Skills from './Skills';
import Loader from './Loader';
import Timeline from './Timeline';
import "../stylesheet/Section1.css";
class Section1 extends Component{
  constructor(){
    super();
    this.state={
      page:'home'
    }
  }
  render(){
    return (
      <div className='section1-wrap'>
        <HashRouter>
          <div>
          <Header heightRef={(header)=>{this.header=header}}/>
          <Switch>
            {/* <Route exact path={'/'} component={AnimateHOC(Home)}/>
            <Route exact path={'/'} component={AnimateHOC(Skills)}/> */}
            {/* <Route exact path={'/resume-web'} render={()=>{return (<Home homeHeight={this.state.homeHeight || null}/>)}}/> */}
            <Route exact path={'/'} render={()=>{return (<Home homeHeight={this.state.homeHeight || null}/>)}}/>
            <Route exact path='/skills' render={()=>{return (
              <Skills minHeight={this.state.homeHeight || null}/>)}}/>
            <Route exact path='/experience' component={Timeline}/>
          </Switch>
          </div>
      </HashRouter>
    </div>);
  }
  componentDidMount(){
    let homeHeight=window.innerHeight-this.header.offsetHeight;
    this.setState({homeHeight});
  }
};
export default Section1;

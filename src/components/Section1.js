import React,{Component} from "react";
import Header from "./Header";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import AnimateHOC from './AnimateHOC';
import Home from "./Home";
import Skills from './Skills';
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
        <BrowserRouter>
          <div>
          <Header heightRef={(header)=>{this.header=header}}/>
          <Switch>
            <Route exact path='/' render={()=>{return <Home homeHeight={this.state.homeHeight || null}/>}}/>
            <Route exact path='/skills' render={()=>{return <Skills minHeight={this.state.homeHeight || null}/>}}/>
          </Switch>
          </div>
      </BrowserRouter>
    </div>);
  }
  componentDidMount(){
    let homeHeight=window.innerHeight-this.header.offsetHeight;
    this.setState({homeHeight});
    debugger;
  }
};
export default Section1;

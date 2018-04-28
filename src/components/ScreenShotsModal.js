import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import Loader from './Loader';
import "../stylesheet/ScreenshotsModal.css";

export default class ScreenshotsModal extends Component{
  render(){
    return (
      <React.Fragment>
        <div className='modal-backdrop' onClick={()=>{this.props.onScreenShotClicked(null)}}></div>
      <div className='screens-modal'>
        <span className='previous-screenshot'
          onClick={()=>{this.props.goToNextPreviousImage('previous')}}>Previous</span>
        {this.props.children}
        <span className='next-screenshot'
          onClick={()=>{this.props.goToNextPreviousImage('next')}}>Next</span>
      </div>
      <div className='resp-prev-next'>
        <span className='previous-screenshot-resp'
          onClick={()=>{this.props.goToNextPreviousImage('previous')}}>Previous</span>
        <span className='next-screenshot-resp'
          onClick={()=>{this.props.goToNextPreviousImage('next')}}>Next</span>  
      </div>

      </React.Fragment>
    );
  }
}

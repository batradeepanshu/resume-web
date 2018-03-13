import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import Loader from './Loader';
import "../stylesheet/ScreenshotsModal.css";

export default class ScreenshotsModal extends Component{
  render(){
    return (
      <React.Fragment>
        <div className='modal-backdrop'></div>
      <div className='screens-modal'>
        {this.props.children}
      </div>
      </React.Fragment>
    );
  }
}

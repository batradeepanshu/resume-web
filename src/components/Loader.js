import React from 'react';
import '../stylesheet/Loader.css'

const Loader=()=>{
  return (<div className="vertical-centered-box">
  <div className="content">
    <div className="loader-circle"></div>
    <div className="loader-line-mask one">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-mask two">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-mask three">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-mask four">
      <div className="loader-line"></div>
    </div>
  </div>
</div>)
}
export default Loader;

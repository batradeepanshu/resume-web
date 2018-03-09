import React from 'react';
import '../stylesheet/Loader.css'

const Loader=()=>{
  return (<div class="vertical-centered-box">
  <div class="content">
    <div class="loader-circle"></div>
    <div class="loader-line-mask one">
      <div class="loader-line"></div>
    </div>
    <div class="loader-line-mask two">
      <div class="loader-line"></div>
    </div>
    <div class="loader-line-mask three">
      <div class="loader-line"></div>
    </div>
    <div class="loader-line-mask four">
      <div class="loader-line"></div>
    </div>
  </div>
</div>)
}
export default Loader;

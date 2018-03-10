import React from 'react';
import '../stylesheet/Loader.css'

const Loader=({height})=>{
  return (<div className="vertical-centered-box" style={{height}}>
    {/* <div>
      LOADING .........
    </div> */}
    <div class="lds-circle"></div>

</div>)
}
export default Loader;

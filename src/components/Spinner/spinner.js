import React from 'react';
import { SpinnerContainer } from "./spinner.styles";
const Spinner = () => (

   <div>
   <SpinnerContainer />
   <div className="loader" >
   <div className="face">
     <div className="circle"></div>
   </div>
   <div className="face">
     <div className="circle"></div>
   </div>
 </div>
   </div>
);


export default Spinner;
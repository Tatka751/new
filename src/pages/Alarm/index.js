import React from "react";
import ReactDOM from "react-dom/client";
import GetTime from './components/GetTime/GetTime';

function Alarm() {
   return (
     <div className="App">
       <GetTime></GetTime>
     </div>
   );
 }

 Alarm()
 
 export default Alarm;
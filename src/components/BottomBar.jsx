import React from "react";

export default function BottomBar() {
   return (
      <div className="row justify-content-between align-content-center bottom-bar">
         <div className="col-lg-3 mt-3">
            <p>
               <span className="bf-gradient small">
                  Black Friday Deal is LIVE!
               </span>
               <br />
               60% off, 3X Limits & much more
            </p>
         </div>
         <div className="col-lg-3 mt-3">
            <p className="fs-4">
               Only <span className="number">171</span> Slots left
            </p>
         </div>
         <div className="col-lg-3 mt-3">
            <button className="button">Grab The Deal</button>
         </div>
      </div>
   );
}

import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../groovyWalk.json";
import LottieText from "./LottieText";

export default function LottieReact({ bg }) {
   const cssClass = `lotti_cont  row justify-content-around ${bg}`;
   return (
      <div className={cssClass}>
         <div className="col-lg-6 lottie_text">
            <LottieText />
         </div>
         <div className="col-lg-6">
            <Lottie animationData={groovyWalkAnimation} loop={true} />
         </div>
      </div>
   );
}

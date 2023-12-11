import React from "react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
   const [textColor, setTextColor] = useState(0);
   const [colors, setColors] = useState(["red", "green", "blue"]);
   if (textColor === 3) {
      setTextColor(0);
   }
   //    useEffect(() => {
   //       const interval = setInterval(() => {
   //          if (textColor === 2) setTextColor(0);
   //          else {
   //             setTextColor((prevState) => {
   //                return prevState + 1;
   //             });
   //          }
   //          console.log(colors[textColor]);
   //       }, 2000);

   //       return () => clearInterval(interval); // Clean up the interval on unmount
   //    }, [textColor]);
   return (
      <div className="typeAnim">
         Search{" "}
         <span className={colors[textColor]}>
            <TypeAnimation
               sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Traffic",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },

                  // wait 1s before replacing "Mice" with "Hamsters"
                  "Demand",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },

                  // wait 1s before replacing "Mice" with "Hamsters"

                  "Conversions",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },

                  // wait 1s before replacing "Mice" with "Hamsters"
               ]}
               //    wrapper="span"
               speed={60}
               style={{
                  display: "inline-block",
                  fontWeight: "500",
                  //   color: colors[textColor],
               }}
               repeat={Infinity}
            />
         </span>
         <br />
         From search
      </div>
   );
}

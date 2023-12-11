import React from "react";
import robot1 from "../assets/lOF5TPvuGPcU0HBFb4vyvE11lvXufZemYwZBSgPq.jpg";
import robot2 from "../assets/sNkOGJkxjsX53ITIdFp4m5CrgcOkwVnIHx9mVHe2.jpg";
import robot3 from "../assets/OnAXEv6O8iK2S0SOvwrcK6gIevuH2Eg2xLXgQJ3g.jpg";
import robot4 from "../assets/JlMry90Z6zwsOssK0pLIDFmVKGxlxJ4zy4sxxEw8.jpg";
import robot5 from "../assets/g9DOLLnCDzgFjP5FMbCOcLg23Wh2T5S0DSqKjhh6.jpg";
export default function Robots() {
   return (
      <section className="Robots mb-5">
         <div className="robot1">
            <div className="img">
               <img src={robot1} alt="" />
               <div className="overlay1">
                  {" "}
                  <ul>
                     <li>Lorem, ipsum dolor.</li>
                     <li>Lorem, ipsum dolor.</li>
                     <li>Lorem, ipsum dolor.</li>
                     <li>Lorem, ipsum dolor.</li>
                     <li>Lorem, ipsum dolor.</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="robots row justify-content-center mt-5">
            <div className="col-lg-3">
               <div className="img">
                  <img src={robot2} alt="" />
                  <div className="overlay">
                     <p>Lorem, ipsum dolor.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="img">
                  <img src={robot3} alt="" />
                  <div className="overlay">
                     {" "}
                     <p>Lorem, ipsum dolor.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="img">
                  <img src={robot5} alt="" />
                  <div className="overlay">
                     {" "}
                     <p>Lorem, ipsum dolor.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="img">
                  <img src={robot4} alt="" />
                  <div className="overlay">
                     {" "}
                     <p>Lorem, ipsum dolor.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo_1 from "../assets/64f8cb363b105b744bb22a2c_snadeal.svg/";
import logo_2 from "../assets/64f8cb3540b7a4dc70d08809_arkose.svg";
import logo_3 from "../assets/64f8cb36437fe65a9cf042c9_virgin.svg";
import logo_4 from "../assets/64f85bf10a8ce1f3a192dafe_Reliance.svg";
import logo_5 from "../assets/64f8cb3552f6dbc896743057_commscope.svg";
import logo_6 from "../assets/64f85bf28f261b0f4010b4b9_Razorpay.svg"

export default function SliderContainer() {
   const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 5,
      // slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 100,
      cssEase: "linear",
   };
   return (
      <div className="slider">
         <Slider {...settings}>
            <div>
               <img src={logo_1} alt="" />
            </div>
            <div>
               <img src={logo_2} alt="" />
            </div>
            <div>
               <img src={logo_3} alt="" />
            </div>
            <div>
               <img src={logo_4} alt="" />
            </div>
            <div>
               <img src={logo_5} alt="" />
            </div>
            <div>
               <img src={logo_6} alt="" />
            </div>
         </Slider>
      </div>
   );
}

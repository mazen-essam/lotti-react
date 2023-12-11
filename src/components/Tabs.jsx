import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Lottie_react from "./LottieReact";

function CustomTabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

CustomTabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export default function ScrollableTabs() {
   const [value, setValue] = useState(0);
   const tabsRef = useRef(null);
   const [isScrolling, setIsScrolling] = useState(false);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   // useEffect(() => {
   //    const handleScroll = () => {
   //       if (tabsRef.current) {
   //          const tabsOffsetTop = tabsRef.current.offsetTop - 100; // Adjust this value according to your layout
   //          const scrollPosition = window.scrollY;
   //          const tabsHeight = tabsRef.current.clientHeight;
   //          const windowHeight = window.innerHeight;

   //          if (scrollPosition >= tabsOffsetTop) {
   //             const maxTabIndex = Math.floor(
   //                (document.body.clientHeight - scrollPosition) / windowHeight
   //             );
   //             const tabIndex = Math.min(
   //                Math.floor((scrollPosition - tabsOffsetTop) / 300),
   //                maxTabIndex
   //             );
   //             setValue(tabIndex >= 0 ? tabIndex : 0);
   //          } else {
   //             setValue(0);
   //          }
   //       }
   //    };

   //    window.addEventListener("scroll", handleScroll);
   //    return () => {
   //       window.removeEventListener("scroll", handleScroll);
   //    };
   // }, []);

   return (
      <div className="tabs">
         {" "}
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }} ref={tabsRef}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant={isScrolling ? "scrollable" : "standard"}
                  scrollButtons={isScrolling ? "auto" : "off"}
               >
                  <Tab label="Item One" {...a11yProps(0)} color="White" />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                  <Tab label="Item Four" {...a11yProps(3)} />
               </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
               <Lottie_react bg={"color-1"} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               <Lottie_react bg={"color-2"} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <Lottie_react bg={"color-3"} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
               <Lottie_react bg={"color-4"} />
            </CustomTabPanel>
         </Box>
      </div>
   );
}

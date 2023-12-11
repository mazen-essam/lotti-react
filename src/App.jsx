import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Tabs from "./components/Tabs";
import Header from "./components/Header";
import SliderContainer from "./components/SliderContainer";
import BottomBar from "./components/BottomBar";
import Robots from "./components/Robots";
function App() {
   return (
      <main>
         <Header />
         <SliderContainer />
         <Tabs />
         <Robots/>
         <BottomBar />
      </main>
   );
}

export default App;

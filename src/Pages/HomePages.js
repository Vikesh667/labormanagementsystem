import React from "react";
import style from "./HomePages.module.css";
import Header from "../componenet/header/Header";
import Home from "../componenet/home/Home";
import About from "../componenet/about/About";
const HomePages = () => {
  return (
    <div>
    <Header/>
     <section id="home">
      <Home />
      </section>
      <section id="about">
     <About />
     </section>
    </div>
  );
};

export default HomePages;

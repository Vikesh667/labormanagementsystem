import React from "react";
import style from "./HomePages.module.css";
import Header from "../componenet/header/Header";
import Home from "../componenet/home/Home";
import About from "../componenet/about/About";
import ContactUs from "../componenet/contact/ContactUs";
import { Footer } from "../componenet/Footer";

const HomePages = () => {
  return (
    <div className={style.HomePages}>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default HomePages;

"use client";
import Header from "@/components/layouts/header"
import Footer from "@/components/layouts/footer"
import Slide from "@/components/slider/slide"
import SlideHomaPage from "@/components/slide/index"
import Twiter from "@/components/twiter/index"
import Pub from "@/components/pub/index"
import Pub2 from "@/components/pub/pub2"
import Left from "@/components/pub/left"
import Right from "@/components/pub/right"
import News from "@/components/news/index"
import Podcast from "@/components/podcast/index"
import Classement from "@/components/classement/index"
import Video from '@/components/video/index';
import Event from '@/components/event/index';
import WebRadio from '@/components/webRadio/index';
import NewsLetter from '@/components/newsletter/index';
import Application from '@/components/appilcation/index';
import Live from '@/components/layouts/live';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React, { useState, useEffect } from 'react';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 config.autoAddCss = false;

 library.add(fab, fas);




export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 342) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run effect only once on component mount
  
  
  return (
    <div className={scrolled ? "scrolled" : ""}>
    
    <Header></Header>
    <SlideHomaPage></SlideHomaPage>
    {/* <Left></Left> */}
    <Twiter></Twiter>
    <Pub></Pub>
    <News></News>
    <Podcast></Podcast>
    <Classement></Classement>
    <NewsLetter></NewsLetter>
    <Video></Video>
    <Pub2></Pub2>
    <WebRadio></WebRadio>
    <Event></Event>
    <Slide></Slide>
    <Application></Application>
    {/* <Operation></Operation> */}
    <Footer></Footer>
    <Live></Live>
    </div>
  );
}

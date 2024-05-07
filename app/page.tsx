import Header from "@/components/layouts/header"
import Footer from "@/components/layouts/footer"
import Slide from "@/components/slider/slide"
import Twiter from "@/components/twiter/index"
import Pub from "@/components/pub/index"
import News from "@/components/news/index"
import Podcast from "@/components/podcast/index"
import Classement from "@/components/classement/index"
import Video from '@/components/video/index';
import Event from '@/components/event/index';
import WebRadio from '@/components/webRadio/index';
import Operation from '@/components/operations/index';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";


 config.autoAddCss = false;

export default function Home() {
  return (
    <>
    <Header></Header>
    
    <Twiter></Twiter>
    <Pub></Pub>
    <Slide></Slide>
    <News></News>
    <Podcast></Podcast>
    <Classement></Classement>
    <Video></Video>
    <WebRadio></WebRadio>
    <Event></Event>
    {/* <Operation></Operation> */}
    {/* <Footer></Footer> */}
    </>
  );
}

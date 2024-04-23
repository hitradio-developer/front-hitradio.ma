import Header from "@/components/header"
import Footer from "@/components/footer"
import Slide from "@/components/slide"
import Twiter from "@/components/twiter/index"
import Pub from "@/components/pub/index"
 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";


 config.autoAddCss = false;

export default function Home() {
  return (
    <>
    <Header></Header>
    <Slide></Slide>
    <Twiter></Twiter>
    <Pub></Pub>
    <Footer></Footer>
    </>
  );
}

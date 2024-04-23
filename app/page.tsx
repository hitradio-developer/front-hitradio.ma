import Header from "@/components/layouts/header"
import Footer from "@/components/layouts/footer"
import Slide from "@/components/slide"
import Twiter from "@/components/twiter/index"
import Pub from "@/components/pub/index"
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

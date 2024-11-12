import Image from "next/image";
import Header from "@/components/Header/page";
import Hero from "./_home/Hero";
import Benefit from "./_home/Benefits";
import Feature from "./_home/Feature";
import Bottom from "./_home/Bottom";
import Footer from "@/components/Footer/page";
export default function Home() {
  return (
    <div>
      <div className="bg-[#f7f2f7]">
        <Header />
        <Hero />
      </div>
      <div>
        <Benefit />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <Bottom />
      </div>
      <div className="mt-[5%]">
        <Footer />
      </div>
    </div>
  );
}

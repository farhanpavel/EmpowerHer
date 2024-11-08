import Image from "next/image";
import Header from "@/components/Header/page";
import Hero from "./_home/Hero";
export default function Home() {
  return (
    <div>
      <div className="bg-[#f7f3f5]">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

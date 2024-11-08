import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="lg:flex  justify-around items-center min-h-screen container">
        <div className="flex flex-col justify-center order-last ">
          <Image
            src={"/images/hero.gif"}
            width={500}
            height={400}
            alt="hero"
            className="mx-auto"
          />
        </div>
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left ">
          <div className="bg-[#f7f3f5]">
            <h1 className="text-5xl font-bold  leading-[3.4rem] font-sansSerif text-[#4a4a4a]">
              Empower <br /> Life With Ease
            </h1>
          </div>
          <div>
            <p className="font-rubik text-center text-xl lg:text-left leading-[2rem] text-[#4a4a4a]">
              Welcome to EmpowerHer, your all-in-one platform for women’s
              empowerment. Report incidents, access healthcare guidance, seek
              legal support, and explore educational resources effortlessly.
              Women and girls can connect with authorities, receive career
              guidance, and even access funding securely with just a few clicks.
              Integrated to support your journey towards safety, health, and
              growth. Start your empowered life today!
            </p>
          </div>
          <div className="space-x-3 p-5 lg:p-0">
            <button className="px-6 font-rubik py-2 rounded-full bg-pink-600 text-white">
              Learn More
            </button>
            <button>
              <Link
                href={"/signup"}
                className="font-rubik px-6 py-2 border-[1px] rounded-full border-pink-600 text-pink-600"
              >
                Sign up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

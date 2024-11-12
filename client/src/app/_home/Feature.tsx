import Image from "next/image";
import React from "react";

export default function Feature() {
  return (
    <div id="feature">
      <div className="text-center mt-[10%]">
        <div className="font-rubik font-medium text-xl   text-[#FE2EB6] uppercase">
          <h1>Feature</h1>
        </div>
        <div className="font-sansSerif  text-5xl  mt-5 font-medium text-[#4a4a4a] ">
          <h1>
            Empower Change and Protection with <br /> EmpowerHer Features
          </h1>
        </div>
        <div className="mt-7">
          <p className="font-rubik text-center text-lg  text-[#4a4a4a] w-[75%] mx-auto ">
            EmpowerHer offers a suite of impactful features to drive change and
            support women’s rights. From reporting incidents to accessing
            healthcare and educational resources, EmpowerHer provides everything
            needed for a safer, more informed, and empowering experience
          </p>
        </div>
      </div>
      <div className="lg:flex  items-center justify-between container space-y-8 mt-10">
        <div>
          <Image
            src={"/images/feature.gif"}
            width={500}
            height={500}
            alt="feature"
            className="mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:w-1/2 ">
          <div className="space-y-4  shadow-xl p-10 bg-[#FF2EBC] text-white">
            <div className="text-lg font-sansSerif font-semibold">
              <h1>User-Friendly Dashboard</h1>
            </div>
            <div className="text-sm  font-rubik">
              <p>
                Easily navigate essential features with a clean and intuitive
                interface designed for victims, advocates, and authorities.
              </p>
            </div>
          </div>
          <div className="space-y-4 shadow p-10  bg-[#FF2EBC] text-white">
            <div className="text-lg  font-sansSerif font-semibold">
              <h1>Automated Alerts</h1>
            </div>
            <div className="text-sm  font-rubik">
              <p>
                Receive instant notifications for updates on reports, healthcare
                guidance, and educational opportunities.
              </p>
            </div>
          </div>
          <div className="space-y-4 shadow p-10  bg-[#FF2EBC] text-white">
            <div className="text-lg font-sansSerif font-semibold">
              <h1>Secure Support System</h1>
            </div>
            <div className="text-sm  font-rubik">
              <p>
                Connect securely with legal, healthcare, and financial
                resources, ensuring data protection and confidentiality.
              </p>
            </div>
          </div>
          <div className="space-y-4 shadow p-10  shadow-pink-300 border-none opacity-95">
            <div className="text-lg text-[#4a4a4a]  font-sansSerif font-semibold">
              <h1>Customizable Reporting Forms</h1>
            </div>
            <div className="text-sm  font-rubik">
              <p>
                Tailor reporting forms to gather crucial information,
                streamlining the process for those seeking help and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

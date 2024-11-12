import Link from "next/link";
import React from "react";

export default function Bottom() {
  return (
    <div>
      <div className="mt-20 bg-pink-200 rounded-xl p-14 w-[90%] mx-auto">
        <div className="text-center  space-y-6">
          <div>
            <h1 className="text-3xl   font-semibold text-[#4a4a4a] font-sansSerif">
              Empower Your Journey to Equality and Protection with EmpowerHer
              Today
            </h1>
          </div>
          <div>
            <p className="text-lg font-rubik text-[#4a4a4a]">
              EmpowerHer is the ultimate solution for supporting women’s rights
              and protection, offering powerful tools to report incidents,
              access healthcare resources, and stay informed—ensuring a safer
              and more empowering experience for all users.
            </p>
          </div>
          <div>
            <button className="px-8 py-4  bg-[#FF2EBC] text-white font-semibold rounded-full">
              <Link href={"/signup"} className="font-rubik">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

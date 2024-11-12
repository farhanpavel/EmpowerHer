"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Womenpanel } from "@/components/Womenpanel/page";

export default function Landing({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const role = Cookies.get("role");

  //   if (role !== "admin") {
  //     router.back();
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [router]);

  // if (isLoading) {
  //   return <div></div>;
  // }

  return (
    <div className="bg-[#F0F4F4] min-h-screen">
      <Womenpanel />
      {children}
    </div>
  );
}

"use client";

import { Adminpanel } from "@/components/Adminpanel/page";
import Adminsidebar from "@/components/Adminsidebar/page";
import Womensidebar from "@/components/Womensidebar/page";

export default function Userlanding({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-wrap p-20 ">
      <div className="w-[25%]">
        <Womensidebar />
      </div>
      <div className="w-[70%] ">{children}</div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Womensidebar() {
  const pathname = usePathname();

  return (
    <div>
      <main>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr]">
          <nav className="grid gap-4  text-muted-foreground text-xs">
            <Link
              href="/womendashboard/entry/policecomplain"
              className={`text-primary p-2 rounded-[5px] hover:transition-all hover:delay-200 ${
                pathname.startsWith("/womendashboard/entry/police")
                  ? "bg-[#ffc6ed] text-[#4a4a4a] font-medium"
                  : "hover:bg-gray-200"
              }`}
            >
              Police Complain
            </Link>
            <Link
              href="/womendashboard/entry/mediadvice"
              className={`text-primary p-2 rounded-[5px] hover:transition-all hover:delay-200 ${
                pathname.startsWith("/womendashboard/entry/mediadvice")
                  ? "bg-[#ffc6ed] text-[#4a4a4a] font-medium"
                  : "hover:bg-gray-200"
              }`}
            >
              Medical Consultant
            </Link>
            <Link
              href="/womendashboard/entry/teachercontact"
              className={`text-primary p-2 rounded-[5px] hover:transition-all hover:delay-200 ${
                pathname.startsWith("/womendashboard/entry/teachercontact")
                  ? "bg-[#ffc6ed] text-[#4a4a4a] font-medium"
                  : "hover:bg-gray-200"
              }`}
            >
              Teacher Contact
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}

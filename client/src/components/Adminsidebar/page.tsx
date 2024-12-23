import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Adminsidebar() {
  const pathname = usePathname();

  return (
    <div>
      <main>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr]">
          <nav className="grid gap-4  text-muted-foreground text-xs">
            <Link
              href="/admindashboard/entry/police"
              className={`text-primary p-2 rounded-[5px] hover:transition-all hover:delay-200 ${
                pathname.startsWith("/admindashboard/entry/police")
                  ? "bg-[#ffc6ed] text-[#4a4a4a] font-medium"
                  : "hover:bg-gray-200"
              }`}
            >
              Police
            </Link>
            <Link
              href="/admindashboard/entry/doctor"
              className={`text-primary p-2 rounded-[5px] hover:transition-all hover:delay-200 ${
                pathname.startsWith("/admindashboard/entry/doctor")
                  ? "bg-[#ffc6ed] text-[#4a4a4a] font-medium"
                  : "hover:bg-gray-200"
              }`}
            >
              Doctor
            </Link>
            <Link
              href="/admindashboard/entry/teacher"
              className={`text-primary p-2 rounded-[5px] hover:transition-all hover:delay-200 ${
                pathname.startsWith("/admindashboard/entry/teacher")
                  ? "bg-[#ffc6ed] text-[#4a4a4a] font-medium"
                  : "hover:bg-gray-200"
              }`}
            >
              Teacher
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}

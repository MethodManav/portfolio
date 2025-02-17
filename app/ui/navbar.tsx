"use client";

import { BriefcaseBusiness, Folder, House, Wrench } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="p-16  flex flex-row justify-center items-center w-full h-16">
      <div className="flex flex-row justify-around bg-[#1c1b19] h-12 w-72 rounded-2xl py-3">
        <div>
          <House color="white" />
        </div>
        <div>
          <Folder color="white" />
        </div>
        <div>
          <BriefcaseBusiness color="white" />
        </div>
        <div>
          <Wrench color="white" />
        </div>
      </div>
    </nav>
  );
};

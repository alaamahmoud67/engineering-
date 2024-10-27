// MultilayerCard.jsx (أو .tsx)
import React from "react";
import { cn } from "@/lib/utils";

export const CardBody = ({ title, icon, className = "" }) => (
  <div className={cn(className)}>
    <h3 className="text-md flex items-center justify-center Amiri-font text-gray-900 dark:text-gray-100 mb-1">
      {title}
      <span className=" px-2">{icon}</span>
    </h3>
  </div>
);

export const MultilayerCardV_1 = ({ children }) => {
  return (
    <div className="py-0 ">
      <div className="relative w-full">
        <div className="absolute scale-x-95 inset-0 -rotate-[5deg] rounded-lg bg-gray-200 dark:bg-zinc-800 py-10" />
        {children}
      </div>
    </div>
  );
};

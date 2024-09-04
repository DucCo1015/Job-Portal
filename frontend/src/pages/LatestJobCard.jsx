import { Badge } from "@/components/ui/badge";
import React from "react";

const LatestJobCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company name</h1>
        <p className="text-sm text-gray-500">Ho Chi Minh</p>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          deserunt!
        </p>
      </div>

      <div className="flex items-center gap-2 my-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Position
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          12 Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          24LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>

        <h1 className="text-5xl font-bold">
          Search, Apply &
          <br />
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          laboriosam labore sed tempora, aliquam dignissimos rem!
        </p>

        <div className="flex w-[40%] shadow-lg border border-gary-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

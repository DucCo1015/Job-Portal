import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 mb-10">
      <div className="flex gap-5">
        <div className="w-20%">
          <FilterCard />
        </div>

        {jobArray.length <= 0 ? (
          <span>Job not found</span>
        ) : (
          <div className="flex-1 pb-5 ">
            <div className="grid grid-cols-3 gap-4">
              {jobArray.map((job, index) => (
                <div key={index}>
                  <Job />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;

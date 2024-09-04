import React from "react";
import Job from "./Job";

const randomJob = [1, 2, 3];

const Browser = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1>Search Results({randomJob.length})</h1>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {randomJob.map((item, index) => (
          <Job key={index} />
        ))}
      </div>
    </div>
  );
};

export default Browser;

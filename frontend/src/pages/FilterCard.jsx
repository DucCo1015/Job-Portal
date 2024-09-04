import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

const filterData = [
  {
    filterType: "Location",
    array: ["Ho Chi Minh", "Da Nang", "Vinh", "Han Noi", "Can Tho"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["10-20K", "25-40K", "50-60K"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg ">Filter Job</h1>
      <hr className="mt-3" />

      <RadioGroup>
        {filterData.map((job, index) => (
          <div key={index} className="font-bold text-md">
            <h1>{job.filterType}</h1>
            {job.array.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} />
                <Label>{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;

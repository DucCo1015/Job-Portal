import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "weqweqwwq";
  return (
    <div className="p-5 rounded-md shadow-lg bg-white border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 day ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <div className="flex items-center gap-2 my-2">
          <button className="border border-gray-200 rounded-lg">
            <Avatar>
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Avatar>
          </button>

          <div>
            <h1 className="font-medium text-lg">company name</h1>
            <p className="text-sm text-gray-500">Ho Chi Minh</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          ipsam rem tempore incidunt ullam quaerat.
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

      <div>
        <Button
          onClick={() => navigate(`description/${jobId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save of Later</Button>
      </div>
    </div>
  );
};

export default Job;

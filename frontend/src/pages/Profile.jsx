import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import { Contact, Mail, Pen } from "lucide-react";
import React, { useState } from "react";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["Html", "Css", "JavaScript", "Reactjs"];

const Profile = () => {
  const isHaveResume = true;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl y-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                width={80}
                height={80}
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                unde.
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>patel@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>0987654321</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>

          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>

          <div className="grid -w-full max-w-sm items-center gap-1.5 mt-3">
            <Label className="text-md font-bold">Resume</Label>
            {isHaveResume ? (
              <a
                target="blank"
                href="https://github.com/DucCo1015"
                className="text-[#3d4ddd] w-full hover:underline cursor-pointer"
              >
                Frontend Developer
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-5">
        <h1 className="font-bold text-lg">Applied Job</h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;

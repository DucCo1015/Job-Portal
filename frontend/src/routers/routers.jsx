import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Home from "@/pages/Home";
import Jobs from "@/pages/Jobs";
import Browser from "@/pages/Browser";
import { Routes, Route } from "react-router-dom";
import Profile from "@/pages/Profile";
import JobDescription from "@/pages/JobDescription";

const routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="jobs/description/:id" element={<JobDescription />} />
      </Routes>
    </>
  );
};

export default routers;

import React from "react";
import { BiBed, BiBookAdd, BiGroup, BiHome } from "react-icons/bi";
import { BsMenuButton } from "react-icons/bs";
import { CgMenuCake, CgMenuGridR, CgMenuMotion } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";
import { FaAmbulance, FaChevronDown } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { IoCutSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const OverView = () => {
  const overviewdata = [
    {
      title: "Toatal Patients",
      nubmer: "3,454",
      icon: <BiBed size={24} className="text-violet-600" />,
    },
    {
      title: "Available Staff",
      nubmer: 354,
      icon: <BiGroup size={24} className="text-blue-500" />,
    },
    {
      title: "Avg Treat, Costs",
      nubmer: "$2,054",
      icon: <BiBookAdd size={24} className="text-orange-500" />,
    },
    {
      title: "Available Cars",
      nubmer: 34,
      icon: <FaAmbulance size={24} className="text-pink-800" />,
    },
  ];
  return (
    <div className="px-8 py-2 ">
      <div className=" grid grid-cols-4 gap-x-8">
        {overviewdata.map((item, index) => (
          <div
            key={index}
            className=" h-[100px] bg-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center"
          >
            <div className="flex items-center justify-center gap-x-6">
              <span className="p-3 rounded-full bg-gray-200">{item.icon}</span>
              <div>
                <span className="text-xl font-bold">{item.nubmer}</span>
                <p className="font-semibold text-gray-700">{item.title}</p>
              </div>
            </div>
            <div className="w-7 rounded-full cursor-pointer h-full">
              <MdMoreHoriz size={24} className="text-gray-700" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-4 gap-x-8 ">
        <div className="col-span-3  h-64 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-between ">
            <h1 className="font-bold text-lg">
              OutPatients vs, Inspatients Trend
            </h1>
            <span className="text-sm font-semibold flex items-center gap-x-3">
              show by months <FaChevronDown size={10} />{" "}
            </span>
          </header>
        </div>
        <div className="col-span-1  h-64 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-center ">
            <h1 className="font-bold text-lg">Patients by Gender</h1>
          </header>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-x-8 ">
        <div className="col-span-2  h-60 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-between ">
            <h1 className="font-bold text-lg">Time Admitted</h1>
            <span className="text-sm font-semibold flex items-center gap-x-3">
              Today <FaChevronDown size={10} />{" "}
            </span>
          </header>
        </div>
        <div className="col-span-1  h-60 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-between ">
            <h1 className="font-bold text-lg">Patients By Division</h1>
            <span className="text-sm font-semibold flex items-center gap-x-3">
              {" "}
              <FaChevronDown size={10} />{" "}
            </span>
          </header>
          <div className="mt-1 ">
            <ul className="space-y-3">
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <span>
                    <BiHome size={20} />
                  </span>
                  <p className="text-md font-bold ">DIVISION</p>
                </div>
                <span className="text-md text-gray-500 font-bold"> PT</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <span>
                    <FaHeartbeat size={20} />
                  </span>
                  <p className="text-md font-bold ">Cardiology</p>
                </div>
                <span className="text-md text-gray-800 font-bold"> 232</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <span>
                    <LuBrain size={20} />
                  </span>
                  <p className="text-md font-bold ">Neurology</p>
                </div>
                <span className="text-md text-gray-800 font-bold"> 123</span>
              </li>
              <l
              i className="flex items-center justify-between py-1">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <span>
                    <IoCutSharp size={20} />
                  </span>
                  <p className="text-md font-bold ">Surgery</p>
                </div>
                <span className="text-md text-gray-800 font-bold"> 80</span>
              </l>
            </ul>
          </div>
        </div>
        <div className="col-span-1  h-60 bg-white shadow-md rounded-lg px-6 py-4"></div>
      </div>
    </div>
  );
};

export default OverView;

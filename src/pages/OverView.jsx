import React from "react";
import { useState } from "react";
import { BiBed, BiBookAdd, BiGroup, BiHome } from "react-icons/bi";
import { FaAmbulance, FaChevronDown, FaHeartbeat } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { IoCutSharp } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";

const OverView = () => {
  const patientData = [
    { day: "1", patients: 10 },
    { day: "2", patients: 15 },
    { day: "3", patients: 8 },
    { day: "4", patients: 12 },
    { day: "5", patients: 20 },
    { day: "6", patients: 18 },
    { day: "7", patients: 14 },
    { day: "8", patients: 22 },
    { day: "9", patients: 17 },
    { day: "10", patients: 19 },
    { day: "11", patients: 25 },
    { day: "12", patients: 30 },
    { day: "13", patients: 28 },
    { day: "14", patients: 24 },
    { day: "15", patients: 27 },
    { day: "16", patients: 32 },
    { day: "17", patients: 29 },
    { day: "18", patients: 31 },
    { day: "19", patients: 26 },
    { day: "20", patients: 23 },
    { day: "21", patients: 21 },
    { day: "22", patients: 19 },
    { day: "23", patients: 16 },
    { day: "24", patients: 18 },
    { day: "25", patients: 20 },
    { day: "26", patients: 22 },
    { day: "27", patients: 24 },
    { day: "28", patients: 26 },
    { day: "29", patients: 28 },
    { day: "30", patients: 30 },
  ];
  const overviewdata = [
    {
      title: "Total Patients",
      number: "3,454",
      icon: <BiBed size={24} className="text-violet-600" />,
    },
    {
      title: "Available Staff",
      number: 354,
      icon: <BiGroup size={24} className="text-blue-500" />,
    },
    {
      title: "Avg Treat, Costs",
      number: "$2,054",
      icon: <BiBookAdd size={24} className="text-orange-500" />,
    },
    {
      title: "Available Cars",
      number: 34,
      icon: <FaAmbulance size={24} className="text-pink-800" />,
    },
  ];

  // Data for OutPatients vs. InPatients Trend
  const trendData = [
    { month: "Jan", outPatients: 400, inPatients: 240 },
    { month: "Feb", outPatients: 300, inPatients: 139 },
    { month: "Mar", outPatients: 200, inPatients: 980 },
    { month: "Apr", outPatients: 278, inPatients: 390 },
    { month: "May", outPatients: 189, inPatients: 480 },
    { month: "Jun", outPatients: 239, inPatients: 380 },
  ];

  // Data for Patients by Gender
  const genderData = [
    { name: "Male", value: 60 },
    { name: "Female", value: 40 },
  ];

  const COLORS = ["#7008E7", "#05DF72"]; // Colors for the pie chart
  const [timePeriod, setTimePeriod] = useState("daily"); // State for time period filter

  // Sample data for admitted patients
  const dailyData = [
    { time: "00:00", patients: 5 },
    { time: "02:00", patients: 8 },
    { time: "04:00", patients: 6 },
    { time: "06:00", patients: 10 },
    { time: "08:00", patients: 15 },
    { time: "10:00", patients: 20 },
    { time: "12:00", patients: 25 },
    { time: "14:00", patients: 22 },
    { time: "16:00", patients: 18 },
    { time: "18:00", patients: 12 },
    { time: "20:00", patients: 8 },
    { time: "22:00", patients: 5 },
  ];

  const weeklyData = [
    { day: "Mon", patients: 50 },
    { day: "Tue", patients: 60 },
    { day: "Wed", patients: 55 },
    { day: "Thu", patients: 70 },
    { day: "Fri", patients: 65 },
    { day: "Sat", patients: 80 },
    { day: "Sun", patients: 75 },
  ];

  const monthlyData = [
    { week: "Week 1", patients: 200 },
    { week: "Week 2", patients: 250 },
    { week: "Week 3", patients: 300 },
    { week: "Week 4", patients: 280 },
  ];

  // Determine which data to display based on the selected time period
  const chartData =
    timePeriod === "daily"
      ? dailyData
      : timePeriod === "weekly"
      ? weeklyData
      : monthlyData;

  return (
    <div className="px-5 py-2 2xl:py-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-4 gap-x-5">
        {overviewdata.map((item, index) => (
          <div
            key={index}
            className="h-[100px] xl:h-[120px] bg-white shadow-md rounded-lg px-4 py-4 flex justify-between items-center"
          >
            <div className="flex items-center justify-center gap-x-6">
              <span className="p-3 rounded-full bg-gray-200">{item.icon}</span>
              <div>
                <span className="text-xl font-bold">{item.number}</span>
                <p className="font-semibold text-gray-700">{item.title}</p>
              </div>
            </div>
            <div className="w-7 rounded-full cursor-pointer h-full">
              <MdMoreHoriz size={24} className="text-gray-700" />
            </div>
          </div>
        ))}
      </div>

      {/* OutPatients vs. InPatients Trend and Patients by Gender */}
      <div className="mt-5 grid grid-cols-4 gap-x-5">
        <div className="col-span-3 h-64 2xl:h-80 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-between">
            <h1 className="font-bold text-lg">
              OutPatients vs. InPatients Trend
            </h1>
            <span className="text-sm font-semibold flex items-center gap-x-3">
              Show by months <FaChevronDown size={10} />
            </span>
          </header>
          <div className="h-[calc(100%-2.5rem)]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="outPatients"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="inPatients"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1 h-64 2xl:h-80 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-center">
            <h1 className="font-bold text-lg">Patients by Gender</h1>
          </header>
          <div className="h-[calc(100%-2.5rem)] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {genderData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Time Admitted, Patients By Division, and Empty Card */}
      <div className="mt-5 grid grid-cols-4 gap-x-5">
        <div className="col-span-2 h-60 2xl:h-72 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-between">
            <h1 className="font-bold text-lg">Time Admitted</h1>
            <div className="relative">
              <select
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
              <FaChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                size={12}
              />
            </div>
          </header>
          <div className="h-[calc(100%-2.5rem)]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={
                    timePeriod === "daily"
                      ? "time"
                      : timePeriod === "weekly"
                      ? "day"
                      : "week"
                  }
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="patients" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1 h-60 2xl:h-72 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-between">
            <h1 className="font-bold text-lg">Patients By Division</h1>
            <span className="text-sm font-semibold flex items-center gap-x-3">
              <FaChevronDown size={10} />
            </span>
          </header>
          <div className="mt-1">
            <ul className="space-y-3">
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <BiHome size={20} />
                  <p className="text-md font-bold">DIVISION</p>
                </div>
                <span className="text-md text-gray-500 font-bold">PT</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <FaHeartbeat size={20} />
                  <p className="text-md font-bold">Cardiology</p>
                </div>
                <span className="text-md text-gray-800 font-bold">232</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <LuBrain size={20} />
                  <p className="text-md font-bold">Neurology</p>
                </div>
                <span className="text-md text-gray-800 font-bold">123</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <div className="flex items-center text-gray-500 gap-x-3">
                  <IoCutSharp size={20} />
                  <p className="text-md font-bold">Surgery</p>
                </div>
                <span className="text-md text-gray-800 font-bold">80</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-1 h-60 2xl:h-72 bg-white shadow-md rounded-lg px-6 py-4">
          <header className="h-10 w-full flex items-center justify-center">
            <h1 className="font-bold text-lg">Patients This Month</h1>
          </header>
          <div className="h-[calc(100%-2.5rem)]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={patientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="patients" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;

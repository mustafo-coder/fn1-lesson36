"use client";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import JobListings from "@/components/muslimbek/card";
import DreamCompany from "@/components/muslimbek/Navbarrr";

const ControlledAccordions = () => {
  const [expandedPanels, setExpandedPanels] = useState([]);

  const TypeOfEmployment = [
    { id: 1, label: "Full-time", count: 3 },
    { id: 2, label: "Part-Time", count: 5 },
    { id: 3, label: "Remote", count: 2 },
    { id: 4, label: "Internship", count: 24 },
    { id: 5, label: "Contract", count: 3 },
  ];
  const Categoriess = [
    { id: 1, label: "Design", count: 24 },
    { id: 2, label: "Sales", count: 3 },
    { id: 3, label: "Marketing", count: 3 },
    { id: 4, label: "Business", count: 3 },
    { id: 5, label: "Human Resource", count: 6 },
    { id: 6, label: "Finance", count: 4 },
    { id: 7, label: "Engineering", count: 4 },
    { id: 8, label: "Technology", count: 5 },
  ];
  const JobLevell = [
    { id: 1, label: "Entry Level", count: 57 },
    { id: 2, label: "Mid Level", count: 3 },
    { id: 3, label: "Senior Level", count: 5 },
    { id: 4, label: "Director sdf", count: 12 },
    { id: 5, label: "VP or Above", count: 8 },
  ];
  const SalaryRangee = [
    { id: 1, label: "$700 - $1000", count: 4 },
    { id: 2, label: "$100 - $1500", count: 6 },
    { id: 3, label: "$1500 - $2000", count: 10 },
    { id: 4, label: "$3000 or above", count: 4 },
  ];
  const handleChange = (panel) => () => {
    setExpandedPanels((prev) => {
      if (prev.includes(panel)) {
        return prev.filter((p) => p !== panel);
      } else {
        return [...prev, panel];
      }
    });
  };

  return (
    <div>
      <div className="pb-16">
        <DreamCompany />
      </div>
      <div className="container mx-auto flex gap-4 justify-center py-20">
        <div className="space-y-4 w-64">
          <div className="border rounded-md">
            <button
              className="flex justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200"
              onClick={handleChange("panel1")}
            >
              <span className="flex items-center text-zinc-950 font-bold">
                Type of Employment
              </span>
              <div className="text-zinc-950">
                {expandedPanels.includes("panel1") ? (
                  <ExpandLessIcon className="ml-2" />
                ) : (
                  <ExpandMoreIcon className="ml-2" />
                )}
              </div>
            </button>
            {expandedPanels.includes("panel1") && (
              <div className="w-64 p-4 bg-white rounded-lg shadow-sm">
                {TypeOfEmployment.map(({ id, label, count }) => (
                  <label
                    key={id}
                    className="flex justify-center mb-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-gray-300 rounded-md cursor-pointer 
                        checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <span className="ml-3 text-gray-700 text-sm flex-grow">
                      {label}
                    </span>
                    <span className="text-gray-500 text-sm">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="border rounded-md">
            <button
              className="flex justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200"
              onClick={handleChange("panel2")}
            >
              <span className="flex items-center text-black font-bold">
                Categories
              </span>
              <div className="text-black">
                {expandedPanels.includes("panel2") ? (
                  <ExpandLessIcon className="ml-2" />
                ) : (
                  <ExpandMoreIcon className="ml-2" />
                )}
              </div>
            </button>
            {expandedPanels.includes("panel2") && (
              <div className="w-64 p-4 bg-white rounded-lg shadow-sm">
                {Categoriess.map(({ id, label, count }) => (
                  <label
                    key={id}
                    className="flex justify-center mb-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-gray-300 rounded-md cursor-pointer 
                        checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <span className="ml-3 text-gray-700 text-sm flex-grow">
                      {label}
                    </span>
                    <span className="text-gray-500 text-sm">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="border rounded-md">
            <button
              className="flex justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200"
              onClick={handleChange("panel3")}
            >
              <span className="flex items-center text-black font-bold">
                Job Level
              </span>
              <div className="text-black">
                {expandedPanels.includes("panel3") ? (
                  <ExpandLessIcon className="ml-2" />
                ) : (
                  <ExpandMoreIcon className="ml-2" />
                )}
              </div>
            </button>
            {expandedPanels.includes("panel3") && (
              <div className="w-64 p-4 bg-white rounded-lg shadow-sm">
                {JobLevell.map(({ id, label, count }) => (
                  <label
                    key={id}
                    className="flex justify-center mb-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-gray-300 rounded-md cursor-pointer 
                        checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <span className="ml-3 text-gray-700 text-sm flex-grow">
                      {label}
                    </span>
                    <span className="text-gray-500 text-sm">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="border rounded-md">
            <button
              className="flex justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200"
              onClick={handleChange("panel4")}
            >
              <span className="flex items-center text-black font-bold">
                Salary Range
              </span>
              <div className="text-black">
                {expandedPanels.includes("panel4") ? (
                  <ExpandLessIcon className="ml-2" />
                ) : (
                  <ExpandMoreIcon className="ml-2" />
                )}
              </div>
            </button>
            {expandedPanels.includes("panel4") && (
              <div className="w-64 p-4 bg-white rounded-lg shadow-sm">
                {SalaryRangee.map(({ id, label, count }) => (
                  <label
                    key={id}
                    className="flex justify-center mb-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-gray-300 rounded-md cursor-pointer 
                        checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <span className="ml-3 text-gray-700 text-sm flex-grow">
                      {label}
                    </span>
                    <span className="text-gray-500 text-sm">({count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <JobListings />
      </div>
    </div>
  );
};

export default ControlledAccordions;

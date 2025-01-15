import React from "react";

const JobCard = ({
  logo,
  title,
  company,
  location,
  tags,
  type,
  applied,
  capacity,
}) => (
  <div className="flex items-center justify-between p-6 border rounded-lg mb-4 bg-white">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600">
          <span>{company}</span>
          <span>•</span>
          <span>{location}</span>
        </div>

        <div className="flex gap-2 mt-1">
          <span className="px-3 py-1 text-sm text-emerald-600 bg-emerald-100 rounded-full">
            {type}
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-sm rounded-full
                ${tag === "Marketing" ? "bg-orange-100 text-orange-600" : ""}
                ${tag === "Design" ? "bg-indigo-100 text-indigo-600" : ""}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-col items-end gap-2">
      <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Apply
      </button>
      <span className="text-sm text-gray-600">
        {applied} applied of {capacity} capacity
      </span>
    </div>
  </div>
);

const JobListings = () => {
  const jobs = [
    {
      logo: "/SocialMediaAssistant.png",
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      logo: "/box.png",
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Fransisco, USA",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 2,
      capacity: 10,
    },
    {
      logo: "/InteractiveDeveloper.png",
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 8,
      capacity: 12,
    },
    {
      logo: "/rr.png",
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 0,
      capacity: 10,
    },
    {
      logo: "/canva.png",
      title: "Lead Engineer",
      company: "canva",
      location: "Ankara, Turkey",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      logo: "/products.png",
      title: "Product Designer",
      company: "ClassPass",
      location: "Berlin, Germany",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      logo: "/pitch.png",
      title: "Customer Manager",
      company: "Pitch",
      location: "Berlin, Germany",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
  ];

  return (
    <div className="max-w-[920px] w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Jobs</h1>
          <p className="text-gray-600">Showing {jobs.length} results</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select className="p-2 border rounded-lg bg-white">
              <option>Most relevant</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;

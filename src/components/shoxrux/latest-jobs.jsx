import React from "react";

const Latest = () => {
  // Ish o'rinlari haqidagi ma'lumotlar
  const jobs = [
    {
      id: 1,
      logo: "/nomad.svg",
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
    {
      id: 2,
      logo: "/netlify.svg",
      title: "Social Media Assistant",
      company: "Netlify",
      location: "Paris, France",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
    {
      id: 3,
      logo: "/dropbox.svg",
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, USA",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
    {
      id: 4,
      logo: "/maze.svg",
      title: "Brand Designer",
      company: "Maze",
      location: "San Francisco, USA",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
    {
      id: 5,
      logo: "/terraform.svg",
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
    {
      id: 6,
      logo: "/udacity.svg",
      title: "Interactive Developer",
      company: "Udacity",
      location: "Hamburg, Germany",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
    {
      id: 7,
      logo: "/packer.svg",
      title: "HR Manager",
      company: "Packer",
      location: "Lucern, Switzerland",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
    {
      id: 8,
      logo: "/webflow.svg",
      title: "HR Manager",
      company: "Webflow",
      location: "Lucern, Switzerland",
      tags: [
        { label: "Full-Time", bgColor: "#E6FFF2", textColor: "#34A853" },
        { label: "Marketing", bgColor: "#FFF5E6", textColor: "#FB8C00" },
        { label: "Design", bgColor: "#EDE7FF", textColor: "#6200EA" },
      ],
    },
  ];

  return (
    <div className="mx-auto w-[1192px] h-auto flex flex-col space-y-6 px-4">
      <div className="w-full h-[53px] flex items-end justify-between">
        <div className="w-[386px] flex items-center">
          <span className="text-[#25324B] font-bold text-[24px] leading-[36px]">
            Latest
          </span>
          <span className="text-[#26A4FF] font-bold text-[24px] leading-[36px] ml-1">
            jobs open
          </span>
        </div>

        <a
          href="#"
          className="text-[#4F4F4F] pb-1 text-[12px] font-bold hover:underline"
        >
          Show all jobs →
        </a>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-2">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center w-[550px] h-[100px] border-b border-[#E5E5E5]"
          >
            {/* Left Icon */}
            <div className="w-[50px] h-[50px] bg-[#E5F6FF] flex items-center justify-center rounded-md mr-4">
              <img
                src={job.logo}
                alt={`${job.company} Logo`}
                className="w-[30px] h-[30px]"
              />
            </div>

            {/* Job Info */}
            <div className="flex-1">
              <h3 className="text-[#25324B] font-semibold text-[16px] leading-[24px] ">
                {job.title}
              </h3>
              <p className="text-[#6C6C6C] text-[14px] leading-[21px]">
                {job.company} • {job.location}
              </p>
              <div className="flex space-x-2 mt-2">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[12px] font-medium px-3 py-1 rounded-full hover:bg-green-400"
                    style={{
                      backgroundColor: tag.bgColor,
                      color: tag.textColor,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;

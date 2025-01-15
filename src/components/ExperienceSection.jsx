import Image from "next/image";
import { Plus, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Twitter",
      role: "Product Designer",
      period: "Jun 2019 - Present (1y 1m)",
      location: "Manchester, UK",
      description:
        "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
      logo: "/Twitter.svg", // Twitter logotipining manzili
    },
    {
      company: "GoDaddy",
      role: "Growth Marketing Designer",
      period: "Jun 2011 - May 2019 (8y)",
      location: "Manchester, UK",
      description:
        "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
      logo: "/Like.svg", // GoDaddy logotipining manzili
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Experiences</h3>
        <button className="text-indigo-600 hover:text-indigo-700">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p className="text-gray-600">{exp.company} · Full-Time</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-2 text-sm text-indigo-600 hover:text-indigo-700">
        Show 3 more experiences
      </button>
    </section>
  );
}

import { Plus, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function EducationSection() {
  const educations = [
    {
      school: "Harvard University",
      degree: "Postgraduate degree, Applied Psychology",
      period: "2010 - 2012",
      description:
        "As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities by observing, analysing, researching and changing behaviour.",
      logo: "/logo.png",
    },
    {
      school: "University of Toronto",
      degree: "Bachelor of Arts, Visual Communication",
      period: "2006 - 2009",
      description: "",
      logo: "/unver.png",
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Educations</h3>
        <button className="text-indigo-600 hover:text-indigo-700">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <Image
                src={edu.logo}
                alt={edu.school}
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{edu.school}</h4>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              {edu.description && (
                <p className="mt-2 text-gray-600">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-2 text-sm text-indigo-600 hover:text-indigo-700">
        Show 2 more educations
      </button>
    </section>
  );
}

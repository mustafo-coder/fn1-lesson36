import { Plus, Edit2 } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    "Communication",
    "Analytics",
    "Facebook Ads",
    "Content Planning",
    "Community Manager",
  ];

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="flex space-x-2">
          <button className="text-indigo-600 hover:text-indigo-700">
            <Plus className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

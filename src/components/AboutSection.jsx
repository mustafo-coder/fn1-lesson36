import { Edit2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">About Me</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <Edit2 className="w-5 h-5" />
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        I'm a product designer + filmmaker currently working remotely at Twitter
        from beautiful Manchester, United Kingdom. I'm passionate about
        designing digital products that have a positive impact on the world.
      </p>
      <p className="text-gray-600">
        For 10 years, I've specialized in interface, experience & interaction
        design as well as working in user research and product strategy for
        product agencies, big tech companies & start-ups.
      </p>
    </section>
  );
}

import { Plus } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Clinically - Clinic & health care website",
      image: "/port1.svg?height=300&width=300",
    },
    {
      title: "Growthy - SaaS Analytics & Sales Website",
      image: "/port2.svg?height=300&width=300",
    },
    {
      title: "Planna - Project Management App",
      image: "/port3.svg?height=300&width=300",
    },
    {
      title: "Furni - Furniture ecommerce",
      image: "/port1.svg?height=300&width=300",
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Portfolios</h3>
        <button className="text-indigo-600 hover:text-indigo-700">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="relative group">
            <Image
              src={item.image}
              alt={item.title}
              width={300} 
              height={300} 
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

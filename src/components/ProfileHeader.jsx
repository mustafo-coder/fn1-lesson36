import Image from "next/image";
import { MapPin, Edit2 } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
      <div
        className="relative h-48 bg-gradient-to-r from-purple-400 to-indigo-500"
        style={{
          backgroundImage: "url('/orqa-fon.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-lg backdrop-blur-sm">
          <Edit2 className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="px-6 py-4 relative">
        <div className="absolute -top-16 left-6">
          <Image
            src="/Avatar.svg"
            alt="Jake Gyll"
            width={128}
            height={128}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="ml-36 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">Jake Gyll</h2>
            <p className="text-gray-600">Product Designer at Twitter</p>
            <div className="flex items-center mt-2 text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Manchester, UK</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
            OPEN FOR OPPORTUNITIES
          </button>
        </div>
      </div>
    </div>
  );
}

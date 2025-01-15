import React from "react";
import ProfileHeader from "./ProfileHeader";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";

export default function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1e2c49]">My Profile</h1>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#4747e6] hover:text-[#3939b8] text-base font-medium"
            >
              Back to homepage
            </a>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
          </div>
        </header>
        <ProfileHeader />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <PortfolioSection />
      </div>
    </main>
  );
}

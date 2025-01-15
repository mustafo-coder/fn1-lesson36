import About from "@/components/Abdurahmon/About";
import CompanyProfile from "@/components/Abdurahmon/CompanyProfile";
import PerksBenefits from "@/components/Abdurahmon/PerksBenefits";
import Team from "@/components/Abdurahmon/Team";
import React from "react";

export default function page() {
    return (
        <div>
            <About />
            <CompanyProfile />
            <Team />
            <PerksBenefits />
        </div>
    );
}

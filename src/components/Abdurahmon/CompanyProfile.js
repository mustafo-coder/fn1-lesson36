import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function CompanyProfile() {
    return (
        <div className="container flex justify-between pt-20 pb-10 border-b border-gray-300 pb-16">
            <LeftContent />
            <RightContent />
        </div>
    );
}

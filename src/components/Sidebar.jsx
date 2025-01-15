import React from "react";
import Link from "next/link";
import {
  Home,
  MessageSquare,
  FileText,
  Search,
  Building2,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Circle,
} from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: MessageSquare, label: "Messages", href: "/messages", badge: 1 },
    { icon: FileText, label: "My Applications", href: "/applications" },
    { icon: Search, label: "Find Jobs", href: "/jobs" },
    { icon: Building2, label: "Browse Companies", href: "/companies" },
    { icon: User, label: "My Public Profile", href: "/profile", active: true },
  ];

  const settingsItems = [
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: HelpCircle, label: "Help Center", href: "/help" },
  ];

  return (
    <aside className="w-64 bg-[#F8F8FD] border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-[#4640DE] flex items-center gap-2">
          <img src="/Logo.svg" alt="Logo" />
          {/* <Circle className="w-6 h-6 fill-[#4640DE] stroke-[#4640DE]" /> */}
          JobHuntly
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-[#4640DE]/5 hover:text-[#4640DE] ${
                  item.active ? "bg-[#4640DE]/5 text-[#4640DE]" : ""
                }`}
              >
                <item.icon
                  className={`w-5 h-5 mr-3 ${
                    item.active ? "stroke-[#4640DE]" : "stroke-gray-500"
                  }`}
                />
                {item.label}
                {item.badge && (
                  <span className="ml-auto bg-[#4640DE] text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-3 border-t border-gray-300"></div>

        <div className="mt-5 space-y-2 p-4 ">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                 Settings
          </h2>
          <ul className="space-y-1">
            {settingsItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-[#4640DE]/5 hover:text-[#4640DE]"
                >
                  <item.icon className="w-5 h-5 mr-3 stroke-gray-500" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-4 ">
        <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
          <button className="w-full flex items-center justify-center gap-2 text-[#FF6B6B] hover:text-[#FF5353] transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
        <div className="flex items-center">
          <img
            src="/Jake.png"
            alt="Jake Gyll"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">Jake Gyll</p>
            <p className="text-sm text-gray-500 truncate">jakegyll@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar/>
      <MainContent />
      <RightSidebar />
    </div>
  );
}

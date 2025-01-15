import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

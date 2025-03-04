"use client";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
            {/* Add sidebar content here */}
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col flex-1">
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

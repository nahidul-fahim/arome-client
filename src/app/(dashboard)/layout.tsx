import DashboardLayout from "@/components/layout/dashboard-layout";

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
};

export default DashboardRootLayout;
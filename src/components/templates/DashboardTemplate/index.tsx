import React from 'react';

type DashboardProps = {
  children: React.ReactNode;
};

const DashboardTemplate: React.FC<DashboardProps> = ({ children, ...props }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]" {...props}>
      {children}
    </main>
  );
}

export default DashboardTemplate;
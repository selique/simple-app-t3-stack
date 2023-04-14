import React from 'react';

type DefaultProps = {
  children: React.ReactNode;
};

const DefaultTemplate: React.FC<DefaultProps> = ({ children, ...props }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]" {...props}>
      {children}
    </main>
  );
}

export default DefaultTemplate;
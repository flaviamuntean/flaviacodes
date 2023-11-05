import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl capitalize mb-8 text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-red-800">
      {children}
    </h2>
  );
};

export default SectionHeading;

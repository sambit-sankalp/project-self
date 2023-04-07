import React from 'react';

type Props = {};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-xl md:text-3xl mb-1 md:mb-3 font-bold text-gray-800">
      {title}
    </h1>
  );
};

export default SectionTitle;

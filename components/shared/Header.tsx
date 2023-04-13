import Image from 'next/image';
import React from 'react';
import { GrDocumentPdf } from 'react-icons/gr';

import { headerData } from '@/content/marginals';

const Header = () => {
  return (
    <div className="w-full mt-5 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <Image
          src={headerData.imageUrl}
          alt={headerData.name}
          width={32}
          height={32}
          className="rounded-full mr-2 border"
        />
        <h1 className="text-base sm:text-xl font-semibold">
          {headerData.name}
        </h1>
      </div>
      <a href={headerData.resumeLink} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="text-black bg-slate-200 flex justify-center items-center focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          <GrDocumentPdf />
          <span className="ml-1 hidden sm:block">Resume</span>
        </button>
      </a>
    </div>
  );
};

export default Header;

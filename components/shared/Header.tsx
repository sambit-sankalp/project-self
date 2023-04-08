import Image from 'next/image';
import React from 'react';
import { GrDocumentPdf } from 'react-icons/gr';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full mt-5 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/sambitsankalp/image/upload/v1680622552/82284130_thuxay.png"
          alt="Sambit Sankalp"
          width={32}
          height={32}
          className="rounded-full mr-2 border"
        />
        <h1 className="text-base sm:text-xl font-semibold">Sambit Sankalp</h1>
      </div>
      <button
        type="button"
        className="text-black bg-slate-200 flex justify-center items-center focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <GrDocumentPdf />
        <span className="ml-1 hidden sm:block">Resume</span>
      </button>
    </div>
  );
};

export default Header;

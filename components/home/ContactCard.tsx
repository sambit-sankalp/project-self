import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const ContactCard = () => {
  return (
    <div
      id="contact"
      className="w-full p-3 px-5 mt-10 md:mt-14 mb-5 sm:py-4 bg-[#000] text-white rounded-md border border-transparent hover:border hover:border-black"
    >
      <div className="flex justify-center items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm md:text-lg font-bold text-white">
            Let&apos;s connect!
          </p>
        </div>
        <div className="flex justify-center items-center text-base font-semibold text-gray-900">
          <a
            href="mailto:sambit.sankalp.official@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="flex justify-center items-center text-white border border-white hover:bg-white hover:text-gray-900 font-medium rounded-lg text-sm px-2 md:px-5 py-1 md:py-2.5 text-center"
            >
              Connect
              <BsArrowRight className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

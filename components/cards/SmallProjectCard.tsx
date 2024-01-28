import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { projectInterface } from '@/content/project';

type ProjectDataProps = {
  data: projectInterface;
};

const SmallProjectCard = ({ data }: ProjectDataProps) => {
  const [isinfo, setisinfo] = useState(false);

  return (
    <div
      className={`w-full h-[270px] flex justify-center hover:cursor-pointer hover:shadow-lg my-3 p-3 md:p-0 items-center overflow-hidden bg-[#f0f0f2] ${
        isinfo ? '' : ''
      }`}
    >
      <div className="group w-full h-full [perspective:1000px]">
        <div
          className={`relative h-full w-full hover:shadow-lg rounded-md transition-all duration-500 [transform-style:preserve-3d] ${
            isinfo
              ? '[transform:rotateY(180deg)]'
              : '[backface-visibility:hidden]'
          }`}
        >
          <div
            className={`absolute inset-0 w-full flex h-[300px] justify-start items-start m-0 p-2 flex-col group-hover: ${
              isinfo ? '[backface-visibility:hidden]' : ''
            }`}
          >
            {/* <Image
              src="https://res.cloudinary.com/sambitsankalp/image/upload/v1704269368/NFTDocket_kcg2i7.png"
              alt={data.title}
              width={500}
              height={200}
              className={`w-full mt-0 rounded-md bg-gradient-to-t from-indigo-500`}
            /> */}
            <div
              className={`w-full h-[230px] rounded-lg bg-cover object-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, transparent, #000), url(${data.normalImage})`,
              }}
            ></div>
            <div className="w-full flex justify-between items-center mt-0 min-w-[50%]">
              <Link
                href={data.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underlined relative"
              >
                <h3 className="font-bold text-2xl lg:text-[20px]">
                  {data.title}
                </h3>
              </Link>

              <div className="flex justify-center items-center">
                {data.links.map(({ name, url, icon, width, height }, index) => (
                  <React.Fragment key={`${url}-${index}`}>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center justify-center font-bold leading-sm rounded-full"
                    >
                      <Image
                        src={icon}
                        className="mx-1"
                        alt={name}
                        width={width}
                        height={height}
                      />
                      {/* <p className="ml-0.5 text-xs md:text-base">{name}</p> */}
                    </Link>
                  </React.Fragment>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  className="ml-1"
                  onClick={() => setisinfo(true)}
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 w-full flex h-[300px] justify-start items-start m-0 p-4 flex-col [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="w-full flex justify-between items-center mt-0 min-w-[50%]">
              <Link
                href={data.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underlined relative"
              >
                <h3 className="font-bold text-2xl lg:text-[20px]">
                  {data.title}
                </h3>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                onClick={() => setisinfo(false)}
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
            </div>
            <p
              className={`text-sm lg:text-base mt-3 mx-3 text-center md:text-left md:mx-0`}
            >
              {data.description}
            </p>
            <p className="mt-4 mx-2 md:mx-0 flex justify-center md:justify-start items-center md:items-start flex-wrap">
              {data.technologies.map((skill, index) => (
                <span
                  key={`${index}-${skill}`}
                  className="mr-2 my-1 text-xs lg:text-sm inline-flex items-center font-bold leading-sm px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </p>
            <div className="mt-5 flex justify-center items-center">
              {data.links.map(({ name, url, icon, width, height }, index) => (
                <React.Fragment key={`${url}-${index}`}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center font-bold leading-sm py-1 mr-2 rounded-full"
                  >
                    <Image
                      src={icon}
                      className="mx-2"
                      alt={name}
                      width={19}
                      height={19}
                    />
                    <p className="ml-0.5 text-xs md:text-base">{name}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right hidden md:block ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProjectCard;

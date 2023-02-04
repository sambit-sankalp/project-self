import React, { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import Image from 'next/image';

interface CardProps {
  name: string;
  title: string;
  social: {
    github: string;
    dribbble: string;
    twitter: string;
    email: string;
  };
}

const Card: FC<CardProps> = ({
  name,
  title,
  social: { github, dribbble, twitter, email },
}) => {
  return (
    <div className="flex flex-col justify-center min-w-[300px] max-w-xs bg-white shadow-xl rounded-xl p-5">
      <div className="">
        <Image
          className="w-32 mx-auto shadow-xl rounded-full"
          src="https://res.cloudinary.com/sambitsankalp/image/upload/v1675505813/profile_xy06gd.png"
          alt="Profile face"
          width={128}
          height={128}
        />
      </div>
      <div className="text-center mt-5">
        <p className="text-xl sm:text-2xl font-semibold text-gray-900">
          {name}
        </p>
        <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
          {title}
        </p>
        <div className="flex align-center justify-center mt-4">
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            href={github}
          >
            <FaGithub />
            <span className="sr-only">Github</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
            href={dribbble}
          >
            <FaDribbble />
            <span className="sr-only">Dribble</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            href={twitter}
          >
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
            href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + email}
          >
            <FaRegEnvelope />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

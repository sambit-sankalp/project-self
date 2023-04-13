import React, { FC } from 'react';
import Typed from 'react-typed';

const HeroDescription: FC = () => {
  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'GraphQL',
    'Redux',
    'Next.js',
    'RESTful APIs',
    'HTML',
    'CSS',
    'Gatsby',
    'DevOps',
  ];
  return (
    <div className="w-full">
      <h1 className="text-lg sm:text-2xl font-montserrat mt-10 sm:mt-24 md:text-3xl lg:text-4xl">
        Hey I&apos;m <span className="font-medium">Sambit Sankalp</span>{' '}
        <span className="wave">👋</span>
      </h1>
      <p className="my-3 sm:my-8 text-base sm:text-lg">
        A student passionate and enthusiastic about technology and building
        products that simplify daily lives using technology. I am keen on
        writing codes that are fast and compliant with industry standards. I
        love to collaborate with communities to develop and lead new projects
        that solve the issues faced in the real world.
      </p>
      <p className="my-4 text-lg hidden sm:block">
        Currently, I am pursuing Bachelor’s degree in Computer Science and
        Engineering at the National Institute of Technology, Rourkela. I enjoy
        creating new web and app applications that can be used and accessed by
        all. I also like to design UI for web and app applications that look
        attractive and give the user a compelling experience and an
        open-source enthusiast who enjoys contributing to various projects and
        connecting with various developer enthusiasts around the globe. You can
        talk to me about{' '}
        <Typed
          loop
          typeSpeed={80}
          backSpeed={20}
          strings={skills}
          smartBackspace
          backDelay={1000}
          loopCount={0}
          showCursor
          cursorChar="|"
        />
        .
      </p>
      {/* <div className="flex items-start align-left justify-start mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/sambit-sankalp"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#0A66C2] hover:bg-[#0A66C2] rounded-full hover:text-white transition-colors duration-300"
          href="https://dribbble.com/sambit_sankalp"
        >
          <FaLinkedin />
          <span className="sr-only">Dribble</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://twitter.com/sambit_sankalp"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
          href={
            'https://mail.google.com/mail/?view=cm&fs=1&to=sambit.sankalp.official@gmail.com'
          }
        >
          <FaRegEnvelope />
          <span className="sr-only">Email</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black hover:bg-black rounded-full hover:text-white transition-colors duration-300"
          href={
            'https://mail.google.com/mail/?view=cm&fs=1&to=sambit.sankalp.official@gmail.com'
          }
        >
          <BsFileEarmarkPerson />
          <span className="sr-only">Email</span>
        </a>
      </div> */}
    </div>
  );
};

export default HeroDescription;

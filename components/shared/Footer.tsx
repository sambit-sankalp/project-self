import { socialIcons } from '@/content/marginals';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full my-3 mt-5 flex justify-between items-center">
      <h5 className="text-sm sm:text-lg">
        © {new Date().getFullYear()} Sambit Sankalp
      </h5>
      <div className="flex justify-start items-end">
        {socialIcons.map(({ name, url, icon }) => (
          <React.Fragment key={url}>
            <a href={url} target="_blank" rel="noreferrer">
              <Image
                src={icon}
                className="mx-2 w-5 h-5"
                alt={name}
                width={21}
                height={21}
              />
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Footer;

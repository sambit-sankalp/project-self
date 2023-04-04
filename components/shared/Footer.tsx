import { socialIcons } from '@/content/marginals';
import { linkInterface } from '@/content/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFigma } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full mb-3 flex justify-between items-center">
      <h5>© {new Date().getFullYear()} Sambit Sankalp</h5>
      <div className="flex justify-start items-end">
        {socialIcons.map(({ name, url, icon }) => (
          <React.Fragment key={url}>
            <a href={url} target="_blank" rel="noreferrer">
              <Image
                src={icon}
                className="mx-2"
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

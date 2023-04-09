import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaCalendar } from 'react-icons/fa';

import { educationData } from '@/content/education';

export const PageWrapper: FC<{ children: ReactNode; className: string }> = ({
  children,
  className = '',
}) => {
  return (
    <section id="main-content" tabIndex={-1}>
      <div className={`container  ${className}`}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10">{children}</div>
        </div>
      </div>
    </section>
  );
};

export const EducationCard = () => {
  return (
    <>
      <PageSection>
        <PageWrapper
          className="mb-2 w-full"
          aria-label="You are now in my educational background section"
        >
          <article>
            <ul className="w-full timeline">
              {educationData.map(
                ({ degree, school, date, url }, index) => (
                  <li key={`${index}-${url}`} className="w-full">
                    <div className="w-full flex justify-between flex-col md:flex-row items-start">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Github Link"
                        href={url}
                        className="flex flex-col justify-center items-start"
                      >
                        <div>
                          <h1 className="font-bold text-lg md:text-xl">
                            {degree}
                          </h1>
                          <h5 className="font-semibold text-sm md:text-base mb-1">
                            {school}
                          </h5>
                        </div>
                      </Link>
                      <p className="float-right flex justify-center items-center">
                        <FaCalendar className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />{' '}
                        <span className="text-sm md:text-base">{date}</span>
                      </p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </article>
        </PageWrapper>
      </PageSection>
    </>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
    width: 100%;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: #000;
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 1px;
      height: 100%;
      z-index: 400;
    }
    li {
      list-style-type: none;
      margin: 1rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: #fff;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000;
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

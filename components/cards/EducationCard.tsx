import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaCalendar } from 'react-icons/fa';

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

export const About = () => {
  return (
    <>
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <article>
            <ul className="timeline">
              <li>
                <div className="flex justify-between items-start">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Github Link"
                    href="https://github.com/adenekan41"
                  >
                    <span className="font-bold text-xl">
                      Full-Stack Web Developer Intern | The Homework App
                    </span>
                  </Link>
                  <p
                    className="mt-0 float-right"
                  >
                    Feb 2023 - May 2023
                  </p>
                </div>
                <p>
                  When it comes to business, first impressions matter, and good
                  website design is the key to capitalizing on them. An
                  excellent site is not judged solely on its looks, but on its
                  functionality and usability as well. My experience as a
                  programmer allows me to come up with intelligent solutions to
                  technical challenges, while at the same time designing sleek
                  and visually appealing websites. Aside from having extensive
                  knowledge of recognized technical standards, I am conversant
                  with modern building practices.
                </p>
              </li>

              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/codewonders"
                >
                  Design <small>{/* <Dribble /> */}</small>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/codewonders"
                  className="float-right"
                >
                  View Dribbble
                </Link>
                <p>
                  Although I am not the typical designer, I do possess excellent
                  visual abilities, and this makes me an excellent presenter,
                  allowing me to successfully communicate design ideas to
                  stakeholders and design teams. With my strong
                  conceptualization ability, I am able to visualize and create
                  beautiful works. Lastly, you can find me mostly tweaking
                  stylesheets and creating fluid user experiences.
                </p>
              </li>
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
      margin: 3rem 0;
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

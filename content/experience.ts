export interface experienceInterface {
  company: string;
  position: string;
  date: string;
  companyLogo: string;
  companyLink: string;
  description: string;
  technologies: string[];
}

export const experienceData: experienceInterface[] = [
  {
    company: 'InfyBytes AI Labs',
    position: 'Full Stack Developer',
    date: 'Jan 2023- Mar 2023',
    companyLogo:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1679692378/hw_cwprpd.png',
    companyLink: 'https://www.thehomeworkapp.ai/',
    description: `- Collaborated with a team of software engineers and product managers to improve the product in terms of performance and functionality
    - Worked on optimising API by adding the pagination and implementing caching using webhooks of hasura resulting in API improving the performance of website by factor of 4.
    - Worked on developing tracking migration progress screens and fixed various dashboard bugs to improve the existing functionalities of dashboard websites.
    - Integrated dashboard with various hasura subscription, mutation and queries.
    `,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'HTML',
      'CSS',
      'Typescript',
      'Redux',
      'Hasura',
      'GraphQL',
      'SQL',
      'Node',
      'Express',
      'PostgreSQL',
      'AWS',
    ],
  },
  {
    company: 'Skilzen',
    position: 'Frontend Developer',
    date: 'Jan 2023- Mar 2023',
    companyLogo:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1679852533/skilzen_mgmdih.jpg',
    companyLink: 'https://www.skilzen.com/',
    description: `- Collaborated with other frontend interns and product managers to improve the product in terms of features and performance.
    - Worked on integrating graphql queries with frontend using directus and graphql.
    - Updated the frontend screens by redefining the CSS and increasing the responsiveness of the website.
    - Optimized code by reducing redundant code and increasing dynamic components in the code base.
    `,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'HTML',
      'CSS',
      'Directus',
      'GraphQL',
      'Apollo',
    ],
  },
  {
    company: 'Monday Morning',
    position: 'Technical Coordinator',
    date: 'Aug 2021 - Aug 2023',
    companyLogo:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1679862202/MM_Logo_rjovsx.png',
    companyLink: 'https://mondaymorning.nitrkl.ac.in/',
    description: `- Have shifted the website from ReactJS to NextJS, worked on SEO, and adding
    Opengraph meta tags. Worked with Apollo Client for the server-side rendering of
    data in NextJS.
    - Have worked on developing the application of Monday Morning, which includes
    developing the screens by integrating it with GraphQL.
    - Contributed to the flutter project by experiencing various flutter packages like
    flutter-graphql, flutter-markdown and auto-route.
    `,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'HTML',
      'CSS',
      'GraphQL',
      'Node',
      'Express',
      'MongoDB',
      'Apollo',
      'Dart',
      'Flutter',
      'Firebase',
      'Riverpod',
    ],
  },
];

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
    company: 'Micorsoft India Pvt Ltd',
    position: 'Software Engineering Intern',
    date: 'May 2023 - June 2023',
    companyLogo:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1688819590/2048px-Microsoft_logo.svg_sbsuqt.png',
    companyLink: 'https://www.microsoft.com/',
    description: `- Worked on creating meaningful and interactive graph visualization library to analyse the numeric CSV data for analyst using WebGL and d3-force.
    - Enhanced force and data computation algorithms, adjusting force strength and utilizing web workers, boosting graph performance by 33%.
    - Along with adding meaningfulness and interactivity, made the graph informative for the analyst on interaction with the graph.
    `,
    technologies: ['Typescript', 'HTML', 'CSS', 'WebGL', 'Three.js', 'D3.js'],
  },
  {
    company: 'InfyBytes AI Labs',
    position: 'Full Stack Developer Intern',
    date: 'Jan 2023 - Apr 2023',
    companyLogo:
      'https://res.cloudinary.com/sambitsankalp/image/upload/v1679692378/hw_cwprpd.png',
    companyLink: 'https://www.thehomeworkapp.ai/',
    description: `- Collaborated with a team of software engineers and product managers to improve the product in terms of performance and functionality.
    - Worked on optimising API by adding the pagination and implementing caching using webhooks of hasura resulting in API improving the performance of website.
    - Worked on developing tracking migration progress screens and fixed various dashboard bugs to improve the existing functionalities of dashboard websites.
    - Integrated dashboard with various hasura subscription, mutation and queries.
    `,
    technologies: [
      'React',
      'Next.js',
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
    position: 'Frontend Developer Intern',
    date: 'Feb 2023 - Apr 2023',
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
    date: 'Aug 2021 - Apr 2023',
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

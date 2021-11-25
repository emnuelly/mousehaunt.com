export const sections = [
  { to: '/#about', title: 'About' },
  { to: '/#Gameplay', title: 'Gameplay' },
  { to: '/store', title: 'Store' },
  { to: '/#Value%20Proposition', title: 'Value Proposition' },
  { to: '/#Token', title: 'Token' },
  { to: '/#Team', title: 'Team' },
  { to: '/#Roadmap', title: 'Roadmap' },
  { to: '/career', title: 'Career' },
];

export const jobListings = [
  {
    // always increase the id by 1 if you add more than one job listing;
    id: 1,
    jobRole: {
      role: 'Back-end Engineer',
      // extra is what goes next to the role in the title
      extra: 'CUSTOMER SECURITY',
    },
    jobInfo: {
      type: 'Full-time',
      level: 'Senior',
      location: 'Brazil, Sao Paulo',
      salary: '$999.0 USD',
      // this is the link you'll need to change to redirect to the right page when clicking to "apply now"
      link: 'https://linkedin.com/in',
    },
    jobDescription: {
      // you could put the job description inside the description, it will work just like the job responsibility section
      description: [''],
      paragraphs: [
        // these are the paragraphs under the job description;
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      ],
    },
    jobResponsibilities: {
      // paragraph goes under the JOB RESPONSIBILITIES section
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
      bulletPoints: [
        'Suspendisse nisl luctus ut aliquet pellentesque massa.',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
      ],
    },
    jobRequirements: {
      // paragraph goes under the JOB REQUIREMENT section
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      ],
      bulletPoints: [
        'Suspendisse nisl luctus ut aliquet pellentesque massa.',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. 2',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. 3',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. 4',
        'Suspendisse nisl luctus ut aliquet pellentesque massa. 5',
      ],
    },
  },
];

interface Job {
  id: number;
  jobRole: {
    role: string;
    extra: string;
  };
  jobInfo: {
    type: string;
    level: string;
    location: string;
    salary: string;
    link: string;
  };
  jobDescription: {
    description: string[];
    paragraphs: string[];
  };
  jobResponsibilities: {
    responsibilities: string[];
    bulletPoints: string[];
  };
  jobRequirements: {
    paragraphs: string[];
    bulletPoints: string[];
  };
}

export interface Props {
  job: Job;
  goBack: () => void;
}

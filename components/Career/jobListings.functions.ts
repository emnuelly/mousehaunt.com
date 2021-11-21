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
    id: 1,
    jobRole: {
      role: 'Back-end Engineer',
      extra: 'CUSTOMER SECURITY',
    },
    jobInfo: {
      type: 'Full-time',
      level: 'Senior',
      location: 'Brazil, Sao Paulo',
      salary: '$999.0 USD',
    },
    jobDescription: {
      description: [''],
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      ],
    },
    jobResponsibilities: {
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

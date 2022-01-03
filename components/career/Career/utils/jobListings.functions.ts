export const jobListings = [
  {
    // always increase the id by 1 if you add more than one job listing;
    id: 1,
    // this is the link you'll need to change to redirect to the right page when clicking to "apply now"
    link: 'https://www.linkedin.com/jobs/view/2815410656/?refId=pkWyi6HWQxSLaLr9Rl5vwA%3D%3D',
    jobRole: {
      role: 'Economy Designer',
      // extra is what goes next to the role in the title
      extra: ' - Game Development'
    },
    jobInfo: {
      type: 'Full-time',
      level: 'Senior',
      location: 'Canada (Remote)',
      salary: 'Above Market Pay'
    },
    jobDescription: {
      description: [''],
      paragraphs: [
        // these are the paragraphs under the job description;
        "We're looking for an experienced, high performance and versatile Senior Economy Designer to join us in a challenging yet very rewarding journey of launching high-quality blockchain games for the mass market",
        'Your role will be responsible for managing all economic aspects of the product. You design and maintain the economy of the product alongside intersecting progression and reward systems. You are responsible for creating and pricing goods sold within the storefront as well as overseeing the health of peer-to-peer marketplaces. You identify, understand and create the motivational drivers in the context of the economy and provide data-informed design recommendations.'
      ]
    },
    jobResponsibilities: {
      // paragraph goes under the JOB RESPONSIBILITIES section
      responsibilities: [''],
      bulletPoints: [
        'Serving as the authority on, and owner of, all key economic documentation throughout a NFT game title running a play-to-earn model.',
        'Creating economy models to guide all major economic decisions on sales and player rewards.',
        'Strong verbal and written communication skills and ability to organize game design workflow from initial concept to final release and post-release support.',
        'Build both the micro and macro economy models.',
        'Strong attention to detail and proven analytical skills. ',
        'Create tools, processes and economy models to constantly iterate and improve the game economy.',
        'Drive live operations.',
        'An ability to thrive in an ever shifting environment.',
        'Working closely with the blockchain team and proposing solutions that fit the cryptoverse.',
        'Strong exposure and confidence in identifying and analyzing KPIs then providing action items to ensure the sustainability of your game from a revenue and growth perspective.'
      ]
    },
    jobRequirements: {
      // paragraph goes under the JOB REQUIREMENT section
      paragraphs: [''],
      bulletPoints: [
        'A university degree in game design, economics, mathematics, psychology and/or a related field.',
        'A minimum of 3 years of experience as an economy designer, systems designer, live ops designer or similar position.',
        'Either be already immersed in the crypto world, or be a very fast learner willing to dive right in and become a reference in this market.'
      ]
    }
  }
]

interface Job {
  id: number
  link: string
  jobRole: {
    role: string
    extra: string
  }
  jobInfo: {
    type: string
    level: string
    location: string
    salary: string
  }
  jobDescription: {
    description: string[]
    paragraphs: string[]
  }
  jobResponsibilities: {
    responsibilities: string[]
    bulletPoints: string[]
  }
  jobRequirements: {
    paragraphs: string[]
    bulletPoints: string[]
  }
}

export interface Props {
  job: Job
  goBack: () => void
}

// {
//   // always increase the id by 1 if you add more than one job listing;
//   id: 1,
//   // this is the link you'll need to change to redirect to the right page when clicking to "apply now"
//   link: 'https://linkedin.com/in',
//   jobRole: {
//     role: 'Back-end Engineer',
//     // extra is what goes next to the role in the title
//     extra: 'CUSTOMER SECURITY',
//   },
//   jobInfo: {
//     type: 'Full-time',
//     level: 'Senior',
//     location: 'Brazil, Sao Paulo',
//     salary: '$999.0 USD',
//   },
//   jobDescription: {
//     // you could put the job description inside the description, it will work just like the job responsibility section
//     description: [''],
//     paragraphs: [
//       // these are the paragraphs under the job description;
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
//     ],
//   },
//   jobResponsibilities: {
//     // paragraph goes under the JOB RESPONSIBILITIES section
//     responsibilities: [
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     ],
//     bulletPoints: [
//       'Suspendisse nisl luctus ut aliquet pellentesque massa.',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. ',
//     ],
//   },
//   jobRequirements: {
//     // paragraph goes under the JOB REQUIREMENT section
//     paragraphs: [
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
//     ],
//     bulletPoints: [
//       'Suspendisse nisl luctus ut aliquet pellentesque massa.',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. 2',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. 3',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. 4',
//       'Suspendisse nisl luctus ut aliquet pellentesque massa. 5',
//     ],
//   },
// },

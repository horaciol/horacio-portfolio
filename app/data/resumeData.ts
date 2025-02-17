export type contractType = {
  company: string
  description: string
}

export type ExperienceListType = {
  company: string
  position: string
  period: string
  description: string
  contracts?: contractType[]
}
export type EducationListType = {
  institution: string
  course: string
  period: string
}
export const ExperienceList: ExperienceListType[] = [
  {
    company: "Wipro / Aviva PLC",
    position: "Software Engineer Mobile Lead (React Native)",
    period: "November 2023 - present, London, UK",
    description:
      "Technical leadership, source of hands-on development support to upskill the team and deliver.  Own larger pieces of work, contribute to the continuous integration and enforce test driven development",
  },
  {
    company: "Pollinate International",
    position: "Software Engineer Mobile Lead (React Native)",
    period: "August 2022 - October 2023, London, UK",
    description:
      "Tyl by Natwest Mobile App - React Native team lead development architecture, roadmap and management",
  },
  {
    company: "10x Banking",
    position: "Software Engineer Mobile (React Native)",
    period: "Sept 2020 - July 2022",
    description:
      "Banking Mobile App - React Native / React JavaScript Development and Architecture",
  },
  {
    company: "Tigerspike",
    position: "Front End Engineer Mobile (React Native)",
    period: "Nov 2019 - Aug 2020",
    description:
      "Project management/Analytics App - React Native / React JavaScript Development and Architecture/ AWS/ Hooks/ GraphQL",
  },
  {
    company: "Royal Bank of Scotland",
    position: "React Native App Developer",
    period: "Jan 2019 - Oct 2019 London UK",
    description:
      "Digital Banking App - React Native / ES6 JavaScript Development / TDD BDD / TypeScript / Flow / Redux/Realm/ UI Testing Selenium Cucumber Gherkin/Agile",
  },
  {
    company: "Draw Group / Oliver Wyman",
    position: "Front End Developer",
    period: "Oct 2017 - Dec 2018 London UK",
    description:
      "Financial Web Apps - VueJS / ES6 JavaScript Development/ MongoDB/ Express/Agile",
  },
  {
    company: "Freelance Front End Development",
    position: "Front End Developer",
    period: "March 2017 - Oct 2017 , London, UK",
    description: "contracts",
    contracts: [
      {
        company: "B-Reel",
        description:
          "UI and Game Development InteractiveGame - VueJS/ES6UIJavaScriptDevelopment",
      },
      {
        company: "Table 19",
        description:
          "HTML Email Campaign - HTML code sanity checks and Development",
      },
      {
        company: "Woolley Pau Gyro",
        description: "HTML5/JavaScript - Parallax Website",
      },
      {
        company: "Grand Visual",
        description:
          "HTML5/JavaScript - Interactive Video/WebCam Digital Signage Campaigns",
      },
      {
        company: "DDB Remedy",
        description: "HTML5/JavaScript - Digital Signage Interactive app/game",
      },
      {
        company: "Lividia/Tech Mahindra/BookingBug",
        description: "HTML/CSS/AngularJS - Development using BookingBug SDK",
      },
    ],
  },
  {
    company: "Eyecon Pty Ltd",
    position: "Senior Front End Developer",
    period:
      "March 2015 - December 2016 (1 year 10 months) Brisbane, Australia /London, UK",
    description:
      "Games Team - HTML5/CSS JavaScript Interactive Mobile Development",
  },
  {
    company: "Liquid Interactive",
    position: "Contract Front End Developer",
    period: "March 2015 - May 2015 (3 months), Brisbane, Australia",
    description: "HTML/AS3 Development",
  },
  {
    company: "Bionic Communications",
    position: "Interactive Games Developer",
    period: "July 2011 - February 2015 (3 years 8 months), London, UK",
    description:
      "Games/Apps/Websites using AS3/HTML5/CSS/Javascript Frameworks",
  },
  {
    company: "Cisiv Ltd",
    position: "Flex/Flash/Web Developer",
    period: "2005 - 2011 (6 years), London, UK",
    description: "Flex/Flash/HTML/CSS development/design",
  },
  {
    company: "Media Odyssey",
    position: "Multimedia Producer",
    period: "2002 - 2003 (1 year), Brisbane, Australia",
    description: "3D animation/Video Motion Design/CD-ROM/Web Development",
  },
  {
    company: "Ice Media",
    position: "Web Developer",
    period: "2002 - 2002 (less than a year), Brisbane, Australia",
    description: "QA/System tester/HTML/CSS development and maintenance",
  },
]

export const EdcuationList: EducationListType[] = [
  {
    institution: "Udemy",
    course: "Modern React (online) - Stephen Grider",
    period: "2017",
  },
  {
    institution: "Adobe",
    course: "Adobe Flex 3 Architecture and Connectivity",
    period: "2009",
  },
  {
    institution: "Griffith University Australia",
    course: "Bachelor's degree of Multimedia Computing",
    period: "1999-2001",
  },
  {
    institution: "Griffith University Australia",
    course: "First year of Bachelor's degree of Information Technology",
    period: "1998-1999",
  },
]

export const SkillsList: string[] = [
  "TypeScript",
  "HTML5",
  "CSS3",
  "Javascript",
  "React",
  "React Native",
  "React Hooks",
  "Expo",
  "Expo-EAS",
  "Figma",
  "HighCharts",
  "GraphQL",
  "REST",
  "Flow",
  "Interaction Design",
  "BrowserStack",
  "Git",
  "Github",
  "Gitlab",
  "Bitbucket",
  "Gamification",
  "VueJS",
  "TDD",
  "BDD",
  "Agile",
  "Azure",
  "Firebase",
  "Relm",
  "Redux",
  "Mob-X",
  "Zustand",
  "Teaful",
  "Legend",
  "TanStack Query",
  "SWR",
  "Jest",
  "Appium",
  "AppCenter",
  "Segment Analytics",
  "Amplitude",
  "Maestro",
  "React Native Testing Library",
  "Github Copilot",
  "AI Code Editors",
  "Storybook",
  "Tamagui",
  "React Native Paper",
  "UI Kitten",
  "Locofy",
  "Netlify",
  "Apple App Store",
  "Google Play Store",
  "Android Studio",
  "Xcode",
]

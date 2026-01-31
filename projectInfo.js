const projectInfo = [
  {
    id: 1,
    projectTitle: "Amplify",
    projectLink: "https://amplifyguitar.netlify.app/",
    projectScreenshot: "docs/amplify-jamroom.png",
    shortDescription:
      "Amplify is a gamified guitar learning application I built to solve a problem I constantly faced: staying consistent with practice. The app features three main sections—Dashboard for tracking progress and XP, Jam Room to view chords/scales and interactive lessons, and The Shed for timed practice sessions. Built with React and deployed on Netlify, Amplify brings structure, clarity, and motivation back into learning guitar.",
    fullDescription: null,
    note: "This project is currently frontend only. I will be integrating backend functionality using Java, Spring Boot, and MySQL in Spring 2026.",
    techStack: [
      {
        techName: "React",
        icon: "devicon-react-original",
        link: "https://react.dev/",
      },
      {
        techName: "JavaScript",
        icon: "devicon-javascript-plain",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      // { techName: "Java", icon: "devicon-java-plain" },
      // { techName: "Spring Boot", icon: "devicon-spring-plain" },
      // { techName: "MySQL", icon: "devicon-mysql-plain" },
      {
        techName: "TailwindCSS",
        icon: "devicon-tailwindcss-plain",
        link: "https://tailwindcss.com/",
      },
      { techName: "Shadcn UI", icon: null, link: "https://ui.shadcn.com/" },
      { techName: "Headless UI", icon: null, link: "https://headlessui.com/" },
    ],
  },
  {
    id: 2,
    projectTitle: "Home Maintenance Tracker",
    projectLink: "https://github.com/joshliford/home-maintenance-tracker",
    projectScreenshot: null,
    shortDescription:
      "Home Maintenance Tracker is a full-stack application for keeping track of general home maintenance tasks with reminders.",
    fullDescription: null,
    note: "This project was started January 2026 and is a work-in-progress. I plan to build the frontend using React with Typescript.",
    techStack: [
      {
        techName: "Java",
        icon: "devicon-java-plain",
        link: "https://docs.oracle.com/en/java/javase/21/",
      },
      {
        techName: "Spring Boot",
        icon: "devicon-spring-plain",
        link: "https://spring.io/"
      },
      {
        techName: "MySQL",
        icon: "devicon-mysql-plain",
        link: "https://dev.mysql.com/doc/",
      },
    ],
  },
];

export default projectInfo;

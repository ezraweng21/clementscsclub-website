const siteContent = {
  club: {
    name: "Clements Computer Science Club",
    school: "William P. Clements High School",
    tagline: "Build, learn, and create with code.",
    description:
      "Clements Computer Science Club is a student-led space for students who want to explore programming, problem-solving, technology, and collaborative projects. This starter site uses temporary content for meetings, workshops, competitions, and community events so the club can easily replace placeholders with final details later.",
  },

  meetingInfo: {
    schedule:
      "General meetings are planned as recurring after-school sessions during the school year. Workshops, project meetings, and competition prep can be added once the final calendar is confirmed.",
    shortSchedule: "General meetings: monthly after school (placeholder)",
    workshopSchedule:
      "Workshops and project sessions: scheduled as needed (placeholder)",
    location: "Room TBD",
    joinText:
      "Join the club Discord or Remind once links are finalized. All experience levels are welcome, including beginners who are just getting started.",
  },

  join: {
    title: "How to Join",
    steps: [
      "Join the Discord or Remind once those channels are set up for announcements.",
      "Fill out the interest form when it is published and attend an intro meeting or workshop.",
      "Stay involved through meetings, coding activities, team projects, and club events during the year.",
    ],
  },

  homepage: {
    intro:
      "A starter site for students to explore coding, projects, competitions, and computer science beyond the classroom.",
    highlights: [
      "Hands-on coding workshops and beginner-friendly learning sessions",
      "Collaborative projects, hackathon prep, and build nights",
      "Competition support for programming and problem-solving events",
      "Guest speakers, showcases, and community-building activities",
    ],
    terminalLines: [
      "git init club-site",
      "npm create vite@latest project-lab",
      "function buildIdeas() { return members.map(makeSomething); }",
      "status: waiting for real club links, officer names, and event dates",
    ],
    signalItems: [
      {
        label: "Mode",
        value: "BUILD / LEARN / SHARE",
        text: "A flexible starter setup for workshops, competitions, and project nights.",
      },
      {
        label: "Members",
        value: "ALL LEVELS",
        text: "Designed for beginners, experienced coders, and everyone in between.",
      },
      {
        label: "Format",
        value: "DATA-DRIVEN",
        text: "Most club copy and placeholders can be swapped from a central content file.",
      },
    ],
    tracks: [
      {
        title: "Code Lab",
        command: "learn();",
        text: "Starter-friendly lessons for programming basics, syntax, debugging, and problem-solving.",
      },
      {
        title: "Build Studio",
        command: "shipProject();",
        text: "Room for websites, apps, tools, automations, and collaborative portfolio projects.",
      },
      {
        title: "Challenge Arena",
        command: "solve(input);",
        text: "Practice for contests, hackathons, interview-style questions, and team challenge events.",
      },
    ],
  },

  aboutPoints: [
    {
      title: "Learn Computer Science",
      text: "Explore programming concepts, software ideas, and technical problem-solving through approachable club activities.",
    },
    {
      title: "Build Real Projects",
      text: "Practice by creating apps, websites, tools, and team projects that can grow as the club develops.",
    },
    {
      title: "Join a Tech Community",
      text: "Meet students who enjoy coding, design, engineering, and experimenting with new ideas together.",
    },
  ],

  officers: [
    {
      role: "President",
      name: "Name Here",
      grade: "12",
      image: "/images/officers/president.jpg",
    },
    {
      role: "Vice President",
      name: "Name Here",
      grade: "11",
      image: "/images/officers/vice-president.jpg",
    },
    {
      role: "Secretary",
      name: "Name Here",
      grade: "11",
      image: "/images/officers/officer.jpg",
    },
    {
      role: "Treasurer",
      name: "Name Here",
      grade: "11",
      image: "/images/officers/officer.jpg",
    },
    {
      role: "Projects Lead",
      name: "Name Here",
      grade: "10",
      image: "/images/officers/officer.jpg",
    },
    {
      role: "Outreach Lead",
      name: "Name Here",
      grade: "10",
      image: "/images/officers/officer.jpg",
    },
  ],

  events: {
    types: [
      "General meetings with demos, announcements, and coding topics",
      "Workshops for programming fundamentals and technical skills",
      "Project build sessions and collaborative work time",
      "Competition preparation for coding challenges and team events",
      "Guest speakers, alumni talks, and career exploration",
      "Showcases, socials, and club-wide community events",
    ],

    timeline: [
      {
        date: "August 2026",
        title: "Club Interest Meeting",
        description:
          "Placeholder kickoff meeting to introduce the club, officer team, and opportunities for the year.",
      },
      {
        date: "September 2026",
        title: "Beginner Coding Workshop",
        description:
          "Sample workshop focused on a beginner-friendly programming topic such as Python, web basics, or problem-solving.",
      },
      {
        date: "October 2026",
        title: "Project Brainstorm Night",
        description:
          "Placeholder collaborative session where members pitch ideas and form teams for club projects.",
      },
      {
        date: "November 2026",
        title: "Competition Prep Session",
        description:
          "Starter placeholder for programming contest prep, practice problems, or interview-style challenges.",
      },
      {
        date: "December 2026",
        title: "Guest Speaker or Alumni Panel",
        description:
          "Temporary space for a speaker event covering CS pathways, internships, personal projects, or college advice.",
      },
      {
        date: "January 2027",
        title: "Spring Semester Restart Meeting",
        description:
          "Placeholder meeting to reset goals, welcome new members, and launch spring programming.",
      },
      {
        date: "February 2027",
        title: "Build Session",
        description:
          "Project work time for websites, apps, automation ideas, or other member-led builds.",
      },
      {
        date: "March 2027",
        title: "Hackathon or Showcase Prep",
        description:
          "Temporary event slot for demo preparation, portfolio work, or hackathon planning.",
      },
      {
        date: "April 2027",
        title: "Club Showcase",
        description:
          "Placeholder celebration for member projects, presentations, and highlights from the year.",
      },
    ],
  },

  resources: [
    {
      category: "Discord",
      title: "Club Discord",
      description:
        "Placeholder for the main communication server for announcements, resources, and discussion.",
      link: "",
    },
    {
      category: "Remind",
      title: "Club Remind",
      description:
        "Placeholder for meeting reminders and quick updates once the class code is available.",
      link: "",
    },
    {
      category: "Interest Form",
      title: "Interest Form",
      description:
        "Placeholder sign-up form for students who want to join the Computer Science Club.",
      link: "",
    },
    {
      category: "Shared Drive",
      title: "Slides and Meeting Materials",
      description:
        "Placeholder for workshop slides, notes, starter files, and archived meeting resources.",
      link: "",
    },
    {
      category: "Projects",
      title: "Project Hub",
      description:
        "Placeholder for repositories, project prompts, or a gallery of member work.",
      link: "",
    },
    {
      category: "Competitions",
      title: "Competition Resources",
      description:
        "Placeholder for practice materials, challenge links, and competition registration details.",
      link: "",
    },
    {
      category: "Socials",
      title: "Club Instagram",
      description:
        "Placeholder for social updates, event reminders, and featured club moments.",
      link: "",
    },
    {
      category: "Dues",
      title: "Member Dues",
      description:
        "Placeholder for payment information and deadlines if dues are used later.",
      link: "",
    },
  ],

  contact: {
    generalEmail: "TBD - add club email",
    sponsorName: "Faculty Sponsor TBD",
    sponsorEmail: "TBD - add sponsor email",
    instagramHandle: "@clementscsclub",
    remindCode: "@TBD",
    discordLink: "",
    remindLink: "",
    instagramLink: "",
    interestFormLink: "",
    linktree: "TBD - add link hub",
  },
};

export default siteContent;

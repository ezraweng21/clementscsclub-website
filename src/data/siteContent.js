const siteContent = {
  club: {
    name: "Computer Science Club",
    shortName: "CS Club",
    school: "William P. Clements High School",
    tagline: "Building, competing, and exploring computer science.",
    description:
      "Computer Science Club at William P. Clements High School is a student-led community built around fun, interactive computer science activities, technical exploration, and competition-focused learning. From beginner-friendly topics and collaborative challenges to more advanced lessons and coaching, the club creates a space where students can build skills, stay curious, and grow together through computer science.",
  },

  meetingInfo: {
    schedule:
      "General meetings are held every Friday after school. Throughout the year, the club also runs competition-focused lessons, coaching sessions, review meetings, and special activity-based programming.",
    shortSchedule: "General meetings: every Friday after school",
    workshopSchedule:
      "Competition lessons, coaching, and special sessions: scheduled throughout the semester",
    location: "Room 2824 (Lorena) and Room 2010 (Fugel)",
    joinText:
      "Anyone can attend, and students currently in a computer science class are especially encouraged to come. A laptop is recommended but not required, and the best way to stay updated is by joining the club Discord.",
  },

  join: {
    title: "How to Join",
    steps: [
      "Join the club Discord to receive announcements, meeting updates, and club information.",
      "Come to a Friday after-school meeting to get introduced to the club and meet the officer team.",
      "Stay involved through weekly meetings, competition prep, interactive activities, and club events during the year.",
    ],
  },

  homepage: {
    heroTitle: "Code, compete, and create",
    heroAccent: "with CS Club.",
    intro:
      "A student-led space for interactive computer science activities, competitive lessons, collaborative learning, and a stronger tech community at Clements.",
    heroChips: [
      "weekly friday meetings",
      "competition prep",
      "interactive cs activities",
    ],
    highlights: [
      "Fun and interactive computer science activities that go beyond the classroom",
      "Competition-focused lessons, coaching, and challenge-based learning",
      "A welcoming space for students currently in CS classes and anyone interested in coding",
      "Weekly meetings, club events, and opportunities to grow with other students",
    ],
    terminalLines: [
      "const meetingDay = 'Friday after school';",
      "join('Discord').then(() => buildSkills());",
      "runLesson({ mode: 'interactive', focus: 'competition + creativity' });",
      "status: recruiting curious coders, problem solvers, and builders",
    ],
    signalItems: [
      {
        label: "Meetings",
        value: "EVERY FRIDAY",
        text: "The club runs weekly after-school meetings with room details and special sessions announced through Discord.",
      },
      {
        label: "Leadership",
        value: "22 OFFICERS",
        text: "A large officer and coaching team helps support members across activities, lessons, and contests.",
      },
      {
        label: "Focus",
        value: "FUN + COMPETITION",
        text: "The club blends interactive CS topics with more competitive and skill-building experiences.",
      },
    ],
    globeStats: [
      {
        label: "Meetings",
        value: "WEEKLY",
      },
      {
        label: "Team",
        value: "22 OFFICERS",
      },
      {
        label: "Energy",
        value: "ACTIVE + GROWING",
      },
    ],
    globeNodes: [
      {
        title: "Lessons",
        value: "CS TOPICS",
      },
      {
        title: "Training",
        value: "COMPETITION",
      },
      {
        title: "People",
        value: "COMMUNITY",
      },
    ],
    tracks: [
      {
        title: "Interactive Topics",
        command: "explore();",
        text: "Learn through fun meetings, club activities, and engaging topics that make computer science feel approachable and interesting.",
      },
      {
        title: "Competition Prep",
        command: "train();",
        text: "Build speed, logic, and problem-solving skills through lessons and coaching connected to competitive CS experiences.",
      },
      {
        title: "Community Growth",
        command: "connect();",
        text: "Meet other students interested in coding, grow through shared learning, and be part of the CS culture on campus.",
      },
    ],
  },

  aboutPoints: [
    {
      title: "Explore Computer Science",
      text: "Dive into interesting CS topics through interactive lessons, club activities, and conversations that go beyond regular coursework.",
    },
    {
      title: "Grow Through Challenge",
      text: "Build technical confidence through competition-style lessons, coaching, and problem-solving practice.",
    },
    {
      title: "Join the Community",
      text: "Be part of a collaborative group of students who enjoy coding, learning, and improving together.",
    },
  ],

  aboutFeature: {
    eyebrow: "Club Network",
    title: "A Community Connected by Code",
    description:
      "Computer Science Club is designed to feel both welcoming and ambitious: a place where students can have fun with computer science, learn interactive topics, and also push themselves through more competitive training and structured growth.",
    stats: [
      {
        label: "Purpose",
        value: "LEARN + COMPETE",
      },
      {
        label: "People",
        value: "OPEN TO ALL",
      },
      {
        label: "Culture",
        value: "COLLABORATIVE",
      },
    ],
    nodes: [
      {
        title: "Topics",
        value: "INTERACTIVE",
      },
      {
        title: "Lessons",
        value: "COMPETITIVE",
      },
      {
        title: "Club",
        value: "CONNECTED",
      },
    ],
  },

  officers: [
    {
      role: "Co-President",
      name: "Vidya Ganesh",
      grade: "",
      image: "/images/officers/vidya.jpg",
    },
    {
      role: "Co-President",
      name: "Harrison Zhu",
      grade: "",
      image: "/images/officers/harrison.jpg",
    },
    {
      role: "Vice President",
      name: "Jonathan Le",
      grade: "",
      image: "/images/officers/jonathan.jpg",
    },
    {
      role: "Lead Advanced Coach",
      name: "Benjamin Lin",
      grade: "",
      image: "/images/officers/benjamin.jpg",
    },
    {
      role: "Lead Novice Coach",
      name: "Max Liu",
      grade: "",
      image: "/images/officers/max.jpg",
    },
    {
      role: "Lead Novice Coach",
      name: "Caroline Liu",
      grade: "",
      image: "/images/officers/caroline.jpg",
    },
    {
      role: "Sys Admin",
      name: "Christensen Wijaya",
      grade: "",
      image: "/images/officers/christensen.jpg",
    },
    {
      role: "Sys Admin",
      name: "Ezra Weng",
      grade: "",
      image: "/images/officers/ezra.jpg",
    },
    {
      role: "Historian",
      name: "Faye Tang",
      grade: "",
      image: "/images/officers/faye.jpg",
    },
    {
      role: "Secretary",
      name: "Claire Weng",
      grade: "",
      image: "/images/officers/claire.jpg",
    },
    {
      role: "Coach Trainer",
      name: "Nikhil Chowdhary",
      grade: "",
      image: "/images/officers/nikhil.jpg",
    },
    {
      role: "Coach",
      name: "Ryan Wu",
      grade: "",
      image: "/images/officers/ryan.jpg",
    },
    {
      role: "Coach",
      name: "Olivia Xu",
      grade: "",
      image: "/images/officers/olivia.jpg",
    },
    {
      role: "Coach",
      name: "Matthew Chen",
      grade: "",
      image: "/images/officers/matthew.jpg",
    },
    {
      role: "Coach",
      name: "Bryan Wang",
      grade: "",
      image: "/images/officers/bryan.jpg",
    },
    {
      role: "Coach",
      name: "Ethan Leal",
      grade: "",
      image: "/images/officers/ethan.jpg",
    },
    {
      role: "Coach",
      name: "Emma Xu",
      grade: "",
      image: "/images/officers/emma.jpg",
    },
    {
      role: "Coach",
      name: "Yale Zhang",
      grade: "",
      image: "/images/officers/yale.jpg",
    },
    {
      role: "Coach",
      name: "Andrew Meng",
      grade: "",
      image: "/images/officers/andrew.jpg",
    },
    {
      role: "Coach",
      name: "Ava Chen",
      grade: "",
      image: "/images/officers/ava.jpg",
    },
    {
      role: "Coach",
      name: "Wufan Zhang",
      grade: "",
      image: "/images/officers/wufan.jpg",
    },
    {
      role: "Coach",
      name: "Jessica Xu",
      grade: "",
      image: "/images/officers/jessica.jpg",
    },
  ],

  events: {
    types: [
      "Weekly Friday after-school meetings",
      "Interactive computer science activities and themed lessons",
      "Competition-focused training and coaching sessions",
      "Novice and advanced lesson support",
      "Special contests, team events, and seasonal programming",
      "Community-building meetings and club-wide activities",
    ],

    timeline: [
      {
        date: "Weekly",
        title: "Friday General Meetings",
        description:
          "Recurring after-school meetings that bring members together for announcements, lessons, activities, and club updates.",
      },
      {
        date: "Fall",
        title: "Interest Meeting and Semester Kickoff",
        description:
          "Introduces new members to the club, explains how the year works, and highlights opportunities to participate.",
      },
      {
        date: "Throughout the Semester",
        title: "Interactive CS Topic Meetings",
        description:
          "Club meetings centered on fun and engaging computer science ideas, problem-solving activities, and student participation.",
      },
      {
        date: "Throughout the Semester",
        title: "Competition Lessons and Coaching",
        description:
          "Structured lessons designed to help students strengthen technical thinking and prepare for competitive CS experiences.",
      },
      {
        date: "November 22, 2025",
        title: "Clements Computer Science Competition",
        description:
          "Annual school-hosted programming competition featuring algorithmic problem solving and team-based contests.",
      },
      {
        date: "Fall",
        title: "Thanksgiving Contest Preparation",
        description:
          "Contest preparation and packet-writing support led by officers, lead coaches, and coaches.",
      },
      {
        date: "Spring",
        title: "Advanced and Novice Skill Building",
        description:
          "Continued support for members at different experience levels through lessons, guided practice, and coaching.",
      },
      {
        date: "Spring",
        title: "Special Events and Club Activities",
        description:
          "Additional activities, collaborative events, and community moments that keep the club active and engaging throughout the year.",
      },
      {
        date: "End of Year",
        title: "Wrap-Up and Recognition",
        description:
          "A closing reflection on the year with highlights, appreciation, and celebration of member and officer involvement.",
      },
    ],
  },

  resources: [
    {
      category: "Public Drive",
      title: "Shared Club Drive",
      description:
        "Public Google Drive folder for club materials, resources, and shared files.",
      link: "https://drive.google.com/drive/folders/1l-jrvwEIcd25lVJ-hMKcQA8JhuZncTeX?usp=sharing",
    },
    {
      category: "Dues",
      title: "RevTrak Club Dues",
      description:
        "RevTrak payment link for club dues and related club logistics.",
      link: "https://fortbendisd.revtrak.net/FBISD-Schools-1082/hs/CHS/chs-computer-science/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnakOCsPdYqf0fvbgJgGde7emhDRfW2Xv2JYkqwFUXhSKNND6OIKrIUGYSkMU_aem_rGzcstSWy1cYtNVsadurRA#/v/chs-computer-science-club-dues",
    },
    {
      category: "Instagram",
      title: "Club Instagram",
      description:
        "Follow the club Instagram for announcements, updates, and club highlights.",
      link: "https://www.instagram.com/chscsclub/",
    },
    {
      category: "Email",
      title: "Club Email",
      description:
        "Reach out directly for questions about joining, meetings, and club information.",
      link: "mailto:clementscsclub@gmail.com",
    },
    {
      category: "Discord",
      title: "Join the Discord",
      description:
        "Primary place for joining updates, meeting reminders, and club communication.",
      link: "https://discord.gg/hf9FT3HVdJ",
    },
    {
      category: "Interest Form",
      title: "Interest Form",
      description:
        "Fill out the interest form so the club can keep track of new and returning members.",
      link: "https://forms.gle/uyRdZWg35vkKc51S7",
    },
    {
      category: "Slides",
      title: "Slides and Lesson Materials",
      description:
        "Shared drive folder for slides, lesson materials, and club resources.",
      link: "https://drive.google.com/drive/folders/1l-jrvwEIcd25lVJ-hMKcQA8JhuZncTeX?usp=sharing",
    },
  ],
  contact: {
    generalEmail: "clementscsclub@gmail.com",
    sponsorName: "Lubna Lorena",
    sponsorEmail: "lubna.lorena@fortbendisd.gov",
    instagramHandle: "@chscsclub",
    remindCode: "",
    discordLink: "https://discord.gg/hf9FT3HVdJ",
    remindLink: "",
    instagramLink: "https://www.instagram.com/chscsclub/",
    interestFormLink: "https://forms.gle/uyRdZWg35vkKc51S7",
    linktree: "",
  },
};

export default siteContent;

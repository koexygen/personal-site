import Mock from "../mock";

const database = {
  information: {
    name: "Gio",
    aboutContent:
      "I’m a 25 years old software engineer currently living in Tbilisi, Georgia, resident of New York, USA. I have a burning passion to create/ build projects that benefits, innovates daily life of humanity. I enjoy my professional field, the limitless potential and impact it can have, It is what pushes me every day to become a better software developer. Outside of coding, one can find me Riding my motorcycle as a hobby, gaming, join different events and thinking. I am happy to be part of humanity today, in this day and age When, it is so interesting to broaden your horizons, in every way thus, better yourself and others just by doing what you love to do.\n" +
      "Just do it!",
    age: 26,
    phone: "+995 558888884",
    nationality: "Georgia",
    language: "English, Georgian, Russian",
    email: "ggiosweb@gmail.com",
    // address: '121 King Street, Melbourne, Australia',
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://www.facebook.com/thekoexygen/",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/gio-chomakhashvili-a739911b9/",
      dribbble: "",
      github: "https://github.com/koexygen",
    },
    brandImage: "/images/me-smile.png",
    aboutImage: "/images/me-smile.png",
    aboutImageLg: "/images/me-smile.png",
    cvfile: "/files/Resume.pdf",
  },
  services: [
    {
      title: "Programming languages",
      icon: "code",
      details: "SQL, Ruby, Lua, HTML, CSS, JavaScript, Python, C#",
    },
    {
      title: "Databases",
      icon: "database",
      details: "PostgreSQL, MongoDB, MySQL, MSSql",
    },
    {
      title: "Frameworks/Libs",
      icon: "layers",
      details:
        "NodeJS, React, Redux, GraphQL, Ruby on Rails, Express, SASS, SCSS, Pug, Jade, EJS, jQuery...",
    },
    {
      title: "Technologies",
      icon: "rocket",
      details:
        "Git, Electron, Responsive, Hybrid Development, LiteSpeed, Load Balancer, WebRTC, Sockets",
    },
    {
      title: "Extra",
      icon: "grow",
      details:
        "Data structures & algorithms, Wordpress/Development, Server Optimize, Apache, NgNix, LiteSpeed, Big O Notation, Performance Optimization, Load Balance, Cloud Configuration, VPS/Dedicated Management, CDN Integration with Dynamic Content, Aggressive Caching Static/Dynamic, Scripting...",
    },
  ],

  skills: [
    {
      title: "Friendly",
      value: 100,
    },
    {
      title: "Drama King",
      value: 0,
    },

    {
      title: "Communication",
      value: 90,
    },
    {
      title: "Responsibility",
      value: 99,
    },
    {
      title: "Learning new things",
      value: 95,
    },
    {
      title: "Motivation",
      value: 100,
    },
    {
      title: "Teamwork",
      value: 90,
    },
    {
      title: "Passion of coding",
      value: 95,
    },
    {
      title: "Passion of Backend",
      value: 35,
    },
    {
      title: "Passion of learning",
      value: 100,
    },
    {
      title: "Passion of Frontend",
      value: 65,
    },
    {
      title: "Passion of problem solving",
      value: 100,
    },
    {
      title: "Passion of old technologies",
      value: 25,
    },
    {
      title: "Passion of cutting edge technologies",
      value: 100,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Hoovies",
      subtitle: "Online Movies Streaming Service.",
      imageUrl: "/images/hoovies-fb-banner.jpg",
      largeImageUrl: ["/images/hoovies.net-large.png"],
      url: "https://hoovies.net",
    },
    {
      id: 2,
      title: "Blacknet",
      subtitle: "Most secure live chatting system.",
      imageUrl: "/images/blacknet.png",
      largeImageUrl: ["/images/blacknet.png"],
      url: "https://blacknet.in",
    },
    {
      id: 3,
      title: "GFlix",
      subtitle: "Netflix quick clone.",
      imageUrl: "/images/gflix-min.png",
      largeImageUrl: ["/images/gflix-inside-min.png"],
      url: "https://gflix.pages.dev/",
    },
    {
      id: 4,
      title: "What to Watch",
      subtitle: "Quick Search for Movies & TV Series.",
      imageUrl: "/images/wtw-min.png",
      largeImageUrl: ["/images/wtw-min.png"],
      url: "https://koexygen.github.io/what-to-watch-d3/",
    },
    {
      id: 4,
      title: "Money Tracker",
      subtitle: "Quick Demo of D3.JS Data Charts.",
      imageUrl: "/images/money-tracker-min.png",
      largeImageUrl: ["/images/money-tracker-min.png"],
      url: "https://koexygen.github.io/d3-money-tracker/",
    },
    {
      id: 5,
      title: "Kazbegi - Frontend",
      subtitle: "Quick Demo of Frontend Mockup.",
      imageUrl: "/images/kazbegi-min.png",
      largeImageUrl: ["/images/kazbegi-min.png"],
      url: "https://koexygen.github.io/kazbegi/",
    },
    {
      id: 5,
      title: "Kazbegi - Frontend",
      subtitle: "Quick Demo of Frontend Mockup.",
      imageUrl: "/images/kazbegi-min.png",
      largeImageUrl: ["/images/kazbegi-min.png"],
      url: "https://koexygen.github.io/kazbegi/",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2014 - Present",
        position: "Custom Scripting",
        company: "Gaming Engines",
        details:
          "Since 2014 i have made more then 100+ plugin for different games and different plugins in different programming languages, for example one of the game was World of Warcraft and they had open API for Lua scripting, i made more then 10+ plugin for World of Warcraft and those plugins was just extra tools which was helping in multiple way to a gamers.",
      },
      {
        id: 2,
        year: "2020 - 2020",
        position: "Software Engineer",
        company: "GEDF - Georgian Energy development fund",
        details:
          "In GEDF i have implemented many different open source projects and modified for their own usage. one of the examples are 'Odoo', 'NextCloud', 'Zimbra' and so on.",
      },
      {
        id: 3,
        year: "2021 - Present",
        position: "Co-Founder, CTO, Software Engineer",
        company: "ImperiumHub",
        details:
          "I have gathered investments for multiple projects, so we decided to create ImperiumHub which is the root of all our projects. currently the last time i updated this information, we already released in production 'https://hoovies.net', 'https://gradu.ge', 'https://imperiumhub.com', 'https://blacknet.net' and more coming soon...",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2008 - Present",
        graduation: "Self Educational",
        university: "Online Documentations, Courses",
        details:
          "since 12 years old, i am self educational and really fan of self education, even today im still learning new things on different websites or online courses.",
      },
      {
        id: 2,
        year: "2016 - 2021",
        graduation: "Bachelor of Science",
        university: "Georgian Technical University",
        details: "i have successfully graduated 'GTU' University.",
      },
      {
        id: 3,
        year: "2021 - 2021",
        graduation: "Full Stack Software Engineer",
        university: "AppAcademy",
        details:
          "Immersive software development course with a focus on full-stack web development, which entailed 1000+ hours of coding.",
      },
    ],
  },

  contactInfo: {
    phoneNumbers: ["+995 558888884, WhatsApp, Viber, Telegram"],
    emailAddress: ["ggiosweb@gmail.com"],
    address: "Georgia, Tbilisi",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});

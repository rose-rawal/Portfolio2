/**
 * All portfolio content, carried over from the previous site (C:\Work\Profile).
 * Edit this file to update copy across the whole website.
 */

export const profile = {
  name: "Rose Rawal",
  first: "Rose",
  last: "Rawal",
  role: "Software Developer",
  brand: "Kuro",
  location: "Kathmandu, Nepal",
  region: "Nepal",
  studies: "Master (Running)",
  course: "MIT",
  tagline: "Better Today Than Yesterday",
  heroTitle:
    "Full-Stack Developer Building Web, Mobile and Cloud Products That Ship",
  homeLead:
    "I build complete products — the interface your customers touch, the systems behind it, and the deployment that puts it online.",
  homeBody:
    "React and Next.js up front, Node, Express and .NET behind, shipped on the platforms that fit — from Netlify and Azure to Docker, VPS and the app stores.",
  homeBlurb:
    "Three years of building and shipping software — enterprise platforms at XmartPoint, product work at Bits Kraft, and a website CMS for clients abroad. Web apps, mobile apps, APIs and full deployment, from first commit to live URL, in fluent English and on schedule.",
  aboutLead:
    "I learned to code to gain a skill and ended up loving the grind. Years later I build enterprise systems by day, an international CMS by night, and ship my own projects in between.",
  aboutBody:
    "Web, mobile, back end, deployment — whatever a project needs to stand on its own once it is live.",
  shortBio:
    "I started coding for the skill and stayed for the work. Today I build full-stack products end to end — interfaces people enjoy, APIs that hold up under load, and releases that go out on time. Most of my client work happens in English, across time zones, held to the same standard every time.",
  contactBlurb:
    "Have a product to build, a website to launch or an app to ship? I take on freelance work alongside my full-time role — web and mobile apps, CMS builds, API work and full deployment on the platform of your choice. Tell me what you are building; I usually reply within a day.",
  aboutBlurb:
    "Got a project that needs building? I take on freelance web, mobile and CMS work — the fastest way to reach me is the contact page.",
  approachTitle: "Built in the Open, Shipped on Time",
  approachNote: "Clear scope · Weekly progress · Clean handoff",
  approachBody:
    "Every build starts with a clear scope and ends with a live URL you control. You get staging links while it is being built, progress you can see week by week, and clean source code handed over — no mystery, no lock-in. And I stay available after launch, because shipping is the start of the relationship, not the end of it.",
  quote: "Good software is measured by what still works after launch.",
  quoteBody:
    "That is the standard I build to — code that is easy to hand over, infrastructure that does not wake you up at night, and a developer who answers. If that is what your project needs, let us talk.",
  statement: "Full-stack, end to end — design to deployment.",
  availability: "Open to freelance & remote work",
};

export const contact = {
  email: "rooserwl@gmail.com",
  phone: "+977 9821688075",
  phoneDisplay: "+977 98216 88075",
  location: "Nepal, Kathmandu",
  area: "Baneswor, Kathmandu",
};

export const socials = [
  { label: "GitHub", short: "Gh", url: "https://github.com/rose-rawal" },
  {
    label: "LinkedIn",
    short: "Li",
    url: "https://www.linkedin.com/in/rose-rawal-351543206/",
  },
  {
    label: "Instagram",
    short: "Ig",
    url: "https://www.instagram.com/kurobara111/",
  },
  {
    label: "Facebook",
    short: "Fb",
    url: "https://www.facebook.com/rose.rawal.94",
  },
];

/**
 * Third-party assets and their licenses. The 3D model is CC BY 4.0, which
 * requires crediting the author, linking the source and naming the license.
 */
export const credits = [
  {
    item: "“Cat dispenser” 3D model",
    author: "LeafChan",
    authorUrl: "https://sketchfab.com/CuteLeaf",
    sourceLabel: "Sketchfab",
    sourceUrl:
      "https://sketchfab.com/3d-models/cat-dispenser-a48ec772fe3a43b8998836f5fafc4087",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    item: "POS terminal photo",
    author: "VulcanSphere",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Vulphere",
    sourceLabel: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ingenico_iCT250_payment_terminal_machine.jpg",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
];

export const nav = [
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

export type Project = {
  index: string;
  name: string;
  kind: string;
  meta: string;
  description: string;
  longDescription: string;
  stack: string[];
  builtBy: "Self" | "Team";
  links: { label: string; url: string }[];
  image: string;
  imageAlt: string;
};

export type ProProject = {
  index: string;
  name: string;
  kind: string;
  meta: string;
  longDescription: string;
  stack: string[];
  builtBy: "Self" | "Team";
  /** Live links — only for work that is public, i.e. not under NDA. */
  links?: { label: string; url: string }[];
  /** NDA entries carry open-source imagery instead of real screens. */
  nda: boolean;
  image: string;
  imageAlt: string;
};

/** Professional work — details cleared for sharing; NDA entries carry open-source imagery. */
export const professional: ProProject[] = [
  {
    index: "P1",
    name: "PairAble",
    kind: "Social Mobile App",
    meta: "Flutter + ASP.NET Core — live on the Play Store",
    longDescription:
      "A cross-platform social app built at PLab Production — matchmaking, learning modules, user management and real-time messaging. Runs on Docker with Redis behind a Linux VPS, and published to the Google Play Store. I work on features across the whole stack, from UI to API.",
    stack: ["Flutter", "ASP.NET Core", "Docker", "Redis", "MSSQL"],
    builtBy: "Team",
    nda: true,
    image: "/media/proj/pairable.jpg",
    imageAlt: "A hand holding a smartphone",
  },
  {
    index: "P2",
    name: "Enterprise Banking Systems",
    kind: "Loan & Document Workflows",
    meta: "React & ASP.NET MVC — enterprise workflows on MSSQL",
    longDescription:
      "Enterprise document and loan workflows built at XmartPoint Technologies — contract & memo management, loan origination, disbursement tracking and a public-facing loan portal. React front ends over .NET Core and ASP.NET MVC APIs on MSSQL, with stored procedures, workflow-driven approvals and performance tuning for the banking domain.",
    stack: ["React", ".NET Core", "ASP.NET MVC", "MSSQL"],
    builtBy: "Team",
    nda: true,
    image: "/media/proj/banking.jpg",
    imageAlt: "Modern corporate office building against a blue sky",
  },
  {
    index: "P3",
    name: "Website Builder",
    kind: "CMS Platform",
    meta: "Full-stack CMS — international client, built hands-on",
    longDescription:
      "A Content Management System that lets users set up their website exactly as they want — content, layout and pages configured through the platform instead of code. Built and maintained as a freelance project with an international client, planned and delivered in professional English across time zones.",
    stack: ["Full-stack", "CMS"],
    builtBy: "Self",
    nda: true,
    image: "/media/proj/cms.jpg",
    imageAlt: "Laptop showing an admin dashboard with charts and stats",
  },
  {
    index: "P4",
    name: "National Bio Tech",
    kind: "Client Website",
    meta: "React + Cloudflare — live at nationalbiotechlimited.com.np",
    longDescription:
      "The company website for National Bio Tech Limited — organic fertiliser maker in Godawari, Lalitpur. Product catalogue, certifications and dealer content designed, built and delivered as a complete freelance engagement: client conversation to production deployment, handled end to end. Live at nationalbiotechlimited.com.np.",
    stack: ["React", "Cloudflare"],
    builtBy: "Self",
    nda: false,
    links: [
      { label: "Visit site", url: "https://nationalbiotechlimited.com.np/" },
    ],
    image: "/media/proj/nbt.png",
    imageAlt:
      "National Bio Tech Limited website — organic fertilizer made in Nepal",
  },
  {
    index: "P5",
    name: "Shop at Banau",
    kind: "E-commerce Platform",
    meta: "Full-stack store builder — live at shopatbanau.com",
    longDescription:
      "An online store builder for Nepal, built during my time at Saika Nepal — business owners start their own pasal, add products and take orders, with products, orders, delivery and store design handled from one dashboard. Live at shopatbanau.com, with real Kathmandu shops already built on it.",
    stack: ["Full-stack", "E-commerce"],
    builtBy: "Team",
    nda: false,
    links: [{ label: "Visit site", url: "https://shopatbanau.com/" }],
    image: "/media/proj/banau.png",
    imageAlt: "Shop at Banau homepage — Online pasal, Sajilai Banau",
  },
  {
    index: "P6",
    name: "POS System",
    kind: "Billing & Inventory",
    meta: "Hardware + software integration — sole developer",
    longDescription:
      "A point-of-sale system built at WebX, where I was the sole developer even on internship. Receipt printers and other POS devices wired into the software through Node.js/Express and Flask APIs, so billing, receipts and inventory run as one flow at the counter.",
    stack: ["Node.js", "Express", "Flask", "REST APIs"],
    builtBy: "Self",
    nda: true,
    image: "/media/proj/pos.jpg",
    imageAlt: "Card payment terminal at a point of sale",
  },
];

export const projects: Project[] = [
  {
    index: "P7",
    name: "MyChat",
    kind: "Chat Room",
    meta: "MERN — Realtime rooms without sockets",
    description:
      "A chatroom implemented with secure and well managed collection of accounts.",
    longDescription:
      "A chatroom built entirely on the MERN stack without socket.io or firebase — rooms, accounts and messages are synchronised purely through database connections. Accounts are secured and organised so conversations stay clean as the room grows.",
    stack: ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"],
    builtBy: "Self",
    links: [
      { label: "Visit site", url: "https://peach-kuro.netlify.app/" },
      { label: "Source", url: "https://github.com/rose-rawal" },
    ],
    image: "/media/proj/chat.jpg",
    imageAlt: "Two people on a park bench, one checking a phone",
  },
  {
    index: "P8",
    name: "Emergency",
    kind: "Mobile App",
    meta: "React Native — Cross-platform SOS system",
    description:
      "Android and iOS crossplatform app that provides SOS services for people.",
    longDescription:
      "An Android and iOS cross-platform app that provides SOS services — send an emergency signal, call directly, and observe all the stats of the incidents reported through the app. Built with React Native on the front and Node on the back.",
    stack: ["React Native", "Node", "Express", "MongoDB"],
    builtBy: "Team",
    links: [
      { label: "Source", url: "https://github.com/rose-rawal/emergency" },
    ],
    image: "/media/proj/sos.jpg",
    imageAlt: "Ambulance parked on a street outside a hospital",
  },
  {
    index: "P9",
    name: "Pear",
    kind: "Cocktail Search",
    meta: "React — Search, recipes and ingredients",
    description:
      "A site to search for the available cocktails and access their recipe and ingredients.",
    longDescription:
      "A site to search for available cocktails and access their recipe and ingredients, giving a glimpse of the data needed to learn how to prepare a drink. Built with React against a pre-built API, with Bootstrap for layout.",
    stack: ["HTML", "CSS", "JS", "React", "Bootstrap"],
    builtBy: "Self",
    links: [{ label: "Visit site", url: "https://peaches-kuro.netlify.app/" }],
    image: "/media/proj/pear.jpg",
    imageAlt: "Cocktail on a bar counter in warm light",
  },
  {
    index: "P10",
    name: "Eureka",
    kind: "Landing Page",
    meta: "HTML & CSS — Ecommerce front page",
    description:
      "An ecommerce landing page that illustrates my skill in basic usage of HTML and CSS.",
    longDescription:
      "An ecommerce landing page built with bare HTML and CSS (plus Bootstrap for rhythm). It shows the fundamentals — precise layout, considered spacing and a front page that holds its shape on every screen.",
    stack: ["HTML", "CSS", "Bootstrap"],
    builtBy: "Self",
    links: [{ label: "Visit site", url: "https://eureka-kuro.netlify.app/" }],
    image: "/media/proj/eureka.jpg",
    imageAlt: "Gift wrapping and a laptop on a desk",
  },
];

export type Expertise = {
  num: string;
  title: string;
  body: string;
  tags: string[];
  image: string;
};

export const expertise: Expertise[] = [
  {
    num: "1.0",
    title: "Web Applications",
    body: "React and Next.js front ends backed by Node, Express or .NET — dashboards, storefronts and portals built for real users and real load.",
    tags: ["React", "Next.js", "Node", ".NET"],
    image: "/media/lang/React.png",
  },
  {
    num: "2.0",
    title: "Backend & APIs",
    body: "Node, Express and ASP.NET Core services — authentication, business logic and REST APIs shaped around how your product actually works.",
    tags: ["Express", "ASP.NET", "C#"],
    image: "/media/lang/Js.webp",
  },
  {
    num: "3.0",
    title: "Mobile Apps",
    body: "React Native and Flutter apps that ship to Android and iOS together — built, published and maintained on the Play Store and App Store.",
    tags: ["React Native", "Flutter"],
    image: "/media/lang/Html.png",
  },
  {
    num: "4.0",
    title: "Deployment & Infrastructure",
    body: "Docker, Linux VPS, Azure, IIS, Cloudflare, Netlify, Render and Hostinger — I handle the hosting side too, so your product goes live and stays online.",
    tags: ["Docker", "Azure", "VPS"],
    image: "/media/lang/Css.png",
  },
  {
    num: "5.0",
    title: "Interface Design",
    body: "Tailwind, Sass and Bootstrap — spacing, hierarchy and motion tuned until the interface feels effortless on every screen.",
    tags: ["Tailwind", "Sass", "Bootstrap"],
    image: "/media/lang/Js.webp",
  },
];

export const skills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "Javascript", level: "Experienced" },
  { name: "React", level: "Experienced" },
  { name: "Next.js", level: "Experienced" },
  { name: "Node.js", level: "Experienced" },
  { name: "Tailwind CSS", level: "Experienced" },
  { name: "Express", level: "Skillful" },
  { name: ".NET Core (C# MVC)", level: "Skillful" },
  { name: "React Native", level: "Skillful" },
  { name: "Flutter", level: "Skillful" },
  { name: "MongoDB", level: "Skillful" },
  { name: "PostgreSQL", level: "Skillful" },
  { name: "MySQL / MSSQL", level: "Skillful" },
  { name: "Docker", level: "Skillful" },
];

export const platforms = [
  "Azure",
  "Docker",
  "Linux VPS",
  "IIS",
  "Render",
  "Netlify",
  "Hostinger",
  "Cloudflare",
  "Play Store",
  "App Store",
];

export const languages = [
  { name: "Nepali", level: 4 },
  { name: "English", level: 5 },
  { name: "Hindi", level: 4 },
];

export const experience: {
  company: string;
  role: string;
  period: string;
  note: string;
  body?: string;
}[] = [
  {
    company: "Bits Kraft",
    role: "Software Developer",
    period: "Mar 2025 — Present",
    note: "Current role.",
  },
  {
    company: "PLab Production",
    role: "Freelance Developer",
    period: "Feb 2024 — Present",
    note: "Freelance.",
    body: "Building a Content Management System (CMS) that lets users set up their website exactly as they want — developed hands-on together with international clients.",
  },
  {
    company: "XmartPoint Technologies",
    role: "Software Developer",
    period: "Jan 2023 — Mar 2025",
    note: "Full-time.",
    body: "Enterprise-scale full-stack work in the banking and financial domain — configurable systems, workflow-driven approvals, multi-database handling and performance tuning.",
  },
  {
    company: "National Bio Tech Limited",
    role: "Freelance Developer",
    period: "2025",
    note: "Freelance.",
    body: "Designed and delivered the company portfolio website (React, Cloudflare) — hands-on freelance delivery and client communication.",
  },
  {
    company: "Saika Nepal",
    role: "Software Developer",
    period: "Mar 2024 — Oct 2024",
    note: "Part-time.",
    body: "Startup full-stack work — UI implementation, fixes and animations, company website development, rapid feature delivery and mentoring junior developers.",
  },
  {
    company: "WebX",
    role: "Backend Intern",
    period: "Oct 2022 — Jan 2023",
    note: "Internship.",
    body: "Backend development with Node.js/Express and Flask for remote hardware control — receipt printing across Node-Python APIs via ngrok tunnel and API integrations.",
  },
];

export const education = [
  {
    degree: "MIT",
    school: "Patan College",
    place: "Kathmandu",
    period: "2025 — Present",
    note: "Currently pursuing.",
  },
  {
    degree: "BSc.CSIT",
    school: "Himalaya College of Engineering",
    place: "Kathmandu",
    period: "June, 2019 — 2024",
    note: "Completed.",
  },
  {
    degree: "A-Level",
    school: "Chelsea International Academy",
    place: "Kathmandu",
    period: "July, 2016 — June, 2018",
    note: "GPA 3.17",
  },
  {
    degree: "SLC",
    school: "KMC School",
    place: "Kathmandu",
    period: "February, 2015 — June, 2016",
    note: "GPA 3.65",
  },
];

export const certifications = [
  {
    title: "Frontend Web Development",
    body: "Got HTML, CSS and Bootstrap training which rocketed my interest in web development.",
  },
  {
    title: "MERN Stack BootCamp",
    body: "Learned the full MERN stack, which enabled me to do full-stack web development.",
  },
];

export const goals = ["Java", "Python", "Django"];

export const marqueeWords = [
  "Learning Never Stops",
  "Go Beyond",
  "Always Building",
  "Better Today Than Yesterday",
];

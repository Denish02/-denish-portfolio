export type ProjectImage = { src: string; alt: string };
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  desc: string;
  images: ProjectImage[];
  links: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "devsecops",
    title: "DevSecOps CI/CD Pipeline",
    subtitle: "Personal project / Security and delivery",
    stack: ["GitHub Actions", "Docker", "Trivy", "Semgrep", "OWASP ZAP"],
    desc: "Built a CI/CD pipeline combining secret, dependency, container image, static code and dynamic application security scans. Defined security gates for blocking issues, tracking warnings and recording accepted findings. The delivery workflow includes staging, smoke tests, OWASP ZAP scanning, manual approval and production deployment, supported by a documented run guide and tool analysis.",
    images: [
      { src: "devsecops-architecture.png", alt: "DevSecOps architecture showing security scans, Docker build, staging, approval and production deployment" },
      { src: "devsecops-ci.png", alt: "Successful GitHub Actions CI workflow with Python checks, Trivy secret and dependency scans, Semgrep, Docker build, container scanning and infrastructure checks" },
      { src: "devsecops-cd.png", alt: "Successful GitHub Actions CD workflow showing staging deployment, smoke tests, OWASP ZAP, manual approval and production deployment" },
    ],
    links: [],
  },
  {
    id: "ecobook",
    title: "EcoBook UMS",
    subtitle: "UMS Eco Campus booking system / Final Year Project",
    stack: ["PHP", "MySQL", "JavaScript", "Python", "A-Frame"],
    desc: "Designed and developed a web-based booking and management system for UMS Eco Campus services. Includes tour information, reservation records, an administration dashboard and AR-based virtual exploration using A-Frame.",
    images: [
      { src: "ecobook-home.png", alt: "EcoBook UMS homepage welcoming visitors to UMS Eco Campus with tour booking navigation" },
      { src: "ecobook-buggy-tour.png", alt: "EcoBook buggy car tour page with pricing, route information and a booking button" },
      { src: "ecobook-dashboard.png", alt: "EcoBook administration dashboard showing users, revenue, bookings, events, peak booking hours and monthly revenue" },
    ], links: [],
  },
  {
    id: "skill-up",
    title: "SKILL UP",
    subtitle: "TechTrek Hackathon / Team Figma prototype",
    stack: ["Figma", "UI/UX Design", "Prototyping"],
    desc: "Collaborated on an app prototype addressing the training gap in Sabah's green industries: renewable energy, ecotourism and sustainable agriculture. The proposed platform connects skills assessments, personalized learning, courses, certifications and job matching, supported by business and academia partnerships and community training hubs. Received a participation award with the team while developing pitching, teamwork and technical planning skills.",
    images: [
      { src: "skill-up-prototype.png", alt: "SKILL UP Figma screens showing onboarding, learning, skills assessments, certifications and green industry jobs" },
      { src: "skill-up-concept.png", alt: "SKILL UP concept: digital skills learning, business and academia collaboration, and community training centres" },
    ],
    links: [{ label: "Explore Figma prototype", href: "https://www.figma.com/proto/oMgsKZi8u5uwLR6Ui0vkDo/TECH-TREK?node-id=1-14&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A14" }],
  },
  {
    id: "kokol-mamahill",
    title: "Kokol Mamahill",
    subtitle: "Campsite management system",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    desc: "Developed a campsite booking and reservation management system with availability tracking. Includes camping equipment rentals, a cart for campsites and rental tools, quantity controls and rental date selection before checkout.",
    images: [
      { src: "kokol-home.png", alt: "Kokol Mamahill campsite homepage with campsite and camping equipment navigation" },
      { src: "kokol-equipment.png", alt: "Kokol Mamahill equipment rental catalogue showing tents, sleeping bags and sleeping mats with daily prices" },
    ], links: [],
  },
  {
    id: "employee-leave",
    title: "Employee Leave Management System",
    subtitle: "Android application",
    stack: ["Kotlin", "SQLite", "Android Studio"],
    desc: "Developed a mobile application for employee leave requests and approvals, with request tracking and records stored in SQLite. The interface includes login and registration and an employee dashboard displaying balances for annual, sick, maternity and unpaid leave.",
    images: [
      { src: "employee-leave-login.png", alt: "Employee Leave Android app login screen with email, password and registration link" },
      { src: "employee-leave-dashboard.png", alt: "Employee dashboard displaying annual, sick, maternity and unpaid leave balances" },
    ], links: [],
  },
  {
    id: "hijab-tudung",
    title: "Hijab Tudung E-Commerce Website",
    subtitle: "Web storefront",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    desc: "Developed a responsive e-commerce storefront for hijabs and accessories. Features product listings with category filters, prices, quantity selection, shopping cart functionality and order management.",
    images: [
      { src: "hijab-home.png", alt: "Hijab Tudung storefront homepage with product search, account navigation and shopping cart" },
      { src: "hijab-catalogue.png", alt: "Hijab Tudung product catalogue with category filters, product images, prices, quantities and cart buttons" },
    ], links: [],
  },
  {
    id: "strangers-graphics",
    title: "The Strangers Encounter — Parts 1 & 2",
    subtitle: "Graphics and Visualization coursework",
    stack: ["C++", "OpenGL", "Computer Graphics"],
    desc: "Created graphics and animated scenes using C++ and OpenGL. Applied coordinate geometry to position vertices and construct shapes, and transformations such as translation, rotation and scaling to control placement and movement, connecting programming with the mathematics behind computer graphics.",
    images: [],
    links: [
      { label: "Watch Part 1", href: "https://youtu.be/C7Mw7juGSqM" },
      { label: "Watch Part 2", href: "https://youtu.be/iA5ZD9O0vnk" },
    ],
  },
  {
    id: "strangers-ar",
    title: "The Strangers Encounter — Part 3",
    subtitle: "AR colouring book",
    stack: ["Unity", "C#", "AR", "Interaction Design"],
    desc: "Developed an interactive AR colouring book with storytelling elements. Implemented AR interactions and intuitive, child-friendly interaction flows to encourage exploration and engagement.",
    images: [],
    links: [{ label: "Watch AR demo", href: "https://youtu.be/vUtbRNpE2nA" }],
  },
  {
    id: "smart-fire-alarm",
    title: "Smart Fire Alarm System",
    subtitle: "IoT fire detection prototype",
    stack: ["IoT", "Sensors", "Microcontroller Programming"],
    desc: "Developed an IoT fire detection prototype integrating sensors, a microcontroller, real-time monitoring and alerts. Demonstrated the physical electronics in a model house to illustrate early hazard detection.",
    images: [
      { src: "smart-fire-alarm-prototype.png", alt: "Smart Fire Alarm model house with sensors, wiring and microcontroller electronics under the roof" },
    ],
    links: [{ label: "Watch prototype demo", href: "https://youtu.be/372SSTb87aM" }],
  },
];

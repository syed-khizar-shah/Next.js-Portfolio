export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building AI-Powered web applications.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center md:max-w-[50%]",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "2020Optix - Opticians, Stockport, UK",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/2020Optix.png",
    iconLists: ["/re.svg", "/js.svg", "tail.svg", "/fm.svg", "/sendgrid.svg", "/stripe.svg"],
    link: "https://www.2020optix.co.uk/",
  },
  {
    id: 2,
    title: "Capital MCR Transfers, Manchester, UK",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/cmt.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/fm.svg", "/google-maps.svg", "/stripe.svg"],
    link: "https://www.capitalmcr.co.uk/",
  },
  {
    id: 3,
    title: "Biodiversity Consult, United Kingdom",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/BNG.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/stripe.svg"],
    link: "https://www.biodiversityconsult.co.uk/",
  },
  {
    id: 4,
    title: "CloudSwish, UK",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/cloudswish.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/sendgrid.svg",
      "/three.svg",
      "/fm.svg",
    ],
    link: "https://www.cloudswish.co.uk/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Khizar exceeded all expectations. His technical expertise and attention to detail transformed our vision into reality. The website he developed not only looks stunning but performs exceptionally well. His ability to understand our needs and translate them into effective solutions made the entire process smooth and successful.",
    name: "Hassan Mosabbir",
    title: "Owner of 2020 Optix, Stockport, UK",
  },
  {
    quote:
      "Khizar's work on our website was outstanding. He brought fresh ideas and innovative solutions that helped modernize our online presence. His communication was clear and timely throughout the project, and he showed great flexibility in accommodating our requests. The end result perfectly aligned with our business goals.",
    name: "Afzal Zohaib, Manchestar",
    title: "Capital MCR Transfers, Manchester, UK",
  },
  {
    quote:
      "Collaborating with Khizar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Khizar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Khizar is the ideal partner.",
    name: "Rehan Shah",
    title: "CEO CloudSwish, UK",
  },
  {
    quote:
      "I highly recommend Khizar for any web development project. His technical skills are impressive, but what truly sets him apart is his commitment to delivering excellence. He took the time to understand our unique requirements and provided creative solutions that enhanced our website's functionality and user experience.",
    name: "Arsalan Nazeer",
    title: "Biodiversity Consult, UK",
  },
];

export const companies = [
  {
    id: 1,
    name: "MongoDB",
    img: "/mongodb.svg",
  },
  {
    id: 2,
    name: "Express",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 3,
    name: "React.js",
    img: "/re.svg",
  },
  {
    id: 4,
    name: "Node.js",
    img: "/app.svg",
  },
  {
    id: 5,
    name: "Next.js",
    img: "/next.svg",
  },
  {
    id: 6,
    name: "React Native",
    img: "/re.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    desc: "Assisted in the development of a web-based platform using MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js enhancing interactivity and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Development Projects",
    desc: "Led the development of several websites for my UK based clients, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Generative AI Engineer",
    desc: "Built advanced AI solutions using LangChain, Hugging Face Transformers, and Crew AI. Developed custom LLM applications, fine-tuned models, and created AI-powered chatbots and content generation systems.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/syed-khizar-shah",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/syed-khizar-ali-shah-912a42271/",
  },
];

import  profiler  from  '../assets/profile.jpg';

const logotext = "LUCIA";
const meta = {
    title: "Lucia Cristaldo",
    description: "I’m Lucia Cristaldo, a full stack developer and data scientist, currently working in Paraguay.",
};

const introdata = {
    title: "I’m Lucia Cristaldo",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Passionate about creating efficient and scalable solutions for complex problems. Always eager to learn and implement new technologies.",
    your_img_url:profiler,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m a full stack developer with a deep interest in data science. I enjoy working on both frontend and backend technologies, and I'm particularly focused on building intuitive and efficient user experiences.",
};

const worktimeline = [
    {
        jobtitle: "Full Stack Developer",
        where: "Tech Company",
        date: "2023",
    },
    {
        jobtitle: "Frontend Developer",
        where: "Creative Agency",
        date: "2022",
    },
    {
        jobtitle: "Intern Data Scientist",
        where: "DataCorp",
        date: "2021",
    },
];

const skills = [
    {
        name: "JavaScript",
        value: 90,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "Node.js",
        value: 80,
    },
    {
        name: "Python",
        value: 75,
    },
    {
        name: "Django",
        value: 70,
    },
];

const services = [
    {
        title: "Web Development",
        description: "Building responsive and dynamic websites using the latest technologies.",
    },
    {
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications that provide seamless user experiences.",
    },
    {
        title: "Data Science",
        description: "Leveraging data to gain insights and drive decision-making.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A dynamic and responsive website built for a tech company.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "A mobile app designed to streamline business processes.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A data visualization tool that helps in understanding complex datasets.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "A machine learning project predicting trends in the market.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "An e-commerce platform with a focus on user experience.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "A content management system built with scalability in mind.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "lucia@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Feel free to reach out to me for collaboration on projects or any exciting opportunities.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/lucia",
    facebook: "https://facebook.com/lucia",
    linkedin: "https://linkedin.com/in/lucia",
    twitter: "https://twitter.com/lucia",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};

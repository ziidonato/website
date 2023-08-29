export type NavLink = {
  text: string;
  path: string;
  icon?: string;
  subLinks?: NavLink[];
};
export const navLinks: NavLink[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Experience",
    path: "/experience",
  },
  {
    text: "Projects",
    path: "/projects",
    subLinks: [
      {
        text: "Project 1",
        path: "/project1",
      },
      {
        text: "Project 2",
        path: "/project2",
      },
      {
        text: "Project 3",
        path: "/project3",
      },
    ],
  },
  {
    text: "About Me",
    path: "/about",
  },
  {
    text: "Contact",
    path: "/contact",
    subLinks: [
      {
        text: "LinkedIn",
        path: "https://www.linkedin.com/in/zii-donato/",
        icon: "fas fa-linkedin",
      },
      {
        text: "Github",
        path: "https://www.github.com/ziidonato",
        icon: "fas fa-github",
      },
      {
        text: "Email",
        path: "mailto:zii.donato@outlook.com",
        icon: "fas fa-envelope",
      },
    ],
  },
];

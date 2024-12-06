import BookingTicket from "@/components/booking-ticket";
import ClueCatch from "@/components/cluecatch";
import Contacts from "@/components/contacts";
import FancyButton from "@/components/fancy-button";
import LernitLMS from "@/components/lernit-lms";
import Receipt from "@/components/receipt";
import { ThemeToggle } from "@/components/theme-toogle";
import { ContactListProps, ProjectProps } from "@/types";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const contacts: ContactListProps[] = [
  {
    link: "https://github.com/irsyaddd",
    label: "Github",
    icon: <GitHubLogoIcon className="h-icon w-icon" />,
  },
  {
    link: "https://www.linkedin.com/in/irsyadalghifary/",
    label: "Linkedin",
    icon: <LinkedInLogoIcon className="h-icon w-icon" />,
  },
  {
    link: "mailto:mirsyadalghifary@gmail.com",
    label: "Email",
    icon: <EnvelopeClosedIcon className="h-icon w-icon" />,
  },
];

interface Breakpoints {
  [key: string]: number;
}

export const breakpoints: Breakpoints = {
  lg: 1199,
  md: 799,
  sm: 374,
  xs: 319,
  xxs: 0,
};

export const projects: ProjectProps[] = [
  {
    title: "",
    i: "resume",
    project_content: <FancyButton className="center-absolute" />,
    isWIP: false,
  },
  {
    title: `"Make it exist first, Enhance it after."`,
    i: "booking-ticket-ui",
    project_content: <BookingTicket className="center-absolute" />,
    isWIP: false,
    slug: "/booking-ticket",
  },
  {
    title: "",
    i: "contact",
    project_content: <Contacts className="center-absolute" />,
    isWIP: false,
  },
  // {
  //   title: "Coming soon",
  //   i: "see-more",
  //   isWIP: false,
  // },
  {
    title: "",
    i: "dark-mode",
    project_content: <ThemeToggle className="center-absolute" />,
    isWIP: false,
  },
  {
    title: "",
    i: "another-ui-expo",
    project_content: <Receipt className="center-absolute" />,
    isWIP: false,
    slug: "/receipt",
  },
  {
    title: "ClueCatch",
    i: "clue-catch",
    project_content: <ClueCatch className="center-absolute" />,
    isWIP: true,
    desc: "This is a game about guessing what word or object the player receive by asking a clue to other players. Built with Shadcn, Motion, Next.Js and WebSocket.",
    slug: "/clue-catch",
  },
  {
    title: "Lernitt LMS",
    i: "lernitt",
    project_content: <LernitLMS className="center-absolute" />,
    isWIP: true,
    desc: "A Personal Learning Management System Project.",
    slug: "/lernitt-lms",
  },
];

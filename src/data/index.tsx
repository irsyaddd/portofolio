import BookingTicket from "@/components/booking-ticket";
import ClueCatch from "@/components/cluecatch";
import Contacts from "@/components/contacts";
import FancyButton from "@/components/fancy-button";
import { YoutubeIcon } from "@/components/icons";
import LernitLMS from "@/components/lernit-lms";
import Receipt from "@/components/receipt";
import { ThemeToggle } from "@/components/theme-toogle";
import { ContactListProps, ProjectProps } from "@/types";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
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
    title: "Resume",
    i: "resume",
    project_content: <FancyButton className="center-absolute cursor-pointer" />,
  },
  {
    title: "Some UI Exploration",
    i: 'booking-ticket-ui',
    project_content: <BookingTicket className="center-absolute cursor-pointer" />,
    slug: "/booking-ticket",
  },
  {
    title: "Contact",
    i: 'contact',
    project_content: <Contacts className="center-absolute cursor-pointer" />,
  },
  {
    title: "See More",
    i: "see-more"
  },
  {
    title: "",
    i: 'dark-mode',
    project_content: <ThemeToggle className="center-absolute cursor-pointer" />,
  },
  {
    title: "Another UI Exploration",
    i: 'another-ui-expo',
    project_content: <Receipt className="absolute cursor-pointer -right-6 top-20 translate-y-2 hover:translate-y-0 w-[70%]" />,
    slug: "/receipt",
  },
  {
    title: "ClueCatch",
    i: 'clue-catch',
    project_content: <ClueCatch className="center-absolute cursor-pointer" />,
    slug: "/clue-catch",
  },
  {
    title: "Lernitt LMS",
    i: 'lernitt',
    project_content: <LernitLMS className="center-absolute cursor-pointer" />,
    slug: "/lernitt-lms",
  },
];

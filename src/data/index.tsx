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
  // {
  //   link: "/",
  //   label: "Instagram",
  //   icon: <InstagramLogoIcon className="h-icon w-icon" />,
  // },
  // {
  //   link: "/",
  //   label: "Youtube",
  //   icon: <YoutubeIcon />,
  // },
];



export const projects: ProjectProps[] = [
  {
    title: "Button",
    block_config: { i: "button", x: 0, y: 0, w: 1, h: 6, isResizable: false },
    project_content: <FancyButton className="center-absolute" />,
  },
  {
    title: "Some UI Exploration",
    block_config: { i: "booking-ticket", x: 1, y: 0, w: 2, h: 10, isResizable: false },
    project_content: <BookingTicket className="center-absolute" />,
  },
  {
    title: "Contact",
    block_config: { i: "contact", x: 3, y: 0, w: 1, h: 4, isResizable: false },
    project_content: <Contacts className="center-absolute" />,
  },
  {
    title: "See More",
    block_config: { i: "see-more", x: 3, y: 0, w: 1, h: 2, isResizable: false },
  },
  {
    title: "",
    block_config: { i: "darkmode-toggle", x: 3, y: 0, w: 1, h: 4, isResizable: false, },
    project_content: <ThemeToggle className="center-absolute" />,
  },
  {
    title: "Another UI Exploration",
    block_config: { i: "receipt", x: 0, y: 0, w: 1, h: 10, isResizable: false },
    project_content: <Receipt className="absolute -right-20 -rotate-[8deg] top-4 translate-y-0 hover:-translate-y-2" />
  },
  {
    title: "ClueCatch",
    block_config: { i: "cluecatch", x: 1, y: 1, w: 2, h: 6, isResizable: false },
    project_content: <ClueCatch className="center-absolute" />,
  },
  {
    title: "Lernitt LMS",
    block_config: { i: "lernitt-lms", x: 3, y: 1, w: 1, h: 6, isResizable: false },
    project_content: <LernitLMS className="center-absolute" />,
  },
];

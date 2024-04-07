import { YoutubeIcon } from "@/components/icons";
import { ContactListProps } from "@/types";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon
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
    link: "/",
    label: "Instagram",
    icon: <InstagramLogoIcon className="h-icon w-icon" />,
  },
  {
    link: "mailto:mirsyadalghifary@gmail.com",
    label: "Email",
    icon: <EnvelopeClosedIcon className="h-icon w-icon" />,
  },
  {
    link: "/",
    label: "Youtube",
    icon: <YoutubeIcon />,
  },
];

// export const projects: ProjectsProps[] = [
//   {
//     title: "Personal Website",
//     image: <ImageIcon className="h-14 w-14 opacity-20" />,
//     content: "Blabla",
//     created_at: "2024-01-24",
//   },
//   {
//     title: "Nowted (Design Challenge)",
//     image: <ImageIcon className="h-14 w-14 opacity-20" />,
//     content: "Blabla",
//     created_at: "2023-07-28",
//   },
//   {
//     title: "Boleh Belajar Website",
//     image: <ImageIcon className="h-14 w-14 opacity-20" />,
//     content: "Blabla",
//     created_at: "2024-01-12",
//   },

//   {
//     title: "Vue Tweet Component",
//     image: <ImageIcon className="h-14 w-14 opacity-20" />,
//     content: "Blabla",
//     created_at: "2023-11-13",
//   },
//   {
//     title: "Certificate Generator",
//     image: <ImageIcon className="h-14 w-14 opacity-20" />,
//     content: "Blabla",
//     created_at: "2023-02-05",
//   },
//   {
//     title: "Curhat Dong",
//     image: <ImageIcon className="h-14 w-14 opacity-20" />,
//     content: "Blabla",
//     created_at: "2023-02-02",
//   },
// ];

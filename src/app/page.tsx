import { YoutubeIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toogle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Balance from "react-wrap-balancer";

interface ContactListProps {
  link: string;
  label: string;
  icon: React.ReactNode;
}

const contacts: ContactListProps[] = [
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

export default function IndexPage() {
  return (
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold font-mono uppercase">
            Irsyad Al Ghifary
          </h1>
          <ThemeToggle />
        </div>
        <Balance className="dark:text-paragraph-dark text-paragraph-light my-6 leading-7 space-y-4">
          <p>
            I’m a frontend developer with a blend of creative mind and technical
            skills. Combine aesthetics and functionality to create impactful and
            memorable experiences. Striving to learn and grow in my work.
          </p>
          <p>
            Currently working at Boleh Dicoba Digital as frontend developer
            building Boleh Belajar LMS and{" "}
            <span className="underline">
              <Link
                href={"https://bolehbelajar.com/"}
                prefetch={false}
                target="_blank"
              >
                Boleh Belajar Website
              </Link>
            </span>
            . Spent most of my free time learning about frontend and playing
            around with Spline, Framer and Figma.
          </p>
        </Balance>

        <div className="flex gap-4">
          {contacts.map((item, index) => (
            <Button variant="outline" size={"icon"} key={index} asChild>
              <Link href={item.link}>
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

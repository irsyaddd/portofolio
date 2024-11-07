import Contacts from "@/components/contacts";
import { ThemeToggle } from "@/components/theme-toogle";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Project = {
  title: string;
  desc: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Boleh Belajar Website",
    desc: "A Digital Marketing Online Course website platform.",
    url: "https://bolehbelajar.com",
  },
  {
    title: "Nowted",
    desc: "A note taking app design from codedesign.dev",
    url: "#",
  },
  {
    title: "Boleh Belajar LMS",
    desc: "A Digital Marketing Online Course learning platform.",
    url: "#",
  },
  {
    title: "Mulitplayer Game with JS",
    desc: "a simple game guessing players word made with React. Currently Working on it 😬",
    url: "#",
  },
  {
    title: "Certificate Generator",
    desc: "Certificate Generator made with Python.",
    url: "#",
  },
];

export default async function IndexPage() {
  return (
    <div className="container max-w-6xl">
      <Header className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold font-mono uppercase text-3xl tracking-tight">
            Irsyad Al Ghifary
          </h1>
          <ThemeToggle />
        </div>
        <div className="dark:text-paragraph-dark text-paragraph-light my-10 w-1/2 text-balance">
          <p>
            Frontend developer blending{" "}
            <span className="font-artsy italic">creativity</span> and{" "}
            <span className="font-artsy italic">technical skills</span> to craft
            memorable digital experiences. Currently a frontend dev at{" "}
            <a
              target="_blank"
              href="https://bolehdicoba.com/"
              className="text-indigo-600 dark:text-indigo-500 hover:underline"
            >
              BDD
            </a>
            . Passionate about frontend learning and currently like to read and
            experiment with Three.js, Framer Motion and CyberSecurity.
          </p>
        </div>
      </Header>
      <div className="my-6">
        <h4 className="uppercase tracking-tighter font-medium font-mono">
          Projects
        </h4>
        <ul className="my-4 w-fit max-w-[26rem] space-y-1">
          {projects.map((project, index) => (
            <Link key={index} target="_blank" href={project.url}>
              <li
                className={cn(
                  "group hover:bg-gray-100/80 dark:hover:bg-zinc-800 p-3 -mx-3 rounded-md",
                  project.url !== "#" ? "cursor-pointer" : "cursor-default"
                )}
              >
                <p
                  className={cn(
                    project.url !== "#"
                      ? "group-hover:underline"
                      : "group-hover:no-underline"
                  )}
                >
                  {project.title}
                </p>
                <p className="text-paragraph-light dark:text-paragraph-dark">
                  {project.desc}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <h4 className="uppercase tracking-tighter font-medium font-mono">
        CONTACTS
      </h4>
      <Contacts className="my-4" />
    </div>
  );
}

function Header({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...props} className={className}>
      {children}
    </section>
  );
}

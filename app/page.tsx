"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Space_Grotesk } from "next/font/google";
import { AmbientBackground } from "@/components/ambient-background";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const socialLinks: {
  href: string;
  icon: IconDefinition;
  label: string;
}[] = [
  {
    href: "https://github.com/pr4veen44",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://x.com/praveen__4",
    icon: faXTwitter,
    label: "X (Twitter)",
  },
  {
    href: "https://www.linkedin.com/in/praveen0004/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/p_r_a_v_e_e_n__4",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://discordapp.com/users/1268072758559113267",
    icon: faDiscord,
    label: "Discord",
  },
];

export default function Home() {
  return (
    <main
      className={`${spaceGrotesk.className} relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8`}
    >
      <AmbientBackground />

      <section className="relative z-10 w-full max-w-2xl text-center">
        <h1 className="text-[clamp(2.25rem,8vw,3.75rem)] leading-[1.1] font-semibold tracking-tight text-foreground">
          Praveen
        </h1>

        <p className="mt-4 text-[clamp(1rem,3.5vw,1.25rem)] leading-snug font-medium text-muted sm:mt-5">
          Python Backend Developer
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-subtle sm:mt-2 sm:text-base">
          Django REST Framework · FastAPI · REST APIs
        </p>

        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-subtle sm:mt-10 sm:text-base">
          Computer Science student at{" "}
          <span className="text-muted">Vellore Institute of Technology</span>
        </p>

        <nav className="mt-9 sm:mt-10" aria-label="Social links">
          <ul className="inline-flex items-center justify-center gap-x-3 sm:gap-x-3.5">
            {socialLinks.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full text-xl text-white/65 transition-colors duration-300 ease-out hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white/70 sm:h-11 sm:w-11 sm:text-[1.375rem]"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    fixedWidth
                    className="block transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}

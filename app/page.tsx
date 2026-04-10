"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <main
      className={`${spaceGrotesk.className} flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-zinc-200 px-6`}
    >
      <section className="max-w-2xl text-center space-y-5">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-wide">
          Praveen
        </h1>

        {/* Role */}
        <p className="text-base sm:text-lg text-zinc-400 font-medium">
          Backend Developer • Python, Django, REST APIs
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-lg mx-auto">
          Computer Science Student at Vellore Institute of Technology
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-8 text-xl sm:text-2xl text-zinc-500">
          <a
            href="https://github.com/pr4veen44"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://x.com/praveen__4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/praveen0004/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/p_r_a_v_e_e_n__4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://discordapp.com/users/1268072758559113267"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </section>
    </main>
  );
}

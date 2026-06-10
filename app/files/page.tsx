import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { AmbientBackground } from "@/components/ambient-background";
import { DRIVE_FILES, DRIVE_FOLDER_URL } from "@/lib/drive";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Praveen | Portfolio",
  description: "Portfolio of Praveen — Student at VIT",
  robots: { index: false, follow: false },
};

type FilesPageProps = {
  searchParams: Promise<{ redirect?: string }>;
};

export default async function FilesPage({ searchParams }: FilesPageProps) {
  const params = await searchParams;

  if (params.redirect === "1") {
    const { redirect } = await import("next/navigation");
    redirect(DRIVE_FOLDER_URL);
  }

  return (
    <main
      className={`${spaceGrotesk.className} relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8`}
    >
      <AmbientBackground />

      <section className="relative z-10 w-full max-w-md">
        <ul className="space-y-3">
          {DRIVE_FILES.map((file) => (
            <li key={file.name}>
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface/70 px-4 py-3.5 text-sm text-foreground transition-colors duration-200 hover:border-white/20 hover:bg-white/5 sm:px-5 sm:py-4 sm:text-base"
              >
                <span className="font-medium">{file.name}</span>
                <span className="shrink-0 text-white/75 text-xs font-medium uppercase tracking-wide transition-colors duration-200 group-hover:text-white">
                  Open
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-subtle">
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline-offset-2 transition-colors hover:text-white hover:underline"
          >
            Open folder in Google Drive
          </a>
        </p>

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-xs text-subtle underline-offset-2 transition-colors hover:text-white hover:underline"
          >
            ← Back
          </Link>
        </p>
      </section>
    </main>
  );
}

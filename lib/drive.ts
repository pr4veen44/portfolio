export const DRIVE_FOLDER_URL =
  "https://drive.google.com/drive/folders/1dknRAFJH5U1PXBWUq-JPxov9Tdq3bKRn?usp=sharing";

/** Files in the shared Drive folder (update when you add more). */
export const DRIVE_FILES = [
  {
    name: "resume.pdf",
    url: DRIVE_FOLDER_URL,
  },
] as const;

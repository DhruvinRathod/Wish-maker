import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wish Maker",
  description: "Create interactive multilingual birthday wishes."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

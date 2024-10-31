import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Lucca Lazzarini Silva",
  description: "My beautiful new portfolio version 2.",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+BR:wght@100..400&display=swap'" rel="stylesheet"/>
      </head>
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}

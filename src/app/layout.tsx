import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Lucca Lazzarini Silva",
  description: "My beautiful new portfolio version 2.",
};

// export async function getStaticProps() {
//   // Fetch projects from MongoDB
//   const projects = await fetchProjectsFromMongoDB();

//   return {
//     props: {
//       projects,
//     },
//   };
// }

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}

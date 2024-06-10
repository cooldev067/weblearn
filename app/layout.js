import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebLearn | Learn Web Design",
  description:
    "Web Learn is a platform where anyone can learn web design and web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-gray-900 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

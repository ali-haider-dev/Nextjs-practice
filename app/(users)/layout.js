import { Arvo, Poppins } from "next/font/google";
import "../globals.css";
import Navigation from "@/app/components/Navigation";

export const metadata = {
  title: "Practice App",
  description: "A Next.js practice application",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

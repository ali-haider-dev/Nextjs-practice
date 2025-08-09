import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Practice App",
  description: "A Next.js practice application",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
}

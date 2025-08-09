import { Arvo, Poppins } from "next/font/google";
import "../globals.css";
import Navigation from "@/app/components/Navigation";

const arvo = Arvo({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arvo',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: "Practice App",
  description: "A Next.js practice application",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${arvo.variable} ${poppins.variable}`}>
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );

}

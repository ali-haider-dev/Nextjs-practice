import { Arvo, Poppins } from "next/font/google";
import "./globals.css";

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
  title:{
default:"Practice App",
template:'%s|NextJs'
  } ,
  description: "A Next.js practice application",
  keyword:['React','Nextjs','Nextjs Tutorial'],
  icons:{
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${arvo.variable} ${poppins.variable}`}>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );

}

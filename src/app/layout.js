import { Barlow_Condensed, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const bodyFont = DM_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "HackathonX | Event Registration",
  description:
    "Official event website for HackathonX by IEEE Student Branch of Unniversity of X.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${serifFont.variable} ${bodyFont.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kunal Rai - Full-Stack Developer",
  description:
    "Portfolio for Kunal Rai, a full-stack developer building real-time systems and AI applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

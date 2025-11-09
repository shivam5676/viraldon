import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MarketGang - Digital Marketing & Web Development Agency",
  description: "MarketGang provides top-notch digital marketing, SEO, web development, and software solutions for businesses looking to grow their online presence and revenue.",
  keywords: "digital marketing, web development, software solutions, SEO, social media marketing, brand strategy, business growth",
  authors: [{ name: "MarketGang" }],
  creator: "MarketGang",
  publisher: "MarketGang",
  robots: "index, follow",
  openGraph: {
    title: "MarketGang - Digital Marketing & Web Development Agency",
    description: "We help businesses thrive in the digital world with cutting-edge marketing strategies, beautiful websites, and powerful software solutions.",
    type: "website",
    locale: "en_US",
    url: "https://marketgang.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketGang - Digital Marketing & Web Development Agency",
    description: "We help businesses thrive in the digital world with cutting-edge marketing strategies, beautiful websites, and powerful software solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
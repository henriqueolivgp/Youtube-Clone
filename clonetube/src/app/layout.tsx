import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar/navbar";

import { Roboto } from "next/font/google";
import { Sidebar } from "@/components/sidebar/sidebar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Define os pesos que vais usar
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CloneTube",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

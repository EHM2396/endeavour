import type { Metadata } from "next";
import { inter, titleFont } from "@config/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Endeavour Duana",
  description: "Portal para almacenar la documentacion y informacion de aplicativos y procesos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <h1 className={titleFont.className}>{children}</h1> */}
    </html>
  );
}

"use client";
import { SearchBar } from "@/infrastructure/components";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <html lang="es">
      <head>
        <title>Mercado Libre</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <header className="header">
        <SearchBar
          placeholder="Nunca dejes de buscar"
          onSearch={handleSearch}
        />
      </header>
        {children}
      </body>
    </html>
  );
}

"use client";
import { useRouter } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";

import { Bar } from "@/infrastructure/components";

import "./globals.css";
import "./page.css";

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
  const { push } = useRouter();

  const handleSearch = (value: string) => {
    if (value.trim().length === 0) return;
    push(`/items?search=${value}`);
  };

  const categories = ["Electrónica","Audio y Video", "Celulares y Teléfonos"];

  return (
    <html lang="es">
      <head>
        <title>Mercado Libre</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Bar
          categories={categories}
          onSearch={handleSearch}
          placeholder="Nunca dejes de buscar"
        />
        {children}
      </body>
    </html>
  );
}

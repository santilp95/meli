"use client";
import { useRouter } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";

import { Bar } from "@/infrastructure/components";
import { BreadCrumbProvider } from '@/adapters/shared/context/breadCrumb';

import "./globals.css";
import "./page.scss";

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
    if (value.trim().length === 0) {
      push('/');
    }else{
      push(`/items?search=${value}`);
    }
  };

  const handleClickIcon = ()=>{
    push('/');
  };

  return (
    <html lang="es">
      <head>
        <title>Mercado Libre</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BreadCrumbProvider>
          <Bar
            onSearch={handleSearch}
            onClickIcon={handleClickIcon}
            placeholder="Nunca dejes de buscar"
          />
          {children}
        </BreadCrumbProvider>
      </body>
    </html>
  );
}
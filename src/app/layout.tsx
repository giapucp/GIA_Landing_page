import "./globals.css";
import Footer from "@/components/comun/footer/Footer";
import NavbarSwitcher from "@/components/layout/NavbarSwitcher";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GIA - Inicio",
  description: "Sitio web de GIA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NavbarSwitcher />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

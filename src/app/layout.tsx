import "./globals.css";
import Footer from "@/components/comun/footer/Footer";
import Navbar from "@/components/comun/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GIA PUCP",
  description: "Impulsando el desarrollo de proyectos aeroespaciales en el Perú. Grupo fundado en la Pontificia Universidad Católica del Perú.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar/>
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

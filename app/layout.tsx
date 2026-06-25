import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Angélica Nunes | Confeitaria Artesanal",
  description: "Feito à mão com técnica e amor. Doces finos, salgados gourmet e encomendas especiais em Criciúma e região.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-brand-cream text-brand-green antialiased min-h-screen flex flex-col justify-between">
        {/* A Navbar agora fica fixa no topo de todo o site */}
        <Navbar />
        
        {/* O 'children' é onde o Next.js vai renderizar o conteúdo de cada página individual */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        {/* O botão do WhatsApp e o Rodapé também ficam fixos em todo o site */}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
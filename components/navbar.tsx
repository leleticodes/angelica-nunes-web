"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Cardápio", href: "/cardapio" },
    { name: "Receitas", href: "/receitas" }, // <--- Adicione esta linha aqui
    { name: "Contato", href: "/contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-green/5 bg-brand-cream/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-serif text-xl font-bold tracking-widest text-brand-green uppercase">
            Angélica Nunes
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-sans -mt-1">
            Confeitaria Artesanal
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium text-brand-green/80">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative hover:text-brand-green transition-colors py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <a 
            href="https://instagram.com/angelicanunes.gourmet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-green hover:text-brand-orange transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-green p-2 focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-brand-cream border-b border-brand-green/10 shadow-lg p-6 flex flex-col space-y-4 font-sans text-base font-medium md:hidden"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-green/90 hover:text-brand-orange py-2 border-b border-brand-green/5 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
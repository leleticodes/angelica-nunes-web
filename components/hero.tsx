"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-green">
      {/* Imagem de Fundo Gourmet com Overlay Escuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_8s_infinite_alternate]"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(35, 71, 55, 0.8), rgba(35, 71, 55, 0.4)),
          url('/images/heroh.jpeg')` 
        }}
      />

      {/* Conteúdo Central Animado */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-lavender font-sans text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-semibold"
        >
          Bem-vindo à Experiência Premium
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-brand-cream mb-6 leading-tight tracking-wide"
        >
          Confeitaria Artesanal
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-base md:text-xl text-brand-cream/80 max-w-xl mb-10 font-light leading-relaxed"
        >
          Feito à mão com técnica e amor. Criamos experiências sofisticadas e afetivas em cada detalhe.
        </motion.p>

{/* Botões de Ação */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            href="/contato"
            className="bg-brand-orange text-white px-8 py-4 rounded-full font-sans font-medium text-sm tracking-wider uppercase shadow-lg hover:bg-brand-orange/90 hover:shadow-brand-orange/20 hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            Solicitar orçamento
          </Link>

          <Link 
            href="/cardapio"
            className="border border-brand-cream/40 text-brand-cream px-8 py-4 rounded-full font-sans font-medium text-sm tracking-wider uppercase backdrop-blur-xs hover:bg-brand-cream hover:text-brand-green hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            Explorar cardápio
          </Link>
        </motion.div>
      </div>

      {/* Detalhe de Profundidade no Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream to-transparent z-10" />
    </section>
  );
}
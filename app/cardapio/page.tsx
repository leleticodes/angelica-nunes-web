"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const itensCardapio = [
  { 
    nome: "Bolo de Chocolate com Amêndoas", 
    categoria: "Doces", 
    imagem: "/images/bolo-chocolate.jpeg", 
    descricao: "Massa aveludada com um toque sutil de cacau, combinada perfeitamente com nosso recheio artesanal de ganache Belga e toques de amêndoas." 
  },
  { 
    nome: "Torta de Frutas Vermelhas com Creme de Baunilha", 
    categoria: "Doces", 
    imagem: "/images/torta.jpeg", 
    descricao: "Doce delicioso com uma textura cremosa e o sabor rico das frutas vermelhas frescas, finalizado com um toque de baunilha." 
  },
  { 
    nome: "Pão caseiro de Ervas Finas", 
    categoria: "Salgados", 
    imagem: "/images/pao-caseiro.jpeg", 
    descricao: "Massa crocante feita à mão com um recheio aromático de alho-poró e queijo gruyère." 
  },
];

export default function CardapioPage() {
  const [filtro, setFiltro] = useState("Todos");
  const [selecionado, setSelecionado] = useState<null | typeof itensCardapio[0]>(null);

  const categorias = ["Todos", "Doces", "Salgados"];
  
  const itensFiltrados = filtro === "Todos" 
    ? itensCardapio 
    : itensCardapio.filter(i => i.categoria === filtro);

  return (
    <main className="py-24 px-6 max-w-6xl mx-auto bg-brand-cream min-h-screen">
      <h1 className="font-serif text-5xl text-brand-green mb-12 text-center">Nosso Cardápio</h1>
      
      {/* Botões de Filtro */}
      <div className="flex justify-center gap-6 mb-16">
        {categorias.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFiltro(cat)}
            className={`font-sans text-sm uppercase tracking-widest transition-all ${filtro === cat ? "text-brand-orange border-b border-brand-orange" : "text-brand-green/50 hover:text-brand-green"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Boutique */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <AnimatePresence>
          {itensFiltrados.map((item) => (
            <motion.div 
              key={item.nome}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className="cursor-pointer group"
              onClick={() => setSelecionado(item)}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 shadow-lg shadow-brand-green/10">
                <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-2xl text-brand-green">{item.nome}</h3>
              <p className="text-brand-orange text-sm font-sans uppercase tracking-widest">{item.categoria}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {selecionado && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-green/30 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelecionado(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-cream p-8 md:p-10 rounded-[2rem] max-w-sm w-full shadow-2xl relative border border-brand-green/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelecionado(null)} 
                className="absolute top-4 right-4 text-brand-green/60 hover:text-brand-green"
              >
                ✕
              </button>

              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img src={selecionado.imagem} alt={selecionado.nome} className="w-full h-full object-cover" />
              </div>

              <h2 className="font-serif text-3xl text-brand-green mb-2">{selecionado.nome}</h2>
              <p className="text-brand-orange text-xs uppercase tracking-widest font-semibold mb-4">
                {selecionado.categoria}
              </p>
              
              <p className="text-brand-green/80 font-sans leading-relaxed mb-8 text-sm italic">
                {selecionado.descricao}
              </p>

              <a 
                href={`https://wa.me/5548999982232?text=Olá! Gostaria de encomendar: ${selecionado.nome}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-brand-green text-brand-cream rounded-full font-bold hover:bg-brand-orange transition-colors"
              >
                Solicitar via WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
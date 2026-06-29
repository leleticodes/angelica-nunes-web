"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link"; // Importação necessária adicionada

export default function FeaturedProducts() {
  const produtos = [
    {
      id: 1,
      nome: "Cheesecake de Frutas Vermelhas com Base de Amêndoas",
      categoria: "Doces Finos",
      imagem: "/images/cheesecake.jpeg",
    },
    {
      id: 2,
      nome: "Bolo Cuca Recheado com Goiabada",
      categoria: "Encomendas Especiais",
      imagem: "/images/bolo-recheado.jpeg",
    },
    {
      id: 3,
      nome: "Bolo de Chocolate com Ganache Belga",
      categoria: "Doces Finos",
      imagem: "/images/bolo-chocolate.jpeg",
    },
    {
      id: 4,
      nome: "Pão de Fermentação Natural e Ervas Finas",
      categoria: "Encomendas Especiais",
      imagem: "/images/pao-caseiro.jpeg",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const gerarLinkWhats = (nomeProduto: string) => {
    const msg = encodeURIComponent(`Olá Angélica! Gostaria de solicitar um orçamento para o seguinte produto do cardápio: ${nomeProduto}`);
    return `https://wa.me/5548999982232?text=${msg}`;
  };

  return (
    <section id="cardapio" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-brand-orange font-sans text-xs uppercase tracking-[0.2em] mb-3 block font-semibold">
              Seleção Especial
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-green leading-tight">
              Os Mais Pedidos do Ateliê
            </h2>
          </div>
          {/* Botão corrigido para Link */}
          <Link href="/cardapio" className="mt-6 md:mt-0 font-sans text-sm font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors flex items-center gap-2 group">
            Ver Cardápio Completo 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Grid de Produtos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {produtos.map((produto) => (
            <motion.div
              key={produto.id}
              variants={itemVariants}
              className="flex flex-col h-full group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-cream mb-4 shadow-xs">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-brand-green font-sans text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xs">
                  {produto.categoria}
                </span>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-brand-green tracking-wide mb-2 min-h-[56px] leading-snug">
                  {produto.nome}
                </h3>
                <p className="font-sans text-[11px] uppercase tracking-wider text-brand-green/50 mb-4 font-medium">
                  Preço sob consulta
                </p>

                <a
                  href={gerarLinkWhats(produto.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block text-center border border-brand-green/20 text-brand-green py-2.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-brand-green hover:text-white hover:border-brand-green"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
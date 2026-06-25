"use client";

import { motion, Variants } from "framer-motion";

export default function Features() {
  const pilares = [
    {
      numero: "01",
      titulo: "Técnica e Rigor",
      descricao: "A confeitaria fina exige precisão. Cada receita é executada seguindo as mais altas técnicas da pâtisserie clássica.",
    },
    {
      numero: "02",
      titulo: "Ingredientes Selecionados",
      descricao: "Manteigas nobres, chocolates de origem e frutas frescas. O sabor inesquecível começa na escolha do que entra na nossa cozinha.",
    },
    {
      numero: "03",
      titulo: "Feito com Amor",
      descricao: "Mais do que doces e salgados, entregamos afeto. Cada detalhe, do preparo à embalagem, carrega o nosso carinho.",
    },
  ];

  // Variantes com tipagem explícita para o TypeScript
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="sobre" className="py-24 px-6 bg-brand-cream relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-brand-orange font-sans text-xs uppercase tracking-[0.2em] mb-3 font-semibold">
            Nossa Filosofia
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-green max-w-2xl leading-tight">
            “Cada detalhe importa.”
          </h2>
          <div className="w-12 h-[1px] bg-brand-green/30 mt-6" />
        </div>

        {/* Grid de Diferenciais */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/60 backdrop-blur-xs p-10 rounded-2xl border border-brand-green/5 shadow-[0_8px_30px_rgb(35,71,55,0.02)] hover:shadow-[0_20px_40px_rgb(35,71,55,0.05)] transition-shadow duration-300 relative overflow-hidden group"
            >
              {/* Número sutil ao fundo */}
              <span className="absolute -top-2 -right-2 font-serif text-7xl font-bold text-brand-green/[0.03] select-none group-hover:text-brand-orange/[0.05] transition-colors duration-300">
                {pilar.numero}
              </span>

              <span className="font-serif text-xs text-brand-orange/80 tracking-widest uppercase block mb-4">
                Pilar {pilar.numero}
              </span>
              
              <h3 className="font-serif text-xl text-brand-green mb-4 font-semibold tracking-wide">
                {pilar.titulo}
              </h3>
              
              <p className="font-sans text-sm text-brand-green/70 leading-relaxed font-light">
                {pilar.descricao}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
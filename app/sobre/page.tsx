"use client";

import { motion } from "framer-motion";

export default function SobrePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Imagem (Substitua a URL depois por uma sua!) */}
        <div className="relative">
          <div className="absolute inset-0 bg-brand-orange/20 rounded-3xl translate-x-4 translate-y-4" />
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" 
            alt="Ateliê de Confeitaria" 
            className="rounded-3xl relative z-10 shadow-xl"
          />
        </div>

        {/* Lado Direito: Texto */}
        <div className="space-y-6">
          <span className="text-brand-orange font-sans text-xs uppercase tracking-[0.2em] font-semibold">
            Nossa Trajetória
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-green leading-tight">
            A arte de transformar açúcar em memória.
          </h1>
          <p className="font-sans text-brand-green/70 leading-relaxed text-lg font-light">
            Tudo começou com uma paixão por detalhes. O que era um hobby na cozinha de casa, 
            transformou-se em um ateliê dedicado à confeitaria artesanal de alto padrão.
          </p>
          <p className="font-sans text-brand-green/70 leading-relaxed text-lg font-light">
            Aqui, acreditamos que a técnica da pâtisserie clássica, quando aliada aos ingredientes 
            mais frescos da nossa região, cria sabores que não apenas alimentam, mas contam histórias. 
            Cada encomenda é um projeto único, executado com o máximo de rigor e afeto.
          </p>
        </div>

      </div>

      {/* Seção de Diferenciais */}
      <div className="grid md:grid-cols-3 gap-8 mt-24">
        {[
          { title: "Ingredientes Locais", text: "Priorizamos produtores da nossa região de Criciúma." },
          { title: "Rigor Técnico", text: "Estudo constante para garantir a textura e o ponto perfeito." },
          { title: "Atendimento Único", text: "Sua ideia transforma-se em um doce ou salgado exclusivo." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl border border-brand-green/5 shadow-sm">
            <h3 className="font-serif text-xl text-brand-green mb-3">{item.title}</h3>
            <p className="font-sans text-sm text-brand-green/60 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
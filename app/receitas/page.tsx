"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  {
    titulo: "O Segredo do Ponto Perfeito",
    resumo: "Descubra como a temperatura e o cuidado no manuseio transformam a textura dos nossos doces.",
    conteudo: "Para atingir o ponto perfeito, a temperatura ambiente deve ser controlada e o manuseio deve ser suave...",
    tempo: "5 min",
    imagem: "https://images.unsplash.com/photo-1557308535-ee8e16104d47?q=80&w=600"
  },
  {
    titulo: "Armazenamento Premium",
    resumo: "Dicas essenciais para garantir que a sua encomenda chegue impecável para os convidados.",
    conteudo: "O armazenamento ideal exige locais frescos e longe de umidade. Cada detalhe importa...",
    tempo: "3 min",
    imagem: "https://images.unsplash.com/photo-1596462758594071c498305c6?q=80&w=600"
  }
];

export default function ReceitasPage() {
  const [selecionado, setSelecionado] = useState<null | typeof posts[0]>(null);

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-brand-orange font-sans text-xs uppercase tracking-[0.3em] font-bold">Expertise & Cuidado</span>
        <h1 className="font-serif text-5xl text-brand-green mt-4 mb-6">Receitas & Dicas</h1>
        <div className="w-24 h-[1px] bg-brand-lavender mx-auto" />
      </div>

      <div className="grid gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group p-6 bg-white border border-brand-green/10 rounded-3xl hover:border-brand-lavender transition-all flex flex-col md:flex-row gap-8"
          >
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden">
              <img src={post.imagem} alt={post.titulo} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <h2 className="font-serif text-2xl text-brand-green mb-2">{post.titulo}</h2>
              <p className="font-sans text-brand-green/70 leading-relaxed mb-6">{post.resumo}</p>
              <button 
                onClick={() => setSelecionado(post)}
                className="text-brand-orange font-sans text-sm font-semibold hover:text-brand-green transition-colors flex items-center gap-2"
              >
                Ler artigo <span>→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal do Artigo */}
      <AnimatePresence>
        {selecionado && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-green/30 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelecionado(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-cream p-8 md:p-12 rounded-[2rem] max-w-2xl w-full shadow-2xl relative max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelecionado(null)} className="absolute top-6 right-6 text-brand-green/60 hover:text-brand-green">✕</button>
              <img src={selecionado.imagem} className="w-full h-64 object-cover rounded-2xl mb-8" />
              <h2 className="font-serif text-4xl text-brand-green mb-4">{selecionado.titulo}</h2>
              <p className="text-brand-green/80 font-sans leading-relaxed">{selecionado.conteudo}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
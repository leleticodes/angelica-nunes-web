"use client";

import { motion } from "framer-motion";

const fotos = [
  { url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800", alt: "Doces Finos" },
  { url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800", alt: "Bolo de Casamento" },
  { url: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800", alt: "Salgados Gourmet" },
  { url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800", alt: "Macarons" },
  { url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800", alt: "Entremet" },
  { url: "https://images.unsplash.com/photo-1599785209796-7860c242c3d0?q=80&w=800", alt: "Detalhes" },
];

export default function GaleriaPage() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl text-brand-green mb-4">Galeria de Criações</h1>
        <p className="font-sans text-brand-orange uppercase tracking-[0.2em] text-xs font-semibold">
          O que sai do nosso ateliê
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {fotos.map((foto, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-sm"
          >
            <img 
              src={foto.url} 
              alt={foto.alt} 
              className="w-full h-auto object-cover hover:brightness-110 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
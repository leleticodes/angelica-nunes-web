"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  {
    titulo: "Bolo de Laranja com Amêndoas",
    resumo: "Este bolo de laranja com amêndoas é uma preparação que convida a explorar como a temperatura e o cuidado no manuseio transformam a textura das sobremesas.",
    conteudo: "O Bolo de Laranja com Amêndoas é uma receita que propõe descobrir como a temperatura e o cuidado no manuseio transformam a textura dos doces. Para preparar a massa, misture 160g de açúcar, raspas de 2 laranjas e 120g de manteiga derretida até formar uma farofa. Em seguida, adicione 2 ovos, o suco de 2 laranjas e 100g de iogurte grego, misturando bem com um fouet. Posteriormente, incorpore 190g de farinha de trigo, 50g de farinha de amêndoa e 1 colher de sopa de fermento de forma suave. Para a cobertura, prepare uma farofinha com lâminas de amêndoa, açúcar, raspas de laranja e um pouco de farinha de amêndoa. Por fim, despeje a massa em uma forma untada, espalhe a farofinha por cima e asse a 180°C por um período de 35 a 45 minutos.  Como você planeja servir este bolo, prefere acompanhar com algum café especial ou chá?",
    tempo: "5 min",
  imagem: "/images/bolinho.jpeg"
  },
{
  titulo: "Bolo de Chocolate com Recheio de Creme",
    resumo: "O Bolo de Chocolate com Recheio de Creme é uma sobremesa clássica que valoriza o contraste entre a intensidade do cacau e a suavidade do recheio lácteo.",
      conteudo: "O Bolo de Chocolate com Recheio de Creme é uma sobremesa clássica, ideal para quem busca equilibrar a intensidade do chocolate com a suavidade de um recheio cremoso. Para preparar a massa, comece batendo 3 ovos com 1 xícara de açúcar; em seguida, adicione 1/2 xícara de óleo, 1 xícara de chocolate em pó e 2 xícaras de farinha de trigo. Finalize a massa incorporando 1 xícara de água quente e 1 colher de sopa de fermento em pó, misturando delicadamente antes de levar ao forno a 180°C por aproximadamente 40 minutos. Enquanto o bolo assa, prepare o recheio misturando em uma panela 1 lata de leite condensado, 1 xícara de leite com 1 colher de sopa de amido de milho dissolvido e 1 colher de chá de essência de baunilha, cozinhando em fogo baixo até engrossar. Após o bolo esfriar completamente, corte-o ao meio, aplique o recheio de creme e finalize conforme sua preferência.\nVocê prefere servir esse bolo em temperatura ambiente ou gelado?",
        tempo: "3 min",
          imagem: "/images/bolo-chocolate.jpeg"
}
];

export default function ReceitasPage() {
  const [selecionado, setSelecionado] = useState<null | typeof posts[0]>(null);

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-brand-orange font-sans text-xs uppercase tracking-[0.3em] font-bold">Expertise & Cuidado</span>
        <h1 className="font-serif text-5xl text-brand-green mt-4 mb-6">Receitas da Casa</h1>
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
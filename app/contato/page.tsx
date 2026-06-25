"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    evento: "",
    data: "",
    quantidade: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, telefone, evento, data, quantidade, mensagem } = formData;
    
    // A lógica de formatação garante DD/MM/AAAA
    // Split separa em [ANO, MES, DIA], Reverse inverte, Join junta com barras
    const dataFormatada = data ? data.split('-').reverse().join('/') : "Não informada";
    
    const texto = `Olá! Meu nome é ${nome}. 
    \nInteresse: ${evento} 
    \nData: ${dataFormatada} 
    \nQuantidade: ${quantidade} 
    \nMensagem: ${mensagem} 
    \nContato: ${telefone}`;
    
    const link = `https://wa.me/5548999982232?text=${encodeURIComponent(texto)}`;
    window.open(link, "_blank");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-6 max-w-2xl mx-auto"
    >
      <h1 className="font-serif text-4xl text-brand-green mb-8 text-center">Solicitar Orçamento</h1>
      
      <form onSubmit={enviarWhatsApp} className="space-y-6 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="nome" onChange={handleChange} required type="text" placeholder="Seu Nome" className="w-full p-4 bg-white border border-brand-green/10 rounded-xl focus:outline-none focus:border-brand-orange" />
          <input name="telefone" onChange={handleChange} required type="tel" placeholder="Seu Telefone" className="w-full p-4 bg-white border border-brand-green/10 rounded-xl focus:outline-none focus:border-brand-orange" />
        </div>
        
        <input name="evento" onChange={handleChange} type="text" placeholder="Tipo de Evento" className="w-full p-4 bg-white border border-brand-green/10 rounded-xl focus:outline-none focus:border-brand-orange" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="data" onChange={handleChange} type="date" className="w-full p-4 bg-white border border-brand-green/10 rounded-xl text-brand-green/50" />
          <input name="quantidade" onChange={handleChange} type="number" placeholder="Quantidade Aproximada" className="w-full p-4 bg-white border border-brand-green/10 rounded-xl focus:outline-none focus:border-brand-orange" />
        </div>

        <textarea name="mensagem" onChange={handleChange} placeholder="Sua Mensagem" rows={4} className="w-full p-4 bg-white border border-brand-green/10 rounded-xl focus:outline-none focus:border-brand-orange"></textarea>

        <button type="submit" className="w-full bg-brand-green text-white py-4 rounded-xl hover:bg-brand-orange transition-colors font-semibold uppercase tracking-widest text-sm">
          Enviar Orçamento no WhatsApp
        </button>
      </form>
    </motion.div>
  );
}
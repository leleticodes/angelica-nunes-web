"use client";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-brand-cream font-sans pt-16 pb-8 border-t border-brand-cream/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Coluna 1: Marca & Posicionamento */}
        <div className="flex flex-col space-y-4">
          <div>
            <span className="font-serif text-2xl font-bold tracking-widest uppercase block text-white">
              Angélica Nunes
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-lavender font-medium">
              Confeitaria Artesanal
            </span>
          </div>
          <p className="text-sm text-brand-cream/70 font-light leading-relaxed max-w-sm">
            Mais do que doces e salgados, criamos experiências feitas à mão, com técnica, cuidado e amor em cada detalhe.
          </p>
        </div>

        {/* Coluna 2: Horários & Encomendas */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-serif text-lg font-semibold tracking-wide text-white">Atendimento</h4>
          <p className="text-sm text-brand-cream/80 font-light">
            Segunda a Sábado — <span className="font-medium text-brand-lavender">09h às 19h</span>
          </p>
          <p className="text-xs text-brand-cream/50 font-light leading-relaxed">
            * As encomendas devem ser solicitadas com antecedência mínima para garantia de data.
          </p>
        </div>

        {/* Coluna 3: Localização & Contato */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-serif text-lg font-semibold tracking-wide text-white">Ateliê</h4>
          <p className="text-sm text-brand-cream/80 font-light leading-relaxed">
            Rua Alagoas, 72<br />
            Bairro Próspera — Criciúma–SC<br />
            CEP 88813-020
          </p>
          <div className="pt-2">
            <a 
              href="https://instagram.com/angelicanunes.gourmet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-brand-lavender hover:text-white transition-colors inline-flex items-center gap-2 font-medium"
            >
              Instagram: @angelicanunes.gourmet
            </a>
          </div>
        </div>

      </div>

      {/* Linha Fina de Copyright */}
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-cream/40 font-light">
        <p>© 2026 Angélica Nunes Gourmet. Todos os direitos reservados.</p>
        <p className="mt-2 sm:mt-0">Desenvolvido com técnica e amor.</p>
      </div>
    </footer>
  );
}
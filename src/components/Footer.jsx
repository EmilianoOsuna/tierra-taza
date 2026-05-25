import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 xl:px-32 py-6 border-t border-[var(--color-border-tertiary)] flex flex-col md:flex-row justify-between items-center gap-6 bg-[var(--color-background-primary)]">
      <span className="font-serif text-sm text-[var(--color-text-secondary)] text-center md:text-left">Tierra & Taza</span>
      
      {/* Créditos de Diseño */}
      <div className="flex items-center gap-3">
        <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[var(--color-text-secondary)] uppercase">Código y diseño</span>
        <span className="text-[var(--color-text-secondary)]/30 text-[10px]">·</span>
        <div className="flex items-center gap-1.5">
          <img src="/logo_emiliano.png" alt="" className="h-[20px] w-auto object-contain brightness-0 opacity-75 -translate-y-[1px]" />
          <a href="https://emilianoosuna.com" target="_blank" rel="noreferrer" className="font-sans text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase border-b border-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors pb-0.5 cursor-pointer">Emiliano Osuna</a>
        </div>
      </div>

      <span className="text-[11px] text-[var(--color-text-secondary)] opacity-60 text-center md:text-right">
        Huicicila, Nayarit © {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 xl:px-32 py-6 border-t border-[var(--color-border-tertiary)] flex flex-col sm:flex-row justify-between items-center gap-4 bg-[var(--color-background-primary)]">
      <span className="font-serif text-sm text-[var(--color-text-secondary)]">Tierra & Taza</span>
      <span className="text-[11px] text-[var(--color-text-secondary)] opacity-60">
        Huicicila, Nayarit © {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;

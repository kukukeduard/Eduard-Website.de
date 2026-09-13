"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/reparaturen', label: 'Reparaturen' },
  { href: '/angebote', label: 'Angebote & Ankauf' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-[100] shadow-sm border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[4.5rem] py-2 flex items-center justify-between relative z-[100]">
        {/* Brand Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center font-extrabold text-lg shadow-sm group-hover:bg-blue-800 transition-colors">
            Rü
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
              Rü-Phone Store
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
              Essen-Rüttenscheid
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-blue-700 font-bold border-b-2 border-blue-700'
                    : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            aria-current={pathname === '/kontakt' ? 'page' : undefined}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ease-out shadow-sm font-medium hover:-translate-y-1.5 hover:shadow-lg ${
              pathname === '/kontakt'
                ? 'bg-blue-900 text-white ring-2 ring-blue-500 ring-offset-1'
                : 'bg-blue-700 hover:bg-blue-800 text-white'
            }`}
          >
            Kontakt & Anfahrt
          </Link>
        </nav>

        {/* Mobile Actions: Direct Call & Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+4920127107126"
            className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold border border-blue-100"
            aria-label="Rü-Phone Store anrufen"
          >
            <Phone size={17} />
            <span className="hidden sm:inline">Anrufen</span>
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 relative z-50 cursor-pointer"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown without Framer Motion */}
      {isOpen && (
        <div className="md:hidden animate-fade-in bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg overflow-hidden">
          <div className="flex flex-col space-y-2 font-semibold text-base">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              onClick={closeMenu}
              aria-current={pathname === '/kontakt' ? 'page' : undefined}
              className={`px-3 py-2.5 rounded-lg text-center transition-all duration-300 ease-out shadow-sm font-bold hover:-translate-y-1.5 hover:shadow-lg ${
                pathname === '/kontakt'
                  ? 'bg-blue-900 text-white ring-2 ring-blue-500 ring-offset-1'
                  : 'bg-blue-700 text-white hover:bg-blue-800'
              }`}
            >
              Kontakt & Google Maps
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-2">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-blue-600" /> Rü 102, 45130 Essen
            </span>
            <a href="tel:+4920127107126" className="text-blue-700 font-semibold hover:underline">
              0201 27107126
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

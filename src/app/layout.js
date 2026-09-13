import './globals.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import CookieBanner from '../components/CookieBanner';
import CookieSettingsButton from '../components/CookieSettingsButton';
import { ConsentProvider } from '../context/ConsentContext';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Rü-Phone Store Essen | Smartphone- & Tablet-Reparatur auf der Rü',
  description: 'Professioneller Reparaturdienst für Smartphones & Tablets in Essen-Rüttenscheid. Rüttenscheider Str. 102, 45130 Essen. Express Vor-Ort-Service und Top Google-Bewertungen.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-slate-50 text-slate-900 font-sans flex flex-col min-h-screen">
        <ConsentProvider>
          {/* Responsive Header Navigation */}
          <Navbar />

        {/* Main Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand & Slogan */}
              <div className="space-y-3 md:col-span-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    Rü
                  </div>
                  <span className="text-lg font-bold text-white">Rü-Phone Store</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Professioneller Reparaturdienst für Smartphones & Tablets, Express-Service vor Ort sowie Ankauf & Verkauf in Essen-Rüttenscheid.
                </p>
                <p className="text-xs text-slate-400">
                  Inhaber: <span className="text-slate-200">Velit Ertem</span>
                </p>
              </div>

              {/* Navigation */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li><Link href="/" className="hover:text-white transition-colors">Startseite</Link></li>
                  <li><Link href="/reparaturen" className="hover:text-white transition-colors">Reparaturen & Preise</Link></li>
                  <li><Link href="/angebote" className="hover:text-white transition-colors">Angebote & Ankauf</Link></li>
                  <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt & Google Maps</Link></li>
                </ul>
              </div>

              {/* Opening Hours */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={14} className="text-blue-400" /> Öffnungszeiten
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li className="flex justify-between">
                    <span>Mo – Do:</span>
                    <span className="text-slate-200">10:00 – 19:00 Uhr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Freitag:</span>
                    <span className="text-slate-200">10:00–13:00 & 14:00–19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samstag:</span>
                    <span className="text-slate-200">10:00 – 17:00 Uhr</span>
                  </li>
                  <li className="flex justify-between text-slate-500">
                    <span>Sonntag:</span>
                    <span>Geschlossen</span>
                  </li>
                </ul>
              </div>

              {/* Contact & Directions */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin size={14} className="text-blue-400" /> Standort & Kontakt
                </h4>
                <p className="text-xs text-slate-300">
                  Rüttenscheider Str. 102<br />
                  45130 Essen (Rüttenscheid)
                </p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <p className="flex items-center gap-1.5">
                    <Phone size={12} className="text-blue-400 shrink-0" />
                    <span>Tel: <a href="tel:020127107126" className="text-blue-400 hover:underline font-medium">0201 27107126</a></span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone size={12} className="text-blue-400 shrink-0" />
                    <span>Mobil: <a href="tel:015773473292" className="text-blue-400 hover:underline font-medium">01577 3473292</a></span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Mail size={12} className="text-blue-400 shrink-0" />
                    <span>Mail: <a href="mailto:kontakt@rue-phonestore.de" className="text-blue-400 hover:underline">kontakt@rue-phonestore.de</a></span>
                  </p>
                </div>
                <div className="pt-1">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=R%C3%BC-Phone+Store+R%C3%BCttenscheider+Str.+102+45130+Essen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Route auf Google Maps planen <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[10px] text-slate-500 pt-1 leading-normal">
                  Der Nutzung dieser Kontaktdaten für unaufgeforderte Werbung oder Spam wird ausdrücklich widersprochen (§ 7 UWG).
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <p>© 2026 Rü-Phone Store – Alle Rechte vorbehalten.</p>
              <div className="flex flex-wrap items-center gap-4">
                <CookieSettingsButton />
                <span>•</span>
                <a href="https://www.instagram.com/rue_phone_store/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram (@rue_phone_store)
                </a>
                <span>•</span>
                <a href="https://www.facebook.com/ruephonestore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* GDPR / Cookie Consent Banner */}
        <CookieBanner />
      </ConsentProvider>
    </body>
    </html>
  );
}

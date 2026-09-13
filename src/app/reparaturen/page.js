import BeforeAfterGallery from '../../components/BeforeAfterGallery';
import Link from 'next/link';
import { Smartphone, Battery, Zap, Shield, Camera, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Reparaturen & Service | Rü-Phone Store Essen',
  description: 'Handy- & Tablet-Reparaturen in Essen-Rüttenscheid: Display-Reparatur, Akkutausch, Ladebuchse und Wasserschadenservice für iPhone, Samsung und weitere Marken.',
};

export default function Reparaturen() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Reparaturen & Leistungen</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          Ihr Fachbetrieb auf der Rüttenscheider Straße 102 in Essen: Professionelle Reparaturen meist in unter 60 Minuten mit Qualitäts-Ersatzteilen.
        </p>
      </div>

      {/* Pricing / Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Apple iPhone & iPad */}
        <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Apple iPhone & iPad</h2>
              <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                Express-Service
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              Fachgerechte Reparatur für alle iPhone-Modelle (iPhone 11 bis iPhone 16 Pro Max) sowie iPad Air, Pro und Mini.
            </p>
            <ul className="space-y-3.5">
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Smartphone size={16} className="text-blue-600" />
                  OLED- / Display-Reparatur
                </span>
                <span className="font-semibold text-blue-700">ab 149 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Battery size={16} className="text-blue-600" />
                  Akku-Tausch (100% Zustand)
                </span>
                <span className="font-semibold text-blue-700">ab 79 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Zap size={16} className="text-blue-600" />
                  Ladebuchse (Lightning / USB-C)
                </span>
                <span className="font-semibold text-blue-700">ab 69 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Camera size={16} className="text-blue-600" />
                  Kameraglas & Kamera-Modul
                </span>
                <span className="font-semibold text-blue-700">ab 69 €</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Dauer: ca. 30–60 Min. vor Ort</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 size={14} /> Daten bleiben erhalten
            </span>
          </div>
        </div>

        {/* Samsung Galaxy & Android */}
        <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Samsung Galaxy & Android</h2>
              <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                Originalqualität
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              Reparaturen für Samsung Galaxy S- und A-Serie sowie Google Pixel, Xiaomi, Huawei und OnePlus.
            </p>
            <ul className="space-y-3.5">
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Smartphone size={16} className="text-blue-600" />
                  Display- & AMOLED-Tausch
                </span>
                <span className="font-semibold text-blue-700">ab 159 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Battery size={16} className="text-blue-600" />
                  Akkutausch & Kalibrierung
                </span>
                <span className="font-semibold text-blue-700">ab 79 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Zap size={16} className="text-blue-600" />
                  USB-C Ladeanschluss
                </span>
                <span className="font-semibold text-blue-700">ab 69 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                <span className="flex items-center gap-2 text-slate-700">
                  <Shield size={16} className="text-blue-600" />
                  Wasserschaden-Diagnose
                </span>
                <span className="font-semibold text-blue-700">ab 49 €</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Dauer: meist noch am selben Tag</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 size={14} /> Geprüfte Bauteile
            </span>
          </div>
        </div>
      </div>

      {/* Transparency & Model Notice */}
      <div className="bg-slate-100/80 p-6 sm:p-8 rounded-2xl border border-slate-200 text-slate-700 space-y-3 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
        <h3 className="font-bold text-slate-900 text-lg">Faire Preise ohne versteckte Kosten</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Die Ersatzteilpreise für Smartphones variieren je nach Modellreihe, Display-Technologie (z.B. OLED vs. LCD) und Marktverfügbarkeit. 
          Deshalb erhalten Sie im Rü-Phone Store vor Beginn der Reparatur stets eine <strong>kostenlose und verbindliche Einschätzung direkt vor Ort</strong>. 
          Rufen Sie uns gerne an unter{' '}
          <a href="tel:020127107126" className="text-blue-700 font-semibold hover:underline">
            0201 27107126
          </a>{' '}
          oder kommen Sie einfach auf der Rüttenscheider Str. 102 vorbei.
        </p>
      </div>

      {/* Before / After Section */}
      <section className="space-y-4 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Reparatur-Beispiele</h2>
          <p className="text-slate-600">
            So sieht professionelle Arbeit im Rü-Phone Store aus: Typische Schadensbilder und das fertige Ergebnis.
          </p>
        </div>
        <BeforeAfterGallery />
      </section>

      {/* Bottom CTA */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
        <h3 className="text-2xl font-bold text-slate-900">Ihr Smartphone ist defekt?</h3>
        <p className="text-slate-600 max-w-xl mx-auto">
          Nutzen Sie unser kurzes Online-Formular oder rufen Sie uns direkt an für eine schnelle Ersteinschätzung.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            Reparatur online anfragen <ArrowRight size={16} />
          </Link>
          <a
            href="tel:020127107126"
            className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            <Phone size={16} /> 0201 27107126
          </a>
        </div>
      </div>
    </div>
  );
}

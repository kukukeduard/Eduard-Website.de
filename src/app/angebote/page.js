import Link from 'next/link';
import { Smartphone, Shield, Sparkles, Banknote, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Angebote & Geräteankauf | Rü-Phone Store Essen',
  description: 'Handyankauf mit Sofortauszahlung in Essen-Rüttenscheid. Panzerglas-Montage, Zubehör und aktuelle Aktionen im Rü-Phone Store.',
};

export default function Angebote() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Angebote, Ankauf & Zubehör</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          Entdecken Sie unsere Vor-Ort-Services im Rü-Phone Store auf der Rüttenscheider Straße 102 in Essen.
        </p>
      </div>

      {/* Featured Services / Offers */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Geräteankauf mit Sofortauszahlung */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Banknote size={26} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Smartphone- & Tablet-Ankauf</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Möchten Sie Ihr gebrauchtes oder neues Smartphone verkaufen? Wir bewerten Ihr Gerät fair und transparent 
              in nur wenigen Minuten direkt im Store.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Sofortige Barauszahlung vor Ort
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Ankauf von Neu- und Gebrauchtgeräten (auch mit kleinen Mängeln)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                Faire Inzahlungnahme bei Kauf oder Reparatur eines anderen Geräts
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Unverbindliche Schätzung</span>
            <Link href="/kontakt" className="text-emerald-700 font-semibold text-sm hover:underline flex items-center gap-1">
              Im Store vorbeikommen <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Panzerglas & Schutz-Montage */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Shield size={26} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Panzerglas & Express-Montage</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Schützen Sie Ihr Display vor teuren Sturzschäden. Wir führen passgenaue 9H Hartglas-Folien für fast alle 
              iPhone-, Samsung- und Android-Modelle.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Präzise und 100% bläschenfreie Sofortmontage am Tresen
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Kameraschutz-Gläser & Full-Cover-Panzerglas
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Kombi-Vorteil direkt nach erfolgtem Displaytausch
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Montage in unter 5 Min.</span>
            <span className="text-blue-700 font-semibold text-sm">Direkt zum Mitnehmen</span>
          </div>
        </div>
      </div>

      {/* Zubehör & Diagnose */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-4 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Smartphone size={26} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Zubehör vor Ort</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Große Auswahl an hochwertigem Smartphone-Zubehör: Ladekabel, Netzteile, stoßfeste Schutzhüllen, 
            Kfz-Halterungen und Kopfhörer-Adapter führender Hersteller.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-4 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Sparkles size={26} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Kostenloser Schnell-Check</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ihr Handy lädt nicht richtig oder macht Geräusche? Kommen Sie einfach vorbei. Wir prüfen Ladebuchse, 
            Lautsprecher und Anschlüsse kostenlos auf Schmutz oder Wackelkontakte.
          </p>
        </div>
      </div>

      {/* Social Media Community */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              Community & Aktionen
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">Folgen Sie dem Rü-Phone Store</h3>
            <p className="text-slate-300 max-w-xl text-sm leading-relaxed">
              Auf Instagram und Facebook teilen wir aktuelle Vorher-Nachher-Reparaturen, Neuzugänge im An- & Verkauf sowie regelmäßige Gewinnspiele und Sonderaktionen.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.instagram.com/rue_phone_store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-out shadow hover:-translate-y-1.5 hover:shadow-lg"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram (@rue_phone_store)
            </a>
            <a
              href="https://www.facebook.com/ruephonestore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-out shadow hover:-translate-y-1.5 hover:shadow-lg"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

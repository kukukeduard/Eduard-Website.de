import Link from 'next/link';
import { Phone, Mail, Scale, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Impressum | Rü-Phone Store Essen',
  description: 'Gesetzliche Anbieterkennzeichnung und rechtliche Angaben gemäß § 5 DDG für den Rü-Phone Store in Essen-Rüttenscheid.',
};

export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Header */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Impressum
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
        </p>
      </div>

      {/* Main Info Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-8">
        {/* Betreiber */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Diensteanbieter / Inhaber
          </h2>
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-slate-200 space-y-1">
            <p className="font-semibold text-slate-900">Rü-Phone Store</p>
            <p>Inhaber: Velit Ertem</p>
            <p>Rüttenscheider Str. 102</p>
            <p>45130 Essen</p>
            <p>Deutschland</p>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Kontakt
          </h2>
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-slate-200 space-y-2">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-blue-600 shrink-0" />
              <span>Telefon (Festnetz): </span>
              <a href="tel:+4920127107126" className="text-blue-700 font-semibold hover:underline">
                0201 27107126
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-blue-600 shrink-0" />
              <span>Mobil &amp; WhatsApp: </span>
              <a href="tel:+4915773473292" className="text-blue-700 font-semibold hover:underline">
                01577 3473292
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600 shrink-0" />
              <span>E-Mail: </span>
              <a href="mailto:kontakt@rue-phonestore.de" className="text-blue-700 font-semibold hover:underline">
                kontakt@rue-phonestore.de
              </a>
            </p>
          </div>
        </div>

        {/* Gewerbeanmeldung & Aufsicht */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Gewerbeanmeldung &amp; Aufsichtsbehörde
          </h2>
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-slate-200 space-y-1">
            <p>Gewerbeanmeldung nach § 14 GewO erteilt durch die Stadt Essen.</p>
            <p className="text-slate-500 text-xs">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: Vor Ort einsehbar bzw. in Beantragung.
            </p>
          </div>
        </div>

        {/* Verantwortlich für den Inhalt */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Verantwortlich für redaktionelle Inhalte (§ 18 Abs. 2 MStV)
          </h2>
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-slate-200">
            <p>Velit Ertem</p>
            <p>Rüttenscheider Str. 102</p>
            <p>45130 Essen</p>
          </div>
        </div>

        {/* Streitschlichtung */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Scale size={18} className="text-blue-600" />
            EU-Streitschlichtung &amp; Verbraucherstreitbeilegung
          </h2>
          <div className="text-slate-600 text-sm leading-relaxed space-y-2">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>

        {/* Haftung für Inhalte & Links */}
        <div className="pt-4 border-t border-slate-100 space-y-4 text-xs text-slate-500 leading-relaxed">
          <div>
            <h3 className="font-semibold text-slate-700 mb-1">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 mb-1">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten 
              ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 mb-1">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
              der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

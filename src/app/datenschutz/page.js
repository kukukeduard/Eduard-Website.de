import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText, Server, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Datenschutzerklärung | Rü-Phone Store Essen',
  description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO und TDDDG für den Rü-Phone Store in Essen-Rüttenscheid.',
};

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Information über die Erhebung und Verarbeitung Ihrer Daten gemäß DSGVO &amp; TDDDG
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        {/* 1. Datenschutz auf einen Blick */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Shield className="text-blue-600 shrink-0" size={20} />
            1. Datenschutz auf einen Blick
          </h2>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten 
            vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind 
            Daten, mit denen Sie persönlich identifiziert werden können. Die folgende Übersicht erläutert, welche Daten wir 
            erheben und wofür wir sie nutzen.
          </p>
        </section>

        {/* 2. Verantwortliche Stelle */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Lock className="text-blue-600 shrink-0" size={20} />
            2. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-slate-800">
            <p className="font-semibold text-slate-900">Rü-Phone Store</p>
            <p>Inhaber: Velit Ertem</p>
            <p>Rüttenscheider Str. 102</p>
            <p>45130 Essen</p>
            <p>Deutschland</p>
            <p className="pt-2">Telefon: <a href="tel:+4920127107126" className="text-blue-700 font-semibold hover:underline">0201 27107126</a></p>
            <p>Mobil: <a href="tel:+4915773473292" className="text-blue-700 font-semibold hover:underline">01577 3473292</a></p>
            <p>E-Mail: <a href="mailto:kontakt@rue-phonestore.de" className="text-blue-700 font-semibold hover:underline">kontakt@rue-phonestore.de</a></p>
          </div>
        </section>

        {/* 3. Hosting & Bereitstellung */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Server className="text-blue-600 shrink-0" size={20} />
            3. Hosting &amp; Server-Log-Dateien
          </h2>
          <p>
            Diese Website wird extern gehostet bei <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
          <p>
            Beim Aufruf unserer Website erfasst der Provider automatisch sogenannte Server-Log-Dateien, die Ihr Browser automatisch 
            an den Server übermittelt:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners / IP-Adresse</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p className="text-sm text-slate-600">
            Die Erfassung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Der Websitebetreiber 
            hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
          </p>
        </section>

        {/* 4. Cookies & LocalStorage */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Eye className="text-blue-600 shrink-0" size={20} />
            4. Cookies &amp; Lokale Speicherung (LocalStorage)
          </h2>
          <p>
            Unsere Internetseiten verwenden technisch notwendige Speicherungen im lokalen Speicher Ihres Browsers (LocalStorage). 
            Konkret wird beim Besuch der Website Ihre getroffene Auswahl im Cookie-Einwilligungsbanner unter dem Schlüssel{' '}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 text-xs font-mono">ruephone_cookie_consent</code>{' '}
            gespeichert.
          </p>
          <p className="text-sm text-slate-600">
            Dies stellt sicher, dass Ihnen der Cookie-Banner nicht bei jedem Seitenwechsel erneut angezeigt wird. 
            Rechtsgrundlage hierfür ist <strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong> i. V. m. <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>{' '}
            (berechtigtes Interesse an der rechtskonformen Umsetzung der Einwilligungspflicht).
          </p>
        </section>

        {/* 5. Kontaktformular & Online-Reparaturanfrage */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="text-blue-600 shrink-0" size={20} />
            5. Kontaktformular &amp; Online-Reparaturanfrage
          </h2>
          <p>
            Wenn Sie uns per Kontaktformular oder über den interaktiven Reparatur-Kalkulator Anfragen zukommen lassen, 
            werden Ihre Angaben (z.B. Gerätemodell, Defektbeschreibung, Name, Telefonnummer, E-Mail-Adresse und optionale Notizen) 
            zwecks Bearbeitung der Anfrage und für den Fall von Rückfragen bei uns verarbeitet.
          </p>
          <p className="text-sm text-slate-600">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>, sofern Ihre Anfrage 
            mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
            In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der 
            an uns gerichteten Anfragen (<strong>Art. 6 Abs. 1 lit. f DSGVO</strong>).
          </p>
          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 text-sm text-blue-900">
            <strong>Spam-Schutz (Honeypot-Verfahren):</strong><br />
            Um unsere Formulare vor automatisierten Spam-Bots zu schützen, nutzen wir ein unsichtbares Formularfeld 
            (sog. Honeypot). Wird dieses Feld von einem Bot ausgefüllt, wird die Übermittlung serverseitig verworfen. 
            Hierbei werden keine zusätzlichen Benutzerprofile erstellt oder an Dritte übermittelt.
          </div>
        </section>

        {/* 6. Google Maps */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <MapPin className="text-blue-600 shrink-0" size={20} />
            6. Einbindung von Google Maps
          </h2>
          <p>
            Diese Website bindet zur einfachen Auffindbarkeit unserer Geschäftsräume Kartenmaterial von <strong>Google Maps</strong>{' '}
            (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein.
          </p>
          <p>
            <strong>2-Klick-Lösung / Einwilligungs-Schutz:</strong><br />
            Google Maps wird auf unserer Website erst nach Ihrer ausdrücklichen Einwilligung (Klick auf &bdquo;Akzeptieren&ldquo; im Cookie-Banner 
            oder &bdquo;Karte aktivieren&ldquo; im Kartenfenster) geladen. Ohne Ihre Zustimmung wird keine Verbindung zu den Servern von Google hergestellt 
            und keine IP-Adresse oder Cookies an Google übertragen.
          </p>
          <p className="text-sm text-slate-600">
            Rechtsgrundlage für das Laden von Google Maps nach Einwilligung ist <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> und{' '}
            <strong>§ 25 Abs. 1 TDDDG</strong>. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre Cookie-Einstellungen 
            über den Link im Footer zurücksetzen.
          </p>
        </section>

        {/* 7. Ihre Rechte */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">
            7. Ihre Rechte als betroffene Person
          </h2>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit folgende Rechte:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>
              <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, unentgeltlich Auskunft über Herkunft, 
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
            </li>
            <li>
              <strong>Berichtigung &amp; Löschung (Art. 16, 17 DSGVO):</strong> Sie haben das Recht auf Berichtigung falscher Daten 
              oder Löschung Ihrer bei uns gespeicherten Daten.
            </li>
            <li>
              <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung 
              Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung 
              oder in Erfüllung eines Vertrags automatisiert verarbeiten, in einem gängigen maschinenlesbaren Format aushändigen zu lassen.
            </li>
            <li>
              <strong>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können eine einmal erteilte Einwilligung zur 
              Datenverarbeitung jederzeit mit Wirkung für die Zukunft widerrufen.
            </li>
            <li>
              <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO):</strong> Im Falle von Verstößen gegen die DSGVO 
              steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Behörde in NRW ist die:
              <span className="block mt-1 font-medium text-slate-800">
                Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)<br />
                Kavalleriestr. 2-4, 40213 Düsseldorf<br />
                <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  www.ldi.nrw.de
                </a>
              </span>
            </li>
          </ul>
        </section>

        {/* Footer note */}
        <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
          Stand dieser Datenschutzerklärung: September 2026
        </div>
      </div>
    </div>
  );
}

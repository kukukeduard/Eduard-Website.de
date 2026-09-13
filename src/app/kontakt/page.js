"use client";

import MultiStepForm from '../../components/MultiStepForm';
import { useConsent } from '../../context/ConsentContext';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';

export default function Kontakt() {
  const { consentGiven, acceptConsent } = useConsent();

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Kontakt &amp; Anfahrt</h1>
        <p className="text-slate-600 text-lg">
          Ihr professioneller Smartphone- &amp; Tablet-Reparaturdienst direkt auf der Rü in Essen-Rüttenscheid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Interactive MultiStepForm */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Online Reparatur-Anfrage</h2>
          <p className="text-slate-600 mb-6 text-sm">
            Wählen Sie Ihr Modell und den Schaden aus – wir berechnen Ihnen umgehend ein unverbindliches Angebot.
          </p>
          <MultiStepForm />
        </div>

        {/* Right Column: Real Store Data & Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Standort &amp; Erreichbarkeit</h2>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Rü-Phone Store</h3>
                <p className="text-slate-600 text-sm mt-0.5">Inhaber: Velit Ertem</p>
                <p className="text-slate-800 font-medium mt-1">
                  Rüttenscheider Str. 102<br />
                  45130 Essen (Rüttenscheid)
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Haltestelle: Essen Rüttenscheider Stern / Martinstraße (wenige Gehminuten)
                </p>
              </div>
            </div>

            {/* Telephone & Mail */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                <Phone size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Telefon &amp; Direktservice</h3>
                <p className="text-sm text-slate-600">
                  Festnetz:{' '}
                  <a href="tel:020127107126" className="text-blue-700 hover:underline font-semibold">
                    0201 27107126
                  </a>
                </p>
                <p className="text-sm text-slate-600">
                  Mobil / WhatsApp:{' '}
                  <a href="tel:015773473292" className="text-blue-700 hover:underline font-semibold">
                    01577 3473292
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">E-Mail</h3>
                <a href="mailto:kontakt@rue-phonestore.de" className="text-blue-700 hover:underline text-sm font-semibold">
                  kontakt@rue-phonestore.de
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                <Clock size={24} />
              </div>
              <div className="w-full">
                <h3 className="font-bold text-slate-900 mb-2">Öffnungszeiten</h3>
                <div className="text-sm text-slate-600 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Montag – Donnerstag:</span>
                    <span className="font-semibold text-slate-900">10:00 – 19:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Freitag:</span>
                    <span className="font-semibold text-slate-900">10:00 – 13:00 &amp; 14:00 – 19:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag:</span>
                    <span className="font-semibold text-slate-900">10:00 – 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Integration */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Navigation size={13} />
              Google Maps Navigation
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Laufkundschaft &amp; Anfahrt</h2>
            <p className="text-slate-600 text-sm mt-1">
              Finden Sie uns direkt auf der Rüttenscheider Straße 102 in Essen.
            </p>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=R%C3%BC-Phone+Store+R%C3%BCttenscheider+Str.+102+45130+Essen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            Route auf Google Maps planen
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Interactive Google Maps iframe with conditional loading based on consentGiven */}
        <div className="relative w-full h-[300px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 flex items-center justify-center">
          {consentGiven ? (
            <iframe
              title="Rü-Phone Store Essen Standort Google Maps"
              src="https://maps.google.com/maps?q=R%C3%BC-Phone+Store,+R%C3%BCttenscheider+Str.+102,+45130+Essen&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 w-full h-full"
            />
          ) : (
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-50 text-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-sm">
                <MapPin size={24} />
              </div>
              <div className="max-w-md space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-slate-900 font-bold text-base">
                  <span>Google Maps deaktiviert</span>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    DSGVO
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Um die interaktive Karte von Google Maps anzuzeigen, ist Ihre Einwilligung gemäß DSGVO / Cookie-Richtlinie erforderlich. Dabei werden Daten an Google-Server übertragen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <button
                  type="button"
                  onClick={acceptConsent}
                  className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer"
                >
                  <Navigation size={14} />
                  Google Maps aktivieren &amp; zustimmen
                </button>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=R%C3%BC-Phone+Store+R%C3%BCttenscheider+Str.+102+45130+Essen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  Standort extern öffnen
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

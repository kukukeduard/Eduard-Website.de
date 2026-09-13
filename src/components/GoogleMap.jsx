"use client";

import React from 'react';
import { useConsent } from '../context/ConsentContext';
import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function GoogleMap({
  className = "w-full h-full",
  heightClass = "h-[300px] sm:h-[450px]",
  mapSrc = "https://maps.google.com/maps?q=R%C3%BC-Phone+Store,+R%C3%BCttenscheider+Str.+102,+45130+Essen&t=&z=16&ie=UTF8&iwloc=&output=embed",
  title = "Rü-Phone Store Essen Standort Google Maps",
}) {
  const { consentGiven, acceptConsent } = useConsent();

  return (
    <div className={`relative w-full ${heightClass} rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 flex items-center justify-center`}>
      {/* If GDPR consent is granted, load the real Google Maps iframe */}
      {consentGiven ? (
        <iframe
          title={title}
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`relative z-10 ${className}`}
        />
      ) : (
        /* Friendly placeholder shown when consent is missing or rejected */
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
            <p className="text-xs text-slate-500 leading-relaxed">
              Zum Schutz Ihrer Privatsphäre wurde das automatische Laden von Google Maps unterbunden. Mit Ihrer Zustimmung wird die interaktive Karte geladen und Daten werden an Google übertragen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={acceptConsent}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer"
            >
              <Navigation size={14} />
              Google Maps aktivieren &amp; zustimmen
            </button>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=R%C3%BC-Phone+Store+R%C3%BCttenscheider+Str.+102+45130+Essen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2.5 rounded-xl font-semibold text-xs shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              Standort extern öffnen
              <ExternalLink size={14} />
            </a>
          </div>

          <p className="text-[11px] text-slate-400">
            Rü-Phone Store • Rüttenscheider Str. 102, 45130 Essen
          </p>
        </div>
      )}
    </div>
  );
}

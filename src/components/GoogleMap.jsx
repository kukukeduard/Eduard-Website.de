"use client";

import React from 'react';
import { useConsent } from '../context/ConsentContext';
import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function GoogleMap({
  className = "w-full h-full",
  heightClass = "h-[320px] sm:h-[450px]",
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
        /* High-end frosted glass 2-click consent placeholder */
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Stylized background map preview */}
          <div className="absolute inset-0 bg-[#e5e9f0] opacity-90 select-none pointer-events-none">
            {/* SVG street grid simulation */}
            <svg className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="streetGrid" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M 0 30 L 120 30 M 0 90 L 120 90 M 40 0 L 40 120 M 100 0 L 100 120" stroke="#cbd5e1" strokeWidth="6" />
                  <path d="M 0 60 L 120 60 M 70 0 L 70 120" stroke="#94a3b8" strokeWidth="10" strokeOpacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#streetGrid)" />
              {/* Stylized arterial road (Rüttenscheider Str.) */}
              <line x1="15%" y1="0%" x2="85%" y2="100%" stroke="#fbbf24" strokeWidth="12" strokeOpacity="0.6" />
              <line x1="15%" y1="0%" x2="85%" y2="100%" stroke="#ffffff" strokeWidth="8" strokeOpacity="0.8" />
            </svg>
            {/* Ambient blur overlay */}
            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]"></div>
          </div>

          {/* Central Glass Card */}
          <div className="relative z-20 max-w-md w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl border border-white/80 flex flex-col items-center text-center space-y-4">
            {/* Pin Badge */}
            <div className="relative">
              <div className="w-13 h-13 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25">
                <MapPin size={26} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white shadow-sm">
                <ShieldCheck size={12} />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
                <span>Google Maps Schutz</span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  DSGVO Konform
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                Zum Schutz Ihrer Privatsphäre wird die interaktive Karte erst nach Ihrer Bestätigung geladen. Dabei werden Daten an Google übermittelt.
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={acceptConsent}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-pointer"
              >
                <Navigation size={14} />
                Karte aktivieren &amp; anzeigen
              </button>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R%C3%BC-Phone+Store+R%C3%BCttenscheider+Str.+102+45130+Essen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 px-4 py-2.5 rounded-xl font-medium text-xs shadow-sm hover:-translate-y-0.5 transition-all"
              >
                In Maps öffnen
                <ExternalLink size={13} />
              </a>
            </div>

            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 w-full font-medium">
              📍 Rüttenscheider Str. 102, 45130 Essen
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

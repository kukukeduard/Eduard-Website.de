"use client";

import React, { useState, useEffect } from 'react';
import { useConsent } from '../context/ConsentContext';
import { ShieldCheck, Cookie, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function CookieBanner() {
  const { isLoaded, isBannerOpen, acceptConsent, rejectConsent } = useConsent();
  const [showDetails, setShowDetails] = useState(false);

  // Lock body scroll when modal is open to prevent bypassing
  useEffect(() => {
    if (isLoaded && isBannerOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isLoaded, isBannerOpen]);

  // Do not render before hydration or when banner is closed
  if (!isLoaded || !isBannerOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="cookie-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div className="bg-slate-900 border border-slate-700/80 text-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 relative my-auto animate-zoom-in">
        {/* Header with Icon & DSGVO Badge */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Cookie size={26} aria-hidden="true" />
            </div>
            <div>
              <h2 id="cookie-modal-title" className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Cookie-Einstellungen
              </h2>
              <span className="text-xs text-slate-400">Rü-Phone Store Essen</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
            <ShieldCheck size={14} />
            DSGVO-konform
          </span>
        </div>

        {/* Main Text */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Wir schätzen Ihre Privatsphäre. Um Ihnen die beste Erfahrung zu bieten, nutzen wir Cookies und externe Dienste (wie <strong>Google Maps</strong> zur Routenplanung und Links zu unseren Social-Media-Kanälen). 
          Bitte wählen Sie, ob Sie alle Dienste aktivieren oder nur essenzielle Cookies zulassen möchten.
        </p>

        {/* Action Buttons: Explicit Choice Required */}
        <div className="flex flex-col sm:flex-row-reverse gap-3 mb-6">
          <button
            type="button"
            onClick={acceptConsent}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all text-center cursor-pointer active:scale-98 hover:-translate-y-0.5"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={rejectConsent}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl font-semibold text-sm sm:text-base bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-slate-600 transition-all text-center cursor-pointer active:scale-98"
          >
            Nur essenzielle / Ablehnen
          </button>
        </div>

        {/* Expandable Details */}
        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition-colors"
            aria-expanded={showDetails}
          >
            <Info size={14} />
            <span>{showDetails ? 'Details ausblenden' : 'Details zu Diensten & Cookies anzeigen'}</span>
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showDetails && (
            <div className="mt-3 p-4 bg-slate-950/70 rounded-2xl border border-slate-800/80 text-xs text-slate-300 space-y-3">
              <div className="space-y-1">
                <p className="font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Essenzielle Funktionen (Immer aktiv)
                </p>
                <p className="text-slate-400 text-[11px] leading-relaxed pl-4">
                  Erforderlich für den sicheren Betrieb der Website, Session-Handling und Speicherung Ihrer Cookie-Präferenzen im LocalStorage.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  Google Maps &amp; Externe Medien
                </p>
                <p className="text-slate-400 text-[11px] leading-relaxed pl-4">
                  Lädt interaktive Karten von Google Maps zur Standortanzeige und Routenplanung. Ohne Ihre Zustimmung bleibt die Karte deaktiviert.
                </p>
              </div>
            </div>
          )}

          <p className="mt-3 text-[11px] text-slate-500">
            Ihre Auswahl kann jederzeit im Footer unter &bdquo;Cookie-Einstellungen&ldquo; geändert werden.
          </p>
        </div>
      </div>
    </div>
  );
}

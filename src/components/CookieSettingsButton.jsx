"use client";

import React from 'react';
import { useConsent } from '../context/ConsentContext';
import { Cookie } from 'lucide-react';

export default function CookieSettingsButton() {
  const { openBanner } = useConsent();

  return (
    <button
      type="button"
      onClick={openBanner}
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
      title="DSGVO- & Cookie-Einstellungen anpassen"
    >
      <Cookie size={13} className="text-blue-400" />
      <span>Cookie-Einstellungen</span>
    </button>
  );
}

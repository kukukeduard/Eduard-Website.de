"use client";

import { useState } from 'react';
import { Smartphone, Battery, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';

const gallery = [
  { 
    id: 1, 
    title: 'iPhone 13 Display-Reparatur', 
    icon: Smartphone, 
    desc: 'Sturzschaden mit Frontglas-Bruch und Bildstreifen. Austausch gegen Premium-OLED.',
    beforeTitle: 'Glas zersplittert & Pixelfehler',
    beforeDesc: 'Displayglas stark gerissen, Touchscreen reagiert stellenweise nicht mehr.',
    beforeTags: ['Sturzschaden', 'Touch-Ausfall', 'Splittergefahr'],
    afterTitle: 'Neues OLED-Display montiert',
    afterDesc: 'Makellose Bildqualität, Touchscreen & Face ID kalibriert und voll funktionsfähig.',
    afterTags: ['Originalgetreu', 'TrueTone aktiv', 'Geprüft & getestet']
  },
  { 
    id: 2, 
    title: 'Samsung Galaxy S22 Akkutausch', 
    icon: Battery, 
    desc: 'Akku schwächelt extrem und schaltet bei Kälte oder Last unvorhergesehen ab.',
    beforeTitle: 'Akkukapazität erschöpft (< 70%)',
    beforeDesc: 'Hohe Ladezyklenzahl, Überhitzung beim Schnellladen und kurze Standby-Zeit.',
    beforeTags: ['Kapazitätsverlust', 'Akku schwach', 'Abschaltung'],
    afterTitle: 'Neuer Hochleistungsakku eingesetzt',
    afterDesc: '100% Batteriezustand wiederhergestellt mit voller Laufzeit wie am ersten Tag.',
    afterTags: ['100% Kapazität', 'Original-Zertifiziert', 'Volle Garantie']
  },
  { 
    id: 3, 
    title: 'USB-C Ladebuchse & Feuchtigkeit', 
    icon: Zap, 
    desc: 'Wasserkontakt am Ladeanschluss: Smartphone lädt nicht mehr und warnt vor Kurzschluss.',
    beforeTitle: 'Ladeport korrodiert & blockiert',
    beforeDesc: 'Ladekabel hat keinen Kontakt, System bricht den Ladevorgang aus Sicherheitsgründen ab.',
    beforeTags: ['Wasserschaden', 'Wackelkontakt', 'Kein Ladestrom'],
    afterTitle: 'Anschluss gereinigt & instandgesetzt',
    afterDesc: 'Ultraschall-Trocknung, Buchse gereinigt und Kontakte erneuert. Schnellladung aktiv.',
    afterTags: ['Express-Reparatur', 'Fast Charging OK', 'Datenübertragung OK']
  }
];

export default function BeforeAfterGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const current = gallery[activeTab];

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIdx = (index + 1) % gallery.length;
      setActiveTab(nextIdx);
      document.getElementById(`tab-${nextIdx}`)?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIdx = (index - 1 + gallery.length) % gallery.length;
      setActiveTab(prevIdx);
      document.getElementById(`tab-${prevIdx}`)?.focus();
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 flex flex-col gap-3" role="tablist" aria-label="Reparatur-Beispiele" aria-orientation="vertical">
          {gallery.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <button 
                key={item.id}
                id={`tab-${idx}`}
                type="button"
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                aria-selected={isSelected}
                aria-controls={`tabpanel-${idx}`}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 ease-out flex items-center gap-4 hover:-translate-y-1.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isSelected ? 'border-blue-700 bg-blue-50 ring-1 ring-blue-700' : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="text-xs text-slate-500 mt-1 line-clamp-1">{item.desc}</div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-2/3">
          <div 
            key={activeTab}
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out animate-fade-in"
          >
            <h3 className="text-2xl font-bold mb-2 text-slate-900">{current.title}</h3>
            <p className="text-slate-600 mb-6 text-sm sm:text-base">{current.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {/* VORHER */}
              <div className="relative rounded-xl overflow-hidden border border-red-200 bg-gradient-to-b from-red-50/50 to-slate-100 p-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm mb-4">
                    <AlertTriangle size={13} />
                    VORHER (DEFEKT)
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{current.beforeTitle}</h4>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{current.beforeDesc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-red-100">
                  {current.beforeTags.map((tag, i) => (
                    <span key={i} className="text-xs bg-red-100/80 text-red-700 px-2.5 py-1 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* NACHHER */}
              <div className="relative rounded-xl overflow-hidden border border-emerald-200 bg-gradient-to-b from-emerald-50/50 to-slate-50 p-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm mb-4">
                    <CheckCircle2 size={13} />
                    NACHHER (REPARIERT)
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{current.afterTitle}</h4>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{current.afterDesc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-emerald-100">
                  {current.afterTags.map((tag, i) => (
                    <span key={i} className="text-xs bg-emerald-100/80 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

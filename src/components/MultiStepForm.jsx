"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Check, CheckCircle2, ShieldAlert } from 'lucide-react';

const brands = ['Apple', 'Samsung', 'Google', 'Huawei', 'Xiaomi', 'Andere Marke', 'Ich weiß es nicht'];

const deviceGenerations = {
  Apple: ['iPhone 18', 'iPhone 17', 'iPhone 16', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone 11', 'iPhone X / XR / XS', 'iPhone 8', 'iPhone 7', 'iPhone 6', 'iPhone SE', 'iPad / Watch', 'Ich weiß es nicht'],
  Samsung: ['Galaxy S26', 'Galaxy S25', 'Galaxy S24', 'Galaxy S23', 'Galaxy S22', 'Galaxy S21', 'Galaxy S20', 'Galaxy S10', 'Galaxy S9', 'Galaxy S8', 'Galaxy S7', 'Galaxy S6', 'Galaxy Z Serie', 'Galaxy A / M / Note', 'Ich weiß es nicht'],
  Google: ['Pixel 11', 'Pixel 10', 'Pixel 9', 'Pixel 8', 'Pixel 7', 'Pixel 6', 'Pixel 5', 'Pixel 4', 'Pixel 3', 'Andere', 'Ich weiß es nicht'],
  Huawei: ['Pura 70', 'P60 / P50', 'P40', 'P30', 'P20', 'Mate Serie', 'Mate X (Foldables)', 'Andere', 'Ich weiß es nicht'],
  Xiaomi: ['15 Serie', '14 Serie', '13 Serie', '12 Serie', '11 Serie', 'Redmi Note', 'Poco', '10 Serie', 'Andere', 'Ich weiß es nicht'],
  default: ['Aktuelles Modell', '1-2 Jahre alt', '3-4 Jahre alt', '5+ Jahre alt', 'Ich weiß es nicht']
};

const deviceVariants = {
  Apple: {
    'iPhone 18': ['iPhone 18 Pro', 'iPhone 18 Pro Max', 'Ich weiß es nicht'],
    'iPhone 17': ['iPhone 17', 'iPhone 17 Air', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'Ich weiß es nicht'],
    'iPhone 16': ['iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max', 'Ich weiß es nicht'],
    'iPhone 15': ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max', 'Ich weiß es nicht'],
    'iPhone 14': ['iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max', 'Ich weiß es nicht'],
    'iPhone 13': ['iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'Ich weiß es nicht'],
    'iPhone 12': ['iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'Ich weiß es nicht'],
    'iPhone 11': ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'Ich weiß es nicht'],
    'iPhone X / XR / XS': ['iPhone X', 'iPhone XR', 'iPhone XS', 'iPhone XS Max', 'Ich weiß es nicht'],
    'iPhone 8': ['iPhone 8', 'iPhone 8 Plus', 'Ich weiß es nicht'],
    'iPhone 7': ['iPhone 7', 'iPhone 7 Plus', 'Ich weiß es nicht'],
    'iPhone 6': ['iPhone 6', 'iPhone 6 Plus', 'iPhone 6s', 'iPhone 6s Plus', 'Ich weiß es nicht'],
    'iPhone SE': ['iPhone SE (4. Gen)', 'iPhone SE (3. Gen)', 'iPhone SE (2. Gen)', 'iPhone SE (1. Gen)', 'Ich weiß es nicht'],
    'iPad / Watch': ['iPad', 'Apple Watch', 'Ich weiß es nicht'],
    'Ich weiß es nicht': ['Ich weiß es nicht']
  },
  Samsung: {
    'Galaxy S26': ['Galaxy S26', 'Galaxy S26+', 'Galaxy S26 Ultra', 'Galaxy S26 FE', 'Ich weiß es nicht'],
    'Galaxy S25': ['Galaxy S25', 'Galaxy S25+', 'Galaxy S25 Ultra', 'Galaxy S25 FE', 'Galaxy S25 Slim', 'Ich weiß es nicht'],
    'Galaxy S24': ['Galaxy S24', 'Galaxy S24+', 'Galaxy S24 Ultra', 'Galaxy S24 FE', 'Ich weiß es nicht'],
    'Galaxy S23': ['Galaxy S23', 'Galaxy S23+', 'Galaxy S23 Ultra', 'Galaxy S23 FE', 'Ich weiß es nicht'],
    'Galaxy S22': ['Galaxy S22', 'Galaxy S22+', 'Galaxy S22 Ultra', 'Ich weiß es nicht'],
    'Galaxy S21': ['Galaxy S21', 'Galaxy S21+', 'Galaxy S21 Ultra', 'Galaxy S21 FE', 'Ich weiß es nicht'],
    'Galaxy S20': ['Galaxy S20', 'Galaxy S20+', 'Galaxy S20 Ultra', 'Galaxy S20 FE', 'Ich weiß es nicht'],
    'Galaxy S10': ['Galaxy S10', 'Galaxy S10+', 'Galaxy S10e', 'Galaxy S10 Lite', 'Galaxy S10 5G', 'Ich weiß es nicht'],
    'Galaxy S9': ['Galaxy S9', 'Galaxy S9+', 'Ich weiß es nicht'],
    'Galaxy S8': ['Galaxy S8', 'Galaxy S8+', 'Ich weiß es nicht'],
    'Galaxy S7': ['Galaxy S7', 'Galaxy S7 Edge', 'Ich weiß es nicht'],
    'Galaxy S6': ['Galaxy S6', 'Galaxy S6 Edge', 'Ich weiß es nicht'],
    'Galaxy Z Serie': ['Galaxy Z Fold6', 'Galaxy Z Flip6', 'Galaxy Z Fold5', 'Galaxy Z Flip5', 'Galaxy Z Fold4', 'Galaxy Z Flip4', 'Galaxy Z Fold3', 'Galaxy Z Flip3', 'Älteres Z-Modell', 'Ich weiß es nicht'],
    'Galaxy A / M / Note': ['Galaxy A-Serie', 'Galaxy M-Serie', 'Galaxy Note Serie', 'Ich weiß es nicht'],
    'Ich weiß es nicht': ['Ich weiß es nicht']
  },
  Google: {
    'Pixel 11': ['Pixel 11', 'Pixel 11 Pro', 'Pixel 11 Pro XL', 'Pixel 11 Pro Fold', 'Pixel 11a', 'Ich weiß es nicht'],
    'Pixel 10': ['Pixel 10', 'Pixel 10 Pro', 'Pixel 10 Pro XL', 'Pixel 10 Pro Fold', 'Ich weiß es nicht'],
    'Pixel 9': ['Pixel 9', 'Pixel 9 Pro', 'Pixel 9 Pro XL', 'Pixel 9 Pro Fold', 'Pixel 9a', 'Ich weiß es nicht'],
    'Pixel 8': ['Pixel 8', 'Pixel 8 Pro', 'Pixel 8a', 'Ich weiß es nicht'],
    'Pixel 7': ['Pixel 7', 'Pixel 7 Pro', 'Pixel 7a', 'Ich weiß es nicht'],
    'Pixel 6': ['Pixel 6', 'Pixel 6 Pro', 'Pixel 6a', 'Ich weiß es nicht'],
    'Pixel 5': ['Pixel 5', 'Pixel 5a', 'Ich weiß es nicht'],
    'Pixel 4': ['Pixel 4', 'Pixel 4 XL', 'Pixel 4a', 'Ich weiß es nicht'],
    'Pixel 3': ['Pixel 3', 'Pixel 3 XL', 'Pixel 3a', 'Ich weiß es nicht'],
    'Andere': ['Pixel Fold (1. Gen)', 'Älteres Pixel', 'Ich weiß es nicht'],
    'Ich weiß es nicht': ['Ich weiß es nicht']
  },
  Huawei: {
    'Pura 70': ['Pura 70', 'Pura 70 Pro', 'Pura 70 Pro+', 'Pura 70 Ultra', 'Ich weiß es nicht'],
    'P60 / P50': ['P60', 'P60 Pro', 'P60 Art', 'P50', 'P50 Pro', 'P50 Pocket', 'P50E', 'Ich weiß es nicht'],
    'P40': ['P40', 'P40 Pro', 'P40 Pro+', 'P40 Lite', 'P40 Lite E', 'Ich weiß es nicht'],
    'P30': ['P30', 'P30 Pro', 'P30 Lite', 'P30 Lite New Edition', 'Ich weiß es nicht'],
    'P20': ['P20', 'P20 Pro', 'P20 Lite', 'Ich weiß es nicht'],
    'Mate Serie': ['Mate 70', 'Mate 70 Pro', 'Mate 60', 'Mate 60 Pro', 'Mate 60 Pro+', 'Mate 60 RS', 'Mate 50', 'Mate 50 Pro', 'Mate 40', 'Mate 30', 'Ich weiß es nicht'],
    'Mate X (Foldables)': ['Mate XT', 'Mate X5', 'Mate X3', 'Mate Xs 2', 'Ich weiß es nicht'],
    'Andere': ['Nova Serie', 'Y Serie', 'Ich weiß es nicht'],
    'Ich weiß es nicht': ['Ich weiß es nicht']
  },
  Xiaomi: {
    '15 Serie': ['Xiaomi 15', 'Xiaomi 15 Pro', 'Xiaomi 15 Ultra', 'Ich weiß es nicht'],
    '14 Serie': ['Xiaomi 14', 'Xiaomi 14 Pro', 'Xiaomi 14 Ultra', 'Xiaomi 14T', 'Xiaomi 14T Pro', 'Xiaomi 14 Civi', 'Ich weiß es nicht'],
    '13 Serie': ['Xiaomi 13', 'Xiaomi 13 Pro', 'Xiaomi 13 Ultra', 'Xiaomi 13T', 'Xiaomi 13T Pro', 'Xiaomi 13 Lite', 'Ich weiß es nicht'],
    '12 Serie': ['Xiaomi 12', 'Xiaomi 12 Pro', 'Xiaomi 12X', 'Xiaomi 12T', 'Xiaomi 12T Pro', 'Xiaomi 12 Lite', 'Xiaomi 12S', 'Xiaomi 12S Pro', 'Xiaomi 12S Ultra', 'Ich weiß es nicht'],
    '11 Serie': ['Xiaomi 11', 'Xiaomi 11 Pro', 'Xiaomi 11 Ultra', 'Xiaomi 11T', 'Xiaomi 11T Pro', 'Xiaomi 11 Lite 5G NE', 'Xiaomi Mi 11i', 'Ich weiß es nicht'],
    '10 Serie': ['Xiaomi 10', 'Xiaomi 10 Pro', 'Xiaomi 10T', 'Xiaomi 10T Pro', 'Xiaomi 10 Lite', 'Ich weiß es nicht'],
    'Redmi Note': ['Redmi Note 14 Serie', 'Redmi Note 13 Serie', 'Redmi Note 12 Serie', 'Redmi Note 11 Serie', 'Ältere Redmi Note', 'Ich weiß es nicht'],
    'Poco': ['Poco F6 / F6 Pro', 'Poco X6 / X6 Pro', 'Poco M6 / M6 Pro', 'Ältere Poco', 'Ich weiß es nicht'],
    'Andere': ['Xiaomi Mix Fold', 'Xiaomi Mix Flip', 'Black Shark', 'Ich weiß es nicht'],
    'Ich weiß es nicht': ['Ich weiß es nicht']
  },
  default: {
    'Aktuelles Modell': ['Ich weiß es nicht'],
    '1-2 Jahre alt': ['Ich weiß es nicht'],
    '3-4 Jahre alt': ['Ich weiß es nicht'],
    '5+ Jahre alt': ['Ich weiß es nicht'],
    'Ich weiß es nicht': ['Ich weiß es nicht']
  }
};

const damages = ['Displaybruch / Glas', 'Akkutausch', 'Wasserschaden', 'Ladebuchse defekt', 'Kamera defekt', 'Sonstiger Fehler', 'Ich weiß es nicht'];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);
  const [honeypot, setHoneypot] = useState('');
  const [formStartTime] = useState(() => Date.now());

  const [formData, setFormData] = useState({
    brand: '',
    generation: '',
    variant: '',
    damage: '',
    name: '',
    contact: '',
    notes: ''
  });

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSelectBrand = (brand) => {
    setFormData(prev => ({
      ...prev,
      brand,
      device: '', // Prevent stale device mapping
      generation: '',
      variant: '',
    }));
    setStep(2);
    setMaxStepReached(2);
  };

  const handleSelectGeneration = (generation) => {
    setFormData(prev => ({ ...prev, generation }));
    setStep(3);
    setMaxStepReached(prev => Math.max(prev, 3));
  };

  const handleSelectVariant = (variant) => {
    setFormData(prev => ({ ...prev, variant }));
    setStep(4);
    setMaxStepReached(prev => Math.max(prev, 4));
  };

  const handleSelectDamage = (damage) => {
    setFormData(prev => ({ ...prev, damage }));
    setStep(5);
    setMaxStepReached(prev => Math.max(prev, 5));
  };

  const currentGenerationList = deviceGenerations[formData.brand] || deviceGenerations.default;
  const currentBrandVariants = deviceVariants[formData.brand] || deviceVariants.default;
  const currentVariantList = formData.generation ? (currentBrandVariants[formData.generation] || ['Ich weiß es nicht']) : [];

  const nextStep = () => {
    setStep(s => {
      const n = Math.min(s + 1, 6);
      setMaxStepReached(m => Math.max(m, n));
      return n;
    });
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const resetForm = () => {
    setFormData({ brand: '', generation: '', variant: '', damage: '', name: '', contact: '', notes: '' });
    setHoneypot('');
    setStep(1);
    setMaxStepReached(1);
  };

  const isContactValid = Boolean(formData.name.trim().length >= 2 && formData.contact.trim().length >= 5);

  const totalSteps = 5;

  return (
    <div className="w-full bg-white p-4 sm:p-7 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between min-h-[460px] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
      {/* Stepper Header */}
      <div>
        <div className="flex justify-between items-center mb-6 relative">
          {[1, 2, 3, 4, 5].map(i => {
            const isClickable = i <= maxStepReached && step < 6 && i !== step;
            return (
              <button
                key={i}
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && setStep(i)}
                aria-label={`Zu Schritt ${i} wechseln`}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs relative z-10 transition-all duration-300 ease-out shadow-sm hover:-translate-y-1.5 hover:shadow-md ${
                  step >= i ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'
                } ${isClickable ? 'hover:scale-110 cursor-pointer ring-2 ring-blue-300' : 'cursor-default'}`}
              >
                {step > i ? <Check size={15} /> : i}
              </button>
            );
          })}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 z-0 -translate-y-1/2">
            <div className="h-full bg-blue-700 transition-all duration-300 ease-out" style={{ width: `${((Math.min(step, 5) - 1) / 4) * 100}%` }} />
          </div>
        </div>

        {/* Step Content */}
        <div className="h-full relative w-full overflow-hidden">
          {step === 1 && (
            <div key="step1" className="space-y-4 animate-slide-in-right">
              <div>
                <h3 className="text-xl font-bold text-slate-900">1. Welcher Hersteller?</h3>
                <p className="text-xs text-slate-500 mt-0.5">Wählen Sie die Marke Ihres zu reparierenden Geräts</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {brands.map(brand => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => handleSelectBrand(brand)}
                    className={`p-3 rounded-xl border text-left text-sm font-semibold transition-all hover:-translate-y-1.5 hover:shadow-md duration-300 ${
                      formData.brand === brand
                        ? 'border-blue-700 bg-blue-50 text-blue-900 ring-2 ring-blue-700/20 shadow-sm'
                        : 'border-slate-200 hover:border-blue-600 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div key="step2" className="space-y-4 animate-slide-in-right">
              <div>
                <h3 className="text-xl font-bold text-slate-900">2. Welche Generation?</h3>
                <p className="text-xs text-slate-500 mt-0.5">Hersteller: <span className="font-semibold text-blue-700">{formData.brand}</span></p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                {currentGenerationList.map(generation => (
                  <button
                    key={generation}
                    type="button"
                    onClick={() => handleSelectGeneration(generation)}
                    className={`p-3 rounded-xl border text-left text-sm font-semibold transition-all hover:-translate-y-1.5 hover:shadow-md duration-300 ${
                      formData.generation === generation
                        ? 'border-blue-700 bg-blue-50 text-blue-900 ring-2 ring-blue-700/20 shadow-sm'
                        : 'border-slate-200 hover:border-blue-600 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {generation}
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft size={14} /> Zurück zur Markenauswahl
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div key="step3" className="space-y-4 animate-slide-in-right">
              <div>
                <h3 className="text-xl font-bold text-slate-900">3. Welches Modell / Variante?</h3>
                <p className="text-xs text-slate-500 mt-0.5">Gerät: <span className="font-semibold text-blue-700">{formData.brand} • {formData.generation}</span></p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {currentVariantList.map(variant => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => handleSelectVariant(variant)}
                    className={`p-3 rounded-xl border text-left text-sm font-semibold transition-all hover:-translate-y-1.5 hover:shadow-md duration-300 ${
                      formData.variant === variant
                        ? 'border-blue-700 bg-blue-50 text-blue-900 ring-2 ring-blue-700/20 shadow-sm'
                        : 'border-slate-200 hover:border-blue-600 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft size={14} /> Zurück zur Generation
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div key="step4" className="space-y-4 animate-slide-in-right">
              <div>
                <h3 className="text-xl font-bold text-slate-900">4. Was ist defekt?</h3>
                <p className="text-xs text-slate-500 mt-0.5">Gerät: <span className="font-semibold text-blue-700">{formData.brand} • {formData.generation} ({formData.variant})</span></p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {damages.map(damage => (
                  <button
                    key={damage}
                    type="button"
                    onClick={() => handleSelectDamage(damage)}
                    className={`p-3 rounded-xl border text-left text-sm font-semibold transition-all hover:-translate-y-1.5 hover:shadow-md duration-300 ${
                      formData.damage === damage
                        ? 'border-blue-700 bg-blue-50 text-blue-900 ring-2 ring-blue-700/20 shadow-sm'
                        : 'border-slate-200 hover:border-blue-600 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {damage}
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft size={14} /> Zurück zur Modellwahl
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div key="step5" className="space-y-4 animate-slide-in-right">
              <div>
                <h3 className="text-xl font-bold text-slate-900">5. Kontaktdaten für Ihr Angebot</h3>
                <p className="text-xs text-slate-500 mt-0.5">Kostenlose und unverbindliche Reparatur-Auskunft</p>
              </div>

              {/* Selection Summary */}
              <div className="bg-blue-50/70 p-2.5 rounded-xl border border-blue-100 flex flex-wrap items-center gap-2 text-xs text-blue-900">
                <span className="font-bold">Ihre Auswahl:</span>
                <span className="bg-white px-2 py-0.5 rounded-md border border-blue-200/80 font-medium">
                  {formData.brand || 'Marke'}
                </span>
                <span className="bg-white px-2 py-0.5 rounded-md border border-blue-200/80 font-medium">
                  {formData.generation || 'Generation'}
                </span>
                <span className="bg-white px-2 py-0.5 rounded-md border border-blue-200/80 font-medium">
                  {formData.variant || 'Variante'}
                </span>
                <span className="bg-white px-2 py-0.5 rounded-md border border-blue-200/80 font-medium">
                  {formData.damage || 'Schaden'}
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Bot-Schutz 1: Honeypot-Feld (wird nur von Skripten/Bots ausgefüllt, für Menschen unsichtbar)
                  if (honeypot && honeypot.trim() !== '') {
                    // Bot stumm abfangen (Schein-Erfolg anzeigen, aber keine Daten verarbeiten)
                    nextStep();
                    return;
                  }
                  // Bot-Schutz 2: Menschliche Mindestausfüllzeit (Menschen brauchen für 5 Schritte min. 1,5s)
                  if (Date.now() - formStartTime < 1200) {
                    return;
                  }
                  if (isContactValid) nextStep();
                }}
                className="space-y-3"
              >
                {/* Unsichtbares Honeypot-Feld für Bots (für echte Menschen komplett unsichtbar) */}
                <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label htmlFor="website_hp">Bitte dieses Feld freilassen</label>
                  <input
                    id="website_hp"
                    type="text"
                    name="website_url_check"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={e => setHoneypot(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="input-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Ihr Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name"
                    className="w-full border-slate-200 rounded-xl shadow-sm border p-2.5 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    value={formData.name}
                    onChange={e => updateForm('name', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="input-contact" className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefonnummer oder E-Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="input-contact"
                    type="text"
                    required
                    placeholder="z. B. 01577 3473292 oder mein@name.de"
                    className="w-full border-slate-200 rounded-xl shadow-sm border p-2.5 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    value={formData.contact}
                    onChange={e => updateForm('contact', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="input-notes" className="block text-xs font-semibold text-slate-700 mb-1">
                    Zusätzliche Notizen <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="input-notes"
                    type="text"
                    placeholder="z. B. Bildschirm flackert grün"
                    className="w-full border-slate-200 rounded-xl shadow-sm border p-2.5 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    value={formData.notes}
                    onChange={e => updateForm('notes', e.target.value)}
                  />
                </div>

                {/* Rechtlicher Missbrauchshinweis */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2 text-[11px] text-slate-600 leading-relaxed">
                  <ShieldAlert size={14} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Rechtlicher Hinweis:</strong> Missbräuchliche Anfragen, Telefon-/Mail-Spam oder betrügerische Automatisierungen werden protokolliert und zivil- sowie strafrechtlich verfolgt (§ 7 UWG / StGB).
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors hover:-translate-y-1.5 hover:shadow-md duration-300"
                  >
                    <ArrowLeft size={14} /> Zurück
                  </button>
                  <button
                    type="submit"
                    disabled={!isContactValid}
                    className="w-full sm:w-auto px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm transition-colors hover:-translate-y-1.5 hover:shadow-md duration-300"
                  >
                    Anfrage unverbindlich senden
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 6 && (
            <div key="step6" className="flex flex-col items-center justify-center text-center py-6 space-y-4 animate-zoom-in">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Vielen Dank für Ihre Anfrage!</h3>
              <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                Wir haben Ihre Reparatur-Anfrage für Ihr{' '}
                <strong className="text-slate-800">{formData.brand} {formData.generation} ({formData.variant})</strong> ({formData.damage}) erhalten. 
                {formData.notes && (
                  <span className="block mt-1 text-xs text-slate-500 italic">
                    Hinweis: &ldquo;{formData.notes}&rdquo;
                  </span>
                )}
                <span className="block mt-2">
                  Unser Team in Essen meldet sich in Kürze mit einem konkreten Angebot bei Ihnen.
                </span>
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-blue-700 text-sm font-semibold hover:underline"
                >
                  Neue Reparaturanfrage stellen
                </button>
                <span className="hidden sm:inline text-slate-300">•</span>
                <a
                  href="tel:020127107126"
                  className="text-xs text-slate-600 hover:text-blue-700 font-medium"
                >
                  Direkter Rückruf: <span className="font-semibold text-blue-700">0201 27107126</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

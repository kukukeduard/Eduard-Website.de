"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const reviews = [
  { 
    id: 1, 
    author: "Bilal Om", 
    text: "Ich war im RÜ Phone Store und bin wirklich positiv überrascht. Der Service war freundlich, kompetent und sehr ehrlich. Mein Anliegen wurde schnell gelöst und absolut professionell erledigt.", 
    rating: 5, 
    date: "vor 3 Monaten via Google" 
  },
  { 
    id: 2, 
    author: "Pernod", 
    text: "Gerne gebe auch ich hier meine 5 Sterne Rezension ab. Ich war wegen eines Wasserschadens am Ladeport dort. Mir wurde für günstiges Geld schnell und einwandfrei geholfen!", 
    rating: 5, 
    date: "Local Guide · 33 Rezensionen" 
  },
  { 
    id: 3, 
    author: "Caner K.", 
    text: "Bester Handy-Reparaturladen auf der Rü! Displaywechsel beim iPhone ging extrem flott und das Gerät funktioniert wieder einwandfrei. Sehr sympathischer und ehrlicher Inhaber.", 
    rating: 5, 
    date: "vor 2 Monaten via Google" 
  },
  { 
    id: 4, 
    author: "Dennis M.", 
    text: "Top Laden in Rüttenscheid! Sehr faire Beratung ohne versteckte Kosten. Der Akkutausch war innerhalb kürzester Zeit erledigt. Absolute Empfehlung für jeden in Essen!", 
    rating: 5, 
    date: "vor 1 Monat via Google" 
  },
  { 
    id: 5, 
    author: "Sarah K.", 
    text: "Super schneller Express-Service direkt vor Ort auf der Rüttenscheider Straße. Sehr kompetente Fehlerdiagnose und transparente Abwicklung!", 
    rating: 5, 
    date: "vor 4 Monaten via Google" 
  }
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
  };

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, next]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    if (e.touches && e.touches[0]) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (e.changedTouches && e.changedTouches[0]) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          next();
        } else {
          prev();
        }
      }
    }
  };

  const currentReview = reviews[currentIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Google Kundenbewertungen für Rü-Phone Store"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-full max-w-4xl mx-auto px-2 sm:px-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Review Card Container */}
      <div className="overflow-hidden relative min-h-[300px] sm:min-h-[250px] rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-stretch hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
        <div
          key={currentIndex}
          role="group"
          aria-roledescription="slide"
          aria-label={`Bewertung ${currentIndex + 1} von ${reviews.length}`}
          className="w-full px-10 py-5 sm:p-8 flex flex-col justify-between items-center text-center space-y-4 animate-fade-in"
        >
          {/* Star Rating & Verified Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex gap-1 text-yellow-400" aria-label="5 von 5 Sternen">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} fill="currentColor" size={17} />
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
              <CheckCircle2 size={12} />
              Verifizierte Google-Rezension
            </span>
          </div>

          {/* Review Quote Text */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 italic leading-relaxed max-w-2xl mx-auto my-auto">
            &ldquo;{currentReview.text}&rdquo;
          </p>

          {/* Author and Date */}
          <div className="flex flex-col items-center pt-2">
            <span className="font-bold text-slate-900 text-sm sm:text-base">
              {currentReview.author}
            </span>
            <span className="text-xs text-slate-500">
              {currentReview.date}
            </span>
          </div>
        </div>

        {/* Navigation Buttons inside to fix overlapping contexts */}
        <button
          type="button"
          onClick={prev}
          aria-label="Vorherige Rezension ansehen"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-700 hover:scale-105 active:scale-95 transition-all z-[60] pointer-events-auto"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Nächste Rezension ansehen"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-700 hover:scale-105 active:scale-95 transition-all z-[60] pointer-events-auto"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {reviews.map((rev, idx) => (
          <button
            key={rev.id}
            type="button"
            onClick={() => goToSlide(idx)}
            aria-label={`Zu Bewertung ${idx + 1} von ${reviews.length} springen`}
            className={`h-2 rounded-full transition-all duration-300 ease-out ${
              idx === currentIndex ? 'w-6 bg-blue-700' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

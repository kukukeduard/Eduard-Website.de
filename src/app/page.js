import Image from 'next/image';
import Link from 'next/link';
import ReviewCarousel from '../components/ReviewCarousel';
import GoogleMap from '../components/GoogleMap';
import { Wrench, ShieldCheck, Zap, Phone, MapPin, Star, ArrowRight, Clock, Banknote, PhoneCall, Smartphone } from 'lucide-react';

export const metadata = {
  title: 'Rü-Phone Store Essen | Professionelle Handy- & Tablet-Reparatur',
  description: 'Rü-Phone Store auf der Rüttenscheider Str. 102 in Essen. Express Smartphone-Reparatur, Displaytausch, Akkuwechsel sowie An- & Verkauf mit Top Google-Bewertungen.',
};

export default function Home() {
  // Referenced uploaded store opening image: /store-hero.jpg /hero-bg.jpg /store-opening.jpg media_1789236228139.jpg
  const heroImage = '/store-hero.jpg';

  return (
    <div className="flex flex-col gap-16">
      {/* Central Hero Section with Opening Image as Background */}
      <section className="relative min-h-[560px] sm:min-h-[620px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 flex items-center justify-center text-white hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ease-out">
        {/* Background Image */}
        <Image
          src={heroImage}
          alt="Rü-Phone Store Essen Ladenlokal Eröffnung"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-[center_38%] transform scale-105 transition-transform duration-1000"
        />

        {/* Brightened balanced overlay: store photo clearly visible while white text remains easily readable */}
        <div className="absolute inset-0 bg-black/40 sm:bg-gradient-to-r sm:from-slate-950/50 sm:via-slate-950/30 sm:to-slate-900/20 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center flex flex-col items-center space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
              <MapPin size={13} />
              Rüttenscheider Str. 102, 45130 Essen
            </span>
            <span className="inline-flex items-center gap-1.5 bg-yellow-500/90 text-slate-950 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
              <Star size={13} fill="currentColor" />
              5,0 Sterne auf Google (380+ Bewertungen)
            </span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
            Rü-Phone Store <span className="text-blue-400">Essen</span>
          </h1>

          <p className="text-lg sm:text-2xl font-semibold text-white drop-shadow-sm">
            Professioneller Reparaturdienst für Smartphones & Tablets
          </p>

          <p className="text-sm sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Express-Service direkt vor Ort auf der Rü – Displaytausch, Akkuwechsel, Wasserschadenbehebung sowie An- & Verkauf von Handys.
          </p>

          {/* Action Buttons: Dominant Primary Focus + Subtle Direct Call / Visit Option */}
          <div className="flex flex-col items-center gap-3 pt-2 w-full max-w-xl">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-9 py-4 rounded-2xl font-bold flex items-center justify-center gap-2.5 shadow-xl shadow-blue-600/40 text-base sm:text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out ring-4 ring-blue-500/20"
            >
              Reparatur anfragen
              <ArrowRight size={20} />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-sm text-slate-200 pt-1">
              <a
                href="tel:+4920127107126"
                aria-label="0201 27107126 – Direkt im Store anrufen"
                className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-sm px-4 py-2.5 min-h-[42px] rounded-xl transition-all duration-200 font-medium hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <Phone size={14} className="text-blue-400" />
                <span>0201 27107126</span>
              </a>
              <a
                href="#anfahrt"
                aria-label="Ohne Termin vorbeikommen – Zur Anfahrt scrollen"
                className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-sm px-4 py-2.5 min-h-[42px] rounded-xl transition-all duration-200 font-medium hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <MapPin size={14} className="text-blue-400" />
                <span>Ohne Termin vorbeikommen</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Google Reviews Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full text-xs font-bold border border-yellow-200">
            <Star size={14} fill="currentColor" />
            5,0 von 5 Sternen bei 380+ Google-Rezensionen
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Google Rezensionen</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Das sagen unsere Kundinnen und Kunden auf Google über den schnellen Service und die Reparaturen im Rü-Phone Store.
          </p>
        </div>
        <ReviewCarousel />
      </section>

      {/* R1: Klare, visuelle Einstiegs-Führung ("Was möchten Sie tun?") */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold border border-blue-200/80 tracking-wide uppercase">
            Schnelleinstieg • 4 Wege zum Service
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Was möchten Sie tun?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Wählen Sie einfach Ihr Anliegen – wir bieten Ihnen die passende Lösung schnell und unkompliziert.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Reparatur berechnen & anfragen */}
          <Link
            href="/kontakt"
            aria-label="Reparatur berechnen & anfragen – Online-Angebot erhalten"
            className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Wrench size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                  Express
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Reparatur berechnen &amp; anfragen
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Display, Akku, Ladebuchse oder Wasserschaden? Berechnen Sie Ihr unverbindliches Angebot in nur 1 Minute online.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-700 group-hover:text-blue-800">
              <span>Reparatur anfragen</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </Link>

          {/* 2. Vorbeikommen ohne Termin */}
          <a
            href="#anfahrt"
            aria-label="Vorbeikommen ohne Termin – Anfahrt und Wegbeschreibung zur Rüttenscheider Str. 102"
            className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <MapPin size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-100">
                  Ohne Termin
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                Vorbeikommen ohne Termin
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kommen Sie direkt in unseren Store auf der <strong className="text-slate-900 font-bold underline decoration-indigo-300 underline-offset-2">Rüttenscheider Str. 102</strong> in Essen. Reparaturen meist in 30–60 Minuten vor Ort.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-indigo-700 group-hover:text-indigo-800">
              <span>Anfahrt &amp; Maps ansehen</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </a>

          {/* 3. Smartphone verkaufen */}
          <Link
            href="/angebote"
            aria-label="Smartphone verkaufen – Faire Bewertung und Barauszahlung vor Ort"
            className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Banknote size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-100">
                  Sofort-Cash
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Smartphone verkaufen
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gebrauchtes oder neues Smartphone verkaufen: Faire Sofort-Bewertung und <strong className="text-slate-900 font-bold">Barauszahlung vor Ort</strong> in wenigen Minuten.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-emerald-700 group-hover:text-emerald-800">
              <span>Ankauf &amp; Angebote</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </Link>

          {/* 4. Sofort telefonisch beraten lassen */}
          <a
            href="tel:+4920127107126"
            aria-label="Sofort telefonisch beraten lassen – Anruf unter 0201 27107126 ohne Warteschleife"
            className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <PhoneCall size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200">
                  Keine Warteschleife
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                Sofort telefonisch beraten lassen
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Persönliche Fachberatung und direkte Preisauskunft: Sprechen Sie sofort mit unserem Techniker – <strong className="text-slate-900 font-bold">ohne Warteschleife</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-amber-800 group-hover:text-amber-900">
              <span>0201 27107126 anrufen</span>
              <Phone size={16} className="transform group-hover:scale-110 transition-transform duration-200" />
            </div>
          </a>
        </div>
      </section>

      {/* Trust & Service Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Zap size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Express vor Ort</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Displays und Akkus wechseln wir meist innerhalb von 30 bis 60 Minuten direkt in unserer Werkstatt auf der Rü.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Geprüfte Qualität</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Hochwertige Ersatzteile mit Funktionsgarantie. Ihre persönlichen Daten bleiben bei jeder Reparatur sicher erhalten.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Smartphone size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Alle Marken</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Spezialisiert auf Apple iPhone, iPad, Samsung Galaxy, Google Pixel, Xiaomi, Huawei und viele weitere Hersteller.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Star size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">5,0 Sterne Google</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Über 380 Kunden bewerten den Rü-Phone Store mit der Bestnote für Freundlichkeit, Schnelligkeit und faire Preise.
          </p>
        </div>
      </section>


      {/* Location & Maps Section */}
      <section id="anfahrt" tabIndex={-1} className="scroll-mt-24 focus:outline-none bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200/80 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Besuchen Sie uns vor Ort</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Sie finden den Rü-Phone Store direkt auf der Rüttenscheider Straße 102 in Essen. Kommen Sie ohne Termin vorbei – wir kümmern uns sofort um Ihr Anliegen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=Rüttenscheider+Str.+102,+45130+Essen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out"
              >
                <MapPin size={18} />
                Google Maps
              </a>
              <a
                href="https://maps.apple.com/?q=Rüttenscheider+Str.+102,+45130+Essen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl shadow flex items-center gap-2 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out"
              >
                <MapPin size={18} />
                Apple Karten
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <GoogleMap
              heightClass="h-64 sm:h-80"
              mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.2086389279586!2d6.999587476839352!3d51.41753171457813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2d1b82ba23b%3A0xc3f878a87b6495ce!2sR%C3%BCttenscheider%20Str.%20102%2C%2045130%20Essen!5e0!3m2!1sen!2sde!4v1707567000000!5m2!1sen!2sde"
              title="Rü-Phone Store Essen Standort Google Maps Startseite"
            />
          </div>
        </div>
      </section>

      {/* Opening Hours & Quick Visit Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-3xl p-6 sm:p-10 shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">Kommen Sie direkt vorbei</h3>
            <p className="text-blue-100 max-w-xl leading-relaxed">
              Ohne Termin: Besuchen Sie unseren Store auf der Rüttenscheider Str. 102 in 45130 Essen für eine kostenlose Diagnose oder telefonische Auskunft.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-blue-200 pt-2">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} /> Mo – Do: 10–19 Uhr | Fr: 10–13 & 14–19 Uhr | Sa: 10–17 Uhr
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/kontakt"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl text-center shadow hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out"
            >
              Anfahrt & Kontakt
            </Link>
            <a
              href="tel:+4920127107126"
              className="bg-blue-800 hover:bg-blue-700 text-white border border-blue-600 font-bold px-6 py-3.5 rounded-xl text-center flex items-center justify-center gap-2 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out"
            >
              <Phone size={16} />
              0201 27107126
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

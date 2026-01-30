'use client';

import { useState } from 'react';

import { useTranslation } from '@/contexts/TranslationContext';
import { Award, Globe, Users, BookOpen, MapPin, Feather } from 'lucide-react';

export default function HistoryPage() {
  const { t } = useTranslation();
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const milestones = [
    {
      year: '2001',
      titleKey: 'history.milestones.gujarat',
      descKey: 'history.milestones.gujaratDesc',
      icon: '',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200'
    },
    {
      year: '2005',
      titleKey: 'history.milestones.tsunami',
      descKey: 'history.milestones.tsunamiDesc',
      icon: '',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      year: '2007',
      titleKey: 'history.milestones.paris',
      descKey: 'history.milestones.parisDesc',
      icon: '',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200'
    },
    {
      year: '2011',
      titleKey: 'history.milestones.gandhi',
      descKey: 'history.milestones.gandhiDesc',
      icon: '',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200'
    }
  ];

  const publications = [
    { titleKey: 'history.publications.adhigalai', authorKey: 'history.publications.author1', color: 'bg-rose-100' },
    { titleKey: 'history.publications.idhayam', authorKey: 'history.publications.author2', color: 'bg-amber-100' },
    { titleKey: 'history.publications.karaiaerum', authorKey: 'history.publications.author3', color: 'bg-blue-100' },
    { titleKey: 'history.publications.unarvugal', authorKey: 'history.publications.author4', color: 'bg-emerald-100' },
    { titleKey: 'history.publications.seppadu', authorKey: 'history.publications.author5', color: 'bg-purple-100' },
    { titleKey: 'history.publications.kamarajar', authorKey: 'history.publications.author6', color: 'bg-orange-100' }
  ];

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-gray-800">

      {/* --- HERO SECTION: Standard Header --- */}
      <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 pb-12 overflow-hidden" style={{ minHeight: '320px' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/Images/page-title_back.jpg"
            alt="Page background"
            className="w-[85%] h-full opacity-40 object-contain mx-auto"
            style={{ objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-red-50 rounded-full border border-red-100 mb-6 shadow-sm animate-fade-in">
            <Feather className="w-5 h-5 text-red-700" />
            <span className="ml-2 text-xs font-semibold tracking-wider uppercase text-red-800">Our Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-neutral-900 animate-slide-up">
            {t('history.hero.title')}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('history.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* --- INTRODUCTION: The Story Begins --- */}
      <section className="py-16 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-red-700 font-bold tracking-widest text-sm uppercase mb-2 block">Our Origins</span>
            <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed">
              &ldquo;{t('history.intro.desc')}&rdquo;
            </p>
            <div className="w-24 h-1 bg-red-700 mx-auto mt-8 rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* --- TIMELINE: The Journey (Center Line Layout) --- */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">

          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
              {t('history.timeline.title')}
            </h2>
            <p className="text-gray-500 italic">{t('history.timeline.subtitle', 'Moments that shaped our path')}</p>
          </div>

          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-32 bottom-20 w-0.5 bg-gray-200 md:-translate-x-1/2"></div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 bg-white transition-all duration-500 relative group ${clickedIndex === index ? 'scale-105 shadow-[0_8px_30px_-4px_rgba(167,27,38,0.3)] border-red-200' : 'hover:-translate-y-1'
                    }`}>
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-linear-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>

                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                      {t(milestone.titleKey)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t(milestone.descKey)}
                    </p>
                  </div>
                </div>

                {/* Center Marker / Stamp - Smaller with animation */}
                <button
                  onClick={() => setClickedIndex(clickedIndex === index ? null : index)}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-red-700 shadow-lg z-10 cursor-pointer group/circle transition-all duration-300 hover:scale-125 active:scale-90"
                  aria-label={`View ${milestone.year} milestone`}
                >
                  <div className={`w-3 h-3 rounded-full bg-red-700 transition-all duration-300 ${clickedIndex === index ? 'animate-ping' : 'group-hover/circle:scale-125'
                    }`}></div>
                  {clickedIndex !== index && (
                    <div className="absolute w-3 h-3 rounded-full bg-red-700 animate-pulse"></div>
                  )}
                </button>

                {/* Year Display (Opposite Side) */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                  <span className={`text-5xl font-serif font-black text-red-700 select-none`}>
                    {milestone.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED STORIES: Scrapbook Cards --- */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

            {/* Gujarat Card */}
            <div className="group relative bg-[#fffbf0] p-8 rounded-tr-3xl rounded-bl-3xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4 mt-2">
                {t('history.gujarat.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('history.gujarat.desc')}
              </p>
            </div>

            {/* Tsunami Card */}
            <div className="group relative bg-[#f0f7ff] p-8 rounded-tl-3xl rounded-br-3xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4 mt-2 text-right">
                {t('history.tsunami.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-right">
                {t('history.tsunami.desc')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- LIBRARY: Publications --- */}
      <section className="py-20 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <BookOpen className="w-10 h-10 text-red-700 mb-4 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 text-center">
                {t('history.publications.title')}
              </h2>
            </div>

            {/* Grid of "Book Covers" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((pub, index) => (
                <div key={index} className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 w-2 h-full rounded-l-lg ${pub.color}`}></div>
                  <div className="pl-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 font-serif group-hover:text-red-700 transition-colors">
                      {t(pub.titleKey)}
                    </h3>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="h-px w-8 bg-gray-300"></div>
                      <p className="text-sm text-gray-500 italic">{t(pub.authorKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Kamarajar Special Highlight - Styled like an old letter */}
            <div className="mt-12 bg-[#fff8e1] rounded-xl p-8 border border-amber-200 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/50 rounded-bl-[100px] -mr-12 -mt-12"></div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-md border border-amber-100">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{t('history.publications.kamarajarHighlight')}</h3>
                  <p className="text-gray-700 leading-relaxed font-serif italic">
                    &ldquo;{t('history.publications.kamarajarDesc')}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERNATIONAL: Passport Stamps --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-indigo-50 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-indigo-700" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-800">
                {t('history.international.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Paris 07 */}
              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors">
                <span className="text-4xl font-black text-gray-200 mb-4 block">2007</span>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{t('history.international.paris2007')}</h3>
                <p className="text-sm text-gray-600">{t('history.international.paris2007Desc')}</p>
              </div>

              {/* Paris 11 */}
              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors">
                <span className="text-4xl font-black text-gray-200 mb-4 block">2011</span>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{t('history.international.paris2011')}</h3>
                <p className="text-sm text-gray-600">{t('history.international.paris2011Desc')}</p>
              </div>

              {/* Sri Lanka */}
              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors">
                <span className="text-4xl font-black text-gray-200 mb-4 block">SL</span>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{t('history.international.srilanka')}</h3>
                <p className="text-sm text-gray-600">{t('history.international.srilankaDesc')}</p>
              </div>
            </div>

            {/* Global Network Note */}
            <div className="mt-12 text-center p-8 bg-linear-to-r from-indigo-900 to-blue-900 rounded-2xl text-white shadow-xl">
              <Users className="w-8 h-8 mx-auto mb-4 text-indigo-300" />
              <h3 className="text-xl font-bold mb-2">{t('history.global.title')}</h3>
              <p className="text-indigo-100 max-w-2xl mx-auto">{t('history.global.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA: Join the Legacy --- */}
      <section className="py-20 bg-[#a71b26] relative overflow-hidden">
        {/* Abstract decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {t('history.cta.title')}
          </h2>
          <p className="text-lg text-red-100 mb-10 max-w-2xl mx-auto">
            {t('history.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about/ipl-profile" className="px-8 py-3 bg-white text-red-800 rounded-full font-bold shadow-lg hover:bg-amber-50 hover:scale-105 transition-all">
              {t('history.cta.profile')}
            </a>
            <a href="/friendship-meet" className="px-8 py-3 bg-red-900/50 text-white border border-red-400 rounded-full font-bold hover:bg-red-900 hover:border-white transition-all">
              {t('history.cta.events')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
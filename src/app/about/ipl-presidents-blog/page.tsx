'use client';

import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';
import { FileText, Calendar, Award, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function PresidentBlogPage() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.posts.silverJubilee.title',
      descKey: 'blog.posts.silverJubilee.desc',
      date: '2020',
      imageUrl: 'https://images.unsplash.com/photo-1464660756002-dd1ee6debbe4?w=800&q=80',
      featured: true
    },
    {
      id: 2,
      titleKey: 'blog.posts.friendship27.title',
      descKey: 'blog.posts.friendship27.desc',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      featured: true
    },
    {
      id: 3,
      titleKey: 'blog.posts.pongal2024.title',
      descKey: 'blog.posts.pongal2024.desc',
      date: 'January 2024',
      imageUrl: 'https://images.unsplash.com/photo-1610732821891-3ab90e94eb00?w=800&q=80',
      featured: false
    },
    {
      id: 4,
      titleKey: 'blog.posts.souvenir2023.title',
      descKey: 'blog.posts.souvenir2023.desc',
      date: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
      featured: false
    },
    {
      id: 5,
      titleKey: 'blog.posts.isroVisit.title',
      descKey: 'blog.posts.isroVisit.desc',
      date: 'November 2022',
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
      featured: false
    },
    {
      id: 6,
      titleKey: 'blog.posts.agm19.title',
      descKey: 'blog.posts.agm19.desc',
      date: 'May 2022',
      imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      featured: false
    },
    {
      id: 7,
      titleKey: 'blog.posts.secretaryWedding.title',
      descKey: 'blog.posts.secretaryWedding.desc',
      date: 'January 2022',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      featured: false
    },
    {
      id: 8,
      titleKey: 'blog.posts.calendar2022.title',
      descKey: 'blog.posts.calendar2022.desc',
      date: '2022',
      imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80',
      featured: false
    },
    {
      id: 9,
      titleKey: 'blog.posts.cmLetter.title',
      descKey: 'blog.posts.cmLetter.desc',
      date: 'November 2021',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      featured: false
    },
    {
      id: 10,
      titleKey: 'blog.posts.hajTravel.title',
      descKey: 'blog.posts.hajTravel.desc',
      date: 'November 2021',
      imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
      featured: false
    },
    {
      id: 11,
      titleKey: 'blog.posts.diaspora.title',
      descKey: 'blog.posts.diaspora.desc',
      date: 'October 2021',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      featured: false
    },
    {
      id: 12,
      titleKey: 'blog.posts.lifetimeAward.title',
      descKey: 'blog.posts.lifetimeAward.desc',
      date: '2021',
      imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
      featured: true
    },
    {
      id: 13,
      titleKey: 'blog.posts.chancellor.title',
      descKey: 'blog.posts.chancellor.desc',
      date: '2018',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      featured: false
    },
    {
      id: 14,
      titleKey: 'blog.posts.airport.title',
      descKey: 'blog.posts.airport.desc',
      date: 'February 2021',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      featured: false
    },
    {
      id: 15,
      titleKey: 'blog.posts.pongal2020.title',
      descKey: 'blog.posts.pongal2020.desc',
      date: 'January 2020',
      imageUrl: 'https://images.unsplash.com/photo-1610732821891-3ab90e94eb00?w=800&q=80',
      featured: false
    },
    {
      id: 16,
      titleKey: 'blog.posts.covidRelief.title',
      descKey: 'blog.posts.covidRelief.desc',
      date: '2020',
      imageUrl: 'https://images.unsplash.com/photo-1584744982493-c48f5f1ad8f8?w=800&q=80',
      featured: false
    },
    {
      id: 17,
      titleKey: 'blog.posts.chessAcademy.title',
      descKey: 'blog.posts.chessAcademy.desc',
      date: '2020',
      imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
      featured: false
    },
    {
      id: 18,
      titleKey: 'blog.posts.souvenir2019.title',
      descKey: 'blog.posts.souvenir2019.desc',
      date: '2019',
      imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
      featured: false
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 pb-8 overflow-hidden" style={{ minHeight: '320px' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/Images/page-title_back.jpg"
            alt="President Blog background"
            className="w-[85%] h-full opacity-40 object-contain mx-auto"
            style={{ objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 sm:p-4 bg-purple-50 rounded-full mb-4 sm:mb-6">
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-purple-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              {t('blog.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl px-4">
              {t('blog.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t('blog.intro.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 bg-linear-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-10 h-10 text-purple-700" />
            <h2 className="text-4xl font-bold text-neutral-900">
              {t('blog.featured.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={t(post.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-purple-700 text-white rounded-lg font-semibold">
                    {post.date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-purple-700 transition-colors">
                    {t(post.titleKey)}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {t(post.descKey)}
                  </p>
                  <div className="flex items-center gap-2 text-purple-700 font-semibold group-hover:gap-4 transition-all">
                    <span>{t('blog.readMore')}</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="w-10 h-10 text-red-700" />
            <h2 className="text-4xl font-bold text-neutral-900">
              {t('blog.allPosts.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={t(post.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-700 text-white rounded-lg text-sm font-semibold">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-red-700 transition-colors line-clamp-2">
                    {t(post.titleKey)}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {t(post.descKey)}
                  </p>
                  <div className="flex items-center gap-2 text-red-700 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>{t('blog.readMore')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg font-semibold hover:bg-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('blog.pagination.previous')}
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-12 h-12 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-red-700 text-white shadow-lg scale-110'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg font-semibold hover:bg-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('blog.pagination.next')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Notable Highlights */}
      <section className="py-20 px-4 bg-linear-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
            {t('blog.highlights.title')}
          </h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-linear-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {t('blog.highlights.award.title')}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                திரு. மா. கருண் அவர்களுக்கு &quot;வாழ்நாள் சாதனையாளர் விருது&quot; வழங்கப்பட்டது. இந்தியப் பேனாநண்பர் பேரவையின் தலைவரான மா. கருண் அவர்கள் சமூக நலத்தில் ஆற்றிய பங்களிப்புக்காக இவ்விருது வழங்கப்பட்டது.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {t('blog.highlights.isro.title')}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                பேரவைத் தலைவர் மா.கருண் - இந்திய விண்வெளி ஆராய்ச்சி மையத்தின் மேனாள் தலைவர் சந்திப்பு. இந்திய விண்வெளி ஆராய்ச்சி அமைப்பின் (ISRO) தலைவரை சந்தித்து வாழ்த்துக்களை பகிர்ந்து கொண்டார்.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-linear-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {t('blog.highlights.calendar.title')}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                இந்தியப் பேனாநண்பர் பேரவை தலைமை அலுவலகத்தில் பேரவை நாட்காட்டி - 2022 வெளியீடு. பேரவையின் முக்கிய நிகழ்வுகள் மற்றும் சமூக நல செயல்பாடுகள் இடம்பெற்ற நாட்காட்டி வெளியிடப்பட்டது.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-linear-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {t('blog.highlights.jubilee.title')}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                IPL&apos; SILVER JUBILEE YEAR: 1995 - 2020. இந்தியப் பேனாநண்பர் பேரவையின் 25வது ஆண்டு வெள்ளி விழா கொண்டாட்டங்கள் பிரமாண்டமாக நடைபெற்றன. 25 ஆண்டுகால பயணத்தின் சாதனைகள் கொண்டாடப்பட்டன.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-indigo-700 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('blog.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('blog.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/news-events"
              className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('blog.cta.news')}
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('blog.cta.contact')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

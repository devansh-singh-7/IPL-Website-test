'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { Heart, Globe, Award, Users, BookOpen, Calendar, MapPin, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function IPLProfilePage() {
  const { t } = useTranslation();

  const achievements = [
    {
      title: 'Eye Camps',
      titleTa: 'கண் முகாம்கள்',
      count: '31+',
      icon: '👁️',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Friendship Meets',
      titleTa: 'நட்புச் சங்கமங்கள்',
      count: '28+',
      icon: '🤝',
      color: 'from-red-500 to-rose-600',
    },
    {
      title: 'States Reached',
      titleTa: 'மாநிலங்கள்',
      count: '15+',
      icon: '🗺️',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Years of Service',
      titleTa: 'சேவை ஆண்டுகள்',
      count: '30+',
      icon: '🎉',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const registrations = [
    {
      title: 'Bombay Societies Act, 1950',
      detail: 'Registered as a Social Welfare Trust',
      icon: CheckCircle,
    },
    {
      title: 'Bombay Public Trust Act',
      detail: 'Registration #F23778',
      icon: CheckCircle,
    },
    {
      title: 'Section 80G Certificate',
      detail: 'Tax benefit for donors',
      icon: Award,
    },
    {
      title: 'Social Welfare Trust',
      detail: 'Serving communities since 1995',
      icon: Heart,
    },
  ];

  const friendshipMeets = [
    { year: '1995', location: 'Mumbai (Inauguration)', locationTa: 'மும்பை (துவக்க விழா)' },
    { year: '1996', location: 'Thanjavur', locationTa: 'தஞ்சாவூர்' },
    { year: '1997', location: 'Kolar Gold Fields', locationTa: 'கோலார் தங்க வயல்' },
    { year: '1998', location: 'Chennai', locationTa: 'சென்னை' },
    { year: '1999', location: 'Karur', locationTa: 'கரூர்' },
    { year: '2000', location: 'Senkam', locationTa: 'செங்கம்' },
    { year: '2010', location: 'Coimbatore', locationTa: 'கோவை' },
    { year: '2019', location: 'Namakkal', locationTa: 'நாமக்கல்' },
    { year: '2023', location: 'New Delhi', locationTa: 'புதுதில்லி' },
    { year: '2024', location: 'Kuttalam', locationTa: 'குட்டாலம்' },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/page-title_back.jpg"
            alt="IPL Profile background"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-neutral-50/60 to-neutral-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-red-100 shadow-sm mb-8">
              <Heart className="w-4 h-4 text-red-700" />
              <span className="text-xs font-semibold tracking-wider uppercase text-red-800">
                About IPL
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {t('profile.hero.title', 'IPL Profile')}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              {t('profile.hero.subtitle', 'Spreading Love, Friendship & Humanity Since 1995')}
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-300" />
              <span className="text-red-700 font-semibold">Est. March 12, 1995</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
                    {item.count}
                  </div>
                  <div className="text-sm text-neutral-500 font-medium">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inception Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                <Star className="w-8 h-8 text-red-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {t('profile.inception.title', 'Inception of the League')}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-100">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {t('profile.inception.desc', 'Hearts enriched with love, friendship, and humanitarian thoughts, eliminating caste, religious, and political differences - this is the Indian Penpals League, a beautiful friendship world.')}
              </p>
              <div className="p-6 bg-red-50 rounded-2xl border-l-4 border-red-600">
                <p className="text-neutral-700 italic leading-relaxed">
                  அன்பு, நட்பு, மனிதநேய சிந்தனைகளால் செழுமையடைந்த இதயங்கள், சாதி, மத மற்றும் அரசியல் வேறுபாடுகளை நீக்கி - இது இந்தியப் பேனாநண்பர் பேரவை, ஒரு அழகான நட்புலகம்.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-50 rounded-xl mb-6">
                  <Globe className="w-7 h-7 text-amber-700" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  {t('profile.growth.title', 'பேரவையின் வளர்ச்சி')}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  With the noble vision that &quot;good friends create a good nation,&quot; the league has grown tremendously across India and abroad.
                </p>
                <p className="text-neutral-700 leading-relaxed italic">
                  நல்ல நண்பர்கள் உருவானால் நல்ல நாடு தானாகவே உருவாகும் என்ற உயரிய நோக்கத்தின் அசுரவளர்ச்சியாய் தமிழகத்தின் அனைத்து மாவட்டங்களிலும் விரிந்துள்ளது.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Presence In</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Tamil Nadu', 'Kerala', 'Karnataka', 'Goa', 'New Delhi', 'Assam', 'France', 'Australia', 'UAE'].map((place, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span className="text-neutral-700 text-sm font-medium">{place}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('about.registration_title', 'Registration & Recognition')}
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto">
                Officially registered and recognized for our humanitarian work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {registrations.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-neutral-400 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Humanitarian Services Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6">
                <Award className="w-8 h-8 text-red-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {t('profile.humanitarian.title', 'பேரவையின் சமூகநல செயல்பாடுகள்')}
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Humanitarian Services that touch lives across communities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-neutral-100">
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
                <p>
                  எழுத்தால் இணைந்த இதயங்கள் அன்பு, நட்பு, மனிதநேயச் சிந்தனைகளைக் கடிதங்கள் மூலம் பகிர்ந்து கொண்ட நிலையில் பேரவை சமூக நல அறக்கட்டளையாகப் பதிவு செய்யப்பட்டு மனிதநேய உதவிகள் வழங்கப்படுகிறது.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  {[
                    'Eye Examination Camps (31+)',
                    'ENT Medical Camps',
                    'Cancer Awareness Camps',
                    'AIDS Awareness Programs',
                    'Education Fee Assistance',
                    'Medical Aid Support',
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                      <span className="text-neutral-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
                  <p className="text-neutral-700 m-0">
                    <strong className="text-amber-800">Partnership with Aditya Jyot Eye Hospital:</strong> In collaboration with the world-renowned hospital under the guidance of Padma Shri Dr. S. Natarajan, 31 eye examination camps have been conducted in Mumbai slum areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friendship Meets Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                <Calendar className="w-8 h-8 text-red-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {t('profile.friendshipMeet.title', 'நட்புச் சங்கம விழாக்கள்')}
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                28+ successful Friendship Meets across India since 1995.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {friendshipMeets.map((meet, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 text-center shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-2xl font-bold text-red-700 block mb-1">{meet.year}</span>
                    <span className="text-xs text-neutral-500">{meet.location}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/friendship-meet"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  <Users className="w-5 h-5" />
                  View All Friendship Meets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Guests Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-2xl mb-6">
                <Star className="w-8 h-8 text-purple-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {t('profile.notableGuests.title', 'Notable Guests')}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-100">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                சரித்திர சாதனையாக நடைபெற்று வரும் நட்புச்சங்கம விழாக்களில் பல்வேறு துறைச் சான்றோர் பெருமக்கள் சிறப்பு விருந்தினராகப் பங்கேற்றுள்ளனர்.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'R. R. Gopal', title: 'Nakkheeran - Journalism Pioneer' },
                  { name: 'V. G. Santhosham', title: 'Chevalier' },
                  { name: 'T. M. Soundararajan', title: 'Legendary Playback Singer' },
                  { name: 'S. V. Sekar', title: 'Actor & Comedian' },
                  { name: 'A. L. Srinivasan', title: 'Radio Drama Legend' },
                  { name: 'S. V. Subramanian', title: 'Distinguished Guest' },
                ].map((guest, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{guest.name}</p>
                      <p className="text-sm text-neutral-500">{guest.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-red-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('profile.cta.title', 'Join Our Mission')}
            </h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed">
              {t('profile.cta.desc', 'Be part of our journey to spread love, friendship and humanity')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold shadow-xl hover:bg-amber-50 hover:scale-105 transition-all duration-300"
              >
                {t('profile.cta.contact', 'Contact Us')}
              </a>
              <a
                href="/humanitarian-services"
                className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                {t('profile.cta.services', 'Our Services')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

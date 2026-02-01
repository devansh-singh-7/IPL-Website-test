'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { Award, Globe, Users, BookOpen, MapPin, Heart, Calendar, Star } from 'lucide-react';
import Image from 'next/image';

export default function HistoryPage() {
  const { t } = useTranslation();

  const milestones = [
    {
      year: '1995',
      title: 'Foundation',
      titleTa: 'தொடக்கம்',
      description: 'IPL was founded in Mumbai on March 12, 1995, by like-minded pen pals united by love, friendship, and humanity.',
      descriptionTa: 'அன்பு, நட்பு மற்றும் மனிதநேயத்தால் ஒன்றிணைந்த பேனா நண்பர்களால் 1995 மார்ச் 12 அன்று மும்பையில் IPL நிறுவப்பட்டது.',
      icon: Heart,
      color: 'from-red-500 to-rose-600',
    },
    {
      year: '2001',
      title: 'Gujarat Earthquake Relief',
      titleTa: 'குஜராத் நிலநடுக்க நிவாரணம்',
      description: 'Established relief center (Jan 27 - Feb 2, 2001) and collected funds for earthquake victims, handed over to the Mumbai District Collector.',
      descriptionTa: 'நிவாரண மையம் நிறுவப்பட்டது (ஜனவரி 27 - பிப்ரவரி 2, 2001) மற்றும் நிலநடுக்க பாதிக்கப்பட்டவர்களுக்கான நிதி சேகரிக்கப்பட்டு மும்பை மாவட்ட ஆட்சியரிடம் ஒப்படைக்கப்பட்டது.',
      icon: Award,
      color: 'from-orange-500 to-amber-600',
    },
    {
      year: '2005',
      title: 'Tsunami Relief Operations',
      titleTa: 'சுனாமி நிவாரண நடவடிக்கைகள்',
      description: 'Traveled along the coast from Colachel to Manakudy in Kanyakumari district, directly providing rice, lentils, food grains, and clothing to 200+ affected families.',
      descriptionTa: 'கன்னியாகுமரி மாவட்டத்தில் கோலச்சல் முதல் மனக்குடி வரை கடற்கரை ஓரமாக பயணித்து, 200+ பாதிக்கப்பட்ட குடும்பங்களுக்கு நேரடியாக அரிசி, பருப்பு, உணவு தானியங்கள் மற்றும் ஆடைகள் வழங்கப்பட்டன.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      year: '2007',
      title: 'Paris - Bharathiyar Anniversary',
      titleTa: 'பாரிஸ் - பாரதியார் ஆண்டு விழா',
      description: 'Special guest at the 125th anniversary of Mahakavi Bharathiyar organized by France Tamil Sangam in Paris, the only Mumbai Tamil organization invited.',
      descriptionTa: 'பாரிஸில் பிரான்ஸ் தமிழ் சங்கம் நடத்திய மகாகவி பாரதியாரின் 125வது ஆண்டு விழாவில் சிறப்பு விருந்தினர், அழைக்கப்பட்ட ஒரே மும்பை தமிழ் அமைப்பு.',
      icon: Star,
      color: 'from-indigo-500 to-purple-600',
    },
    {
      year: '2011',
      title: 'Gandhi Statue Inauguration',
      titleTa: 'காந்தி சிலை திறப்பு விழா',
      description: 'Special guest at the Mahatma Gandhi Statue Inauguration organized by Aubervilliers Tamil Cultural Forum in Paris. Presented memento to the Mayor.',
      descriptionTa: 'பாரிஸில் ஓபர்வில்லியர்ஸ் தமிழ் கலாச்சார மன்றம் நடத்திய மகாத்மா காந்தி சிலை திறப்பு விழாவில் சிறப்பு விருந்தினர். மேயருக்கு நினைவுப் பரிசு வழங்கப்பட்டது.',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      year: '2019',
      title: 'Silver Jubilee Celebration',
      titleTa: 'வெள்ளி விழா கொண்டாட்டம்',
      description: 'Celebrated 25 years of service with the grand 25th Friendship Meet in Tirunelveli, marking a historic milestone in our journey.',
      descriptionTa: '25 ஆண்டுகால சேவையை திருநெல்வேலியில் பிரமாண்டமான 25வது நட்புச் சங்கமத்துடன் கொண்டாடினோம், இது நமது பயணத்தில் ஒரு வரலாற்று மைல்கல்.',
      icon: Calendar,
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const publications = [
    { title: '"அதிகாலை" - Morning', author: 'Theni Poet Vetrivel', color: 'bg-rose-500' },
    { title: '"இதயத்துடிப்பு" - Heartbeat', author: 'Mumbai Poet Senthoor Nagarajan', color: 'bg-amber-500' },
    { title: '"கரையேறும் அலைகள்" - Shore-bound Waves', author: 'Mumbai Poet Irajakai Nilavan', color: 'bg-blue-500' },
    { title: '"உணர்வுகள்" - Feelings', author: 'Mumbai Poet M. S. Rajan Martin', color: 'bg-emerald-500' },
    { title: '"செப்பேடு" - Copper Plate', author: 'Hosur Poet Karumalai Tamilazhan', color: 'bg-purple-500' },
    { title: '"காமராஜர் காவியம்"', author: 'Mumbai Poet Senthoor Nagarajan', color: 'bg-orange-500', pages: '1050 pages' },
  ];

  const internationalEvents = [
    {
      year: '2007',
      location: 'Paris, France',
      title: 'Bharathiyar 125th Anniversary',
      description: 'Only Mumbai Tamil organization invited as special guest to France Tamil Sangam event.',
    },
    {
      year: '2011',
      location: 'Paris, France',
      title: 'Gandhi Statue Inauguration',
      description: 'Special guest at Aubervilliers Tamil Cultural Forum, presented memento to Mayor.',
    },
    {
      year: '2012',
      location: 'Sri Lanka',
      title: 'Tamil Magazines Conference',
      description: 'Invited as special guest at 6th conference of Tamil Little Magazines Association.',
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/page-title_back.jpg"
            alt="History background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-neutral-50/60 to-neutral-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-red-100 shadow-sm mb-8">
              <BookOpen className="w-4 h-4 text-red-700" />
              <span className="text-xs font-semibold tracking-wider uppercase text-red-800">
                {t('history.intro.title', 'Our Heritage')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {t('history.hero.title', 'History')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
              {t('history.hero.subtitle', 'A Journey of Love, Friendship & Humanitarian Service')}
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-300" />
              <Heart className="w-5 h-5 text-red-600" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Quote */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <blockquote className="relative">
              <div className="absolute -top-4 -left-4 text-8xl text-red-100 font-serif leading-none">"</div>
              <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed text-center relative z-10 font-light italic px-8">
                {t('history.intro.desc', 'A legacy of humanitarian service and cultural preservation spanning nearly three decades')}
              </p>
              <div className="absolute -bottom-8 -right-4 text-8xl text-red-100 font-serif leading-none rotate-180">"</div>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: '30+', label: 'Years of Service' },
                { value: '28+', label: 'Friendship Meets' },
                { value: '15+', label: 'States Reached' },
                { value: '5000+', label: 'Members' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                  <div className="text-3xl sm:text-4xl font-bold text-red-700 mb-2">{stat.value}</div>
                  <div className="text-sm text-neutral-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {t('history.timeline.title', 'Major Milestones')}
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto">
                Key moments that shaped our journey of love, friendship, and humanitarian service.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-red-400 to-red-200 md:-translate-x-px" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`relative flex items-start gap-8 ${isEven ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-red-600 rounded-full -translate-x-1/2 z-10 shadow-sm" />

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                          {/* Year Badge */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl sm:text-3xl font-bold text-neutral-900">
                              {milestone.year}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            {milestone.title}
                          </h3>

                          {/* Description */}
                          <p className="text-neutral-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block w-[calc(50%-2rem)]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                <BookOpen className="w-8 h-8 text-red-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {t('history.publications.title', 'Literary Contributions')}
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto">
                Books and publications supported by IPL to promote Tamil literature.
              </p>
            </div>

            {/* Publications Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="group bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Color Bar */}
                  <div className={`w-12 h-1.5 ${pub.color} rounded-full mb-4`} />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-red-700 transition-colors">
                    {pub.title}
                  </h3>

                  {/* Pages badge if available */}
                  {pub.pages && (
                    <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded mb-3">
                      {pub.pages}
                    </span>
                  )}

                  {/* Author */}
                  <p className="text-sm text-neutral-500 italic">
                    — {pub.author}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Highlight: Kamarajar Kaviyam */}
            <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 sm:p-10 border border-amber-200">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border border-amber-100 flex-shrink-0">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-200 text-amber-900 text-xs font-bold rounded-full mb-3">
                    Epic Poetry - 1050 Pages
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    Kamarajar Kaviyam
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Fully supported Mumbai poet Senthoor Nagarajan in creating this monumental epic poetry book,
                    organizing a grand release function, conducting research seminars, and introducing it to
                    the Tamil literary world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Recognition Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('history.international.title', 'International Recognition')}
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto">
                IPL's global footprint and international engagements.
              </p>
            </div>

            {/* International Events */}
            <div className="grid md:grid-cols-3 gap-6">
              {internationalEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {/* Year */}
                  <span className="text-4xl font-black text-white/20 block mb-4">
                    {event.year}
                  </span>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-3">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Global Network Banner */}
            <div className="mt-16 text-center p-8 sm:p-12 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl">
              <Users className="w-12 h-12 mx-auto mb-6 text-white/80" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {t('history.global.title', 'Global Tamil Network')}
              </h3>
              <p className="text-red-100 max-w-2xl mx-auto leading-relaxed">
                {t('history.global.desc', 'A Mumbai Tamil organization that maintains friendship with numerous internationally operating Tamil organizations, unites Tamils globally, participates in Tamil cultural events, and is fully committed to nurturing the mother tongue.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-red-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('history.cta.title', 'Learn More About IPL')}
            </h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed">
              {t('history.cta.desc', 'Discover our journey and join our mission')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about/ipl-profile"
                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold shadow-xl hover:bg-amber-50 hover:scale-105 transition-all duration-300"
              >
                {t('history.cta.profile', 'View Profile')}
              </a>
              <a
                href="/news-events"
                className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                {t('history.cta.events', 'See Events')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
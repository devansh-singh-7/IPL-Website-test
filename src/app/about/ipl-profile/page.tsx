'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { Heart, Users, Globe, Award } from 'lucide-react';

export default function IPLProfilePage() {
  const { t } = useTranslation();

  const achievements = [
    {
      titleKey: 'profile.achievements.eyeCamps',
      count: '31+',
      icon: '👁️'
    },
    {
      titleKey: 'profile.achievements.meetings',
      count: '25+',
      icon: '🤝'
    },
    {
      titleKey: 'profile.achievements.states',
      count: '5+',
      icon: '🗺️'
    },
    {
      titleKey: 'profile.achievements.years',
      count: '25+',
      icon: '🎉'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 pb-8 overflow-hidden" style={{ minHeight: '320px' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/Images/page-title_back.jpg"
            alt="Profile background"
            className="w-[92%] h-full opacity-40 object-contain mx-auto"
            style={{ objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 sm:p-4 bg-red-50 rounded-full mb-4 sm:mb-6">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              {t('profile.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl px-4">
              {t('profile.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Inception Section */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center px-2">
              {t('profile.inception.title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
              {t('profile.inception.desc')}
            </p>
          </div>
        </div>
      </section>


      {/* Growth Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-amber-700" />
              </div>
              <h2 className="text-4xl font-bold text-neutral-900">
                {t('profile.growth.title')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
              <p>
                நல்ல நண்பர்கள் உருவானால் நல்ல நாடு தானாகவே உருவாகும் என்ற உயரிய நோக்கத்தின் அசுரவளர்ச்சியாய் தமிழகத்தின் அனைத்து மாவட்டங்களிலும், கேரளா, கர்நாடகா, கோவா, புதுதில்லி, அஸ்ஸாம் ஆகிய மாநிலங்களிலும் பிரான்ஸ், ஆஸ்திரேலியா, ஐக்கிய அரபுக்குடியரசு நாடுகளிலும் விரிந்து தமிழர்கள் மனதில் அறிமுகமாகியுள்ளது.
              </p>
              <p>
                With the noble vision that &quot;good friends create a good nation,&quot; the league has grown tremendously across all districts of Tamil Nadu, and states including Kerala, Karnataka, Goa, New Delhi, Assam, and countries like France, Australia, and the United Arab Emirates, making its presence in the hearts of Tamils worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Humanitarian Services Section */}
      <section className="py-20 px-4 bg-linear-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-red-700" />
              </div>
              <h2 className="text-4xl font-bold text-neutral-900">
                {t('profile.humanitarian.title')}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
              <p>
                எழுத்தால் இணைந்த இதயங்கள் அன்பு, நட்பு, மனிதநேயச் சிந்தனைகளைக் கடிதங்கள் மூலம் பகிர்ந்துகொண்ட நிலையில் பேரவையின் புதிய சகாப்தம் சமூகநல செயல்பாடுகள் என்று வளர்ச்சி பெற்று மராட்டியமாநில அரசு பதிவுச் சட்டப்படி சமூக நல அறக்கட்டளையாகப் பதிவு செய்யப்பட்டது.
              </p>
              <p>
                தமனநலம் குன்றியோர், ஆதரவற்றோர், முதியோர் மற்றும் மாற்றுத்திறனாளிகள் காப்பகங்களுக்கு மனிதநேய உதவிகளுடன், மருத்துவத் தேவையறிந்து மருந்துகள் பேரவை சார்பாக தொடர்ந்து வழங்கப்படுகிறது.
              </p>
              <p className="font-semibold text-red-700">
                கண் மருத்துவப் பரிசோதனை முகாம், காது, மூக்கு தொண்டை மருத்துவப் பரிசோதனை முகாம், புற்றுநோய் விழிப்புணர்ச்சி முகாம், எய்ட்ஸ் விழிப்புணர்வு முகாம் நடத்திய பெருமையும் பேரவைக்கு உண்டு.
              </p>
              <p>
                உலகப்புகழ் பெற்ற ஆதித்ய ஜோத் கண் மருத்துவமனையுடன் புரிந்துணர்வு கொண்டு மும்பை குடிசைப்பகுதிகளில் 31 கண் பரிசோதனை முகாம்கள் நடத்தியது. மருத்துவமனையின் தலைவரும் நிர்வாக இயக்குனருமான பத்மஶ்ரீ டாக்டர் எஸ். நடராஜன் அவர்களின் பூரண ஒத்துழைப்பு பேரவையின் கண் மருத்துவச் சேவைக்கு வழிகாட்டி வருகிறது.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Friendship Meet Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8">
              {t('profile.friendshipMeet.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
              <p>
                கடிதங்கள் மூலம் கருத்துகளைப் பரிமாறும் நண்பர்கள் நேரில் சந்தித்து நட்பின் உறுதியையும், பெருமையையும் உணர களம் அமைக்க வேண்டும் என்ற எண்ண விதையின் ஆலவிருட்சமே, தொடர்ந்து சிறப்புடன் நடைபெற்று வரும் நட்புச் சங்கம விழாக்கள்.
              </p>
              <p className="font-semibold text-red-700">
                மும்பையில் துவக்க விழா - 12-03-1995. தொடர்ந்து 1996 - தஞ்சை, 1997 - கோலார் தங்க வயல், 1998 - சென்னை, 1999 - கரூர், 2000 - செங்கம், 2001 - புதுக்கோட்டை, 2002 - தேனி, 2003 - திருச்சி, 2004 - நாகர்கோவில், 2005 - திருப்பூர், 2006 - சேலம், 2007 - மதுரை, 2008 - ஓசூர், 2009 - காஞ்சி, 2010 - கோவை, 2011 - வேலூர், 2012 - விழுப்புரம், 2013 - காரைக்குடி, 2014 - கன்னியாகுமரி, 2015 - திண்டுக்கல், 2016 - நெல்லை, 2017 - ஈரோடு, 2018 - தூத்துக்குடி, 2019 - நாமக்கல்.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Guests Section */}
      <section className="py-20 px-4 bg-linear-to-br from-neutral-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8">
              {t('profile.notableGuests.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <p>
                சரித்திர சாதனையாக நடைபெற்று வரும் நட்புச்சங்கம விழாக்களில் &quot;இதழியல் போராளி&quot; நக்கீரன் ஆர். ஆர். கோபால், செவாலியர் வி. ஜி. சந்தோஷம், பாடகர் டி. எம். சௌந்தரராஜன், நடிகர் எஸ். வி. சேகர், திரு. எஸ். வி. சுப்ரமணியம், வானொலி நாடக ஆளுமை ஏ. எல். சீனிவாசன் போன்ற பல்வேறு துறைச் சான்றோர் பெருமக்கள் சிறப்பு விருந்தினராகப் பங்கேற்றுள்ளனர்.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Medical Aid Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8">
              {t('profile.education.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
              <p>
                கல்வியில் சிறந்து விளங்கும் ஏழை மாணவ மாணவியரின் தரம் அறிந்து கல்வி ஊக்கத்தொகை மற்றும் சிறப்பான கல்வி அறிவு பெற்றும் மேற்படிப்பு படிக்க வசதியில்லாத மாணவ மாணவியருக்கு முழுமையான ஆண்டு கல்விக் கட்டணத்தை பேரவை ஏற்று கல்வி அளிப்பதும் பேரவையின் தொடர் கல்விப் பணிகளாகும்.
              </p>
              <p>
                மருத்துவச்செலவுகளுக்காக வருந்தும் ஏழை மக்களின் வேண்டுகோள் பரிசிலீக்கப்பட்டு முடிந்த அளவுக்கு மருத்துவ உதவிக் தொகைகளும் அவ்வப்போது பேரவை சார்பாக வழங்கப்பட்டு வருகிறது.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 px-4 bg-linear-to-r from-red-700 to-orange-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            {t('profile.achievements.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.count}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  {t(achievement.titleKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {t('profile.cta.title')}
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            {t('profile.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-red-700 text-white rounded-xl font-semibold hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('profile.cta.contact')}
            </a>
            <a
              href="/humanitarian-services"
              className="px-8 py-4 bg-white text-red-700 border-2 border-red-700 rounded-xl font-semibold hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('profile.cta.services')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

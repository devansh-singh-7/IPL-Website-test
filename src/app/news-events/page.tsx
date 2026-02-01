"use client"

import React, { useEffect, useMemo, useState, Suspense, useCallback } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Clock, TrendingUp, Sparkles, ChevronRight, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from '@/contexts/TranslationContext'
import GlobalSearch from '@/components/ui/GlobalSearch'

interface NewsItem {
    id: number
    date: string
    year: string
    titleEn: string
    locationEn: string
    descriptionEn: string
    titleTa: string
    locationTa: string
    descriptionTa: string
}

function NewsEventsContent() {
    const { t, lang } = useTranslation()
    const [currentPage, setCurrentPage] = useState(1)
    const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid')
    const searchParams = useSearchParams()
    const initialQuery = (searchParams.get('q') || '').trim()
    const [query, setQuery] = useState(initialQuery)
    const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null)

    const newsItems: NewsItem[] = useMemo(
        () => [
            {
                id: 136,
                date: '22 DEC',
                year: '2024',
                titleEn: 'Chennai Regional Branch Friends Meeting',
                locationEn: 'Moovarasampettai, Chennai',
                descriptionEn: 'Chennai Regional Branch Friends Meeting',
                titleTa: 'சென்னை மண்டல கிளை நண்பர்கள் சந்திப்பு',
                locationTa: 'மூவரசம்பேட்டை, சென்னை',
                descriptionTa: 'சென்னை மண்டல கிளை நண்பர்கள் சந்திப்பு'
            },
            {
                id: 135,
                date: '25 MAY',
                year: '2024',
                titleEn: '27th Friendship Meet',
                locationEn: 'Kuttalam',
                descriptionEn: '27th Friendship Meet at TMNS Hall, Kuttalam, Tenkasi District',
                titleTa: '27வது நட்புச் சங்கமம்',
                locationTa: 'குட்டாலம்',
                descriptionTa: 'தென்காசி மாவட்டம் குட்டாலம் TMNS மண்டபத்தில் 27வது நட்புச் சங்கமம்'
            },
            {
                id: 134,
                date: '03 MAR',
                year: '2024',
                titleEn: 'IPL Chess Academy Festival',
                locationEn: 'Pavoorchathiram',
                descriptionEn: 'IPL Chess Academy - Chess Festival, Pavoorchathiram',
                titleTa: 'ஐபிஎல் செஸ் அகாடமி விழா',
                locationTa: 'பாவூர்சத்திரம்',
                descriptionTa: 'ஐபிஎல் செஸ் அகாடமி - செஸ் விழா, பாவூர்சத்திரம்'
            },
            {
                id: 133,
                date: '24 FEB',
                year: '2024',
                titleEn: 'Kanyakumari District Branch Friends Meeting',
                locationEn: 'Kanyakumari',
                descriptionEn: 'Kanyakumari District Branch Friends Meeting at Devadas Sweet Home Hall',
                titleTa: 'கன்னியாகுமரி மாவட்ட கிளை நண்பர்கள் சந்திப்பு',
                locationTa: 'கன்னியாகுமரி',
                descriptionTa: 'தேவதாஸ் ஸ்வீட் ஹோம் மண்டபத்தில் கன்னியாகுமரி மாவட்ட கிளை நண்பர்கள் சந்திப்பு'
            },
            {
                id: 132,
                date: '11 FEB',
                year: '2024',
                titleEn: "27th Friendship Meet - President's Announcement",
                locationEn: 'India',
                descriptionEn: "Indian Penpals' League, Mumbai",
                titleTa: '27வது நட்புச் சங்கமம் - தலைவர் அறிவிப்பு',
                locationTa: 'இந்தியா',
                descriptionTa: 'இந்தியப் பேனாநண்பர் பேரவை, மும்பை'
            },
            {
                id: 131,
                date: '20 JAN',
                year: '2024',
                titleEn: 'Krishnagiri Regional Branch Friends Meeting',
                locationEn: 'Hosur',
                descriptionEn: "St. John Bosco Girls Higher Secondary School - Hosur",
                titleTa: 'கிருஷ்ணகிரி மண்டல கிளை நண்பர்கள் சந்திப்பு',
                locationTa: 'ஓசூர்',
                descriptionTa: 'செயின்ட் ஜான் போஸ்கோ மகளிர் மேல்நிலைப் பள்ளி - ஓசூர்'
            },
            {
                id: 130,
                date: '12 JAN',
                year: '2024',
                titleEn: 'Tamil Nadu Government NRI Tamil Day Celebration',
                locationEn: 'Tamil Nadu',
                descriptionEn: 'Tamil Nadu Government NRI Tamil Day - Award to IPL President',
                titleTa: 'தமிழக அரசு அயலகத் தமிழர் தினம் கொண்டாட்டம்',
                locationTa: 'தமிழ்நாடு',
                descriptionTa: 'தமிழக அரசு அயலகத் தமிழர் தினம் - ஐபிஎல் தலைவருக்கு விருது'
            },
            {
                id: 129,
                date: '30 DEC',
                year: '2023',
                titleEn: 'IPL Chess Tournament',
                locationEn: 'Mumbai',
                descriptionEn: 'Chess tournament organized by IPL Chess Academy with Mumbai District Chess Association',
                titleTa: 'ஐபிஎல் செஸ் போட்டி',
                locationTa: 'மும்பை',
                descriptionTa: 'மும்பை மாவட்ட செஸ் சங்கத்துடன் இணைந்து ஐபிஎல் செஸ் அகாடமி நடத்திய செஸ் போட்டி'
            },
            {
                id: 128,
                date: '17 DEC',
                year: '2023',
                titleEn: 'Cash Prize for Tamil Nadu Kho-Kho Players',
                locationEn: 'Tamil Nadu',
                descriptionEn: 'National Kho-Kho Championship - Cash prizes for Tamil Nadu women players',
                titleTa: 'தமிழக கோ-கோ வீரர்களுக்கு ரொக்கப் பரிசு',
                locationTa: 'தமிழ்நாடு',
                descriptionTa: 'தேசிய கோ-கோ சாம்பியன்ஷிப் - தமிழக மகளிர் அணி வீரர்களுக்கு ரொக்கப் பரிசுகள்'
            },
            {
                id: 125,
                date: '19 DEC',
                year: '2023',
                titleEn: 'Thiruvalluvar Statue Inauguration',
                locationEn: 'Paris, France',
                descriptionEn: 'Thiruvalluvar Statue Inauguration - Cergy, Paris, France',
                titleTa: 'திருவள்ளுவர் சிலை திறப்பு விழா',
                locationTa: 'பாரிஸ், பிரான்ஸ்',
                descriptionTa: 'திருவள்ளுவர் சிலை திறப்பு விழா - செர்ஜி, பாரிஸ், பிரான்ஸ்'
            },
            {
                id: 127,
                date: '16 JUL',
                year: '2023',
                titleEn: 'Chennai District Branch Friends Discussion',
                locationEn: 'Chennai',
                descriptionEn: 'Distribution of school uniforms and educational materials by Chennai District Branch',
                titleTa: 'சென்னை மாவட்ட கிளை நண்பர்கள் கலந்துரையாடல்',
                locationTa: 'சென்னை',
                descriptionTa: 'சென்னை மாவட்ட கிளை சார்பில் பள்ளி சீருடைகள் மற்றும் கல்வி உபகரணங்கள் விநியோகம்'
            },
            {
                id: 124,
                date: '25 JUN',
                year: '2023',
                titleEn: 'Thirukkural as Indian National Book - International Conference',
                locationEn: 'New Delhi',
                descriptionEn: 'International Conference on Thirukkural as Indian National Book - New Delhi',
                titleTa: 'திருக்குறள் இந்திய தேசிய நூல் - பன்னாட்டு மாநாடு',
                locationTa: 'புதுதில்லி',
                descriptionTa: 'திருக்குறளை இந்திய தேசிய நூலாக அறிவிக்கக் கோரும் பன்னாட்டு மாநாடு - புதுதில்லி'
            },
            {
                id: 126,
                date: '26 JUN',
                year: '2023',
                titleEn: 'IPL Chess Academy Tournament',
                locationEn: 'Pavoorchathiram, Tenkasi',
                descriptionEn: 'IPL Chess Academy tournament, Pavoorchathiram, Tenkasi District',
                titleTa: 'ஐபிஎல் செஸ் அகாடமி போட்டி',
                locationTa: 'பாவூர்சத்திரம், தென்காசி',
                descriptionTa: 'ஐபிஎல் செஸ் அகாடமி போட்டி, பாவூர்சத்திரம், தென்காசி மாவட்டம்'
            },
            {
                id: 123,
                date: '01 JAN',
                year: '2023',
                titleEn: 'Tamil Festival 2023 Competition Winners',
                locationEn: 'India',
                descriptionEn: 'Independence Day 2022 / Tamil Festival 2023 competition for students',
                titleTa: 'தமிழர் திருநாள் 2023 போட்டி வெற்றியாளர்கள்',
                locationTa: 'இந்தியா',
                descriptionTa: 'மாணவர்களுக்கான சுதந்திர தின விழா 2022 / தமிழர் திருநாள் 2023 போட்டிகள்'
            },
            {
                id: 122,
                date: '18 JUN',
                year: '2023',
                titleEn: 'IPL New Delhi State Branch Friends Meeting',
                locationEn: 'New Delhi',
                descriptionEn: 'New Delhi State Branch Friends Meeting - Press Club, Raisina Road',
                titleTa: 'ஐபிஎல் புதுதில்லி மாநில கிளை நண்பர்கள் சந்திப்பு',
                locationTa: 'புதுதில்லி',
                descriptionTa: 'புதுதில்லி மாநில கிளை நண்பர்கள் சந்திப்பு - பிரஸ் கிளப், ரைசினா சாலை'
            },
            {
                id: 121,
                date: '02 JUN',
                year: '2023',
                titleEn: 'IPL Bahrain Branch Inauguration',
                locationEn: 'Bahrain',
                descriptionEn: 'Bahrain Branch Inauguration at The Olive Hotel Auditorium, Juffair, Manama',
                titleTa: 'ஐபிஎல் பஹ்ரைன் கிளை தொடக்க விழா',
                locationTa: 'பஹ்ரைன்',
                descriptionTa: 'பஹ்ரைன் கிளை தொடக்க விழா - ஆலவ் ஹோட்டல் அரங்கம், ஜுஃப்பயர், மனாமா'
            },
            {
                id: 120,
                date: '20 MAY',
                year: '2023',
                titleEn: '26th Friendship Meet',
                locationEn: 'New Delhi',
                descriptionEn: '26th Friendship Meet at Shri Vittal Mandir Hall, Ramakrishnapuram, New Delhi',
                titleTa: '26வது நட்புச் சங்கமம்',
                locationTa: 'புதுதில்லி',
                descriptionTa: 'ஸ்ரீ வித்தல் மந்திர் மண்டபம், ராமகிருஷ்ணபுரம், புதுதில்லியில் 26வது நட்புச் சங்கமம்'
            },
            {
                id: 119,
                date: '16 FEB',
                year: '2023',
                titleEn: "IPL President's Daughter Saranya-Rohit Wedding",
                locationEn: 'India',
                descriptionEn: 'IPL President\'s family wedding - Heartfelt thanks to all who participated',
                titleTa: 'ஐபிஎல் தலைவர் மகள் சரண்யா-ரோஹித் திருமணம்',
                locationTa: 'இந்தியா',
                descriptionTa: 'ஐபிஎல் தலைவர் குடும்பத் திருமணம் - பங்கேற்ற அனைவருக்கும் மனமார்ந்த நன்றி'
            },
            {
                id: 118,
                date: '16 FEB',
                year: '2023',
                titleEn: "IPL President's Family Wedding",
                locationEn: 'Secunderabad',
                descriptionEn: "IPL President's family wedding at Secunderabad",
                titleTa: 'ஐபிஎல் தலைவர் குடும்பத் திருமணம்',
                locationTa: 'செகந்திராபாத்',
                descriptionTa: 'செகந்திராபாத்தில் நடைபெற்ற ஐபிஎல் தலைவர் குடும்பத் திருமணம்'
            },
            {
                id: 117,
                date: '05 FEB',
                year: '2023',
                titleEn: 'Rajasthan State Branch Friends Meeting',
                locationEn: 'Bhiwadi, Rajasthan',
                descriptionEn: 'Rajasthan State Branch Friends Meeting at Bhiwadi Bikaner Restaurant',
                titleTa: 'ராஜஸ்தான் மாநில கிளை நண்பர்கள் சந்திப்பு',
                locationTa: 'பிவாடி, ராஜஸ்தான்',
                descriptionTa: 'பிவாடி பிகானேர் உணவகத்தில் ராஜஸ்தான் மாநில கிளை நண்பர்கள் சந்திப்பு'
            }
        ],
        []
    )

    const q = query.toLowerCase()

    // Deterministic image selection for cards (uses stable Unsplash IDs)
    const imagePool = useMemo(
        () => [
            'photo-1515169067865-5387ec356754', // crowd/meeting
            'photo-1544531581-9847b68c8c95',     // charity/helping hands
            'photo-1551836022-d5d88e9218df',     // community event stage
            'photo-1520975682031-a4e34a928ad3',  // education/classroom
            'photo-1492684223066-81342ee5ff30',  // handshake/connection
            'photo-1521737604893-d14cc237f11d',  // workshop/team
        ],
        []
    )

    const getImageUrl = (id: number) => {
        const key = imagePool[id % imagePool.length]
        return `https://images.unsplash.com/${key}?auto=format&fit=crop&w=1200&q=60`
    }

    // Helper to get localized text
    const getLocalized = useCallback((item: NewsItem, field: 'title' | 'location' | 'description') => {
        if (lang === 'ta') {
            return item[`${field}Ta`] || item[`${field}En`]
        }
        return item[`${field}En`]
    }, [lang])

    const filteredNews = useMemo(() => {
        if (!q) return newsItems
        return newsItems.filter((item) => {
            const title = getLocalized(item, 'title').toLowerCase()
            const desc = getLocalized(item, 'description').toLowerCase()
            const loc = getLocalized(item, 'location').toLowerCase()

            return title.includes(q) || desc.includes(q) || loc.includes(q)
        })
    }, [q, newsItems, getLocalized])


    // Local page simply filters by query param; advanced suggestions handled globally in header or reusable component below.

    useEffect(() => {
        const id = setTimeout(() => setCurrentPage(1), 0)
        return () => clearTimeout(id)
    }, [q])

    const itemsPerPage = viewMode === 'grid' ? 9 : 10
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = filteredNews.slice(startIndex, startIndex + itemsPerPage)



    // Get featured (latest 3)
    const featuredEvents = filteredNews.slice(0, 3)

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 pb-8 overflow-hidden" style={{ minHeight: '320px' }}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/Images/page-title_back.jpg"
                        alt="News & Events background"
                        fill
                        className="opacity-40 object-contain"
                        style={{ objectPosition: 'center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
                </div>

                <div className="relative z-10 container-custom mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-neutral-600">
                            {t('news.badge', 'Latest Updates')}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 mb-6 animate-slide-up">
                        {t('news.title', 'News & Events')}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('news.subtitle', "Discover the latest happenings, milestones, and celebrations from the Indian Penpals' League community")}
                    </p>

                    {/* Search & View Controls */}
                    <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <GlobalSearch variant="hero" placeholder={t('news.search_placeholder', 'Search events...')} />
                        <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-2 py-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${viewMode === 'grid' ? 'bg-red-700 text-white shadow-md' : 'text-neutral-600 hover:text-neutral-900'}`}
                            >
                                {t('news.view_grid', 'Grid')}
                            </button>
                            <button
                                onClick={() => setViewMode('timeline')}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${viewMode === 'timeline' ? 'bg-red-700 text-white shadow-md' : 'text-neutral-600 hover:text-neutral-900'}`}
                            >
                                {t('news.view_timeline', 'Timeline')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Events */}
            <section className="container-custom mx-auto mt-8 mb-20">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-red-700" />
                        <h2 className="text-2xl font-bold text-neutral-900">
                            {t('news.featured', 'Featured Events')}
                        </h2>
                    </div>
                    <span className="text-sm text-neutral-500">
                        {t('news.featured_sub', 'Highlighting recent impactful activities')}
                    </span>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {featuredEvents.map(item => (
                        <article key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setSelectedItem(item)}>
                            <div className="relative h-48">
                                <Image
                                    src={getImageUrl(item.id)}
                                    alt={getLocalized(item, 'title')}
                                    fill
                                    sizes="(max-width:768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-sm text-red-700 shadow">
                                    {t('news.new_badge', 'NEW')}
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                                    <h3 className="font-bold text-lg line-clamp-2">{getLocalized(item, 'title')}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4 text-neutral-600 text-sm">
                                    <Calendar className="w-4 h-4 text-red-600" />
                                    <span className="font-semibold">{item.date} {item.year}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3 text-sm text-neutral-500">
                                    <MapPin className="w-4 h-4 text-red-600" />
                                    <span className="line-clamp-1">{getLocalized(item, 'location')}</span>
                                </div>
                                <p className="text-sm text-neutral-600 mb-5 line-clamp-3 leading-relaxed">
                                    {getLocalized(item, 'description')}
                                </p>
                                <button className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm hover:gap-3 transition-all">
                                    {t('news.more_info', 'More Info')} <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* All Events Header */}
            <section className="container-custom mx-auto mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-3xl font-bold text-neutral-900">
                        {t('news.all_events', 'All Events')}
                    </h2>
                    <p className="text-sm text-neutral-500 max-w-xl">
                        {t('news.all_events_sub', 'Browse events in grid or timeline view. Use search to filter results by title, description or location.')}
                    </p>
                </div>
            </section>

            {/* Events Grid / Timeline */}
            <section className="container-custom mx-auto pb-16">
                {viewMode === 'grid' ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentItems.map((item) => (
                            <article
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 flex flex-col hover:-translate-y-1 cursor-pointer"
                            >
                                {/* Image header */}
                                <div className="relative h-44">
                                    <Image
                                        src={getImageUrl(item.id)}
                                        alt={getLocalized(item, 'title')}
                                        fill
                                        sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority={false}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold text-white bg-white/20 backdrop-blur-sm">
                                        {item.id}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-4 text-neutral-600 text-sm">
                                        <div className="flex items-center gap-2 text-red-700">
                                            <Calendar className="w-4 h-4" />
                                            <span className="font-semibold">{item.date}</span>
                                        </div>
                                        <span className="text-xs text-neutral-500">{item.year}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-red-700 transition-colors">
                                        {getLocalized(item, 'title')}
                                    </h3>
                                    <div className="flex items-start gap-2 mb-3 text-sm text-neutral-500">
                                        <MapPin className="w-4 h-4 text-red-600 mt-0.5" />
                                        <span className="line-clamp-1">{getLocalized(item, 'location')}</span>
                                    </div>
                                    <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                                        {getLocalized(item, 'description')}
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-neutral-200 mt-auto">
                                        <button className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm hover:gap-3 transition-all">
                                            {t('news.more_info', 'More Info')} <ChevronRight className="w-4 h-4" />
                                        </button>
                                        <span className="text-xs text-neutral-400">{getLocalized(item, 'location')}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-red-200 via-red-300 to-red-200 rounded-full" />

                            <div className="space-y-8">
                                {currentItems.map((item) => (
                                    <div key={item.id} className="relative flex gap-6">
                                        <div className="relative shrink-0">
                                            <div className="w-14 h-14 bg-linear-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white shadow-md">
                                                <Clock className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div
                                            onClick={() => setSelectedItem(item)}
                                            className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-xl transition cursor-pointer hover:-translate-y-1"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full">
                                                    {item.date}
                                                </span>
                                                <span className="text-xs text-neutral-500">{item.year}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                                {getLocalized(item, 'title')}
                                            </h3>
                                            <div className="flex items-start gap-2 mb-3 text-sm text-neutral-500">
                                                <MapPin className="w-4 h-4 text-red-600 mt-0.5" />
                                                <span>{getLocalized(item, 'location')}</span>
                                            </div>
                                            <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                                                {getLocalized(item, 'description')}
                                            </p>
                                            <button className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm hover:gap-3 transition-all">
                                                {t('news.view_details', 'View Details')} <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-14">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${currentPage === 1 ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' : 'bg-red-700 text-white hover:bg-red-800 shadow-sm'}`}
                        >
                            {t('pagination.prev', 'Previous')}
                        </button>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-full text-sm font-semibold transition ${page === currentPage ? 'bg-red-700 text-white shadow-sm' : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${currentPage === totalPages ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' : 'bg-red-700 text-white hover:bg-red-800 shadow-sm'}`}
                        >
                            {t('pagination.next', 'Next')}
                        </button>
                    </div>
                )}
            </section>

            {/* Event Detail Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <div className="sticky top-0 flex justify-end p-4 bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-10">
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 flex items-center justify-center transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div>
                            {/* Image */}
                            <div className="relative h-64 md:h-80 w-full overflow-hidden bg-neutral-200">
                                <Image
                                    src={getImageUrl(selectedItem.id)}
                                    alt={getLocalized(selectedItem, 'title')}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="p-6 md:p-8">
                                <div className="inline-block px-3 py-1 bg-red-50 rounded-full mb-4">
                                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">
                                        News & Events
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                                    {getLocalized(selectedItem, 'title')}
                                </h2>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                                    <div className="flex items-center gap-1 font-semibold text-red-700">
                                        <Calendar className="w-4 h-4" />
                                        <span>{selectedItem.date} {selectedItem.year}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-red-700" />
                                        <span>{getLocalized(selectedItem, 'location')}</span>
                                    </div>
                                </div>

                                <p className="text-neutral-700 leading-relaxed mb-6 text-base md:text-lg">
                                    {getLocalized(selectedItem, 'description')}
                                </p>

                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-full font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto justify-center"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function NewsEvents() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-500">Loading...</div></div>}>
            <NewsEventsContent />
        </Suspense>
    )
}

"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Users, Heart, Calendar, MapPin, Camera, Handshake, ArrowRight, Sparkles, Star, Globe, Gift, Award } from 'lucide-react'
import { useTranslation } from '@/contexts/TranslationContext'

export default function FriendshipMeet() {
    const { t } = useTranslation()
    const [selectedYear, setSelectedYear] = useState('2024')

    const friendsDayEvents = [
        {
            id: 1,
            year: '2024',
            date: 'August 4, 2024',
            title: 'International Friendship Day Celebration 2024',
            location: 'Multiple Locations across India',
            description: 'IPL members celebrated International Friendship Day with various cultural programs, gift exchanges, and community gatherings.',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
            participants: '500+',
            activities: ['Cultural Programs', 'Gift Exchange', 'Community Gathering', 'Friendship Pledge']
        },
        {
            id: 2,
            year: '2023',
            date: 'August 6, 2023',
            title: 'International Friendship Day Celebration 2023',
            location: 'New Delhi & Regional Branches',
            description: 'A day dedicated to celebrating the bonds of friendship with pen pals from around the world.',
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
            participants: '450+',
            activities: ['Letter Writing', 'Cultural Exchange', 'Friendship Band Distribution', 'Group Photos']
        },
        {
            id: 3,
            year: '2022',
            date: 'August 7, 2022',
            title: 'International Friendship Day Celebration 2022',
            location: 'Mumbai & Regional Offices',
            description: 'IPL organized special friendship day events to honor the spirit of penpal friendships.',
            image: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=800&q=80',
            participants: '400+',
            activities: ['Friendship Cards', 'Cultural Performances', 'Unity March', 'Social Gathering']
        }
    ]

    const friendshipMeets = [
        {
            year: '2024',
            number: '28',
            titleEn: t('meet.28.title', '28th Friendship Meet'),
            date: t('meet.28.date', '24 MAY 2025'),
            location: t('meet.28.location', 'To be announced'),
            description: t('meet.28.desc', 'The 28th Annual Friendship Meet bringing together pen friends from across India and abroad'),
            status: 'upcoming'
        },
        {
            year: '2024',
            number: '27',
            titleEn: t('meet.27.title', '27th Friendship Meet'),
            date: t('meet.27.date', '25 MAY 2024'),
            location: t('meet.27.location', 'Kuttalam, Tenkasi District'),
            description: t('meet.27.desc', '27th Annual Friendship Meet held at TMNS Hall, Kuttalam'),
            status: 'completed'
        },
        {
            year: '2023',
            number: '26',
            titleEn: t('meet.26.title', '26th Friendship Meet'),
            date: t('meet.26.date', '20 MAY 2023'),
            location: t('meet.26.location', 'New Delhi'),
            description: t('meet.26.desc', 'Shri Vittal Mandir Hall, Ramakrishnapuram, New Delhi'),
            status: 'completed'
        }
    ]

    const highlights = [
        { icon: Users, title: t('meet.highlight1.title', 'Meet Pen Friends'), description: t('meet.highlight1.desc', "Connect with friends you've been writing to for years"), color: 'from-red-600 to-red-700' },
        { icon: Heart, title: t('meet.highlight2.title', 'Family Gathering'), description: t('meet.highlight2.desc', 'Bring your family and celebrate together'), color: 'from-rose-600 to-rose-700' },
        { icon: Globe, title: t('meet.highlight3.title', 'Cultural Exchange'), description: t('meet.highlight3.desc', 'Experience diverse cultures and traditions'), color: 'from-amber-600 to-amber-700' },
        { icon: Camera, title: t('meet.highlight4.title', 'Memorable Moments'), description: t('meet.highlight4.desc', 'Create lasting memories and friendships'), color: 'from-blue-600 to-blue-700' },
    ]

    const stats = [
        { number: '28+', label: t('meet.stats.meets', 'Annual Meets'), icon: Calendar },
        { number: '1000+', label: t('meet.stats.attendees', 'Attendees'), icon: Users },
        { number: '50+', label: t('meet.stats.cities', 'Cities'), icon: MapPin },
        { number: '30+', label: t('meet.stats.years', 'Years'), icon: Star }
    ]

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative bg-transparent pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden" style={{ minHeight: '280px' }}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src="/Images/page-title_back.jpg"
                        alt="Friendship Meet background"
                        className="w-[85%] h-full opacity-40 object-contain mx-auto"
                        style={{ objectPosition: 'center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
                </div>
                <div className="relative z-10 container-custom mx-auto text-center px-4">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-6 sm:mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-neutral-600">{t('meet.badge', 'Annual Celebration')}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 mb-4 sm:mb-6 animate-slide-up">
                        {t('meet.title', 'Friendship Meet')}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-medium mb-3 sm:mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>{t('meet.subtitle_native', 'நட்புச் சங்கமம்')}</p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto animate-slide-up px-2" style={{ animationDelay: '0.15s' }}>
                        {t('meet.subtitle', 'Where letters transform into lasting bonds and pen friends become family')}
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container-custom mx-auto mt-6 sm:mt-8 mb-16 sm:mb-24 px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div key={index} className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-neutral-200 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg sm:rounded-xl bg-red-50 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
                                </div>
                                <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 mb-1">{stat.number}</div>
                                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-500">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* What is Friendship Meet */}
            <section className="container-custom mx-auto mb-24">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            {t('meet.what_title', 'What is Friendship Meet?')}
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            {t('meet.what_desc', 'An annual gathering where pen friends across the world meet in person to celebrate the bonds formed through letters.')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon
                            return (
                                <div key={index} className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${highlight.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-red-700 transition-colors">{highlight.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed">{highlight.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* International Friendship Day Section */}
            <section className="container-custom mx-auto px-4 mb-16 sm:mb-24">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-50 border border-red-100 mb-6">
                        <Heart className="w-4 h-4 text-red-700" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-red-800">International Friendship Day</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                        Friends Day Celebrations
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        Celebrating the spirit of friendship every first Sunday of August. International Friendship Day is celebrated annually, bringing together pen friends from across the globe to honor the beautiful bonds of friendship.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-lg border border-neutral-100 mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6">
                        About International Friendship Day
                    </h3>

                    <div className="prose prose-lg max-w-none text-neutral-600 space-y-4">
                        <p>
                            International Friendship Day is celebrated on the first Sunday of August every year. Indian Penpals&apos; League has been celebrating this special day since its inception, bringing together pen friends from across the globe to honor the beautiful bonds of friendship.
                        </p>
                        <p>
                            On this day, IPL members participate in various activities including cultural programs, gift exchanges, friendship band distribution, and community gatherings. It&apos;s a day to strengthen existing friendships and create new ones.
                        </p>
                        <p>
                            The celebration embodies IPL&apos;s core values of Love, Friendship, and Humanity, bringing people together regardless of geographical boundaries, cultures, or backgrounds.
                        </p>
                    </div>
                </div>

                {/* Friends Day Highlights */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mb-4">
                            <Heart className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Celebrate Friendship</h3>
                        <p className="text-sm text-neutral-600">Honor the beautiful bonds formed through pen pal connections</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4">
                            <Gift className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Exchange Gifts</h3>
                        <p className="text-sm text-neutral-600">Share tokens of appreciation and friendship bands</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                            <Globe className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Global Unity</h3>
                        <p className="text-sm text-neutral-600">Connect with friends across borders and cultures</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-4">
                            <Camera className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Create Memories</h3>
                        <p className="text-sm text-neutral-600">Capture beautiful moments with your pen pals</p>
                    </div>
                </div>

                {/* Past Friends Day Events */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-6">
                        <Award className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-neutral-600">Past Celebrations</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                        Friends Day Events
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {friendsDayEvents.map((event) => (
                        <div
                            key={event.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-2">
                                        {event.year}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-red-700 transition-colors">
                                    {event.title}
                                </h4>

                                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{event.date}</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span>{event.location}</span>
                                </div>

                                <p className="text-sm text-neutral-600 mb-4">
                                    {event.description}
                                </p>

                                <div className="flex items-center gap-2 mb-3">
                                    <Users className="w-4 h-4 text-red-600" />
                                    <span className="text-sm font-semibold text-neutral-900">
                                        {event.participants} Participants
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {event.activities.map((activity, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full">
                                            {activity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Past Meets */}
            <section className="bg-white py-20 border-t border-neutral-100">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            {t('meet.past_title', 'Annual Friendship Meets')}
                        </h2>
                        <p className="text-lg text-neutral-600">
                            {t('meet.past_sub', 'Explore our journey through the years')}
                        </p>
                    </div>
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-white rounded-full border border-neutral-200 p-2 gap-2 shadow-sm">
                            {['2024', '2023', '2022'].map(year => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-8 py-2.5 rounded-full text-sm font-semibold transition ${selectedYear === year ? 'bg-red-700 text-white shadow-sm' : 'text-neutral-600 hover:bg-neutral-100'}`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {friendshipMeets
                            .filter(m => m.year === selectedYear)
                            .map((meet, index) => (
                                <article
                                    key={index}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 hover:border-red-200 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-48 bg-linear-to-br from-red-600 to-red-700 p-8 flex flex-col items-center justify-center text-white">
                                            <div className="text-6xl font-extrabold mb-2 tracking-tight">{meet.number}</div>
                                            <div className="text-xs font-semibold uppercase tracking-wider opacity-90">{t('meet.badge_small', 'Annual Meet')}</div>
                                            {meet.status === 'upcoming' && (
                                                <div className="mt-4 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold tracking-wider">
                                                    {t('meet.upcoming', 'UPCOMING')}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 p-8">
                                            <h3 className="text-2xl font-bold text-neutral-900 mb-5 group-hover:text-red-700 transition-colors">
                                                {meet.titleEn}
                                            </h3>
                                            <div className="flex flex-wrap gap-6 mb-5 text-sm text-neutral-600">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-5 h-5 text-red-700" />
                                                    <span className="font-semibold">{meet.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-5 h-5 text-red-700" />
                                                    <span>{meet.location}</span>
                                                </div>
                                            </div>
                                            <p className="text-neutral-600 leading-relaxed mb-6">{meet.description}</p>
                                            <button className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm hover:gap-3 transition-all">
                                                {t('meet.view_details', 'View Details')} <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-linear-to-br from-red-700 via-red-700 to-red-800 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-32 right-0 w-96 h-96 bg-white/10 rounded-full" />
                    <div className="absolute bottom-0 -left-32 w-72 h-72 bg-white/10 rounded-full" />
                </div>
                <div className="container-custom mx-auto text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20">
                        <Handshake className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        {t('meet.cta_title', 'Join Our Next Friendship Meet')}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
                        {t('meet.cta_desc', 'Experience the joy of meeting friends who share your passion for friendship and humanity.')}
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 rounded-full font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        {t('meet.cta_button', 'Contact Us for Details')} <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    )
}

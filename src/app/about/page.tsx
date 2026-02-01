'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'
import { Heart, Users, Award, CheckCircle, Globe, BookOpen, Star } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    const { t } = useTranslation()

    const values = [
        {
            icon: Heart,
            title: 'Love',
            titleTa: 'அன்பு',
            desc: 'Spreading unconditional love across all communities',
            descTa: 'அனைத்து சமூகங்களிலும் நிபந்தனையற்ற அன்பை பரப்புதல்',
            color: 'from-red-500 to-rose-600',
        },
        {
            icon: Users,
            title: 'Friendship',
            titleTa: 'நட்பு',
            desc: 'Building bridges through meaningful friendships',
            descTa: 'அர்த்தமுள்ள நட்பு மூலம் பாலங்களை கட்டுதல்',
            color: 'from-blue-500 to-cyan-600',
        },
        {
            icon: Award,
            title: 'Humanity',
            titleTa: 'மனிதநேயம்',
            desc: 'Serving humanity with compassion and dedication',
            descTa: 'இரக்கம் மற்றும் அர்ப்பணிப்புடன் மனிதகுலத்திற்கு சேவை செய்தல்',
            color: 'from-emerald-500 to-teal-600',
        },
    ]

    const milestones = [
        {
            year: '1995',
            title: 'Foundation',
            desc: 'IPL founded in Mumbai on March 12, 1995 by pen-pals united by love, friendship and humanity',
        },
        {
            year: '1995-2000',
            title: 'Registration',
            desc: 'Registered under Bombay Societies Act, 1950 and Bombay Public Trust Act',
        },
        {
            year: '2000+',
            title: 'Expansion',
            desc: 'Awarded Section 80G certificate and expanded humanitarian services across India and abroad',
        },
    ]

    const registrations = [
        { title: 'Bombay Societies Act, 1950', detail: 'Registered as a Social Welfare Trust' },
        { title: 'Bombay Public Trust Act', detail: 'Registration #F23778' },
        { title: 'Section 80G Certificate', detail: 'Tax benefit for donors' },
        { title: 'Social Welfare Trust', detail: 'Serving communities since 1995' },
    ]

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/page-title_back.jpg"
                        alt="About Us background"
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
                                Who We Are
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                            {t('about.title', 'About Us')}
                        </h1>

                        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            {t('about.subtitle', 'Our Journey of Love, Friendship and Humanity')}
                        </p>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-300" />
                            <Heart className="w-5 h-5 text-red-600" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome & Quote Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                                <BookOpen className="w-8 h-8 text-red-700" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                {t('home.welcome_title', "Welcome to Indian Penpals' League")}
                            </h2>
                        </div>

                        {/* Founder Quote */}
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 sm:p-12 border border-red-100 mb-12">
                            <blockquote className="relative">
                                <div className="absolute -top-4 -left-2 text-6xl text-red-200 font-serif leading-none">&quot;</div>
                                <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed italic relative z-10 pl-6">
                                    {t('home.founder_quote', 'Let us breathe friendship! Let us love our friends! Let us sow love, friendship, and humanity! Let us nurture and continue tirelessly! The journey of friendship...')}
                                </p>
                            </blockquote>
                            <div className="flex items-center gap-4 mt-6 pl-6">
                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-900">{t('home.founder_name', 'M. Karuna')}</p>
                                    <p className="text-sm text-neutral-500">Founder - President</p>
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                                {t('home.about_intro', "The Indian Penpals' League (IPL) is a confederation of groups of friends in India and abroad. IPL had its inception in Mumbai on March 12, 1995, formed by like-minded pen-pals coming together to uphold three basic principles of Love, Friendship and Humanity, overcoming the barriers of caste, color, creed, religion, language and geographical bounds separating humankind.")}
                            </p>
                            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                                {t('home.about_registration', 'In the years of upcoming with its activities, the IPL got registered under the Bombay Societies Act, 1950 and grew up as a Social Welfare Trust. Thereafter, the IPL was registered under The Bombay Public Trust Act, bearing registration number')}
                            </p>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                {t('home.about_80g', 'At the request of the IPL, it was awarded with certificate under Section 80G by the Income Tax Department of Government of India, which gives Tax benefit to the donors who contribute towards our humanitarian activities.')}
                            </p>
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
                                Officially registered and recognized for our service to communities
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {registrations.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                            <p className="text-neutral-400 text-sm">{item.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                {t('about.core_values', 'Our Core Values')}
                            </h2>
                            <p className="text-neutral-600 max-w-xl mx-auto">
                                The pillars that guide everything we do
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon
                                return (
                                    <div
                                        key={index}
                                        className="text-center p-8 bg-neutral-50 rounded-3xl border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                    >
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-neutral-600 leading-relaxed">
                                            {value.desc}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                {t('about.journey', 'Our Journey')}
                            </h2>
                            <p className="text-neutral-600 max-w-xl mx-auto">
                                Key milestones in our story of service
                            </p>
                        </div>

                        <div className="relative">
                            {/* Center Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-red-400 to-red-200 md:-translate-x-px" />

                            <div className="space-y-12">
                                {milestones.map((milestone, index) => {
                                    const isEven = index % 2 === 0

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
                                                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <span className="text-3xl font-bold text-red-700">
                                                            {milestone.year}
                                                        </span>
                                                        <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded-full">
                                                            {milestone.title}
                                                        </span>
                                                    </div>
                                                    <p className="text-neutral-600 leading-relaxed">
                                                        {milestone.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Spacer */}
                                            <div className="hidden md:block w-[calc(50%-2rem)]" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 bg-gradient-to-br from-red-700 to-red-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <Heart className="w-12 h-12 mx-auto mb-8 text-white/80" />
                        <blockquote className="text-2xl sm:text-3xl font-light italic mb-6 leading-relaxed">
                            &quot;{t('home.mother_teresa_quote', 'We feel what we are doing is just a drop in the ocean but the ocean would be less because of that missing drop')}&quot;
                        </blockquote>
                        <cite className="text-lg not-italic font-semibold text-red-100">
                            — {t('home.mother_teresa', 'Mother Teresa')}
                        </cite>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                            <a
                                href="/about/ipl-profile"
                                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold shadow-xl hover:bg-amber-50 hover:scale-105 transition-all duration-300"
                            >
                                View Full Profile
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all duration-300"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

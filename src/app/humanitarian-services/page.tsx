'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'
import { HandHeart, MapPin, X } from 'lucide-react'
import Image from 'next/image'
import { humanitarianEvents, HumanitarianEvent } from '@/data/humanitarian-events'

export default function HumanitarianServices() {
    const { t } = useTranslation()
    const [selectedEvent, setSelectedEvent] = useState<HumanitarianEvent | null>(null)

    return (
        <div className="bg-neutral-50">
            {/* Hero Section */}
            <section className="relative bg-transparent pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden" style={{ minHeight: '280px' }}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src="/Images/page-title_back.jpg"
                        alt="Humanitarian Services background"
                        className="w-[85%] h-full opacity-40 object-contain mx-auto"
                        style={{ objectPosition: 'center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
                </div>
                <div className="relative z-10 container-custom mx-auto text-center px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-neutral-200 shadow-sm animate-fade-in">
                        <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-red-700" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 sm:mb-6 animate-slide-up">
                        {t('nav.humanitarian', 'Humanitarian Services')}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto animate-slide-up px-2" style={{ animationDelay: '0.1s' }}>
                        {t('humanitarian.subtitle', 'Serving Humanity with Love and Compassion')}
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-16">
                <div className="container-custom mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-neutral-900">
                            Humanitarian Events
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {humanitarianEvents.map(event => (
                            <div
                                key={event.id}
                                onClick={() => setSelectedEvent(event)}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden bg-neutral-200">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-xs text-neutral-600 mb-3 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                                        <span className="text-red-700 font-semibold">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-neutral-600">
                                        <MapPin className="w-3 h-3" />
                                        <span className="line-clamp-1">{event.district}, {event.state}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Detail Modal */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <div className="sticky top-0 flex justify-end p-4 bg-white border-b border-neutral-200 z-10">
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 flex items-center justify-center transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div>
                            {/* Image */}
                            <div className="relative h-80 w-full overflow-hidden bg-neutral-200">
                                <Image
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="p-6 md:p-8">
                                <div className="inline-block px-3 py-1 bg-red-50 rounded-full mb-4">
                                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">
                                        {selectedEvent.category}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                                    {selectedEvent.title}
                                </h2>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                                    <span className="font-semibold text-red-700">{selectedEvent.date}</span>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-red-700" />
                                        <span>{selectedEvent.location}</span>
                                    </div>
                                </div>

                                <p className="text-neutral-700 leading-relaxed mb-6">
                                    {selectedEvent.fullDescription}
                                </p>

                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-full font-semibold hover:bg-red-800 transition-colors"
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

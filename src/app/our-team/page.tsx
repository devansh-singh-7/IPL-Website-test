'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/TranslationContext'
import { Users, Shield, Star, Linkedin, Mail } from 'lucide-react'

type Person = {
    name: string
    role: string
    img: string
    email?: string
    linkedin?: string
    link?: string
    phone?: string
}

type TeamSection = {
    title: string
    description: string
    members: Person[]
}

const team: TeamSection[] = [
    {
        title: 'President',
        description: 'Leadership',
        members: [
            { name: 'KARUN. M', role: 'FOUNDER - PRESIDENT, TRUSTEE.', img: '/Images/_Founder_President_Trustee-2.png', email: 'iplmumbai12395@gmail.com', phone: '+91-9892035187', linkedin: '', link: '/about/ipl-presidents-blog' },
        ],
    },
    {
        title: 'Vice Presidents',
        description: 'Supporting Leadership',
        members: [
            { name: 'Member Name 1', role: 'Vice President', img: 'https://api.dicebear.com/7.x/initials/svg?seed=VP1', email: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Vice President', img: 'https://api.dicebear.com/7.x/initials/svg?seed=VP2', email: '', linkedin: '' },
        ],
    },
    {
        title: 'General Secretary & Treasurer',
        description: 'Administration',
        members: [
            { name: 'Member Name', role: 'General Secretary', img: 'https://api.dicebear.com/7.x/initials/svg?seed=GS', email: '', linkedin: '' },
            { name: 'Member Name', role: 'Treasurer', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Treasurer', email: '', linkedin: '' },
        ],
    },
    {
        title: 'Joint Secretary',
        description: 'Administrative Support',
        members: [
            { name: 'Member Name', role: 'Joint Secretary', img: 'https://api.dicebear.com/7.x/initials/svg?seed=JS', email: '', linkedin: '' },
        ],
    },
    {
        title: 'Trustees',
        description: 'Governance & Oversight',
        members: [
            { name: 'Member Name 1', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee1', email: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee2', email: '', linkedin: '' },
            { name: 'Member Name 3', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee3', email: '', linkedin: '' },
            { name: 'Member Name 4', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee4', email: '', linkedin: '' },
        ],
    },
    {
        title: 'Managing Committee Members',
        description: 'Strategic Planning & Execution',
        members: [
            { name: 'Bhaskar', role: 'Managing Committee Member', img: '/Images/bhaskar.jpg', email: 'friendselectronics75@gmail.com', linkedin: '' },
            { name: 'Member Name 2', role: 'Managing Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MCM2', email: '', linkedin: '' },
            { name: 'Member Name 3', role: 'Managing Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MCM3', email: '', linkedin: '' },
            { name: 'Member Name 4', role: 'Managing Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MCM4', email: '', linkedin: '' },
            { name: 'Member Name 5', role: 'Managing Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MCM5', email: '', linkedin: '' },
            { name: 'Member Name 6', role: 'Managing Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MCM6', email: '', linkedin: '' },
            { name: 'Member Name 7', role: 'Managing Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=MCM7', email: '', linkedin: '' },
        ],
    },
    {
        title: 'Co-Ordinators',
        description: 'Coordination & Support',
        members: [
            { name: 'Member Name 1', role: 'Co-Ordinator', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Coord1', email: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Co-Ordinator', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Coord2', email: '', linkedin: '' },
        ],
    },
]

const Card: React.FC<{ person: Person }> = ({ person }) => {
    const handleClick = () => {
        if (person.link) {
            window.location.href = person.link
        }
    }

    return (
        <div
            className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-100 text-center relative overflow-hidden ${person.link ? 'cursor-pointer' : ''}`}
            onClick={handleClick}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

            <div className="w-56 h-56 mx-auto mb-4 rounded-xl p-1.5 bg-linear-to-br from-red-100 to-red-50 group-hover:from-red-600 group-hover:to-red-800 transition-colors duration-300">
                <div className="w-full h-full rounded-lg overflow-hidden bg-white relative">
                    <Image
                        src={person.img}
                        alt={`${person.name} photo`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="224px"
                    />
                </div>
            </div>

            <h3 className="text-lg font-bold text-neutral-900 mb-1">{person.name}</h3>
            <p className="text-red-700 font-medium mb-4 text-sm">{person.role}</p>

            <div className="flex items-center justify-center gap-3">
                {(person.linkedin || person.email) ? (
                    <>
                        {person.linkedin && (
                            <a
                                href={person.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-10 h-10 rounded-full bg-neutral-50 hover:bg-blue-600 text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        )}
                        {person.email && (
                            <a
                                href={
                                    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                                        person.email
                                    )}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-10 h-10 rounded-full bg-neutral-50 hover:bg-red-700 text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        )}
                    </>
                ) : (
                    <span className="h-10" /> // Spacer to keep height consistent if no links
                )}
            </div>
            {person.phone && (
                <p className="text-neutral-600 text-sm mt-2">{person.phone}</p>
            )}
        </div>
    )
}

export default function OurTeam() {
    const { t } = useTranslation()
    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Hero */}
            <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 pb-8 border-b border-neutral-100 overflow-hidden" style={{ minHeight: '320px' }}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src="/Images/page-title_back.jpg"
                        alt="Our team background"
                        className="w-[85%] h-full opacity-50 object-contain mx-auto"
                        style={{ objectPosition: 'center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.05)' }} />
                </div>
                <div className="relative z-10 container-custom mx-auto text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6 animate-fade-in">
                        <Users className="w-4 h-4 text-red-700" />
                        <span className="text-sm font-semibold text-red-800">{t('ourteam.badge', 'Leadership & Volunteers')}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-6 animate-slide-up">
                        {t('ourteam.title', 'Our Team')}
                    </h1>

                    <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('ourteam.subtitle', 'The people who nurture the spirit of Love, Friendship, and Humanity')}
                    </p>
                </div>
            </section>

            {/* Team Sections */}
            {team.map((section, sectionIndex) => (
                <section key={sectionIndex} className="py-12 border-b border-neutral-100 last:border-b-0">
                    <div className="container-custom mx-auto">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-3 border border-neutral-100">
                                <Shield className="w-5 h-5 text-red-700" />
                                <span className="text-sm font-bold text-neutral-700 uppercase tracking-wide">{section.title}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-3">{section.description}</h2>
                        </div>

                        <div className={`grid gap-6 ${section.members.length === 1 ? 'sm:grid-cols-1 max-w-sm mx-auto' : section.members.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' : section.members.length <= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3 lg:grid-cols-5'}`}>
                            {section.members.map((person, i) => (
                                <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                                    <Card person={person} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

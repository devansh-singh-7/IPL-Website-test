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
        title: 'Board of Trustees',
        description: 'Governance & Oversight',
        members: [
            { name: 'Member Name 1', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee1', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee2', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 3', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee3', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 4', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee4', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 5', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee5', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 6', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee6', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 7', role: 'Trustee', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Trustee7', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'President',
        description: 'Leadership',
        members: [
            { name: 'KARUN. M', role: 'FOUNDER - PRESIDENT, TRUSTEE.', img: '/Images/_Founder_President_Trustee-2.png', email: 'iplmumbai12395@gmail.com', phone: '+91-9892035187', linkedin: '', link: '/about/ipl-presidents-blog' },
        ],
    },
    {
        title: 'General Secretary',
        description: 'Administration',
        members: [
            { name: 'Member Name', role: 'General Secretary', img: 'https://api.dicebear.com/7.x/initials/svg?seed=GS', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'Treasurer',
        description: 'Financial Management',
        members: [
            { name: 'Member Name', role: 'Treasurer', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Treasurer', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'Vice Presidents',
        description: 'Supporting Leadership',
        members: [
            { name: 'Member Name 1', role: 'Vice President', img: 'https://api.dicebear.com/7.x/initials/svg?seed=VP1', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Vice President', img: 'https://api.dicebear.com/7.x/initials/svg?seed=VP2', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'Joint Secretaries',
        description: 'Administrative Support',
        members: [
            { name: 'Member Name 1', role: 'Joint Secretary', img: 'https://api.dicebear.com/7.x/initials/svg?seed=JS1', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Joint Secretary', img: 'https://api.dicebear.com/7.x/initials/svg?seed=JS2', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'Committee Members',
        description: 'Strategic Planning & Execution',
        members: [
            { name: 'Bhaskar', role: 'Committee Member', img: '/Images/bhaskar.jpg', email: 'friendselectronics75@gmail.com', phone: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM2', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 3', role: 'Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM3', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 4', role: 'Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM4', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 5', role: 'Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM5', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 6', role: 'Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM6', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 7', role: 'Committee Member', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM7', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'Coordinators',
        description: 'Regional Coordination',
        members: [
            { name: 'Member Name 1', role: 'Coordinator - New Delhi', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Coord1', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Coordinator - Pudokotai', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Coord2', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 3', role: 'Depute Coordinator - Krishnagiri', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Coord3', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'Organisers',
        description: 'Event Organisation & Management',
        members: [
            { name: 'Member Name 1', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org1', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org2', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 3', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org3', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 4', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org4', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 5', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org5', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 6', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org6', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 7', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org7', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 8', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org8', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 9', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org9', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 10', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org10', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 11', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org11', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 12', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org12', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 13', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org13', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 14', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org14', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 15', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org15', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 16', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org16', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 17', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org17', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 18', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org18', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 19', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org19', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 20', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org20', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 21', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org21', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 22', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org22', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 23', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org23', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 24', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org24', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 25', role: 'Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=Org25', email: '', phone: '', linkedin: '' },
        ],
    },
    {
        title: 'Overseas Organisers',
        description: 'International Operations',
        members: [
            { name: 'Member Name 1', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO1', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 2', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO2', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 3', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO3', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 4', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO4', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 5', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO5', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 6', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO6', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 7', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO7', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 8', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO8', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 9', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO9', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 10', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO10', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 11', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO11', email: '', phone: '', linkedin: '' },
            { name: 'Member Name 12', role: 'Overseas Organiser', img: 'https://api.dicebear.com/7.x/initials/svg?seed=OO12', email: '', phone: '', linkedin: '' },
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

                        <div className={`grid gap-6 justify-items-center ${section.members.length === 1 ? 'sm:grid-cols-1 max-w-sm mx-auto' : section.members.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' : section.members.length <= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
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

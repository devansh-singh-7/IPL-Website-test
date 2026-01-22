'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '../contexts/TranslationContext'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import GlobalSearch from './ui/GlobalSearch'

type Props = Record<string, never>
type NavLink = {
  path: string
  label: string
  hasDropdown?: boolean
  dropdownItems?: { path: string; label: string }[]
}

const Header: React.FC<Props> = () => {
  const { lang, toggleLanguage, t } = useTranslation()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks: NavLink[] = [
    { path: '/', label: 'nav.home' },
    {
      path: '/about',
      label: 'nav.about',
      hasDropdown: true,
      dropdownItems: [
        { path: '/about/ipl-profile', label: 'nav.iplProfile' },
        { path: '/about/history', label: 'nav.history' },
        { path: '/about/ipl-presidents-blog', label: 'nav.presidentBlog' },
      ],
    },
    { path: '/our-team', label: 'nav.team' },
    { path: '/humanitarian-services', label: 'nav.humanitarian' },
    {
      path: '/news-events',
      label: 'nav.news',
      hasDropdown: true,
      dropdownItems: [
        { path: '/news-events', label: 'nav.news' },
        { path: '/friendship-meet', label: 'nav.meet' },
      ],
    },
    { path: '/contact', label: 'nav.contact' },
  ] as const

  const isActive = (path: string) => pathname === path

  const isAboutActive = () => {
    return (
      pathname === '/about/ipl-profile' ||
      pathname === '/about/history' ||
      pathname === '/about/ipl-presidents-blog'
    )
  }

  const isNewsActive = () => {
    return (
      pathname === '/news-events' ||
      pathname === '/friendship-meet'
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-red-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-red-800 py-4'
        }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-yellow-400 transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 flex items-center justify-between gap-2 max-w-screen-2xl overflow-hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50 shrink-0 min-w-0">
          <div className="w-10 h-10 bg-linear-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 border border-white/10 group-hover:scale-105 shrink-0">
            IPL
          </div>
          <span className="font-bold text-base lg:text-lg tracking-tight text-white group-hover:text-red-100 transition-colors hidden md:block truncate max-w-[200px] lg:max-w-none">
            {t('home.hero_title', "Indian Penpals' League")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 flex-nowrap shrink min-w-0 overflow-hidden">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.path}
                className="relative group shrink min-w-0"
                onMouseEnter={() => {
                  if (link.path === '/about') setAboutDropdownOpen(true)
                  if (link.path === '/news-events') setNewsDropdownOpen(true)
                }}
                onMouseLeave={() => {
                  if (link.path === '/about') setAboutDropdownOpen(false)
                  if (link.path === '/news-events') setNewsDropdownOpen(false)
                }}
              >
                <button
                  className={`
                    px-2.5 py-1.5 text-xs xl:text-sm font-medium rounded-full flex items-center gap-1 transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] xl:max-w-none
                    ${(link.path === '/about' && isAboutActive()) || (link.path === '/news-events' && isNewsActive())
                      ? 'text-white bg-white/20 shadow-inner'
                      : 'text-white/80 hover:text-white hover:bg-white/10'}
                  `}
                >
                  {t(link.label as string)}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${(link.path === '/about' && aboutDropdownOpen) || (link.path === '/news-events' && newsDropdownOpen) ? 'rotate-180' : ''
                    }`} />
                </button>

                {/* Dropdown - Enhanced animation and styling */}
                <div
                  className={`
                    absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60 transform transition-all duration-300 origin-top z-50
                    ${(link.path === '/about' && aboutDropdownOpen) || (link.path === '/news-events' && newsDropdownOpen)
                      ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto'
                      : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}
                  `}
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden p-1.5 border border-white/20">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`
                          block px-4 py-3 text-sm rounded-xl transition-all duration-200
                          ${isActive(item.path)
                            ? 'bg-red-50 text-red-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-red-600 hover:translate-x-1'}
                        `}
                        onClick={() => {
                          setAboutDropdownOpen(false)
                          setNewsDropdownOpen(false)
                        }}
                      >
                        {item.label.startsWith('nav.') ? t(item.label) : item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                className={`
                  px-2.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-300 shrink whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] xl:max-w-none
                  ${isActive(link.path)
                    ? 'text-white bg-white/20 shadow-inner'
                    : link.path === '/contact'
                      ? 'bg-white text-red-700 hover:bg-red-50 hover:scale-105 shadow-md font-bold' // Highlight Contact button
                      : 'text-white/80 hover:text-white hover:bg-white/10'}
                `}
              >
                {t(link.label as string)}
              </Link>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 relative z-50 shrink-0">
          {/* Desktop Search - Expandable */}
          <div className="hidden xl:flex items-center group relative shrink-0">
            <GlobalSearch
              variant="default"
              placeholder={t('header.search_placeholder', 'Search...')}
              onSelect={() => setMobileMenuOpen(false)}
            />
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-300 group shrink-0"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
            <span className="text-xs font-bold uppercase min-w-6 text-center">
              {lang}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors active:scale-95"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Enhanced styling */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 bg-linear-to-b from-red-900 to-red-950 text-white backdrop-blur-xl transition-all duration-500 ease-in-out
          ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        `}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6 overflow-y-auto">
          {/* Mobile Search */}
          <div className="mb-8">
            <GlobalSearch
              variant="mobile"
              placeholder={t('header.search_placeholder', 'Search...')}
              onSelect={() => setMobileMenuOpen(false)}
            />
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link, idx) =>
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="space-y-2 animate-in slide-in-from-right-8 fade-in duration-500"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="px-4 py-2 text-xs font-bold text-white/40 uppercase tracking-widest">
                    {t(link.label as string)}
                  </div>
                  <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`
                          block px-5 py-3.5 text-base font-medium transition-all border-b border-white/5 last:border-0
                          ${isActive(item.path)
                            ? 'bg-red-600 text-white pl-7'
                            : 'text-white/80 hover:bg-white/5 hover:pl-7'}
                        `}
                      >
                        {item.label.startsWith('nav.') ? t(item.label) : item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    block px-5 py-4 rounded-2xl text-lg font-medium transition-all animate-in slide-in-from-right-8 fade-in duration-500
                    ${isActive(link.path)
                      ? 'bg-white text-red-900 shadow-lg scale-[1.02]'
                      : 'text-white/90 hover:bg-white/5 border border-transparent hover:border-white/10'}
                  `}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {t(link.label as string)}
                </Link>
              )
            )}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Indian Penpals&apos; League
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
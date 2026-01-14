'use client'

import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from '@/contexts/TranslationContext'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

type Errors = Record<string, string>

const IconBox: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-50 text-red-700 shrink-0">
        {children}
    </div>
)

export default function Contact() {
    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState<Errors>({})
    const [status, setStatus] = useState({ loading: false, success: false })
    const [honeypot, setHoneypot] = useState('')
    const [cooldownUntil, setCooldownUntil] = useState(0)
    const [now, setNow] = useState<number>(0)

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (status.success) {
            const timer = setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000)
            return () => clearTimeout(timer)
        }
    }, [status.success])

    const validate = () => {
        const newErrors: Errors = {}
        if (!name.trim()) newErrors.name = t('contact.error_name_required', 'Please enter your name')
        if (!email.trim()) {
            newErrors.email = t('contact.error_email_required', 'Please enter your email')
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = t('contact.error_email_invalid', 'Please enter a valid email address')
        }
        if (!subject.trim()) {
            newErrors.subject = t('contact.error_subject_required', 'Please enter a subject')
        } else if (subject.trim().length < 3) {
            newErrors.subject = t('contact.error_subject_short', 'Subject is too short')
        } else if (subject.trim().length > 120) {
            newErrors.subject = t('contact.error_subject_long', 'Subject is too long')
        }
        if (!message.trim()) {
            newErrors.message = t('contact.error_message_required', 'Please enter a message')
        } else if (message.trim().length < 10) {
            newErrors.message = t('contact.error_message_short', 'Message is too short')
        }
        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (cooldownUntil && now < cooldownUntil) return
        setStatus({ loading: false, success: false })

        if (honeypot) {
            console.warn('Honeypot triggered; aborting send')
            return
        }

        const newErrors = validate()
        setErrors(newErrors)
        if (Object.keys(newErrors).length) {
            const summary = document.getElementById('form-error-summary') as HTMLDivElement | null
            if (summary) summary.focus()
            return
        }

        try {
            setStatus({ loading: true, success: false })
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined

            if (!serviceId || !templateId || !publicKey) {
                console.warn('EmailJS env vars missing; skipping real send')
                await new Promise((r) => setTimeout(r, 500))
                setStatus({ loading: false, success: true })
                setName(''); setEmail(''); setSubject(''); setMessage('')
                setErrors({})
                setCooldownUntil(Date.now() + 5000)
                return
            }

            const templateParams = {
                from_name: name,
                reply_to: email,
                subject,
                message,
                to_email: 'iplmumbai12395@gmail.com',
            }

            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            setStatus({ loading: false, success: true })
            setName(''); setEmail(''); setSubject(''); setMessage('')
            setErrors({})
            setCooldownUntil(Date.now() + 5000)
        } catch (err) {
            console.error(err)
            setStatus({ loading: false, success: false })
            setErrors({ submit: t('contact.error_submit', 'Something went wrong. Please try again later.') })
        }
    }

    const addressLines = (t('footer.address', `103, Starview Apts., Opp. Corporate Park,\nV.N.Purav Marg, Chembur,\nMumbai - 400071, India`) || '').split('\n')

    return (
        <div className="bg-neutral-50 text-neutral-900">
            {/* Hero */}
            <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 pb-12 overflow-hidden" style={{ minHeight: '320px' }}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                        <img
                            src="/Images/page-title_back.jpg"
                            alt="Contact background"
                            className="w-[85%] h-full opacity-40 object-contain mx-auto"
                            style={{ objectPosition: 'center' }}
                        />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
                </div>
                <div className="relative z-10 container-custom mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-6 animate-fade-in">
                        <Mail className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-semibold tracking-wider uppercase text-neutral-600">{t('contact.badge', 'Get In Touch')}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 animate-slide-up">
                        {t('nav.contact', 'Contact Us')}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('contact.subtitle', 'We would love to hear from you. Reach out and we will respond soon.')}
                    </p>
                </div>
            </section>

            {/* Main Contact Area */}
            <section className="mt-8 pb-24">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Left: Form */}
                        <div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 md:p-10 animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                {t('contact.send_message', 'Send Us a Message')}
                            </h2>
                            <p className="text-neutral-600 mb-8 max-w-xl leading-relaxed">
                                {t('contact.info_intro', 'We are happy to help. Use the form and we will get back to you promptly.')}
                            </p>

                            {status.success && (
                                <div role="status" className="rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3 mb-6">
                                    {t('contact.success_message', 'Thanks — your message has been sent.')}
                                </div>
                            )}

                            {Object.keys(errors).length > 0 && (
                                <div id="form-error-summary" tabIndex={-1} className="mb-6 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-3" aria-live="assertive">
                                    <p className="font-semibold">{t('contact.form_errors_heading', 'There are problems with your submission')}</p>
                                    <ul className="mt-1 list-disc pl-5">
                                        {Object.entries(errors).map(([k, v]) => v && <li key={k}>{v}</li>)}
                                    </ul>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                <div className="hidden" aria-hidden="true">
                                    <label htmlFor="website">Website</label>
                                    <input
                                        id="website"
                                        name="website"
                                        type="text"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-neutral-700">{t('contact.form_name', 'Your Name')}</label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(s => ({ ...s, name: '' })) }}
                                            placeholder={t('contact.form_name_placeholder', 'Enter your name')}
                                            required
                                            aria-required="true"
                                            aria-invalid={errors.name ? 'true' : 'false'}
                                            aria-describedby={errors.name ? 'name-error' : undefined}
                                            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white text-neutral-900 px-4 py-2.5 shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-600"
                                        />
                                        {errors.name && <p id="name-error" className="mt-1 text-sm text-red-700">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700">{t('contact.form_email', 'Email Address')}</label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(s => ({ ...s, email: '' })) }}
                                            placeholder={t('contact.form_email_placeholder', 'Enter your email')}
                                            required
                                            aria-required="true"
                                            aria-invalid={errors.email ? 'true' : 'false'}
                                            aria-describedby={errors.email ? 'email-error' : undefined}
                                            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white text-neutral-900 px-4 py-2.5 shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-600"
                                        />
                                        {errors.email && <p id="email-error" className="mt-1 text-sm text-red-700">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700">{t('contact.form_subject', 'Subject')}</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        value={subject}
                                        onChange={(e) => { setSubject(e.target.value); if (errors.subject) setErrors(s => ({ ...s, subject: '' })) }}
                                        placeholder={t('contact.form_subject_placeholder', 'Enter subject')}
                                        required
                                        aria-required="true"
                                        aria-invalid={errors.subject ? 'true' : 'false'}
                                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                                        className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white text-neutral-900 px-4 py-2.5 shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-600"
                                    />
                                    {errors.subject && <p id="subject-error" className="mt-1 text-sm text-red-700">{errors.subject}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700">{t('contact.form_message', 'Message')}</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        value={message}
                                        onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors(s => ({ ...s, message: '' })) }}
                                        placeholder={t('contact.form_message_placeholder', 'Enter your message')}
                                        required
                                        aria-required="true"
                                        aria-invalid={errors.message ? 'true' : 'false'}
                                        aria-describedby={errors.message ? 'message-error' : undefined}
                                        className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white text-neutral-900 px-4 py-3 shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-600"
                                    />
                                    {errors.message && <p id="message-error" className="mt-1 text-sm text-red-700">{errors.message}</p>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={status.loading || (cooldownUntil ? now < cooldownUntil : false)}
                                        aria-disabled={status.loading || (cooldownUntil ? now < cooldownUntil : false)}
                                        className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition ${(status.loading || (cooldownUntil ? now < cooldownUntil : false)) ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-0.5'} bg-red-700 hover:bg-red-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-200`}
                                    >
                                        {status.loading && (
                                            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                        )}
                                        {(cooldownUntil ? now < cooldownUntil : false) && !status.loading
                                            ? t('contact.cooldown', 'Please wait...')
                                            : status.loading
                                                ? t('contact.sending', 'Sending...')
                                                : t('contact.form_submit', 'Send Message')}
                                    </button>
                                    {errors.submit && <p className="mt-2 text-sm text-red-700">{errors.submit}</p>}
                                </div>
                            </form>
                        </div>

                        {/* Right: Contact Info */}
                        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-red-600" /> {t('contact.address_title', 'Address')}</h3>
                                <address className="not-italic text-neutral-700 leading-relaxed mb-4">
                                    {addressLines.map((line, i) => <div key={i}>{line}</div>)}
                                </address>
                                <a
                                    href="https://maps.app.goo.gl/EfjFozQeVMFQEN9V8"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm hover:gap-3 transition"
                                >
                                    {t('contact.open_in_maps', 'Open in Maps')}
                                </a>
                            </div>
                            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 space-y-5">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-xs uppercase font-semibold tracking-wider text-neutral-500 mb-1">{t('contact.phone_title', 'Phone')}</p>
                                        <a href="tel:+919892035187" className="text-neutral-800 font-medium">+91 9892035187</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-xs uppercase font-semibold tracking-wider text-neutral-500 mb-1">{t('footer.email', 'Email')}</p>
                                        <a href="mailto:iplmumbai12395@gmail.com" className="text-neutral-800 font-medium">iplmumbai12395@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-xs uppercase font-semibold tracking-wider text-neutral-500 mb-1">{t('contact.hours_title', 'Office Hours')}</p>
                                        <p className="text-neutral-700 text-sm">{t('contact.hours_detail', 'Monday - Saturday: 10:00 AM - 6:00 PM')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm h-64">
                                <iframe
                                    src="https://www.google.com/maps?q=103,+Starview+Apts,+Opp.+Corporate+Park,+V.N.Purav+Marg,+Chembur,+Mumbai+400071&output=embed"
                                    title={t('contact.map_title', 'Office location map')}
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    style={{ border: 0 }}
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

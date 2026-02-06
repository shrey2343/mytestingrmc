import {
    Star,
    Check,
    X,
    Shield,
    Award,
    AlertTriangle,
    FileText,
    TrendingUp,
    GraduationCap,
    MessageCircle,
    CheckCircle2
} from 'lucide-react'
import Layout from "@/components/layout/Layout";

import { useState, useEffect, CSSProperties } from 'react'
import './GlobalAdmissionStandout.css'

function GlobalAdmissionStandout() {
    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    useEffect(() => {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                }
            })
        }, observerOptions)

        // Observe comparison cards
        const comparisonCards = document.querySelectorAll<HTMLElement>('.comparison-card')
        comparisonCards.forEach((card, index) => {
            card.style.setProperty('--card-delay', `${index * 0.15}s`)
            observer.observe(card)
        })

        // Observe breakdown steps
        const breakdownSteps = document.querySelectorAll<HTMLElement>('.breakdown-step')
        breakdownSteps.forEach((step, index) => {
            step.style.setProperty('--step-delay', `${index * 0.3}s`)
            observer.observe(step)
        })

        // Observe testimonial cards
        const testimonialCards = document.querySelectorAll<HTMLElement>('.testimonial-card')
        testimonialCards.forEach((card, index) => {
            card.style.setProperty('--testimonial-delay', `${index * 0.2}s`)
            observer.observe(card)
        })

        // Observe section headers
        const sectionHeaders = document.querySelectorAll<HTMLElement>('.section-header, .breakdown-header, .success-header, .mentor-clinic-header, .faq-header, .showcase-header')
        sectionHeaders.forEach((header, index) => {
            header.style.setProperty('--header-delay', `${index * 0.1}s`)
            observer.observe(header)
        })

        // Observe applicant columns
        const applicantColumns = document.querySelectorAll<HTMLElement>('.applicant-column')
        applicantColumns.forEach((column, index) => {
            column.style.setProperty('--column-delay', `${index * 0.2}s`)
            observer.observe(column)
        })

        // Observe showcase cards
        const showcaseCards = document.querySelectorAll<HTMLElement>('.showcase-card')
        showcaseCards.forEach((card, index) => {
            card.style.setProperty('--showcase-delay', `${index * 0.2}s`)
            observer.observe(card)
        })

        // Observe list items
        const listContainers = document.querySelectorAll<HTMLElement>('.card-list, .applicant-list, .step-benefits')
        listContainers.forEach(container => {
            const items = container.querySelectorAll<HTMLElement>('.card-item, .applicant-item, .step-benefit')
            items.forEach((item, index) => {
                item.style.setProperty('--item-delay', '0.3s')
                item.style.setProperty('--item-index', `${index}`)
                observer.observe(item)
            })
        })

        return () => {
            const allElements = [
                ...comparisonCards,
                ...breakdownSteps,
                ...testimonialCards,
                ...sectionHeaders,
                ...applicantColumns,
                ...showcaseCards
            ]
            allElements.forEach(element => observer.unobserve(element))
        }
    }, [])

    return (
        <Layout>
        <div className="page">
            {/* SECTION 1 – HERO */}
            <header className="modern-hero-section">
                {/* Animated Background Layers */}
                <div className="hero-animated-bg">
                    {/* Animated Gradient Background */}
                    <div className="animated-gradient"></div>

                    {/* Rotating Square */}
                    <div className="floating-shape square-shape"></div>

                    {/* Pulsing Circle */}
                    <div className="floating-shape circle-shape"></div>

                    {/* Blurred Gradient Orbs */}
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>

                    {/* Animated Grid Overlay */}
                    <div className="grid-overlay"></div>

                    {/* Top to Bottom Overlay Gradient */}
                    <div className="overlay-gradient-depth"></div>
                </div>

                <div className="hero-container">
                    <div className="hero-content-wrapper">
                        {/* Left Content Block - Slides in from left */}
                        <div className="hero-text-block slide-in-left">
                            {/* Badge Pill */}
                            <div className="hero-badge-pill">
                                <span className="badge-icon">🎓</span>
                                <span>Ivy League & Top University Admissions</span>
                            </div>

                            {/* Heading */}
                            <h1 className="hero-heading">
                                <span className="heading-white" style={{ fontSize: "2rem" }}>Build a Standout Application for</span>
                                <span className="gradient-text">Your Top Global University Dream</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="hero-subtitle-text">
                                Get published research added to your academic profile with step-by-step mentorship — even if you've <span style={{ color: "#ffffffff" }}>never done research before.</span>
                            </p>

                            {/* Tag Pills */}
                            <div className="hero-tags">
                                <span className="tag-pill">Research Mentorship</span>
                                <span className="tag-pill">Publication Support</span>
                                <span className="tag-pill">Profile Building</span>
                            </div>

                            {/* CTA Button */}
                            <button
                                className="hero-cta-modern"
                                onClick={() => window.open('https://wa.me/918982188299', '_blank')}
                            >
                                <span>Connect through WhatsApp</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Wave SVG at bottom - UNTOUCHED */}
                <div className="wave-container">
                    <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,160L60,186.7C120,213,240,267,360,277.3C480,288,600,256,720,234.7C840,213,960,203,1080,208C1200,213,1320,235,1380,245.3L1440,256L1440,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </header>

            {/* SECTION 2 - THE PROBLEM */}
            <section className="why-stand-out">
                <div className="section-header">
                    <h2 className='section-title'>
                        <span className='gradient-text'>
                            Why Most Ivy League & Top University <br />
                            Applications Don't Stand Out
                        </span>
                    </h2>
                </div>

                <div className="comparison-cards">
                    <div className="comparison-card problem-card">
                        <div className="card-icon problem-icon">
                            <X size={24} />
                        </div>
                        <h3 className="card-title">The Reality</h3>
                        <p className="card-description">
                            Every year, thousands of students apply with excellent grades, strong test scores, and similar extracurriculars. Yet only a few are admitted.
                        </p>
                        <ul className="card-list">
                            <li className="card-item problem-item" style={{ "--item-index": 0 } as CSSProperties}>
                                <X size={16} />
                                <span>Most applications look the same</span>
                            </li>
                            <li className="card-item problem-item" style={{ "--item-index": 1 } as CSSProperties}>
                                <X size={16} />
                                <span>Focus on scores, not thinking</span>
                            </li>
                            <li className="card-item problem-item" style={{ "--item-index": 2 } as CSSProperties}>
                                <X size={16} />
                                <span>No academic depth shown</span>
                            </li>
                        </ul>
                    </div>

                    <div className="comparison-card challenge-card">
                        <div className="card-icon solution-icon">
                            <Shield size={24} />
                        </div>
                        <h3 className="card-title">The Challenge</h3>
                        <p className="card-description">
                            Admissions committees now focus on how students think, not just what they score. Most schools don't teach students how to show academic depth beyond the classroom.
                        </p>
                        <ul className="card-list">
                            <li className="card-item solution-item" style={{ "--item-index": 0 } as CSSProperties}>
                                <Check size={16} />
                                <span>Demonstrate thinking ability</span>
                            </li>
                            <li className="card-item solution-item" style={{ "--item-index": 1 } as CSSProperties}>
                                <Check size={16} />
                                <span>Show academic initiative</span>
                            </li>
                            <li className="card-item solution-item" style={{ "--item-index": 2 } as CSSProperties}>
                                <Check size={16} />
                                <span>Stand out from the crowd</span>
                            </li>
                        </ul>
                    </div>

                    <div className="comparison-card outcome-card">
                        <div className="card-icon outcome-icon">
                            <Award size={24} />
                        </div>
                        <h3 className="card-title">The Impact</h3>
                        <p className="card-description">
                            As a result, many capable students fail to stand out. Standing out has never mattered more.
                        </p>
                        <ul className="card-list">
                            <li className="card-item outcome-item" style={{ "--item-index": 0 } as CSSProperties}>
                                <Star size={16} />
                                <span>Differentiation is critical</span>
                            </li>
                            <li className="card-item outcome-item" style={{ "--item-index": 1 } as CSSProperties}>
                                <Star size={16} />
                                <span>Research shows capability</span>
                            </li>
                            <li className="card-item outcome-item" style={{ "--item-index": 2 } as CSSProperties}>
                                <Star size={16} />
                                <span>Transform your application</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 3 - THE REFRAME */}
            <section className="applicant-comparison">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className='gradient-text'>
                            What Top Universities Look for <br />
                            Beyond Grades
                        </span>
                    </h2>
                    <p className="section-subtitle">
                        Top universities seek students who show curiosity beyond textbooks, explore ideas deeply, take academic initiative, and are ready for research-driven learning.
                    </p>
                </div>

                <div className="comparison-container">
                    <div className="applicant-column traditional-column">
                        <h3 className="applicant-title">What They Look For</h3>
                        <ul className="applicant-list">
                            <li className="applicant-item traditional-item">
                                <div className="item-icon traditional-icon"></div>
                                <span>Show curiosity beyond textbooks</span>
                            </li>
                            <li className="applicant-item traditional-item">
                                <div className="item-icon traditional-icon"></div>
                                <span>Explore ideas deeply</span>
                            </li>
                            <li className="applicant-item traditional-item">
                                <div className="item-icon traditional-icon"></div>
                                <span>Take academic initiative</span>
                            </li>
                            <li className="applicant-item traditional-item">
                                <div className="item-icon traditional-icon"></div>
                                <span>Ready for research-driven learning</span>
                            </li>
                        </ul>
                        <div className="applicant-result traditional-result">
                            <AlertTriangle size={16} />
                            <span>One of the strongest ways to demonstrate this is through research</span>
                        </div>
                    </div>

                    <div className="applicant-column research-column">
                        <h3 className="applicant-title research-title">Research Demonstrates</h3>
                        <ul className="applicant-list">
                            <li className="applicant-item research-item">
                                <div className="item-icon research-icon"></div>
                                <span>Independent thinking</span>
                            </li>
                            <li className="applicant-item research-item">
                                <div className="item-icon research-icon"></div>
                                <span>Higher academic level work</span>
                            </li>
                            <li className="applicant-item research-item">
                                <div className="item-icon research-icon"></div>
                                <span>Real-world problem engagement</span>
                            </li>
                            <li className="applicant-item research-item">
                                <div className="item-icon research-icon"></div>
                                <span>Intellectual curiosity</span>
                            </li>
                        </ul>
                        <div className="applicant-result research-result">
                            <Check size={16} />
                            <span>Research turns strong applications into memorable ones</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 – THE SOLUTION */}
            <section className="workshop-breakdown">
                <div className="breakdown-header">
                    <span className="section-badge">THE SOLUTION</span>
                    <h2 className="section-title">
                        <span className='gradient-text'>How We Help You Stand Out With Research</span>
                    </h2>
                    <p className="section-subtitle">
                        We guide students through the complete research paper and publication process — step by step. No prior research experience required. No confusion. No guesswork.
                    </p>
                </div>

                <div className="solution-cards-grid">
                    {/* Card 1 - Topic Selection */}
                    <div className="solution-card">
                        <div className="solution-card-icon">
                            <FileText size={32} />
                        </div>
                        <div className="solution-card-number">01</div>
                        <h3 className="solution-card-title">Topic Selection</h3>
                        <p className="solution-card-description">
                            Aligned with your interests and university goals.
                        </p>
                        <ul className="solution-card-benefits">
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Find topics that match your academic interests</span>
                            </li>
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Align research with your university application goals</span>
                            </li>
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>No prior research experience required</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 - Research & Writing */}
                    <div className="solution-card solution-card-featured">
                        <div className="solution-card-badge">Most Popular</div>
                        <div className="solution-card-icon">
                            <TrendingUp size={32} />
                        </div>
                        <div className="solution-card-number">02</div>
                        <h3 className="solution-card-title">Research & Writing Guidance</h3>
                        <p className="solution-card-description">
                            Clear support for structure, writing, and revisions.
                        </p>
                        <ul className="solution-card-benefits">
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Step-by-step guidance through the research process</span>
                            </li>
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Support for paper structure and academic writing</span>
                            </li>
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Regular feedback and revisions</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 - Publication */}
                    <div className="solution-card">
                        <div className="solution-card-icon">
                            <GraduationCap size={32} />
                        </div>
                        <div className="solution-card-number">03</div>
                        <h3 className="solution-card-title">Publication & Application Positioning</h3>
                        <p className="solution-card-description">
                            Submission support for international journals or conferences and guidance on showcasing research in applications.
                        </p>
                        <ul className="solution-card-benefits">
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Journal and conference submission support</span>
                            </li>
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Guidance on highlighting research in applications</span>
                            </li>
                            <li className="solution-benefit">
                                <Check size={16} />
                                <span>Build a strong research profile for interviews</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="breakdown-footer">
                    <div className="footer-highlight">
                        <Award size={24} />
                        <p>You focus on learning. We guide every step.</p>
                    </div>
                    <button className="breakdown-cta-btn">
                        <span>BOOK FREE PROFILE REVIEW</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* SECTION - SUCCESS STORIES SHOWCASE */}
            <section className="success-showcase">
                <div className="showcase-header">
                    <span className="section-badge">SUCCESS STORIES</span>
                    <h2 className="section-title"><span className='gradient-text'>Students Just Like You Published Their Work</span></h2>
                    <p className="section-subtitle">These students started with zero research experience and transformed their college applications.</p>
                </div>

                <div className="showcase-grid">
                    {/* Card 1 */}
                    <div className="showcase-card">
                        <div className="card-header-bar">
                            <div className="header-stars">
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                            </div>
                            <div className="header-icon">
                                <MessageCircle size={20} color="#7c3aed" fill="white" />
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="card-profile-container">
                                <img className="card-profile-img" src="https://img.flexifunnels.com/images/7704/imageremovebgpreview12_uzmjq_482.png" alt="Tashvi Mahajan" />
                            </div>
                            <h3 className="showcase-name">Tashvi Mahajan</h3>
                            <p className="showcase-school">Good Hope School, Hong Kong</p>
                            <p className="showcase-quote">"I never thought I could publish a research paper at my age. The structured approach made it achievable, and now I have a co-authored paper AND a Best Paper Presentation Award! My university applications now stand out from thousands."</p>
                            <div className="card-badges">
                                <div className="card-badge">
                                    <Check size={14} /> <span>Published at ICETBP 2024</span>
                                </div>
                                <div className="card-badge highlight">
                                    <Award size={14} /> <span>Best Paper Award</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="showcase-card">
                        <div className="card-header-bar">
                            <div className="header-stars">
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                            </div>
                            <div className="header-icon">
                                <MessageCircle size={20} color="#7c3aed" fill="white" />
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="card-profile-container">
                                <img className="card-profile-img" src="https://img.flexifunnels.com/images/7704/imageremovebgpreview13_m0njg_499.png" alt="Aadhya Paras Mehta" />
                            </div>
                            <h3 className="showcase-name">Aadhya Paras Mehta</h3>
                            <p className="showcase-school">DPS Surat, India</p>
                            <p className="showcase-quote">"The structured approach made research accessible to me as a high school student. Not only did I co-author a paper, but I also won a Best Paper Presentation Award! My college applications now showcase real academic achievement."</p>
                            <div className="card-badges">
                                <div className="card-badge">
                                    <Check size={14} /> <span>Published at ICETBP 2024</span>
                                </div>
                                <div className="card-badge highlight">
                                    <Award size={14} /> <span>Best Paper Award</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="showcase-card">
                        <div className="card-header-bar">
                            <div className="header-stars">
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                            </div>
                            <div className="header-icon">
                                <MessageCircle size={20} color="#7c3aed" fill="white" />
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="card-profile-container">
                                <img className="card-profile-img" src="https://img.flexifunnels.com/images/7704/imageremovebgpreview14_ewnze_496.png" alt="Vashundhar Nigam" />
                            </div>
                            <h3 className="showcase-name">Vashundhar Nigam</h3>
                            <p className="showcase-school">The Millennium School, India</p>
                            <p className="showcase-quote">"I went from zero research experience to publishing TWO papers and winning a Best Paper Presentation Award. This achievement completely transformed my college applications and opened doors I never thought possible."</p>
                            <div className="card-badges">
                                <div className="card-badge">
                                    <Check size={14} /> <span>2 Papers at ICETBP 2024</span>
                                </div>
                                <div className="card-badge highlight">
                                    <Award size={14} /> <span>Best Paper Award</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 – WHAT YOU GET */}
            <section className="success-stories">
                <div className="success-header">
                    <span className="section-badge">WHAT YOU GET</span>
                    <h2 className="section-title"><span className='gradient-text'>What You Get in the Program</span></h2>
                    <p className="section-subtitle">
                        A complete, guided research experience designed for college admissions.
                    </p>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">

                        <div className="student-info">
                            <h4 className="student-name">Personalized Research Mentorship</h4>
                        </div>
                        <blockquote className="testimonial-quote">
                            Complete research paper support from topic selection to final submission with expert guidance every step of the way.
                        </blockquote>
                        <div className="achievement-badge">
                            <div className="achievement-icon">
                                <FileText size={20} />
                            </div>
                            <div className="achievement-text">
                                <span className="achievement-title">Full Mentorship</span>
                                <span className="achievement-award">Expert Guidance</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="student-info">
                            <h4 className="student-name">Journal & Conference Submission</h4>
                        </div>
                        <blockquote className="testimonial-quote">
                            Submission guidance for international journals or conferences with publication acknowledgment to strengthen your profile.
                        </blockquote>
                        <div className="achievement-badge">
                            <div className="achievement-icon">
                                <TrendingUp size={20} />
                            </div>
                            <div className="achievement-text">
                                <span className="achievement-title">Publication Support</span>
                                <span className="achievement-award">International Journals</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="student-info">
                            <h4 className="student-name">Strong Research Profile</h4>
                        </div>
                        <blockquote className="testimonial-quote">
                            A compelling research profile for applications and interviews that makes you stand out to top universities.
                        </blockquote>
                        <div className="achievement-badge">
                            <div className="achievement-icon">
                                <GraduationCap size={20} />
                            </div>
                            <div className="achievement-text">
                                <span className="achievement-title">Profile Building</span>
                                <span className="achievement-award">Interview Ready</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="success-footer">
                    <div className="success-footer-highlight">
                        <Award size={20} />
                        <p className="success-footer-text">
                            Not a course — a complete academic experience
                        </p>
                    </div>
                    <button
                        className="success-final-cta"
                        onClick={() => window.open('https://wa.me/918982188299', '_blank')}
                    >
                        Connect through WhatsApp
                    </button>
                </div>
            </section>

            {/* SECTION 6 – WHO THIS IS FOR */}
            <section className="about-mentor-clinic">
                <div className="mentor-clinic-header">
                    <span className="section-badge">WHO THIS IS FOR</span>
                    <h2 className="section-title"><span className='gradient-text'>Who This Program Is For</span></h2>
                    <p className="section-subtitle">
                        Ideal for school and undergraduate students aspiring to Ivy League and top global universities.
                    </p>
                </div>

                <div className="rmc-info">
                    <div className="rmc-card">
                        <div className="rmc-content">
                            <h3 className="rmc-title">Ideal for:</h3>
                            <div className="rmc-points">
                                <div className="rmc-point">
                                    <Check size={16} />
                                    <div>
                                        <strong>School and undergraduate students</strong>
                                    </div>
                                </div>
                                <div className="rmc-point">
                                    <Check size={16} />
                                    <div>
                                        <strong>Ivy League and top global university aspirants</strong>
                                    </div>
                                </div>
                                <div className="rmc-point">
                                    <Check size={16} />
                                    <div>
                                        <strong>Students with strong academics seeking differentiation</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="rmc-stats">
                                <div className="rmc-stat">
                                    <div className="stat-number">No</div>
                                    <div className="stat-label">Research Background Required</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* SECTION 8 – FAQ */}
            <section className="faq-section">
                <div className="faq-header">
                    <span className="section-badge">COMMON QUESTIONS</span>
                    <p className="section-title"><span className='gradient-text'>Frequently Asked Questions</span></p>
                </div>

                <div className="faq-container">
                    <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFaq(0)}>
                            <span>Do I need prior research experience?</span>
                            <div className="faq-toggle">▼</div>
                        </div>
                        <div className="faq-answer">
                            <p>No. Beginners are fully supported.</p>
                        </div>
                    </div>

                    <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFaq(1)}>
                            <span>How long does it take?</span>
                            <div className="faq-toggle">▼</div>
                        </div>
                        <div className="faq-answer">
                            <p>Approximately 90 days, depending on publication timelines.</p>
                        </div>
                    </div>

                    <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFaq(2)}>
                            <span>Does this guarantee Ivy League admission?</span>
                            <div className="faq-toggle">▼</div>
                        </div>
                        <div className="faq-answer">
                            <p>No guarantees — but it significantly strengthens your profile.</p>
                        </div>
                    </div>

                    <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFaq(3)}>
                            <span>Is the research ethical and original?</span>
                            <div className="faq-toggle">▼</div>
                        </div>
                        <div className="faq-answer">
                            <p>Yes. All work is student-led and original.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION - ABOUT MENTOR CLINIC */}
            <section className="about-mentor-clinic">
                <div className="mentor-clinic-header">
                    <span className="section-badge highlight-blue">ABOUT THE MENTOR CLINIC</span>
                    <h2 className="section-title"><span className='gradient-text'>Learn from Global Research Pioneers</span></h2>
                    <p className="section-subtitle">
                        The Research Mentor Clinic is backed by 50+ research experts who simplify the publication process for students worldwide.
                    </p>
                </div>

                <div className="mentor-showcase-card">
                    <div className="mentor-logo-side">
                        <div className="mentor-logo-circle">
                            <div className="rmc-logo-content">
                                <GraduationCap size={48} />
                                <span className="rmc-brand">RMC</span>
                                <span className="rmc-tagline">Research Mentor Clinic</span>
                            </div>
                        </div>
                    </div>

                    <div className="mentor-content-side">
                        <h3 className="mentor-card-title">Research Mentor Clinic (RMC)</h3>

                        <div className="mentor-check-points">
                            <div className="mentor-point">
                                <CheckCircle2 size={24} className="point-icon" />
                                <div className="point-text">
                                    <strong>Who We Are:</strong> Research Mentor Clinic – backed by 50+ research pioneers with decades of experience in academic publishing.
                                </div>
                            </div>
                            <div className="mentor-point">
                                <CheckCircle2 size={24} className="point-icon" />
                                <div className="point-text">
                                    <strong>What We Do:</strong> Help scholars complete doctoral-level research or publish papers—regardless of academic background or research experience.
                                </div>
                            </div>
                            <div className="mentor-point">
                                <CheckCircle2 size={24} className="point-icon" />
                                <div className="point-text">
                                    <strong>Why It Matters:</strong> Fast, credible, simplified mentorship from ideation to publication that has helped 500+ students transform their academic profiles.
                                </div>
                            </div>
                        </div>

                        <div className="mentor-stats-row">
                            <div className="mentor-stat">
                                <div className="m-stat-number">50+</div>
                                <div className="m-stat-label">Expert Mentors</div>
                            </div>
                            <div className="mentor-stat">
                                <div className="m-stat-number">10+</div>
                                <div className="m-stat-label">Years Experience</div>
                            </div>
                            <div className="mentor-stat">
                                <div className="m-stat-number">1000+</div>
                                <div className="m-stat-label">Publications</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9 – FINAL CTA */}
            <section className="final-cta-section">
                <div className="final-cta-container">
                    {/* Decorative Elements */}
                    <div className="cta-decoration cta-decoration-1"></div>
                    <div className="cta-decoration cta-decoration-2"></div>

                    <div className="mentor-clinic-header">
                        <span className="section-badge">READY TO START?</span>
                        <h2 className="section-title">
                            <span className='gradient-text'>Strengthen Your Application the Right Way</span>
                        </h2>
                        <p className="section-subtitle">
                            If you're aiming for Ivy League or top global universities, research can be your strongest academic differentiator.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="final-cta-stats">
                        <div className="final-stat">
                            <div className="final-stat-icon">
                                <Star size={24} fill="#fbbf24" color="#fbbf24" />
                            </div>
                            <div className="final-stat-number">500+</div>
                            <div className="final-stat-label">Students Published</div>
                        </div>
                        <div className="final-stat">
                            <div className="final-stat-icon">
                                <Award size={24} />
                            </div>
                            <div className="final-stat-number">95%</div>
                            <div className="final-stat-label">Success Rate</div>
                        </div>
                        <div className="final-stat">
                            <div className="final-stat-icon">
                                <TrendingUp size={24} />
                            </div>
                            <div className="final-stat-number">90 Days</div>
                            <div className="final-stat-label">Average Timeline</div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="final-cta-wrapper">
                        <button
                            className="final-cta-button"
                            onClick={() => window.open('https://wa.me/918982188299', '_blank')}
                        >
                            <span>Connect through WhatsApp</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    )
}

export default GlobalAdmissionStandout

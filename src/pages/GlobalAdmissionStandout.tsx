import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryCTA from "@/components/industry/IndustryCTA";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import { GraduationCap } from "lucide-react";

const GlobalAdmissionStandout = () => {
  const heroData = {
    badge: "Ivy League & Top University Admissions",
    badgeIcon: <GraduationCap className="w-4 h-4" />,
    titleWhite: "Build a Standout Application for",
    titleRed: "Your Top Global University Dream",
    // bulletPoints: [
    //   "Research Mentorship",
    //   "Publication Support",
    //   "Profile Building",
    //   "No Prior Experience Required",
    // ],
    tags: ["Research Mentorship",
      "Publication Support",
      "Profile Building"],
    primaryCta: "WhatsApp Now",
    primaryCtaLink: "https://wa.me/918982188299",
    secondaryCta: "Learn More",
    showQuoteForm: true,
    whatsappNumber: "+918719070455",
  };

  

  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Understand your academic goals and university aspirations.",
    },
    {
      number: 2,
      title: "Topic Selection & Planning",
      description: "Choose a research topic aligned with your interests and application strategy.",
    },
    {
      number: 3,
      title: "Research & Writing Support",
      description: "Complete mentorship through research, writing, and revisions.",
    },
    {
      number: 4,
      title: "Publication & Profile Building",
      description: "Submit to journals/conferences and position research in your applications.",
    },
  ];

  const testimonials = [
    {
      quote: "I never thought I could publish a research paper at my age. The structured approach made it achievable, and now I have a co-authored paper AND a Best Paper Presentation Award! My university applications now stand out from thousands.",
      author: "Tashvi Mahajan",
      role: "Good Hope School, Hong Kong - Published at ICETBP 2024",
      image: "https://img.flexifunnels.com/images/7704/imageremovebgpreview12_uzmjq_482.png"
    },
    {
      quote: "The structured approach made research accessible to me as a high school student. Not only did I co-author a paper, but I also won a Best Paper Presentation Award! My college applications now showcase real academic achievement.",
      author: "Aadhya Paras Mehta",
      role: "DPS Surat, India - Published at ICETBP 2024",
      image: "https://img.flexifunnels.com/images/7704/imageremovebgpreview13_m0njg_499.png"
    },
    {
      quote: "I went from zero research experience to publishing TWO papers and winning a Best Paper Presentation Award. This achievement completely transformed my college applications and opened doors I never thought possible.",
      author: "Vashundhar Nigam",
      role: "The Millennium School, India - 2 Papers at ICETBP 2024",
      image: "https://img.flexifunnels.com/images/7704/imageremovebgpreview14_ewnze_496.png"
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      
      {/* Why Most Applications Don't Stand Out Section */}
      <section style={{
        background: '#ffffff',
        color: '#333333',
        padding: '3rem 2rem'
      }} className="responsive-padding">
        <div style={{
          marginBottom: '2rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }} className="responsive-mb">
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }} className="responsive-text-2xl">
            <span style={{
              background: 'linear-gradient(135deg, #6361c2 30%, #2a50b8 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Why Most Ivy League & Top University<br />
              Applications Don't Stand Out
            </span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }} className="responsive-grid-3 responsive-gap">
          {/* Card 1 - The Reality */}
          <div style={{
            background: '#c2ddf8ff',
            border: '1px solid #e5e7eb',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            textAlign: 'left',
            color: '#1f2937',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              background: '#c5e0f8ff',
              color: '#0b20dbff'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'inherit'
            }}>The Reality</h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              color: '#6b7280'
            }}>
              Every year, thousands of students apply with excellent grades, strong test scores, and similar extracurriculars. Yet only a few are admitted.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: '#2666dcff'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>Most applications look the same</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: '#2666dcff'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>Focus on scores, not thinking</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: '#2666dcff'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>No academic depth shown</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - The Challenge */}
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            border: '1px solid #3b82f6',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            textAlign: 'left',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: 'scale(1.05)',
            zIndex: 2,
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'white'
            }}>The Challenge</h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: '500'
            }}>
              Admissions committees now focus on how students think, not just what they score. Most schools don't teach students how to show academic depth beyond the classroom.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.95)'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ color: 'white', fontWeight: '500' }}>Demonstrate thinking ability</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.95)'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ color: 'white', fontWeight: '500' }}>Show academic initiative</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.95)'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ color: 'white', fontWeight: '500' }}>Stand out from the crowd</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - The Impact */}
          <div style={{
            background: '#c2ddf8ff',
            border: '1px solid #e5e7eb',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            textAlign: 'left',
            color: '#1f2937',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              background: '#b1e4f8ff',
              color: '#2666dcff'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'inherit'
            }}>The Impact</h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              color: '#6b7280'
            }}>
              As a result, many capable students fail to stand out. Standing out has never mattered more.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: '#2666dcff'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Differentiation is critical</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: '#2666dcff'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Research shows capability</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                color: '#2666dcff'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Transform your application</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* What Top Universities Look for Beyond Grades Section */}
      <section style={{
        background: '#0C1222',
        color: '#ffffff',
        padding: '3rem 2rem'
      }} className="responsive-padding">
        <div style={{
          marginBottom: '2rem',
          textAlign: 'center'
        }} className="responsive-mb">
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }} className="responsive-text-2xl">
            <span style={{
              background: 'linear-gradient(135deg, #6361c2 30%, #2a50b8 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              What Top Universities Look for<br />
              Beyond Grades
            </span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#e2e8f0',
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: '500'
          }}>
            Top universities seek students who show curiosity beyond textbooks, explore ideas deeply, take academic initiative, and are ready for research-driven learning.
          </p>
        </div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem'
        }} className="responsive-grid-2 responsive-gap">
          {/* Left Column - What They Look For */}
          <div style={{
            background: '#1e293b',
            border: '1px solid #334155',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            position: 'relative'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#ffffff',
              textAlign: 'center'
            }}>What They Look For</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0'
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: '#ffffff'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#d1d5db',
                  flexShrink: 0
                }}></div>
                <span>Show curiosity beyond textbooks</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: '#ffffff'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#d1d5db',
                  flexShrink: 0
                }}></div>
                <span>Explore ideas deeply</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: '#ffffff'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#d1d5db',
                  flexShrink: 0
                }}></div>
                <span>Take academic initiative</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: '#ffffff'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#d1d5db',
                  flexShrink: 0
                }}></div>
                <span>Ready for research-driven learning</span>
              </li>
            </ul>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: '600',
              background: '#fee2e2',
              color: '#2666dcff'
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>One of the strongest ways to demonstrate this is through research</span>
            </div>
          </div>

          {/* Right Column - Research Demonstrates */}
          <div style={{
            background: 'linear-gradient(135deg, #6B46C1, #9333EA)',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            position: 'relative'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: 'white',
              textAlign: 'center'
            }}>Research Demonstrates</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0'
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  flexShrink: 0
                }}></div>
                <span>Independent thinking</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  flexShrink: 0
                }}></div>
                <span>Higher academic level work</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  flexShrink: 0
                }}></div>
                <span>Real-world problem engagement</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  flexShrink: 0
                }}></div>
                <span>Intellectual curiosity</span>
              </li>
            </ul>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Research turns strong applications into memorable ones</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Help You Stand Out With Research Section */}
      <section style={{
        background: '#ffffff',
        color: '#333333',
        padding: '3rem 2rem',
        textAlign: 'center'
      }} className="responsive-padding">
        <div style={{
          marginBottom: '3rem',
          textAlign: 'center'
        }} className="responsive-mb">
          <div style={{
            display: 'inline-block',
            background: '#6B46C1',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            THE SOLUTION
          </div>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }} className="responsive-text-2xl">
            <span style={{
              background: 'linear-gradient(135deg, #6361c2 30%, #2a50b8 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              How We Help You Stand Out With Research
            </span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#1f2937',
            maxWidth: '900px',
            margin: '0 auto',
            fontWeight: '500'
          }}>
            We guide students through the complete research paper and publication process — step by step. No prior research experience required. No confusion. No guesswork.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto 3rem'
        }} className="responsive-grid-3 responsive-gap">
          {/* Card 1 - Topic Selection */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #0ea5e9)',
            border: '2px solid #e0e7ff',
            borderRadius: '24px',
            padding: '2.5rem',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            overflow: 'hidden'
          }} className="responsive-padding-card">
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffffff',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>Topic Selection</h3>
            <p style={{
              fontSize: '1rem',
              color: '#ffffffff',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>
              Aligned with your interests and university goals.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Find topics that match your academic interests</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Align research with your university application goals</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>No prior research experience required</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Research & Writing Guidance (Featured) */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #0ea5e9',
            border: '2px solid #3b82f6',
            borderRadius: '24px',
            padding: '2.5rem',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            overflow: 'hidden',
            transform: 'scale(1.05)'
          }} className="responsive-padding-card solution-card-responsive">
           
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
           
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffffff',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>Research & Writing Guidance</h3>
            <p style={{
              fontSize: '1rem',
              color: '#ffffffff',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>
              Clear support for structure, writing, and revisions.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Step-by-step guidance through the research process</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Support for paper structure and academic writing</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Regular feedback and revisions</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Publication & Application Positioning */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b, #0ea5e9)',
            border: '2px solid #e0e7ff',
            borderRadius: '24px',
            padding: '2.5rem',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            overflow: 'hidden'
          }} className="responsive-padding-card">
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffffff',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>Publication & Application Positioning</h3>
            <p style={{
              fontSize: '1rem',
              color: '#ffffffff',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontWeight: '500',
              position: 'relative',
              zIndex: 1
            }}>
              Submission support for international journals or conferences and guidance on showcasing research in applications.
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              position: 'relative',
              zIndex: 1
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Journal and conference submission support</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Guidance on highlighting research in applications</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                color: '#ffffffff',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Build a strong research profile for interviews</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            background: 'linear-gradient(135deg, #6442e0ff 0%, #488de7ff 100%)',
            border: '2px solid #0727b8ff',
            padding: '1.5rem 2.5rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(26, 120, 182, 0.2)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <p style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #f3efecff 0%, #e4d5caff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.3px',
              margin: 0
            }}>
              You focus on learning. We guide every step.
            </p>
          </div>
          <button
            onClick={() => window.open('https://wa.me/918982188299', '_blank')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              padding: '1.25rem 3rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
            }}
          >
            <span>BOOK FREE PROFILE REVIEW</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* What You Get in the Program Section */}
      <section style={{
        background: '#0C1222',
        color: '#ffffff',
        padding: '3rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#6B46C1',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              WHAT YOU GET
            </div>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #6361c2 30%, #2a50b8 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                What You Get in the Program
              </span>
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#e2e8f0',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: '500'
            }}>
              A complete, guided research experience designed for college admissions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Card 1 - Personalized Research Mentorship */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Personalized Research Mentorship
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                Complete research paper support from topic selection to final submission with expert guidance every step of the way.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #6B46C1, #9333EA)',
                  borderRadius: '10px',
                  flexShrink: 0
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <span style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#6B46C1',
                    fontWeight: '600'
                  }}>
                    Full Mentorship
                  </span>
                  <span style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: '#64748b'
                  }}>
                    Expert Guidance
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Journal & Conference Submission */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Journal & Conference Submission
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                Submission guidance for international journals or conferences with publication acknowledgment to strengthen your profile.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #6B46C1, #9333EA)',
                  borderRadius: '10px',
                  flexShrink: 0
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <span style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#6B46C1',
                    fontWeight: '600'
                  }}>
                    Publication Support
                  </span>
                  <span style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: '#64748b'
                  }}>
                    International Journals
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Strong Research Profile */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Strong Research Profile
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                A compelling research profile for applications and interviews that makes you stand out to top universities.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '10px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #6B46C1, #9333EA)',
                  borderRadius: '10px',
                  flexShrink: 0
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <span style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#6B46C1',
                    fontWeight: '600'
                  }}>
                    Profile Building
                  </span>
                  <span style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: '#64748b'
                  }}>
                    Interview Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1.5rem 2rem',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '15px',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#a78bfa',
                margin: 0,
                letterSpacing: '0.3px'
              }}>
                Not a course — a complete academic experience
              </p>
            </div>
            <button
              onClick={() => window.open('https://wa.me/918982188299', '_blank')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #6B46C1, #9333EA)',
                color: 'white',
                border: 'none',
                padding: '1.25rem 3rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 10px 30px rgba(107, 70, 193, 0.3)'
              }}
            >
              Connect through WhatsApp
            </button>
          </div>
        </div>
      </section>
      
      {/* About the Mentor Clinic Section */}
      <section style={{
        background: '#ffffff',
        color: '#333333',
        padding: '3rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#4338ca',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              ABOUT THE MENTOR CLINIC
            </div>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #6361c2 30%, #2a50b8 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Learn from Global Research Pioneers
              </span>
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#1f2937',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: '500'
            }}>
              The Research Mentor Clinic is backed by 50+ research experts who simplify the publication process for students worldwide.
            </p>
          </div>

          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '350px 1fr',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }} className="mentor-card-responsive">
            {/* Left Side - Logo */}
            <div style={{
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem',
              borderRight: '1px solid #e2e8f0'
            }} className="mentor-logo-responsive">
              <div style={{
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f46e5, #9333ea)',
                padding: '6px',
                boxShadow: '0 10px 25px rgba(124, 58, 237, 0.3)'
              }}>
                <div style={{
                  background: 'white',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4f46e5'
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    lineHeight: 1,
                    marginTop: '0.5rem'
                  }}>
                    RMC
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#6b7280',
                    marginTop: '0.25rem',
                    textAlign: 'center'
                  }}>
                    Research Mentor Clinic
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div style={{
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }} className="mentor-content-responsive">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#4338ca',
                marginBottom: '2rem'
              }}>
                Research Mentor Clinic (RMC)
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '3rem'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#4b5563'
                  }}>
                    <strong style={{ color: '#1f2937' }}>Who We Are:</strong> Research Mentor Clinic – backed by 50+ research pioneers with decades of experience in academic publishing.
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#4b5563'
                  }}>
                    <strong style={{ color: '#1f2937' }}>What We Do:</strong> Help scholars complete doctoral-level research or publish papers—regardless of academic background or research experience.
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#4b5563'
                  }}>
                    <strong style={{ color: '#1f2937' }}>Why It Matters:</strong> Fast, credible, simplified mentorship from ideation to publication that has helped 500+ students transform their academic profiles.
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '2rem'
              }} className="stats-responsive">
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: '#4f46e5',
                    marginBottom: '0.25rem'
                  }} className="stats-number-responsive">
                    50+
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#6b7280',
                    fontWeight: '600'
                  }}>
                    Expert Mentors
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: '#4f46e5',
                    marginBottom: '0.25rem'
                  }} className="stats-number-responsive">
                    10+
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#6b7280',
                    fontWeight: '600'
                  }}>
                    Years Experience
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: '#4f46e5',
                    marginBottom: '0.25rem'
                  }} className="stats-number-responsive">
                    1000+
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#6b7280',
                    fontWeight: '600'
                  }}>
                    Publications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <VideoTestimonialsSection darkTheme={true} />

      {/* Custom Testimonials Section with Images */}
      <section style={{
        background: 'linear-gradient(to right, #ffffff, #eff6ff)',
        padding: '3rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <span style={{
              color: '#2563eb',
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              display: 'block'
            }}>
              SUCCESS STORIES
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '0.5rem'
            }}>
              Students Just Like You Published Their Work
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }} className="responsive-grid-3 responsive-gap">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                   background: 'linear-gradient(135deg, #1e293b, #0ea5e9)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {/* Quote Icon */}
                <div style={{
                  marginBottom: '1rem'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" opacity="0.6">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>

                {/* Profile Image */}
                {testimonial.image && (
                  <div style={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 1.5rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #e5e7eb',
                    background: '#ffffff'
                  }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}

                {/* Quote */}
                <p style={{
                  color: '#ffffffff',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontSize: '0.875rem'
                }}>
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div style={{
                  borderTop: '1px solid #ffffffff',
                  paddingTop: '1rem'
                }}>
                  <h4 style={{
                    fontWeight: '700',
                    color: '#ffffffff',
                    fontSize: '0.875rem',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.author}
                  </h4>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#ffffffff'
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustryProcess
        sectionLabel="How It Works"
        title="Your Research Publication Journey"
        subtitle="A systematic approach to help you publish research and strengthen your university applications."
        steps={processSteps}
        darkTheme={true}
      />

      {/* Who This Program Is For Section */}
      <section style={{
        background: '#ffffff',
        color: '#333333',
        padding: '3rem 2rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#6B46C1',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              WHO THIS IS FOR
            </div>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #6361c2 30%, #2a50b8 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Who This Program Is For
              </span>
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#1f2937',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: '500'
            }}>
              Ideal for school and undergraduate students aspiring to Ivy League and top global universities.
            </p>
          </div>

          {/* Card */}
          <div style={{
              background: 'linear-gradient(135deg, #1e293b, #0ea5e9)',
            border: '2px solid #e0e7ff',
            borderRadius: '24px',
            padding: '3rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#ffffffff',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Ideal for:
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbfcffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#ffffffff'
                }}>
                  <strong style={{ color: '#ffffffff' }}>School and undergraduate students</strong>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5f5ffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(252, 253, 255, 1)ff'
                }}>
                  <strong style={{ color: '#ffffffff' }}>Ivy League and top global university aspirants</strong>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f6faffff" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#ffffffff'
                }}>
                  <strong style={{ color: '#ffffffff' }}>Students with strong academics seeking differentiation</strong>
                </div>
              </div>
            </div>

            {/* Stats Box */}
            <div style={{
              background: 'linear-gradient(135deg, #b7d3f7ff 0%, #bcc8eeff 100%)',
              border: '2px solid #3b82f6',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#251f7cff',
                marginBottom: '0.5rem'
              }}>
                No
              </div>
              <div style={{
                fontSize: '1.1rem',
                color: '#1e293b',
                fontWeight: '600'
              }}>
                Research Background Required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        background: '#0C1222',
        color: '#ffffff',
        padding: '3rem 2rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#6B46C1',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              COMMON QUESTIONS
            </div>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #6361c2 30%, #2a50b8 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* FAQ 1 */}
            <div style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '1rem'
            }}>
              <div
                onClick={() => {
                  const answer = document.getElementById('faq-answer-1');
                  const icon = document.getElementById('faq-icon-1');
                  if (answer && icon) {
                    if (answer.style.display === 'none' || !answer.style.display) {
                      answer.style.display = 'block';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.display = 'none';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  lineHeight: '1.5'
                }}
              >
                <span>Do I need prior research experience?</span>
                <div id="faq-icon-1" style={{
                  color: '#a78bfa',
                  fontSize: '1rem',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                  marginLeft: '1rem'
                }}>
                  ▼
                </div>
              </div>
              <div id="faq-answer-1" style={{
                display: 'none',
                color: '#cbd5e1',
                lineHeight: '1.6',
                fontSize: '1rem',
                paddingBottom: '1.5rem'
              }}>
                <p style={{ margin: 0 }}>No. Beginners are fully supported.</p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '1rem'
            }}>
              <div
                onClick={() => {
                  const answer = document.getElementById('faq-answer-2');
                  const icon = document.getElementById('faq-icon-2');
                  if (answer && icon) {
                    if (answer.style.display === 'none' || !answer.style.display) {
                      answer.style.display = 'block';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.display = 'none';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  lineHeight: '1.5'
                }}
              >
                <span>How long does it take?</span>
                <div id="faq-icon-2" style={{
                  color: '#a78bfa',
                  fontSize: '1rem',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                  marginLeft: '1rem'
                }}>
                  ▼
                </div>
              </div>
              <div id="faq-answer-2" style={{
                display: 'none',
                color: '#cbd5e1',
                lineHeight: '1.6',
                fontSize: '1rem',
                paddingBottom: '1.5rem'
              }}>
                <p style={{ margin: 0 }}>Approximately 90 days, depending on publication timelines.</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '1rem'
            }}>
              <div
                onClick={() => {
                  const answer = document.getElementById('faq-answer-3');
                  const icon = document.getElementById('faq-icon-3');
                  if (answer && icon) {
                    if (answer.style.display === 'none' || !answer.style.display) {
                      answer.style.display = 'block';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.display = 'none';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  lineHeight: '1.5'
                }}
              >
                <span>Does this guarantee Ivy League admission?</span>
                <div id="faq-icon-3" style={{
                  color: '#a78bfa',
                  fontSize: '1rem',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                  marginLeft: '1rem'
                }}>
                  ▼
                </div>
              </div>
              <div id="faq-answer-3" style={{
                display: 'none',
                color: '#cbd5e1',
                lineHeight: '1.6',
                fontSize: '1rem',
                paddingBottom: '1.5rem'
              }}>
                <p style={{ margin: 0 }}>No guarantees — but it significantly strengthens your profile.</p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '1rem'
            }}>
              <div
                onClick={() => {
                  const answer = document.getElementById('faq-answer-4');
                  const icon = document.getElementById('faq-icon-4');
                  if (answer && icon) {
                    if (answer.style.display === 'none' || !answer.style.display) {
                      answer.style.display = 'block';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.display = 'none';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  lineHeight: '1.5'
                }}
              >
                <span>Is the research ethical and original?</span>
                <div id="faq-icon-4" style={{
                  color: '#a78bfa',
                  fontSize: '1rem',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                  marginLeft: '1rem'
                }}>
                  ▼
                </div>
              </div>
              <div id="faq-answer-4" style={{
                display: 'none',
                color: '#cbd5e1',
                lineHeight: '1.6',
                fontSize: '1rem',
                paddingBottom: '1.5rem'
              }}>
                <p style={{ margin: 0 }}>Yes. All work is student-led and original.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryCTA
        sectionLabel="🎓 Strengthen Your Application the Right Way"
        title="Ready to Stand Out?"
        subtitle="If you're aiming for Ivy League or top global universities, research can be your strongest academic differentiator."
        whatsappNumber="+918982188299"
        darkTheme={false}
      />
    </Layout>
  );
};

export default GlobalAdmissionStandout;

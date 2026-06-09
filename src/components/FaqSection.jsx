import React, { useState } from 'react'
import FlashlightCard from './ui/FlashlightCard'

const FaqSection = () => {
  const faqs = [
    {
      question: "Do I need extra hardware or a cloud service?",
      answer: "No. The FixedIT Data Agent runs directly inside your Axis devices — no external hardware, no cloud dependency. Deploy anywhere, run everywhere, with data processed locally on the edge."
    },
    {
      question: "Do I need to know C++ to build custom ACAP apps?",
      answer: "No. Build with Python-like Starlark or simple shell scripts. The Builder variant handles robustness, security and integrations for you, so you skip the C++ and cross-compiling complexity entirely."
    },
    {
      question: "Which Axis devices and OS versions are supported?",
      answer: "Hundreds of Axis models running AXIS OS 11.8+ (LTS 2024) and AXIS OS 12 — cameras, strobes, speakers, door stations and I/O controllers. High model compatibility means easier maintenance and fewer bugs."
    },
    {
      question: "Is there a way to learn ACAP development for free?",
      answer: "Yes. Our E-Learning platform offers free and premium video courses, text guides, exercises and quizzes — plus the ACAP Developer Acceleration Program to get your team building fast."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="elearning" className="z-20 w-full border-white/5 border-t relative">
      <div className="lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6">

        {/* FAQ Segment */}
        <div className="max-w-3xl pt-24 pb-24">
          <div className="space-y-0">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="group border-white/5 border-b">
                  <button
                    className="w-full pt-8 pb-8 flex items-center justify-between cursor-pointer text-left focus:outline-none"
                    onClick={() => toggleFaq(idx)}
                  >
                    <h3 className="text-lg font-light text-white/90 group-hover:text-white transition-colors">{faq.question}</h3>
                    <iconify-icon
                      icon="solar:add-circle-bold-duotone"
                      class={`text-2xl text-white/30 group-hover:text-sky-400 transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    ></iconify-icon>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/60 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Banner with Flashlight Effect */}
        <FlashlightCard className="overflow-hidden w-full rounded-sm mb-32 relative group">
          <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 mix-blend-screen" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.15), transparent 40%)' }}></div>

          <svg className="absolute top-0 right-0 h-full w-full opacity-20 pointer-events-none z-0" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="850" cy="200" r="150" stroke="white" strokeWidth="1" strokeDasharray="4 4"></circle>
              <circle cx="850" cy="200" r="280" stroke="white" strokeWidth="0.5" opacity="0.5"></circle>
              <path d="M0 400 C 300 400, 600 200, 1000 200" stroke="white" strokeWidth="0.5" fill="none"></path>
              <circle cx="750" cy="300" r="2" fill="white"></circle>
          </svg>

          <div className="lg:px-16 lg:py-20 flex flex-col lg:flex-row lg:items-end bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a5c78a4-2c8f-45ca-be6a-164d15d324bc_3840w.webp)] bg-cover z-10 pt-16 pr-8 pb-16 pl-8 relative gap-x-12 gap-y-12 items-start justify-between" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))' }}>
              <div className="max-w-xl relative z-30">
                  <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-12 leading-[1.1]">
                      Not sure where to start
                      <span className="opacity-70"> with ACAP?</span>
                  </h2>

                  <a href="https://fixedit.ai/book-a-meeting/" className="group relative inline-flex flex-col justify-between w-64 h-28 border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-500 rounded-sm p-5 overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
                       <div className="w-full flex justify-end relative z-10">
                          <iconify-icon icon="solar:arrow-right-up-linear" class="text-xl text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
                       </div>
                       <span className="text-sm font-medium uppercase tracking-wider text-white relative z-10">Book a 15-min Call</span>
                  </a>
              </div>

              <div className="max-w-sm pb-2 relative z-30">
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                      Our team is standing by to help you scope monitoring, integration or a custom edge application on your Axis devices.
                  </p>
              </div>
          </div>
        </FlashlightCard>

      </div>
    </section>
  )
}

export default FaqSection

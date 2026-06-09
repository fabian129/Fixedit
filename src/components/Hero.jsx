import React, { useState } from 'react'
import { Medal, Cpu, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [cardIndex, setCardIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const cardItems = [
      { badge: "Monitor", title: "Observer", desc: "Turnkey device health monitoring with preconfigured Grafana dashboards across thousands of Axis cameras." },
      { badge: "Integrate", title: "Plumber", desc: "No-code, low-code data flows — bridge Axis events to MQTT, HTTP, webhooks and InfluxDB." },
      { badge: "Build", title: "Builder", desc: "Custom ACAP logic in Python-like Starlark. No C++, no cross-compiling, production-grade from day one." }
  ]

  const partners = ["Axis", "Edge Impulse", "AiTecServ", "Voxela.ai", "IDEON"]

  const handleNextCard = (e) => {
      e.stopPropagation()
      if (isAnimating) return
      setIsAnimating(true)

      setTimeout(() => {
          setCardIndex((prev) => (prev + 1) % cardItems.length)
          setIsAnimating(false)
      }, 200)
  }

  return (
    <section className="flex flex-col lg:block lg:h-[calc(100vh-100px)] z-10 w-full relative">
      {/* Hero Text Area */}
      <div className="order-1 flex flex-col lg:py-0 lg:absolute lg:top-0 lg:right-[38%] lg:bottom-[6%] lg:left-[28%] lg:pr-12 lg:pl-12 z-20 pointer-events-none pt-20 pr-12 pb-12 pl-12 relative justify-center">
        <h1 className="sm:text-7xl md:text-8xl lg:text-[4rem] xl:text-[5.7rem] leading-[0.9] lg:leading-[0.8] lg:text-left text-6xl font-medium text-white tracking-tighter text-center mix-blend-normal">
          <span className="block animate-reveal delay-100">Intelligence</span>
          <span className="block text-white/40 lg:ml-[1em] animate-reveal delay-200">Inside Your</span>
          <span className="block text-white/80 animate-reveal delay-300">Axis Devices</span>
        </h1>

        <div className="flex animate-reveal delay-500 lg:justify-start lg:pl-2 lg:mt-24 pointer-events-auto mt-12 pl-2 gap-x-6 gap-y-6 items-center justify-center">
          <a href="https://fixedit.ai/products-data-agent/" className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-full transition-all">
            <span className="text-sm font-medium">Start building</span>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:arrow-right-bold-duotone" class="text-lg"></iconify-icon>
            </div>
          </a>
          <span className="text-xs text-white/40 font-mono">AXIS OS 12 READY</span>
        </div>
      </div>

      {/* Sidebar Area */}
      <div className="relative order-2 w-full px-6 py-12 border-y border-white/5 lg:border-y-0 lg:border-r lg:absolute lg:left-[6%] lg:top-0 lg:bottom-[6%] lg:w-[22%] lg:px-0 lg:py-0 flex flex-col">
        <div className="lg:pt-12 lg:pr-8 lg:absolute lg:top-0 lg:h-[62%] lg:w-full animate-reveal delay-200">
          <p className="leading-relaxed lg:text-left lg:mx-0 text-lg font-light text-white/50 text-center max-w-md mx-auto">
            FixedIT provides the foundational platform to deploy real-time automation, AI and integrations directly inside your Axis cameras — no extra hardware, no cloud lock-in.
          </p>
        </div>

        <div className="mt-12 lg:mt-0 lg:absolute lg:top-[62%] lg:bottom-0 lg:left-0 lg:right-0 lg:border-t border-white/10 lg:pt-6 flex flex-col justify-between animate-reveal delay-300 items-center lg:items-start">
          <div className="hidden lg:block marker -top-[2.5px] -left-[2.5px]"></div>
          <div className="hidden lg:block marker -top-[2.5px] -right-[2.5px]"></div>
          <div className="hidden lg:block marker -bottom-[2.5px] -left-[2.5px]"></div>
          <div className="hidden lg:block marker -bottom-[2.5px] -right-[2.5px]"></div>

          <div className="absolute top-[-1px] left-0 right-0 h-[1px] overflow-hidden hidden lg:block">
            <div className="beam-h" style={{ animation: 'beam-h 5s infinite' }}></div>
          </div>

          <div className="lg:text-left text-center w-full overflow-hidden">
            <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-6 pl-1">Partners &amp; Customers</p>
            <div
              className="relative w-full max-w-[320px] lg:max-w-[360px] mx-auto lg:mx-0 h-[72px] flex items-center"
              style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}
            >
              <div className="flex gap-8 items-center w-max animate-marquee">
                {[...partners, ...partners].map((name, i) => (
                  <span key={i} className="text-sm font-medium text-white/40 hover:text-white whitespace-nowrap transition-colors duration-500 cursor-default tracking-tight">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pb-1 mt-6 lg:mt-0">
            <div className="flex items-center gap-2 mb-2">
              <iconify-icon icon="solar:check-circle-bold-duotone" class="text-emerald-400 text-sm"></iconify-icon>
              <span className="text-xs text-white/60">Runs on hundreds of Axis models</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid Cell */}
      <div className="relative order-3 w-full h-64 sm:h-80 lg:absolute lg:left-[62%] lg:right-[6%] lg:top-0 lg:h-[62%] lg:border-l lg:w-auto border-white/10 overflow-hidden group animate-reveal delay-200">
        <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] overflow-hidden z-20 hidden lg:block">
          <div className="beam-v" style={{ animation: 'beam-v 4s infinite' }}></div>
        </div>

        <div className="hidden lg:block marker -top-[2.5px] -left-[2.5px]"></div>
        <div className="hidden lg:block marker -top-[2.5px] -right-[2.5px]"></div>

        <img src="/hero-shards.jpg" alt="Floating blue glass shards — edge intelligence" className="contrast-110 group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 w-full h-full object-cover" />

        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#070b1a]/50 via-transparent to-transparent"></div>

        <div className="absolute bottom-4 left-4 z-20">
          <iconify-icon icon="solar:cctv-camera-bold-duotone" class="text-white/80 text-3xl"></iconify-icon>
        </div>
      </div>

      {/* Product Variant Card */}
      <div className="relative order-4 p-6 flex items-center justify-center animate-reveal delay-300 lg:p-0 lg:absolute lg:right-[6%] lg:top-[62%] lg:bottom-[6%] lg:border-l lg:border-t lg:border-white/10 lg:left-[62%]">

        {/* Beams (Desktop Only) */}
        <div className="absolute top-[-1px] left-0 right-0 h-[1px] overflow-hidden z-20 hidden lg:block">
            <div className="beam-h" style={{ animation: 'beam-h 6s infinite reverse' }}></div>
        </div>
        <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] overflow-hidden z-20 hidden lg:block">
            <div className="beam-v" style={{ animation: 'beam-v 6s infinite 2s' }}></div>
        </div>

        {/* Markers (Desktop Only) */}
        <div className="hidden lg:block marker -top-[2.5px] -left-[2.5px]"></div>
        <div className="hidden lg:block marker -top-[2.5px] -right-[2.5px]"></div>
        <div className="hidden lg:block marker -bottom-[2.5px] -left-[2.5px]"></div>
        <div className="hidden lg:block marker -bottom-[2.5px] -right-[2.5px]"></div>

        {/* Card */}
        <div className="flex flex-col shadow-sky-900/20 group overflow-hidden lg:rounded-none text-black bg-white w-full h-full rounded-sm pt-6 pr-6 pb-6 pl-6 relative shadow-2xl justify-between transition-all duration-500">
            <div className="flex items-start justify-between relative z-10 min-h-[60px]">
                <div className={`transition-all duration-200 ease-out ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                    <div className="flex items-center gap-2 text-sky-600 mb-2">
                        <Cpu className="w-4 h-4 opacity-60" />
                        <span className="text-[10px] font-semibold uppercase tracking-widest">{cardItems[cardIndex].badge}</span>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight">{cardItems[cardIndex].title}</h3>
                </div>
                <Medal className="w-12 h-12 absolute -top-2 -right-2 rotate-12 text-black/5" strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col justify-end flex-1 mt-8">
                <div className="min-h-[72px]">
                    <p className={`text-sm text-gray-500 font-medium leading-relaxed mb-4 border-l-2 border-sky-200 pl-3 transition-all duration-200 ease-out transform ${isAnimating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}>
                        {cardItems[cardIndex].desc}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex gap-1">
                        {cardItems.map((_, idx) => (
                            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === cardIndex ? 'bg-black' : 'bg-gray-300'}`}></div>
                        ))}
                    </div>
                    <button onClick={handleNextCard} className="group/btn p-2 -mr-2 cursor-pointer rounded-full hover:bg-sky-50 transition-colors outline-none">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover/btn:text-sky-600 transition-colors" />
                    </button>
                </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Hero

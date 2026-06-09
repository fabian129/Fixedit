import React from 'react'

const MarqueeColumn1 = () => (
  <div className="flex flex-col gap-6 mt-12 lg:mt-24 w-[280px] sm:w-[320px] flex-shrink-0">
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-sm hover:bg-white/[0.06] transition-all hover:-translate-y-1 group">
      <div className="flex items-center gap-4 mb-4">
        <img src="https://i.pravatar.cc/150?u=nithinkalla" alt="Nithin Kalla" className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10" />
        <div>
          <h4 className="text-sm font-medium text-white leading-none">Nithin Kalla</h4>
          <p className="text-xs text-white/40 mt-1 font-mono">Developer · Voxela.ai</p>
        </div>
      </div>
      <p className="text-sm text-white/70 font-light leading-relaxed mb-4">"The FixedIT CLI tool simplifies package development by automating common tasks and managing dependencies."</p>
      <div className="flex justify-between items-center border-t border-white/5 pt-4">
        <span className="text-[10px] font-mono text-white/30 uppercase">Voxela.ai</span>
        <iconify-icon icon="solar:star-bold-duotone" class="text-sky-400 text-sm"></iconify-icon>
      </div>
    </div>
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-sm flex items-center gap-4 hover:bg-white/[0.06] transition-all">
      <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
        <iconify-icon icon="solar:clock-circle-bold-duotone" class="text-xl"></iconify-icon>
      </div>
      <div>
        <div className="text-xl font-semibold text-white tracking-tight">15+ yrs</div>
        <div className="text-[10px] font-mono text-white/40 uppercase">ACAP Expertise</div>
      </div>
    </div>
  </div>
)

const MarqueeColumn2 = () => (
  <div className="flex flex-col gap-6 mt-0 w-[280px] sm:w-[320px] flex-shrink-0">
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-sm hover:bg-white/[0.06] transition-all hover:-translate-y-1 group h-min">
       <div className="mb-4 text-sky-400/80">
          <iconify-icon icon="solar:quote-up-square-bold-duotone" class="text-2xl"></iconify-icon>
       </div>
       <p className="text-base text-white/90 font-light leading-relaxed mb-6">"We could quickly get help from FixedIT in building our initial ACAP, saving us a ton of time."</p>
       <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?u=amruthbhat" className="w-8 h-8 rounded-full grayscale border border-white/10" />
          <div className="flex flex-col">
             <span className="text-xs font-medium text-white">Amruth Bhat</span>
             <span className="text-[10px] uppercase tracking-wider text-white/40">Voxela.ai</span>
          </div>
          <iconify-icon icon="solar:verified-check-bold-duotone" class="ml-auto text-sky-400/70 text-lg"></iconify-icon>
       </div>
    </div>
    <div className="bg-gradient-to-br from-sky-900/20 to-transparent backdrop-blur-md border border-sky-500/20 p-6 rounded-sm relative group">
       <div className="absolute top-4 right-4">
          <iconify-icon icon="solar:verified-check-bold-duotone" class="text-sky-400 text-xl"></iconify-icon>
       </div>
       <div className="mb-3">
          <h4 className="text-sm font-medium text-white">Edge Impulse</h4>
          <p className="text-xs text-white/40 font-mono">Solution Partner</p>
       </div>
       <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-xs text-white/50">Edge AI Integration</span>
          <iconify-icon icon="solar:chip-bold-duotone" class="text-white/30 text-lg"></iconify-icon>
       </div>
    </div>
  </div>
)

const MarqueeColumn3 = () => (
  <div className="flex flex-col gap-6 mt-6 lg:mt-12 w-[280px] sm:w-[320px] flex-shrink-0">
     <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-sm hover:bg-white/[0.06] transition-all hover:-translate-y-1 group">
        <div className="flex justify-between mb-4">
            <div className="flex gap-1">
              <iconify-icon icon="solar:star-bold-duotone" class="text-sky-400 text-xs"></iconify-icon>
              <iconify-icon icon="solar:star-bold-duotone" class="text-sky-400 text-xs"></iconify-icon>
              <iconify-icon icon="solar:star-bold-duotone" class="text-sky-400 text-xs"></iconify-icon>
              <iconify-icon icon="solar:star-bold-duotone" class="text-sky-400 text-xs"></iconify-icon>
              <iconify-icon icon="solar:star-bold-duotone" class="text-sky-400 text-xs"></iconify-icon>
            </div>
            <span className="text-[10px] font-mono text-white/30">Verified</span>
        </div>
        <p className="text-sm text-white/80 font-light mb-4">"The precompiled libraries eliminate cross-compiling — maintained, tested and they just work."</p>
        <div className="flex items-center gap-3">
           <img src="https://i.pravatar.cc/150?u=janaschafer" className="w-8 h-8 rounded-full grayscale border border-white/10" />
           <div>
              <h4 className="text-xs font-medium text-white">Jana Schäfer</h4>
              <p className="text-[10px] text-white/40 uppercase">AiTecServ</p>
           </div>
        </div>
     </div>
     <div className="relative h-40 rounded-sm overflow-hidden border border-white/5 group">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6fe7f3d-bf69-4eff-a8b0-25beb3a0d389_800w.webp" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
        <div className="bg-gradient-to-t from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
        <div className="absolute bottom-4 left-4">
           <p className="text-xs font-medium text-white">Axis Devices</p>
           <p className="text-[10px] text-white/50 font-mono">Edge Deployment</p>
        </div>
     </div>
  </div>
)

const MarqueeColumn4 = () => (
  <div className="flex flex-col gap-6 mt-0 w-[280px] sm:w-[320px] flex-shrink-0">
     <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-sm hover:bg-white/[0.06] transition-all hover:-translate-y-1 group">
         <div className="flex items-center gap-4 mb-4">
           <img src="https://i.pravatar.cc/150?u=jaimesantos" className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10" />
           <div>
             <h4 className="text-sm font-medium text-white">Jaime Santos</h4>
             <p className="text-xs text-white/40 mt-1 font-mono">CEO · AiTecServ</p>
           </div>
         </div>
         <p className="text-sm text-white/70 font-light leading-relaxed mb-4">"Their services empowered our internal team rather than delivering a pre-packaged solution."</p>
         <div className="flex justify-between items-center border-t border-white/5 pt-4">
           <span className="text-[10px] font-mono text-white/30 uppercase">AiTecServ</span>
           <iconify-icon icon="solar:star-bold-duotone" class="text-sky-400 text-sm"></iconify-icon>
         </div>
     </div>
     <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-4 rounded-sm flex items-center gap-4 hover:bg-white/[0.06] transition-all">
         <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
            <iconify-icon icon="solar:cctv-camera-bold-duotone" class="text-xl"></iconify-icon>
         </div>
         <div>
            <div className="text-xl font-semibold text-white tracking-tight">1,000s</div>
            <div className="text-[10px] font-mono text-white/40 uppercase">Cameras Managed</div>
         </div>
     </div>
  </div>
)

const MarqueeColumn5 = () => (
  <div className="flex flex-col gap-6 mt-12 lg:mt-24 w-[280px] sm:w-[320px] flex-shrink-0">
     <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-sm hover:bg-white/[0.06] transition-all hover:-translate-y-1 group">
        <div className="flex items-center gap-3 mb-4">
           <div className="w-9 h-9 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
              <iconify-icon icon="solar:link-bold-duotone" class="text-lg"></iconify-icon>
           </div>
           <div>
              <h4 className="text-sm font-medium text-white">Axis</h4>
              <p className="text-[10px] font-mono text-white/40">Technology Integration Partner</p>
           </div>
        </div>
        <p className="text-sm text-white/70 font-light">"Production-grade ACAP on hundreds of Axis models — AXIS OS 11.8 to OS 12."</p>
     </div>
     <div className="bg-white/[0.03] border border-white/5 p-6 rounded-sm text-center">
        <p className="text-xs font-mono text-white/40 mb-3">TRUSTED BY</p>
        <div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-white/50">
           <span>Axis</span>
           <span>Edge Impulse</span>
           <span>ASM</span>
           <span>IDEON</span>
        </div>
     </div>
  </div>
)

const TestimonialsMarquee = () => {
  return (
    <section id="cases" className="relative w-full py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#070b1a] via-[#070b1a]/80 to-transparent z-10"></div>
        <div className="absolute left-[6%] right-[6%] top-0 bottom-0 border-l border-r border-white/5 hidden lg:block"></div>
      </div>

      <div className="relative z-10 px-6 lg:px-[6%] max-w-[1600px] mx-auto">
        <div
          className="relative w-full overflow-hidden mb-20 lg:mb-24"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <div className="flex w-max gap-6 animate-marquee-slow items-start">
            <MarqueeColumn1 />
            <MarqueeColumn2 />
            <MarqueeColumn3 />
            <MarqueeColumn4 />
            <MarqueeColumn5 />
            {/* Duplicate for infinite effect */}
            <MarqueeColumn1 />
            <MarqueeColumn2 />
            <MarqueeColumn3 />
            <MarqueeColumn4 />
            <MarqueeColumn5 />
          </div>
        </div>

        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8 animate-reveal">
             <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
             <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Case Studies</span>
          </div>

          <h2 className="leading-[1.1] animate-reveal delay-100 md:text-5xl lg:text-7xl text-4xl font-medium text-white tracking-tight mb-6">
             Validated by the teams
             <span className="text-white/30"> shipping on Axis.</span>
          </h2>

          <p className="text-lg text-white/50 font-light leading-relaxed mb-10 animate-reveal delay-200">
             System integrators, developers and enterprise teams worldwide build production-grade ACAP applications with FixedIT.
          </p>

          <a href="https://fixedit.ai/" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-sm font-semibold text-xs uppercase tracking-widest hover:bg-sky-50 transition-all animate-reveal delay-300">
             <span>Read Case Studies</span>
             <iconify-icon icon="solar:arrow-right-bold-duotone" class="text-lg transition-transform group-hover:translate-x-1"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee

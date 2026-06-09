import React from 'react'
import { Sparkles, ScanSearch, Share2, Database } from 'lucide-react'
import FlashlightCard from './ui/FlashlightCard'

const Features = () => {
  return (
    <section id="platform" className="z-10 lg:py-32 bg-sky-950/20 w-full border-white/5 border-t pt-24 pb-24 relative">

      {/* Background Grid & Beams */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <div className="absolute top-0 bottom-0 left-[6%] w-[1px] bg-white/5"></div>
        <div className="absolute top-0 bottom-0 left-[28%] w-[1px] bg-white/5">
          <div className="beam-v" style={{ animation: 'beam-v 7s infinite linear' }}></div>
        </div>
        <div className="absolute top-0 bottom-0 left-[62%] w-[1px] bg-white/5">
           <div className="beam-v" style={{ animation: 'beam-v 5s infinite 2s linear' }}></div>
        </div>
        <div className="absolute top-0 bottom-0 right-[6%] w-[1px] bg-white/5"></div>
      </div>

      <div className="absolute top-0 left-[6%] right-[6%] h-[1px] bg-white/5 hidden lg:block z-10"></div>

      <div className="relative z-10 lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6">

        {/* Section Header */}
        <div className="mb-20 lg:mb-24 max-w-4xl">
          <h2 className="lg:text-8xl text-4xl font-normal text-white tracking-tight mb-8 animate-reveal">
            One Platform. <span className="text-white/30">Every Axis Device.</span>
          </h2>
          <div className="animate-reveal delay-100 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Monitor, integrate and build — directly on the edge. The FixedIT Data Agent
              bridges the gap between off-the-shelf limits and full custom ACAP development.
            </p>
            <div className="flex gap-4 items-center lg:justify-end">
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="text-xs font-mono text-white/40 uppercase">ACAP Native</span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 gap-x-6 gap-y-6">

          {/* Card 1 — No UI Lock-In */}
          <FlashlightCard className="animate-reveal delay-200 col-span-1 lg:col-span-2 hover:bg-white/[0.04] transition-all duration-500 flex flex-col hover:border-white/10 h-full border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-lg justify-between overflow-hidden">
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

            <div className="h-48 mb-8 relative flex items-center justify-center bg-black/20 rounded-sm border border-white/5 overflow-hidden z-10">
              <div className="w-3/4 p-4 border border-white/10 bg-[#0b1830] rounded-sm shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className="flex gap-1.5 mb-3 opacity-50">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/10 rounded-full"></div>
                  <div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
                  <div className="h-1 w-5/6 bg-sky-500/40 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-3 tracking-tight flex items-center gap-2">
                No UI Lock-In
                <Sparkles className="w-4 h-4 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">Define data flows in simple config files. Build with any editor or AI agent — there's no proprietary UI to learn.</p>
            </div>
          </FlashlightCard>

          {/* Card 2 — Consume Any Data */}
          <FlashlightCard className="animate-reveal delay-300 col-span-1 lg:col-span-2 hover:bg-white/[0.04] transition-all duration-500 flex flex-col hover:border-white/10 h-full border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-lg justify-between overflow-hidden">
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

            <div className="h-48 mb-8 relative flex items-center justify-center overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/5 border-white/5 border rounded p-3 flex items-center justify-center"><iconify-icon icon="solar:cctv-camera-bold-duotone" class="text-2xl text-white"></iconify-icon></div>
                <div className="bg-white/5 border-white/5 border rounded p-3 flex items-center justify-center"><iconify-icon icon="solar:server-2-bold-duotone" class="text-2xl text-white"></iconify-icon></div>
                <div className="bg-white/5 border-white/5 border rounded p-3 flex items-center justify-center"><iconify-icon icon="solar:wi-fi-router-bold-duotone" class="text-2xl text-white"></iconify-icon></div>
                <div className="p-3 bg-white/5 rounded border border-white/5 flex items-center justify-center"><Database className="w-6 h-6 text-white" /></div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-3 tracking-tight">Consume Any Data</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">HTTP, MQTT, Axis Scene Metadata, object detection and system metrics — flexible integrations out of the box.</p>
            </div>
          </FlashlightCard>

          {/* Card 3 — Holistic Observability */}
          <FlashlightCard className="animate-reveal delay-500 col-span-1 lg:col-span-2 hover:bg-white/[0.04] transition-all duration-500 flex flex-col hover:border-white/10 h-full border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-lg justify-between overflow-hidden">
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

            <div className="h-48 mb-8 relative flex items-center justify-center overflow-hidden z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              <iconify-icon icon="solar:graph-new-bold-duotone" class="text-6xl text-white/20 group-hover:text-sky-400/80 transition-colors duration-500"></iconify-icon>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-3 tracking-tight">Holistic Observability</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">Monitor device health across thousands of cameras in a single, coherent operational view.</p>
            </div>
          </FlashlightCard>

          {/* Card 4 — Production-Grade from Day One */}
          <FlashlightCard className="animate-reveal delay-200 col-span-1 lg:col-span-3 hover:bg-white/[0.04] transition-all duration-500 flex flex-col min-h-[320px] hover:border-white/10 border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-lg justify-between overflow-hidden">
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-50 transition-opacity z-10">
                <ScanSearch className="w-8 h-8 text-white" />
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Production-Grade from Day One</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-md">
                Robustness, security, buffering and automatic retries are handled for you.
                Built on proven open source — Telegraf and Starlark — so it just works in critical environments.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2 py-1 rounded">15+ Years</div>
                <div className="text-xs font-mono text-white/40">Battle-tested ACAP</div>
              </div>
            </div>
          </FlashlightCard>

          {/* Card 5 — Connect Any System */}
          <FlashlightCard className="animate-reveal delay-300 col-span-1 lg:col-span-3 hover:bg-white/[0.04] transition-all duration-500 flex flex-col min-h-[320px] hover:border-white/10 border-white/5 border rounded-sm pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-lg justify-between overflow-hidden">
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
            <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-50 transition-opacity z-10">
                <Share2 className="w-8 h-8 text-white" />
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Connect Any System</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-md">
                Push to Axis/ONVIF events, MQTT, HTTP, webhooks, InfluxDB and Grafana.
                Route insight wherever your team already works — no middleware required.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="text-[10px] font-mono text-white/50 border border-white/10 px-2 py-1 rounded">MQTT</span>
                <span className="text-[10px] font-mono text-white/50 border border-white/10 px-2 py-1 rounded">ONVIF</span>
                <span className="text-[10px] font-mono text-white/50 border border-white/10 px-2 py-1 rounded">Webhooks</span>
                <span className="text-[10px] font-mono text-white/50 border border-white/10 px-2 py-1 rounded">InfluxDB</span>
                <span className="text-[10px] font-mono text-white/50 border border-white/10 px-2 py-1 rounded">Grafana</span>
              </div>
            </div>
          </FlashlightCard>

        </div>
      </div>
    </section>
  )
}

export default Features

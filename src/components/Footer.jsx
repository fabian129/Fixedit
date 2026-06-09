import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/5 bg-[#070b1a] z-20 pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[6%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-white mb-6">
               <iconify-icon icon="solar:cpu-bolt-bold-duotone" class="text-sky-400 text-2xl w-[24px] h-[24px]"></iconify-icon>
               <span className="font-bold tracking-tight">FixedIT</span>
            </div>
            <p className="text-sm text-white/50 font-light leading-relaxed max-w-xs">
              The LLM-friendly development platform for Axis ACAP. Monitor, integrate and build intelligent vision workflows directly on the edge.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 uppercase mb-6">Developers</h4>
            <ul className="space-y-4">
              <li><a href="https://fixedit.ai/products-data-agent/" className="text-sm text-white/60 hover:text-white transition-colors">Data Agent</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Quick Start Guide</a></li>
              <li><a href="https://learning.fixedit.ai/" className="text-sm text-white/60 hover:text-white transition-colors">E-Learning</a></li>
              <li>
                <a href="https://github.com/daniel-falk/" className="flex items-center text-sm text-white/60 hover:text-white transition-colors">
                  Open Source
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 ml-2"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#cases" className="text-sm text-white/60 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="https://fixedit.ai/acap-dev-acceleration-program/" className="text-sm text-white/60 hover:text-white transition-colors">Acceleration Program</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 uppercase mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.linkedin.com/in/daniel-falk-andersson/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:linkedin" class="text-xs"></iconify-icon> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/daniel-falk/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:github" class="text-xs"></iconify-icon> GitHub
                </a>
              </li>
              <li>
                <a href="https://fixedit.ai/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:youtube" class="text-xs"></iconify-icon> YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-12 flex flex-col sm:flex-row gap-4 lg:justify-start mt-4">
            <a href="https://fixedit.ai/" className="group flex flex-col justify-between p-6 w-full sm:w-52 h-32 border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all rounded-sm">
              <div className="w-full flex justify-end">
                 <iconify-icon icon="solar:arrow-right-up-linear" class="text-white/40 group-hover:text-sky-400 transition-colors"></iconify-icon>
              </div>
              <div>
                <span className="block text-xs font-mono text-white/40 mb-1">Enterprise</span>
                <span className="block text-sm font-medium text-white">Get a Quote</span>
              </div>
            </a>

            <a href="https://fixedit.ai/" className="group flex flex-col justify-between p-6 w-full sm:w-52 h-32 border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all rounded-sm">
              <div className="w-full flex justify-end">
                 <iconify-icon icon="solar:arrow-right-up-linear" class="text-white/40 group-hover:text-sky-400 transition-colors"></iconify-icon>
              </div>
              <div>
                <span className="block text-xs font-mono text-white/40 mb-1">Technical</span>
                <span className="block text-sm font-medium text-white">Get Support</span>
              </div>
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
           <p className="text-xs text-white/30">© 2026 FixedIT Consulting AB · Org. 559296-8498 · All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

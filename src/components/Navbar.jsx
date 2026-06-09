import React, { useState, useEffect } from 'react'
import { X, Menu } from 'lucide-react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className="relative z-50 w-full h-[100px] flex items-center justify-between px-6 lg:px-[6%] border-b border-white/5 bg-[#070b1a]/80 backdrop-blur-md animate-reveal sticky top-0">
        <div className="flex items-center gap-3 h-[60px]  md:h-[100px]">
          <iconify-icon icon="solar:cpu-bolt-bold-duotone" class="text-sky-400 text-2xl w-[24px] h-[24px]" style={{ width: '24px', height: '24px' }}></iconify-icon>
          <span className="text-lg font-semibold tracking-tight text-white">FixedIT</span>
        </div>

        <div className="hidden md:flex uppercase text-sm font-medium text-white/60 gap-x-8 items-center">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#cases" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#elearning" className="hover:text-white transition-colors">E-Learning</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://fixedit.ai/book-a-meeting/" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white text-black py-2.5 px-5 rounded-sm hover:bg-sky-50 transition-colors">
            Start Working With Us
          </a>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white/70 hover:text-white transition-colors outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#070b1a]/95 backdrop-blur-xl flex flex-col pt-32 px-8 transition-[transform,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-6 text-white/70 hover:text-white outline-none"
        >
          <X className="w-8 h-8" />
        </button>
        <nav className="flex flex-col gap-8 text-2xl font-medium tracking-tight">
          <a href="#platform" className="hover:text-sky-400 transition-colors border-b border-white/10 pb-4">Platform</a>
          <a href="#solutions" className="hover:text-sky-400 transition-colors border-b border-white/10 pb-4">Solutions</a>
          <a href="#cases" className="hover:text-sky-400 transition-colors border-b border-white/10 pb-4">Case Studies</a>
          <a href="#elearning" className="hover:text-sky-400 transition-colors border-b border-white/10 pb-4">E-Learning</a>
        </nav>
        <div className="mt-auto mb-12">
          <a href="https://fixedit.ai/book-a-meeting/" className="flex w-full items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider bg-white text-black py-4 rounded-sm hover:bg-sky-50 transition-colors">
            Start Working With Us
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar

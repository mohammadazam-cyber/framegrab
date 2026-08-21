import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenWaitlist: (platform: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--navbar-bg)] backdrop-blur-md border-b border-[#303437]/60 dark:border-[#303437]/60 light:border-[#E2E5E9] py-3 shadow-md dark:shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#intro" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9FF2E] rounded-md">
          <span className="text-xl font-bold tracking-tight text-[#111315] dark:text-[#F1F0EA] group-hover:text-[#C9FF2E] transition-colors flex items-center gap-1.5">
            FrameGrab
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9FF2E]" />
          </span>
        </a>

        {/* Section Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#FFFFFF] dark:bg-[#141719] border border-[#E2E5E9] dark:border-[#303437] rounded-full px-4 py-1.5 text-sm shadow-sm dark:shadow-none">
          <a
            href="#intro"
            className="px-3 py-1 text-[#5E6670] dark:text-[#85898B] hover:text-[#111315] dark:hover:text-[#F1F0EA] transition-colors rounded-full hover:bg-[#F0F2F5] dark:hover:bg-[#181B1D]"
          >
            Intro
          </a>
          <a
            href="#downloads"
            className="px-3 py-1 text-[#5E6670] dark:text-[#85898B] hover:text-[#111315] dark:hover:text-[#F1F0EA] transition-colors rounded-full hover:bg-[#F0F2F5] dark:hover:bg-[#181B1D]"
          >
            Downloads
          </a>
          <a
            href="#features"
            className="px-3 py-1 text-[#5E6670] dark:text-[#85898B] hover:text-[#111315] dark:hover:text-[#F1F0EA] transition-colors rounded-full hover:bg-[#F0F2F5] dark:hover:bg-[#181B1D]"
          >
            Coming Soon
          </a>
        </nav>

        {/* Right Actions: Theme Toggle + CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Light / Dark Mode Switch Toggle */}
          <ThemeToggle />

          <a
            href="#downloads"
            id="nav-cta-button"
            className="inline-flex items-center gap-2 bg-[#C9FF2E] hover:bg-[#D4FF35] text-[#0D0F10] font-semibold text-sm px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-lg transition-all transform active:scale-95 shadow-md shadow-[#C9FF2E]/10 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span className="whitespace-nowrap hidden xs:inline sm:inline">Get FrameGrab</span>
            <span className="whitespace-nowrap inline xs:hidden sm:hidden">Get</span>
          </a>
        </div>
      </div>
    </header>
  );
};


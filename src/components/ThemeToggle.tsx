import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center gap-1.5 p-1.5 rounded-full transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9FF2E] ${
        isDark
          ? 'bg-[#141719] border border-[#303437] text-[#85898B] hover:text-[#F1F0EA] hover:border-[#85898B]'
          : 'bg-[#FFFFFF] border border-[#E2E5E9] text-[#5E6670] hover:text-[#111315] hover:border-[#CDD1D6] shadow-sm'
      } ${className}`}
    >
      <div className="flex items-center gap-1">
        {/* Light Icon */}
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 ${
            !isDark
              ? 'bg-[#C9FF2E] text-[#0D0F10] shadow-sm font-semibold'
              : 'text-[#85898B] hover:text-[#F1F0EA]'
          }`}
        >
          <Sun className="w-3.5 h-3.5" />
        </span>

        {/* Dark Icon */}
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 ${
            isDark
              ? 'bg-[#C9FF2E] text-[#0D0F10] shadow-sm font-semibold'
              : 'text-[#5E6670] hover:text-[#111315]'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
        </span>
      </div>
    </button>
  );
};

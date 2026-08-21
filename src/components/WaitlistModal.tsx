import React, { useState } from 'react';
import { X, Bell, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  platform: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ platform, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div
      id="waitlist-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-md bg-[#FFFFFF] dark:bg-[#141719] border border-[#E2E5E9] dark:border-[#303437] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle glowing accent */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#C9FF2E]/15 dark:bg-[#C9FF2E]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-[#5E6670] dark:text-[#85898B] hover:text-[#111315] dark:hover:text-[#F1F0EA] rounded-lg hover:bg-[#F0F2F5] dark:hover:bg-[#181B1D] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C9FF2E]/20 dark:bg-[#C9FF2E]/15 border border-[#C9FF2E]/40 text-[#4A7000] dark:text-[#C9FF2E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#111315] dark:text-[#F1F0EA]">
              You're on the Priority List!
            </h3>
            <p className="text-sm text-[#5E6670] dark:text-[#85898B] max-w-xs mx-auto">
              We'll send an instant download link as soon as the <span className="text-[#4A7000] dark:text-[#C9FF2E] font-medium">{platform}</span> binary is released.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 inline-flex items-center justify-center px-6 py-2.5 bg-[#F0F2F5] dark:bg-[#181B1D] hover:bg-[#E2E5E9] dark:hover:bg-[#303437] text-[#111315] dark:text-[#F1F0EA] border border-[#E2E5E9] dark:border-[#303437] text-xs font-mono rounded-xl transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F2F5] dark:bg-[#181B1D] border border-[#E2E5E9] dark:border-[#303437] text-[#4A7000] dark:text-[#C9FF2E] flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#4A7000] dark:text-[#C9FF2E] uppercase tracking-wider block font-semibold">
                  Early Access Waitlist
                </span>
                <h3 className="text-lg font-bold text-[#111315] dark:text-[#F1F0EA]">
                  {platform}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5E6670] dark:text-[#85898B] leading-relaxed">
              Be the first to download the release build of FrameGrab for <span className="text-[#111315] dark:text-[#F1F0EA] font-semibold">{platform}</span>. Zero spam, just the release ping and DMG/installer package.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono text-[#5E6670] dark:text-[#85898B] mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#F7F8FA] dark:bg-[#181B1D] border border-[#E2E5E9] dark:border-[#303437] focus:border-[#7BB300] dark:focus:border-[#C9FF2E] text-xs sm:text-sm rounded-xl px-4 py-3 text-[#111315] dark:text-[#F1F0EA] placeholder-[#85898B] focus:outline-none font-mono"
                />
              </div>

              <button
                type="submit"
                id="btn-submit-waitlist"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C9FF2E] hover:bg-[#D4FF35] text-[#0D0F10] font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md shadow-[#C9FF2E]/10 cursor-pointer"
              >
                <span>Notify Me on Release</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#5E6670] dark:text-[#85898B] font-mono pt-2">
              <Shield className="w-3.5 h-3.5 text-[#4A7000] dark:text-[#C9FF2E]" />
              <span>100% Privacy Protected &middot; No marketing spam</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


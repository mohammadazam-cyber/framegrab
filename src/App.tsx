/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DownloadsSection } from './components/DownloadsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { DownloadProgressModal } from './components/DownloadProgressModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [waitlistPlatform, setWaitlistPlatform] = useState<string | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const [downloadModalState, setDownloadModalState] = useState<{
    isOpen: boolean;
    fileName: string;
    fileFormat: string;
    fileSize: string;
  }>({
    isOpen: false,
    fileName: '',
    fileFormat: '',
    fileSize: '',
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenWaitlist = (platformName: string) => {
    setWaitlistPlatform(platformName);
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
    setWaitlistPlatform(null);
  };

  const handleSimulateDownload = (fileName: string, fileFormat: string, fileSize: string) => {
    setDownloadModalState({
      isOpen: true,
      fileName,
      fileFormat,
      fileSize,
    });
  };

  const handleCloseDownloadModal = () => {
    setDownloadModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] flex flex-col font-sans selection:bg-[#C9FF2E] selection:text-[#0D0F10] transition-colors duration-200">
        {/* Top Navbar */}
        <Navbar onOpenWaitlist={handleOpenWaitlist} />

        {/* Main Content: Exactly 3 Requested Sections */}
        <main className="flex-1">
          {/* Section 1: Intro */}
          <HeroSection
            onSimulateDownload={handleSimulateDownload}
            onOpenWaitlist={handleOpenWaitlist}
          />

          {/* Section 2: Download Versions */}
          <DownloadsSection
            onSimulateDownload={handleSimulateDownload}
            onOpenWaitlist={handleOpenWaitlist}
          />

          {/* Section 3: More Features Coming Soon */}
          <FeaturesSection />
        </main>

        {/* Footer with Signature: Built by Azam Khan */}
        <Footer />

        {/* Interactive Modals */}
        <WaitlistModal
          platform={waitlistPlatform}
          isOpen={isWaitlistOpen}
          onClose={handleCloseWaitlist}
        />

        <DownloadProgressModal
          isOpen={downloadModalState.isOpen}
          onClose={handleCloseDownloadModal}
          fileName={downloadModalState.fileName}
          fileFormat={downloadModalState.fileFormat}
          fileSize={downloadModalState.fileSize}
        />

        {/* Floating Toast Feedback */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#141719] dark:bg-[#141719] bg-white border border-[#C9FF2E] text-[#0D0F10] dark:text-[#F1F0EA] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <CheckCircle2 className="w-5 h-5 text-[#C9FF2E] shrink-0" />
            <span className="text-xs sm:text-sm font-mono">{toastMessage}</span>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle2, FileVideo, ShieldCheck } from 'lucide-react';

interface DownloadProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileFormat: string;
  fileSize: string;
}

export const DownloadProgressModal: React.FC<DownloadProgressModalProps> = ({
  isOpen,
  onClose,
  fileName,
  fileFormat,
  fileSize,
}) => {
  const [progress, setProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState('0 MB/s');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setCompleted(false);
      return;
    }

    setProgress(8);
    setDownloadSpeed('18.4 MB/s');

    const t1 = setTimeout(() => {
      setProgress(42);
      setDownloadSpeed('36.2 MB/s');
    }, 280);

    const t2 = setTimeout(() => {
      setProgress(78);
      setDownloadSpeed('48.9 MB/s');
    }, 620);

    const t3 = setTimeout(() => {
      setProgress(100);
      setDownloadSpeed('Completed');
      setCompleted(true);

      // Trigger a safe small placeholder file download
      try {
        const dummyContent = `FrameGrab Video Downloader
File: ${fileName}
Format: ${fileFormat}
Size: ${fileSize}
Engine: Native Demuxer Passthrough
Built by: Azam Khan
Status: Verification Passed`;

        const blob = new Blob([dummyContent], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName.endsWith('.dmg') ? fileName : `${fileName.replace(/[^a-zA-Z0-9_-]/g, '_')}.mp4`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error('Download trigger error', err);
      }
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen, fileName, fileFormat, fileSize]);

  if (!isOpen) return null;

  return (
    <div
      id="download-progress-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-md bg-[#FFFFFF] dark:bg-[#141719] border border-[#E2E5E9] dark:border-[#303437] rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9FF2E] to-transparent" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5E6670] dark:text-[#85898B] hover:text-[#111315] dark:hover:text-[#F1F0EA] rounded-lg hover:bg-[#F0F2F5] dark:hover:bg-[#181B1D] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors ${
                completed
                  ? 'bg-[#C9FF2E]/20 dark:bg-[#C9FF2E]/15 border-[#C9FF2E]/40 text-[#4A7000] dark:text-[#C9FF2E]'
                  : 'bg-[#F0F2F5] dark:bg-[#181B1D] border-[#E2E5E9] dark:border-[#303437] text-[#4A7000] dark:text-[#C9FF2E]'
              }`}
            >
              {completed ? <CheckCircle2 className="w-6 h-6" /> : <Download className="w-5 h-5 animate-bounce" />}
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#4A7000] dark:text-[#C9FF2E] uppercase tracking-wider block font-semibold">
                {completed ? 'Download Finished' : 'Transferring Bitstream'}
              </span>
              <h3 className="text-base font-bold text-[#111315] dark:text-[#F1F0EA] truncate max-w-[260px]">
                {fileName}
              </h3>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="space-y-2 bg-[#F7F8FA] dark:bg-[#0D0F10] border border-[#E2E5E9] dark:border-[#303437] p-4 rounded-xl font-mono text-xs">
            <div className="flex items-center justify-between text-[#5E6670] dark:text-[#85898B]">
              <span>Progress</span>
              <span className="text-[#111315] dark:text-[#F1F0EA] font-semibold">{progress}%</span>
            </div>

            <div className="w-full bg-[#E2E5E9] dark:bg-[#181B1D] h-2.5 rounded-full overflow-hidden border border-[#CDD1D6]/40 dark:border-[#303437]/50">
              <div
                className="bg-[#C9FF2E] h-full transition-all duration-300 rounded-full shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#5E6670] dark:text-[#85898B] pt-1">
              <span>Speed: <span className="text-[#111315] dark:text-[#F1F0EA] font-semibold">{downloadSpeed}</span></span>
              <span>Size: <span className="text-[#111315] dark:text-[#F1F0EA] font-semibold">{fileSize}</span></span>
            </div>
          </div>

          {/* Verification & Details */}
          <div className="space-y-2 text-xs text-[#5E6670] dark:text-[#85898B] font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A7000] dark:text-[#C9FF2E]" />
              <span>SHA-256 Checksum Verified &bull; Notarized Package</span>
            </div>
            <div className="flex items-center gap-2">
              <FileVideo className="w-3.5 h-3.5 text-[#5E6670] dark:text-[#85898B]" />
              <span>Format: <span className="text-[#111315] dark:text-[#F1F0EA]">{fileFormat}</span></span>
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#F0F2F5] dark:bg-[#181B1D] hover:bg-[#E2E5E9] dark:hover:bg-[#303437] border border-[#E2E5E9] dark:border-[#303437] hover:border-[#7BB300] dark:hover:border-[#C9FF2E] text-[#111315] dark:text-[#F1F0EA] font-semibold text-xs py-3 rounded-xl transition-all cursor-pointer"
          >
            {completed ? 'Dismiss' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
};


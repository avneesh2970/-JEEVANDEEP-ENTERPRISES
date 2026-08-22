import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CorporateVideoModalProps {
  isOpen: boolean;
  initialChapterIndex?: number;
  onClose: () => void;
}

const FULL_VIDEO_PLAYLIST = [
  {
    title: 'Full Corporate Overview & Operations (2026)',
    duration: '05:30',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-working-in-a-factory-41561-large.mp4',
    description: 'Complete tour of Jeevandeep Enterprises headquarters, warehousing facilities, thermal insulation testing, dielectric matting certification, and national dispatch operations.',
  },
  {
    title: 'Thermal Insulation & Refractory Testing',
    duration: '02:15',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-laser-cutting-metal-43285-large.mp4',
    description: 'In-depth laboratory demonstration of high-temperature flame resistance and thermal conductivity tests on Rockwool and Ceramic Fiber products.',
  },
  {
    title: 'Electrical Safety Matting (IS 15652 / IEC 61111)',
    duration: '01:45',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-engineer-working-on-a-circuit-board-41554-large.mp4',
    description: 'High-voltage breakdown testing in our laboratory for electrical insulation rubber matting up to 33kV proof voltage.',
  },
];

export const CorporateVideoModal: React.FC<CorporateVideoModalProps> = ({
  isOpen,
  initialChapterIndex = 0,
  onClose,
}) => {
  const [currentTrack, setCurrentTrack] = useState(initialChapterIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setCurrentTrack(initialChapterIndex);
  }, [initialChapterIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const track = FULL_VIDEO_PLAYLIST[currentTrack] || FULL_VIDEO_PLAYLIST[0];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md">
        {/* Backdrop overlay click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl bg-[#00132b] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 px-6 bg-[#000a1a] border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#fea619] animate-pulse" />
              <div>
                <h3 className=" text-base font-bold text-white leading-tight">
                  Jeevandeep Enterprises — Corporate Video Presentation
                </h3>
                <p className="text-xs text-slate-400 ">
                  ISO 9001:2015 Certified Operations & Product Testing
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src={track.videoUrl}
              autoPlay
              controls
              muted={isMuted}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video Meta & Playlist Control Footer */}
          <div className="p-6 bg-[#001733] border-t border-white/10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="grow">
              <span className="text-xs font-bold text-[#fea619] uppercase tracking-wider bg-[#fea619]/10 px-2.5 py-0.5 rounded border border-[#fea619]/20 inline-block mb-2">
                4K Corporate Video
              </span>
              <h4 className=" text-lg font-bold text-white mb-1">
                {track.title}
              </h4>
              <p className=" text-xs text-slate-300 line-clamp-2 max-w-2xl">
                {track.description}
              </p>
            </div>

            {/* Track Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              {FULL_VIDEO_PLAYLIST.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTrack(idx)}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                    currentTrack === idx
                      ? 'bg-[#fea619] text-[#002147]'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Clip {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

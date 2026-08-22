import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoShowcaseSectionProps {
  onOpenVideoModal: (chapterIndex?: number) => void;
}

interface VideoChapter {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  specs: string[];
}

const VIDEO_CHAPTERS: VideoChapter[] = [
  {
    id: 'warehouse',
    title: 'Central Fulfillment & Stock Warehouse',
    category: 'Operations',
    duration: '02:45',
    description: 'Explore our state-of-the-art 50,000 sq. ft. central logistics center in Mumbai. Certified inventory management ensures instant dispatch of high-density rockwool, insulation sheets, and specialized fasteners.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-working-in-a-factory-41561-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    specs: ['50,000+ Sq. Ft. Facility', '5,000+ SKU In-Stock', 'Same-Day Dispatch Track'],
  },
  {
    id: 'insulation',
    title: 'Thermal & Refractory Testing Lab',
    category: 'Quality Assurance',
    duration: '01:50',
    description: 'Watch our quality control engineers test thermal conductivity and flame resistance for Rockwool slabs and Ceramic Fiber blankets conforming to ASTM C612 and IS 8183 standards.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-laser-cutting-metal-43285-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    specs: ['ASTM C612 Compliant', 'Temp Rating -200°C to 1425°C', 'MTC 3.1 Certified'],
  },
  {
    id: 'electrical',
    title: 'Dielectric Safety Matting Lab (33kV)',
    category: 'High Voltage Testing',
    duration: '02:15',
    description: 'Demonstration of IS 15652 dielectric breakdown voltage test for high-voltage rubber mats designed for electrical power substations.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-engineer-working-on-a-circuit-board-41554-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    specs: ['IS 15652 & IEC 61111', '45 kV/mm Dielectric Rating', 'Anti-Skid Surface Verification'],
  },
  {
    id: 'logistics',
    title: 'Heavy Logistics & B2B Supply Chain',
    category: 'Distribution',
    duration: '03:10',
    description: 'See how Jeevandeep Enterprises handles critical shutdown deliveries and pan-India express freight for thermal power plants and petroleum refineries.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-large-cargo-ship-navigating-the-sea-43187-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    specs: ['Pan-India Express', 'Emergency Plant Shutdown Support', 'Zero Damage Packaging'],
  },
];

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({
  onOpenVideoModal,
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeChapter = VIDEO_CHAPTERS[activeChapterIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          // Handle autoplay policy restriction if any
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec)) return '00:00';
    const minutes = Math.floor(timeInSec / 60);
    const seconds = Math.floor(timeInSec % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSelectChapter = (index: number) => {
    setActiveChapterIndex(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section id="video-showcase" className="py-16 md:py-24 bg-[#00132b] text-white relative overflow-hidden">
      {/* Background Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#002147] via-[#00132b] to-[#000a1a] opacity-90" />

      {/* Decorative Shimmer / Grid Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fea619]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0052a3]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fea619]/15 border border-[#fea619]/30 text-[#fea619] text-xs font-semibold uppercase tracking-wider mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#fea619] animate-ping" />
              <span>Interactive Operations Video</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className=" text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
            >
              Inside Jeevandeep Enterprises
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className=" text-slate-300 text-base md:text-lg max-w-2xl mt-2"
            >
              Take a virtual tour of our Mumbai fulfillment warehouse, thermal insulation testing laboratory, and quality assurance workflows.
            </motion.p>
          </div>

          {/* Fullscreen Video Modal Trigger Button */}
          <motion.button
            whileHover={{ scale: 1.04, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenVideoModal(activeChapterIndex)}
            className="inline-flex items-center gap-2.5 bg-[#fea619] hover:bg-[#e69310] text-[#002147]  font-bold text-sm px-6 py-3.5 rounded shadow-lg transition-all cursor-pointer self-start md:self-auto shrink-0"
          >
            <span className="material-symbols-outlined text-[22px]">fullscreen</span>
            <span>Watch Fullscreen HD Video</span>
          </motion.button>
        </div>

        {/* Video Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Interactive Video Player Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 bg-[#001c3d] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group"
          >
            {/* Video Canvas Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={activeChapter.videoUrl}
                poster={activeChapter.posterUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Top Video Overlay Bar */}
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#fea619] text-[#002147] font-extrabold text-[11px] uppercase tracking-wider">
                    {activeChapter.category}
                  </span>
                  <span className="text-xs text-white/90 font-medium truncate max-w-[200px] sm:max-w-xs">
                    {activeChapter.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] text-emerald-400 font-semibold border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    4K ULTRA HD
                  </span>
                  <span className="text-xs text-slate-300 font-mono bg-black/60 px-2 py-1 rounded">
                    {formatTime(currentTime)} / {formatTime(duration || 165)}
                  </span>
                </div>
              </div>

              {/* Big Center Play / Pause Overlay Button */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={togglePlay}
                    className="absolute z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#fea619] text-[#002147] flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
                    aria-label="Play Video"
                  >
                    <span className="material-symbols-outlined text-[44px] ml-1">play_arrow</span>
                    {/* Ripple aura */}
                    <span className="absolute inset-0 rounded-full bg-[#fea619]/40 animate-ping pointer-events-none" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 flex flex-col gap-2">
                {/* Custom Timeline Scrubber */}
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-white/20 hover:bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#fea619] transition-all"
                />

                <div className="flex items-center justify-between pt-1">
                  {/* Left Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-[#fea619] transition-colors p-1 cursor-pointer"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      <span className="material-symbols-outlined text-2xl">
                        {isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                    </button>

                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-[#fea619] transition-colors p-1 cursor-pointer"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      <span className="material-symbols-outlined text-2xl">
                        {isMuted ? 'volume_off' : 'volume_up'}
                      </span>
                    </button>

                    <span className="text-xs text-slate-300 font-mono">
                      {formatTime(currentTime)}
                    </span>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenVideoModal(activeChapterIndex)}
                      className="text-white hover:text-[#fea619] transition-colors p-1 cursor-pointer flex items-center gap-1 text-xs font-semibold"
                      title="Fullscreen Modal"
                    >
                      <span className="material-symbols-outlined text-xl">open_in_full</span>
                      <span className="hidden sm:inline">Expand</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Meta Info Footer */}
            <div className="p-6 bg-[#001c3d] border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <h3 className=" text-xl font-bold text-white">
                  {activeChapter.title}
                </h3>
                <span className="text-xs font-semibold text-[#fea619] bg-[#fea619]/10 px-3 py-1 rounded border border-[#fea619]/20">
                  Chapter {activeChapterIndex + 1} of {VIDEO_CHAPTERS.length}
                </span>
              </div>

              <p className=" text-sm text-slate-300 leading-relaxed mb-4">
                {activeChapter.description}
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
                {activeChapter.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-200 bg-white/5 px-3 py-1 rounded border border-white/10"
                  >
                    <span className="material-symbols-outlined text-xs text-[#fea619]">check_circle</span>
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chapter Selector Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className=" text-lg font-bold text-white flex items-center justify-between">
              <span>Video Playlists & Chapters</span>
              <span className="text-xs text-slate-400 font-normal">4 Clips</span>
            </h3>

            <div className="flex flex-col gap-3">
              {VIDEO_CHAPTERS.map((chap, idx) => {
                const isActive = idx === activeChapterIndex;
                return (
                  <motion.div
                    key={chap.id}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectChapter(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex gap-4 items-center ${
                      isActive
                        ? 'bg-[#002b5c] border-[#fea619] shadow-lg text-white'
                        : 'bg-[#001733]/70 hover:bg-[#001c3d] border-white/10 text-slate-300'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-24 h-16 rounded overflow-hidden shrink-0 bg-slate-900 border border-white/10">
                      <img
                        src={chap.posterUrl}
                        alt={chap.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className={`material-symbols-outlined text-xl ${isActive ? 'text-[#fea619]' : 'text-white'}`}>
                          {isActive && isPlaying ? 'pause_circle' : 'play_circle'}
                        </span>
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 text-[9px] font-mono text-white rounded">
                        {chap.duration}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          isActive ? 'bg-[#fea619] text-[#002147]' : 'bg-white/10 text-slate-400'
                        }`}>
                          {chap.category}
                        </span>
                      </div>
                      <h4 className={` text-sm font-semibold truncate ${isActive ? 'text-white font-bold' : 'text-slate-200'}`}>
                        {chap.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {chap.specs[0]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quality & Certification Highlight Box */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#002855] to-[#001733] border border-[#fea619]/30 mt-2">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#fea619] text-3xl shrink-0 mt-0.5">
                  verified
                </span>
                <div>
                  <h4 className=" text-sm font-bold text-white mb-1">
                    ISO 9001 Certified Quality Footage
                  </h4>
                  <p className=" text-xs text-slate-300 leading-relaxed">
                    All operations shown reflect Jeevandeep Enterprises' standard quality management protocols and certified material handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

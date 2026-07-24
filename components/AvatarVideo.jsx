"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, Maximize2 } from "lucide-react";

const AvatarVideo = ({ src = "/avatar-intro.mp4", poster = "" }) => {
  const videoRef    = useRef(null);
  const [muted,    setMuted]    = useState(true);
  const [playing,  setPlaying]  = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasVideo, setHasVideo] = useState(true);

  /* Auto-play muted on mount */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    /* Server-rendered <video src> can fail to load before hydration attaches
       onError, so the error event is missed — check vid.error directly. */
    if (vid.error || vid.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      setHasVideo(false);
      return;
    }
    vid.muted = true;
    vid.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) { vid.play(); setPlaying(true); }
    else            { vid.pause(); setPlaying(false); }
  };

  const onTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    setProgress((vid.currentTime / vid.duration) * 100);
  };

  const onEnded = () => setPlaying(false);

  const seekTo = (e) => {
    const vid = videoRef.current;
    if (!vid) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    vid.currentTime = ratio * vid.duration;
  };

  const fullscreen = () => videoRef.current?.requestFullscreen?.();

  return (
    <div className="relative w-full select-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>

      {/* ── Outer glow ring ── */}
      <div className="absolute -inset-[3px] rounded-2xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, var(--primary)40, var(--secondary)40, transparent)", zIndex: 0 }}
      />

      {/* ── Main container ── */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ background: "#000", border: "1px solid var(--border-hl)", zIndex: 1 }}
      >
        {/* ── HUD corners ── */}
        {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-5 h-5 pointer-events-none z-20`}
            style={{
              borderTop:    i < 2  ? `2px solid var(--primary)` : "none",
              borderBottom: i >= 2 ? `2px solid var(--primary)` : "none",
              borderLeft:   i % 2 === 0 ? `2px solid var(--primary)` : "none",
              borderRight:  i % 2 === 1 ? `2px solid var(--primary)` : "none",
            }}
          />
        ))}

        {/* ── Status bar (top) ── */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-2"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--primary)" }}>
              AI AVATAR · LIVE INTRO
            </span>
          </div>
          <span className="text-[9px] tracking-widest" style={{ color: "var(--text-3)" }}>
            SAHIL.DESHMUKH_v2
          </span>
        </div>

        {/* ── Scan line animation ── */}
        {playing && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-2xl">
            <div className="scan-line absolute left-0 right-0 h-px opacity-30"
              style={{ background: "var(--primary)" }}
            />
          </div>
        )}

        {/* ── Overlay grid ── */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── VIDEO ── */}
        {hasVideo ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            playsInline
            muted={muted}
            onTimeUpdate={onTimeUpdate}
            onEnded={onEnded}
            onError={() => setHasVideo(false)}
            className="w-full block aspect-[4/5]"
            style={{ objectFit: "cover" }}
          />
        ) : (
          /* Placeholder when no video */
          <div className="w-full aspect-[4/5] flex flex-col items-center justify-center gap-4"
            style={{ background: "linear-gradient(135deg, #07070f, #0d0d1c)" }}
          >
            {/* Avatar silhouette */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ border: "2px solid var(--primary)", boxShadow: "0 0 30px rgba(34,211,238,0.3)" }}
              >
                <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
                  <path d="M20 21a8 8 0 1 0-16 0"/>
                </svg>
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
            </div>
            <div className="text-center px-4">
              <p className="text-sm font-bold mb-1" style={{ color: "var(--primary)" }}>
                AI AVATAR VIDEO
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>
                Place your avatar video at<br />
                <span style={{ color: "var(--text-2)" }}>public/avatar-intro.mp4</span>
              </p>
            </div>
            {/* Waveform placeholder */}
            <div className="flex items-center gap-0.5 px-6">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="w-1 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 24 + 4}px`,
                    background: "var(--primary)",
                    opacity: 0.3 + Math.random() * 0.5,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Controls bar (bottom) ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-3 pt-6"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
        >
          {/* Progress bar */}
          <div className="mb-2.5 h-1 rounded-full cursor-pointer" style={{ background: "rgba(255,255,255,0.15)" }}
            onClick={seekTo}
          >
            <div className="h-1 rounded-full transition-all"
              style={{ width: `${progress}%`, background: "var(--primary)" }}
            />
          </div>

          {/* Buttons row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button onClick={togglePlay}
                className="p-1.5 rounded-lg transition-colors"
                style={{ color: "var(--text-2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
              >
                {playing ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <button onClick={toggleMute}
                className="p-1.5 rounded-lg transition-colors"
                style={{ color: muted ? "var(--text-3)" : "var(--primary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = muted ? "var(--text-3)" : "var(--primary)")}
                title={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              {muted && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] px-2 py-0.5 rounded cursor-pointer"
                  style={{ background: "rgba(34,211,238,0.15)", color: "var(--primary)", border: "1px solid rgba(34,211,238,0.25)" }}
                  onClick={toggleMute}
                >
                  click to unmute
                </motion.span>
              )}
            </div>
            <button onClick={fullscreen}
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              <Maximize2 size={13} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scan-line {
          animation: scanDown 3s linear infinite;
        }
        @keyframes scanDown {
          0%   { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AvatarVideo;

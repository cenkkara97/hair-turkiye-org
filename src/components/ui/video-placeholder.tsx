"use client";

import { Play, Volume2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface VideoPlaceholderProps {
  title: string;
  description?: string;
  thumbnailSrc: string;
  duration?: string;
  className?: string;
  onPlay?: () => void;
}

export function VideoPlaceholder({
  title,
  description,
  thumbnailSrc,
  duration = "2:30",
  className = "",
  onPlay,
}: VideoPlaceholderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-black cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <Image
          src={thumbnailSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isHovered ? "opacity-60" : "opacity-30"
        }`} />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`flex size-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition duration-300 ${
            isHovered ? "scale-110 bg-brand-gold text-white" : "scale-100"
          }`}>
            <Play className="size-6 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {duration}
        </div>

        {/* Audio Indicator */}
        <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
          <Volume2 className="size-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-white mb-2 group-hover:text-brand-gold-2 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-white/80 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
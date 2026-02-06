import { useRef } from "react";
import { Play } from "lucide-react";

import sampleVideo1 from "@/assets/sample-video-1.mp4";
import sampleVideo2 from "@/assets/sample-video-2.mp4";
import sampleVideo3 from "@/assets/sample-video-3.mp4";
import sampleVideo4 from "@/assets/sample-video-4.mp4";
import sampleVideo5 from "@/assets/sample-video-5.mp4";
import sampleVideo6 from "@/assets/sample-video-6.mp4";

const SampleVideosSection = () => {
  const videoRefs = useRef([]);

  const videos = [
    sampleVideo1,
    sampleVideo2,
    sampleVideo3,
    sampleVideo4,
    sampleVideo5,
    sampleVideo6,
  ];

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.paused ? video.play() : video.pause();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-gradient underline">SAMPLE</span> VIDEOS 👀
        </h2>

        {/* VIDEO CONTAINER */}
        <div className="neon-border rounded-lg p-6 bg-card">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {videos.map((videoSrc, index) => (
              <div
                key={index}
                className="relative min-w-[160px] md:min-w-[180px] aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handlePlay(index)}
              >
                {/* VIDEO */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />

                {/* PLAY ICON */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                  </div>
                </div>

                {/* INDEX */}
                <span className="absolute bottom-2 right-2 text-xs text-white/80">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleVideosSection;
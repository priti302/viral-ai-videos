import { CheckCircle, Play } from 'lucide-react';
import { useRef, useState } from 'react';
import proofVideo from '@/assets/proof.mp4';

const ProofSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-500 fill-green-500" />
          <span>
            <span className="text-green-500 underline">Proof</span> of 3000+ Anime Reels
          </span>
        </h2>

        <div className="relative neon-border rounded-lg overflow-hidden bg-card cursor-pointer">
          
          {/* VIDEO */}
          <video
            ref={videoRef}
            src={proofVideo}
            className="w-full h-auto"
            controls={isPlaying}
            playsInline
          />

          {/* PLAY BUTTON OVERLAY */}
          {!isPlaying && (
            <div
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
            >
              <div className="bg-green-500 p-5 rounded-full">
                <Play className="w-8 h-8 text-black fill-black" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
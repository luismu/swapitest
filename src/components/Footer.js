import React, { useEffect, useRef, useState } from "react";

function Footer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio
        .play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    } else {
      audio.pause();
    }

    audio.muted = isMuted;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying, isMuted]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="App">
      <button onClick={toggleAudio}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
      <audio ref={audioRef} src="/StarWarsTheme.mp3" autoPlay />
    </div>
  );
}

export default Footer;

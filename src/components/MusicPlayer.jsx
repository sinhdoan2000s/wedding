import { useState, useRef, useEffect } from "react";
import styles from "./MusicPlayer.module.css";
import weddingMedia from "../media/wedding.mp3";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Try autoplay on mount. If it succeeds set isPlaying = true, otherwise remain false.
    const audio = audioRef.current;
    if (!audio) return;

    // set a reasonable volume
    try { audio.volume = 0.3; } catch (e) {}

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          // Autoplay blocked by browser — user must interact.
          console.log("Autoplay blocked:", err);
          setIsPlaying(false);
        });
    }

    setTimeout(() => {  
        togglePlay()
    }, 1000);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    const p = audio.play();
    if (p !== undefined) {
      p.then(() => setIsPlaying(true)).catch(err => {
        console.log("Play failed:", err);
        setIsPlaying(false);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMedia}
        loop
        onEnded={() => {
          // Loop will handle this, but just in case
        }}
      />
      <button
        className={styles.musicButton}
        onClick={togglePlay}
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  );
}

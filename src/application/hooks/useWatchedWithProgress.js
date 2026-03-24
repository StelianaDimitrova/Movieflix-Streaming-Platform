import { useState, useRef, useCallback } from "react";

export function useWatchedWithProgress(videoKey, threshold = 0.8) {
  const playerRef = useRef(null);
  const [watched, setWatched] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("watched") || "[]");
    return stored.includes(videoKey);
  });

  const markWatched = useCallback(() => {
    if (!watched) {
      setWatched(true);
      const stored = JSON.parse(localStorage.getItem("watched") || "[]");

      if (!stored.includes(videoKey)) {
        const updated = [...stored, videoKey];
        localStorage.setItem("watched", JSON.stringify(updated));
      }
    }
  }, [watched, videoKey]);

  const handleProgress = useCallback(() => {
    if (!playerRef.current || watched) return;

    const current = playerRef.current.getCurrentTime();
    const duration = playerRef.current.getDuration();

    if (duration > 0 && current / duration >= threshold) {
      markWatched();
    }
  }, [watched, threshold, markWatched]);

  return { watched, markWatched, playerRef, handleProgress };
}

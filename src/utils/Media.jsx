import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Media() {
  const [isUpload, setIsUpload] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const mobileVersion = useMediaQuery({
    maxWidth: 768,
  });

  const desktopVersion = useMediaQuery({
    minWidth: 769,
  });

  const handleState = () => {
    setIsDone((prev) => (prev ? prev : document.readyState === "done"));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsUpload(true);
      setIsDone(document.readyState === "done");
      if (!isDone) {
        document.addEventListener("readystatechange", handleState);
      }
    }
    return () => {
      document.removeEventListener("readystatechange", handleState);
    };
  }, [isDone]);

  return {
    desktopVersion: isUpload ? desktopVersion : true,
    mobileVersion: isUpload ? mobileVersion : false,
    isUpload,
    isDone,
  };
}

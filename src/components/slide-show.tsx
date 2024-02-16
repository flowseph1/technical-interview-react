import { useState } from "react";
import { Gif } from "../types/gif";
import { AnimatePresence, motion } from "framer-motion";

export function SlideShow({
  gifList,
  index,
  handleSlideShowClose,
}: {
  gifList: Gif[] | undefined;
  index: number;
  handleSlideShowClose: () => void;
}) {
  const [position, setPosition] = useState(index);

  const handleNext = () => {
    if (position === gifList!.length! - 1) return;

    setPosition(position + 1);
  };

  const handlePrev = () => {
    if (position === 0) return;

    setPosition(position - 1);
  };

  if (!gifList) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute z-0 inset-0 flex-1"
        onClick={() => handleSlideShowClose()}
      />

      <div className="z-10">
        <div className="bg-white p-10 rounded-lg flex gap-5 max-w-6xl">
          <button
            onClick={handlePrev}
            style={{
              opacity: position === 0 ? 0.5 : 1,
            }}
          >
            <span>🔙</span>
          </button>

          <div>
            <AnimatePresence mode="wait">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={gifList?.[position].title}
                src={gifList?.[position].images.original.url}
                alt={gifList?.[position].title}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            style={{
              opacity: position === gifList!.length! - 1 ? 0.5 : 1,
            }}
          >
            <span>🔜</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

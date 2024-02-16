import { useState } from "react";
import { Gif } from "../types/gif";
import { SlideShow } from "./slide-show";

export function GifDisplay({ gifList }: { gifList: Gif[] | undefined }) {
  const [showSlideShow, setShowSlideShow] = useState(false);

  const [position, setPosition] = useState(0);

  const handleClick = (index: number) => {
    setPosition(index);
    setShowSlideShow(true);
  };

  const handleSlideShowClose = () => {
    setShowSlideShow(false);
  };

  return (
    <div className="">
      <ul className="list-none">
        {gifList?.map((gif, index) => (
          <GifItem
            gif={gif}
            key={gif.id}
            handleClick={() => handleClick(index)}
          />
        ))}
      </ul>

      {showSlideShow && (
        <SlideShow
          gifList={gifList}
          index={position}
          handleSlideShowClose={handleSlideShowClose}
        />
      )}
    </div>
  );
}

function GifItem({ gif, handleClick }: { gif: Gif; handleClick: () => void }) {
  return (
    <li
      className="flex flex-col gap-1 justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <p>{gif.title}</p>
      <img src={gif.images.original.url} alt={gif.title} />
    </li>
  );
}

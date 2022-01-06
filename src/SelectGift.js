import React, { useState, useEffect } from "react";
import PreviewGift from "./PreviewGift";
import VideoGift from "./VideoGift";
import useGift from "./hooks/useGift";

function SelectGift() {
  const { gift, scene, randomGift, setScene } = useGift();

  let timerId;
  const clickRandom = () => {
    randomGift();
    setScene("video");
    timerId = setInterval(() => {
      setScene("preview");
      clearInterval(timerId);
    }, 6500);
  };
  return (
    <div>
      {scene === "main" && (
        <div>
          <h1 className="text-3xl font-bold underline">Select Gift</h1>
          <button
            className="border-2 border-black rounded p-5"
            onClick={clickRandom}
          >
            สุ่มเลย...
          </button>
        </div>
      )}
      {scene === "video" && <VideoGift type={gift.type} />}
      {scene === "preview" && (
        <PreviewGift
          name={gift.name}
          description={gift.description}
          sender={gift.sender}
          wish={gift.wish}
          shadowImage={gift.shadowImage}
          image={gift.image}
        />
      )}
    </div>
  );
}

export default SelectGift;

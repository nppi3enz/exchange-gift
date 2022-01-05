import React from "react";
import ReactPlayer from "react-player";

function VideoGift(props) {
  return (
    <div>
      <ReactPlayer
        url={
          props.type === "special"
            ? "/videos/5starwish.mp4"
            : "/videos/4starwish.mp4"
        }
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
}

export default VideoGift;

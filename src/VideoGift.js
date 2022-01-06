import React from "react";
import ReactPlayer from "react-player";

function VideoGift(props) {
  return (
    <div>
      <ReactPlayer
        url={`/videos/${
          props.type === "normal" ? "3starwish" : props.type
        }.mp4`}
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        muted={true}
        controls={true}
      />
    </div>
  );
}

export default VideoGift;

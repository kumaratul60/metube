import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Videos.css";

function Videos() {
  return (
    <div className="videos">
      <h2>Recommended </h2>
      <div className="videos__videos">
        <VideoCard
          title="#ytshorts  ये Kya कह Diya Teacher ko💡 || Truth💯||#AIB|| Funny Comedy || School vs College || #shorts by Ashutosh Kumar Awasthi"
          views="933 views"
          timestamp="2 weeks ago"
          channelImage="https://yt3.ggpht.com/vbkdZAMldhjDYidEJcgEcgMowd7hoi2ajQSpxf8rve0G8Aforc7uESqJdS0lWQuH2IUlObJM=s176-c-k-c0x00ffffff-no-rj"
          image="https://i.ytimg.com/vi/oM321Xh8bE8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlNVSO9aShFD3ghgH1tCzw8_XGhg"
          channel="AKA"
        />
       
        <VideoCard />
      </div>
    </div>
  );
}

export default Videos;

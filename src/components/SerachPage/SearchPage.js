import React from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image=""
        channelName="Ak"
        verified
        subs=""
        noOfVideos=""
        description=""
      />
      <hr />
      <VideoRow
        views="1.4k"
        subs={256}
        description=""
        timestamp="25.3h"
        channel="adg"
        title="ksio"
        image=""
      />
    </div>
  );
}

export default SearchPage;

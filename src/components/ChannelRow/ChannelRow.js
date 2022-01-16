import React from "react";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channelName,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__avatar" alt={channelName} src={image} />
      <div className="channelRow__text">
        <h4>
          {/* if verified is true then render the verified icon */}
          {channelName} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;

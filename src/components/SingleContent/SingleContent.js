import React, { useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
import { unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import SimpleLink from "../SimpleLink/SimpleLink";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
      <SimpleLink to={`/movie/${id}`}>
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? poster : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
      </SimpleLink>
  );
};

export default SingleContent;

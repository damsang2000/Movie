import React, { useState, useEffect, useRef } from "react";

import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const VideoList = (props) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.getVideo(category, props.id);
      setVideos(res.results.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <>
      {videos.map((video, i) => (
        <Video key={i} item={video} />
      ))}
    </>
  );
};
const Video = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute(`height`, height);
  }, []);

  return (
    <div className="video">
      <h2 className="video__title">{item.name}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};
export default VideoList;

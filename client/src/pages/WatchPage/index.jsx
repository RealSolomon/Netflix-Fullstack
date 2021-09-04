import React from 'react';
import './styles.scss';
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://vod-progressive.akamaized.net/exp=1630250046~acl=%2A%2F386411579.mp4%2A~hmac=8d2c5b7cdc1cd53e726fdee647e44823fb217e29be039cdbbfb88ec1205dbf21/vimeo-prod-skyfire-std-us/01/1436/5/132183032/386411579.mp4"
      />
    </div>
  );
};

export default Watch;

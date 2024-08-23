import React from "react";

import styles from "./styles.module.css";

const Vimeo = ({ video, title }) => {
  const vimeoSource = `https://player.vimeo.com/video/${video}`;

  return (
    <div className={styles.vimeoRoot}>
      <iframe
        src={vimeoSource}
        className={styles.vimeoIframe}
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        data-ready="true"
      />
    </div>
  );
};

export default Vimeo;

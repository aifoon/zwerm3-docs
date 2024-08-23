import React from "react";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

export const HomepageArchitecture = () => {
  return (
    <>
      <div className="homePageContainer split-5">
        <Heading className="text-center" as="h2">
          Core Components
        </Heading>
        <a
          className={styles.homePageArchitectureCardLink}
          href="/docs/for-developers/zwerm3-jack/introduction"
        >
          <div className={styles.homePageArchitectureCard}>
            <Heading as="h3">zwerm3-jack</Heading>
            <p>
              This module contains all the logic related to the Zwerm3 audio
              system, providing functions to manage Jack and Jacktrip processes,
              as well as related operations. Basically, we wrote a library
              around the CLI commands of both Jack and Jacktrip and automated
              the processes of the audio and streaming protocol.
            </p>
          </div>
        </a>
        <a
          className={styles.homePageArchitectureCardLink}
          href="/docs/for-developers/zwerm3-api/introduction"
        >
          <div className={styles.homePageArchitectureCard}>
            <Heading as="h3">zwerm3-api</Heading>
            <p>
              The zwerm3-api is a RESTful API built on top of zwerm3-jack using
              the NestJS framework. It runs as a background daemon on each
              speaker. Detailed documentation for all endpoints is available in
              the docs.
            </p>
          </div>
        </a>
        <a
          className={styles.homePageArchitectureCardLink}
          href="/docs/for-developers/kweenb/introduction"
        >
          <div className={styles.homePageArchitectureCard}>
            <Heading as="h3">kweenb</Heading>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi exercitationem reprehenderit corporis! Sint quae
              similique voluptates? Facere perspiciatis placeat officia, facilis
              adipisci quasi aspernatur temporibus recusandae neque dolores nisi
              assumenda.
            </p>
          </div>
        </a>
        <a
          className={styles.homePageArchitectureCardLink}
          href="/docs/for-developers/pd-bee/introduction"
        >
          <div className={styles.homePageArchitectureCard}>
            <Heading as="h3">pd-bee</Heading>
            <p>
              This project is a Pure Data patch that runs on each speaker. It is
              a simple patch that receives audio streams and listens to OSC
              messages to play audio files. The patch is designed to be as
              simple as possible to ensure that it runs on the Raspberry Pi CM4.
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

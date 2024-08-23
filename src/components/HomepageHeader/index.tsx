import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useGitHub from "@site/src/hooks/useGitHub";

export const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  const latesteRelease = useGitHub();
  return (
    <header className="header">
      <div className="homePageContainer split-2">
        <div className={styles.heroImageContainer}>
          <img
            className={styles.heroImage}
            src="/img/hero-image.png"
            alt="A screenshot of kweenb audio management software"
          />
        </div>
        <div className={styles.heroTextContainer}>
          <div className={styles.heroText}>
            <Heading as="h1">{siteConfig.title}</Heading>
            <Heading as="h2">
              Zwerm3 is a flexible audio system for streaming audio to and
              triggering local audio files on mobile speakers. Here you can find
              the technical documentation for all the core software components
              that have been developed by{" "}
              <a href="https://aifoon.org">aifoon</a>.
            </Heading>
          </div>
          <div className={styles.heroTextCta}>
            <a
              href="/docs/for-developers/architecture"
              className="primary-button"
            >
              Start reading
            </a>
            {latesteRelease && (
              <a
                href={latesteRelease.download_url}
                className="secondary-button"
              >
                Download kweenb {latesteRelease.name}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

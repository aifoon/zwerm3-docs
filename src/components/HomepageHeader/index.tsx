import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useGitHub from "@site/src/hooks/useGitHub";

export const HomepageHeader = () => {
  const { siteConfig, i18n } = useDocusaurusContext();
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
              <Translate id="home.intro">
                Zwerm3 is the swarm of wireless speakers of aifoon. KweenB is
                the program that runs it. Here you find the manual: how to use
                the swarm, stream to it, trigger sounds, and look after the
                speakers.
              </Translate>
            </Heading>
          </div>
          <div className={styles.heroTextCta}>
            <Link to="/docs/manual/welcome" className="primary-button">
              <Translate id="home.openManual">Open the manual</Translate>
            </Link>
            <a
              href={useBaseUrl(`/pdf/kweenb-manual-${i18n.currentLocale}.pdf`)}
              className="secondary-button"
            >
              <Translate id="home.downloadPdf">Download as PDF</Translate>
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

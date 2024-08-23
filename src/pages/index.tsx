import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { HomepageHeader } from "../components/HomepageHeader";
import { HomepageVideo } from "../components/HomepageVideo";

import styles from "./index.module.css";
import { HomepageArchitecture } from "../components/HomepageArchitecture";
import { HomepageContact } from "../components/HomepageContact";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`aifoon - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageVideo />
        <HomepageArchitecture />
        <HomepageContact />
      </main>
    </Layout>
  );
}

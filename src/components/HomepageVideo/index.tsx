import React from "react";
import Vimeo from "../Vimeo";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

export const HomepageVideo = () => {
  return (
    <div className="homePageContainer split-2">
      <div>
        <Heading as="h2">The Swarm</Heading>
        <p>
          Aifoon's De Zwerm (The Swarm) is an installation with twenty portable,
          wireless speakers that can put sound in motion. Sounds can dance in a
          space, swell, wander around, ... Thanks to De Zwerm, we can create
          sound environments together with our audience in which you can be
          completely immersed. De Zwerm is not only a new audio system, but also
          a method that allows everyone to create sound environments in a
          physical and spatial way. In this way, we make sound tangible, which
          helps us reflect on questions such as: how do we live together
          aurally? How do we want our city to sound? What sound do you want to
          live in?
        </p>
        <a
          href="https://aifoon.org/en/onze-projecten/zwerm"
          className="primary-button"
          target="_blank"
        >
          Read more
        </a>
      </div>
      <Vimeo video={857067081} title="The Swarm" />
    </div>
  );
};

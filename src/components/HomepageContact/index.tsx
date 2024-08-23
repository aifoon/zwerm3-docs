import React from "react";
import Heading from "@theme/Heading";

export const HomepageContact = () => {
  return (
    <div className="homePageContainer split-2">
      <div>
        <Heading as="h2">The authors</Heading>
        <p>
          The Zwerm3 project is maintained by a group of freelance developers
          and artists. We are passionate about creating new and innovative ways
          to interact with sound and music. If you have any questions or
          suggestions, feel free to contact us.
        </p>
        <ul className="avatars">
          <li>
            <div>
              <a href="https://www.kaotec.be/" target="_blank">
                <img src="/img/kasper-jordaens.png" alt="Kasper Jordaens" />
              </a>
              <p>Kasper Jordaens</p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.jeroenvandesande.be/" target="_blank">
                <img src="/img/jeroen-vandesande.png" alt="Jeroen Vandesande" />
              </a>
              <p>Jeroen Vandesande</p>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://www.linkedin.com/in/tim-de-paepe-71311212/"
                target="_blank"
              >
                <img src="/img/tim-de-paepe.png" alt="Tim De Paepe" />
              </a>
              <p>Tim De Paepe</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <form action="https://formspree.io/f/xyzgbeoj" method="POST">
          <label>
            E-mail
            <input required type="email" name="email" />
          </label>
          <label>
            Message
            <textarea required rows={10} name="message"></textarea>
          </label>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="primary-button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

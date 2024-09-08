import * as React from "react";

interface EmailTemplateTopScoreProps {
  playerName: string;
  punchline: string;
  xAccount: string;
  linkedinAccount: string;
  githubAccount: string;
  siteOne: string;
  siteTwo: string;
}

export const EmailTemplateTopScore: React.FC<
  Readonly<EmailTemplateTopScoreProps>
> = ({
  playerName,
  punchline,
  xAccount,
  linkedinAccount,
  githubAccount,
  siteOne,
  siteTwo,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "40px",
      backgroundColor: "#0E0D0B",
    }}
  >
    <hr />
    <h3 style={{ color: "#FFFCDB", marginTop: "30px" }}>
      Un nouveau joueur à battu le record du Snake Game !
    </h3>
    <p
      style={{
        color: "#FFFFFF",
      }}
    >
      PlayerName : {playerName} <br />
      punchline : {punchline} <br />
      xAccount : {xAccount} <br />
      linkedinAccount : {linkedinAccount} <br />
      githubAccount : {githubAccount} <br />
      site 1 : {siteOne} <br />
      site 2 : {siteTwo}
    </p>
    <hr />
    <a
      href="sl-code.dev/snake"
      style={{
        color: "#CCBC9E",
        marginTop: "30px",
      }}
    >
      Lien vers le Snake
    </a>
  </div>
);

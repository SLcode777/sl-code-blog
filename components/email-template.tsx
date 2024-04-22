import * as React from "react";

interface EmailTemplateProps {
  firstName: string; //champ variable de ton mail
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
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
    <img
      src="https://github.com/StellaDePaperStreet/hosting-repo/blob/main/SL%20CODE%20cream.png?raw=true"
      alt="logo sl-code"
      style={{
        maxWidth: "35%",
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
    <hr />
    <h3 style={{ color: "#FFFCDB", marginTop: "30px" }}>
      Bienvenue à toi {firstName} 😊
    </h3>
    <p
      style={{
        color: "#FFFFFF",
      }}
    >
      Heureuse de te compter parmi mes abonnés! Tu recevras un e-mail de ma part
      uniquement lorsque je publierai un nouvel article sur mon blog.
    </p>
    <p
      style={{
        color: "#FFFFFF",
      }}
    >
      N&apos;hésites pas à répondre à mes mails si tu as des remarques, des
      conseils ou des questions ! Je me ferai un plaisir de te lire ^^
    </p>
    <p style={{ marginTop: "40px", color: "#FFFfff" }}>A très vite 🌟</p>
    <p
      style={{
        marginBottom: "40px",
        color: "#FFFCDB",
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      Stella
    </p>
    <hr />
    <a
      href="sl-code-blog.vercel.app"
      style={{
        color: "#CCBC9E",
        marginTop: "30px",
      }}
    >
      Lien vers mon blog
    </a>
    <p style={{ fontSize: "14px", color: "#AAAAAA", marginTop: "20px" }}>
      Tu ne peux pas répondre directement à cet email. Si tu veux m&apos;écrire
      pour le moment, utilises cette adresse : paperstreet.notion@gmail.com
    </p>
  </div>
);

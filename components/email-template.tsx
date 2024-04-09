import * as React from "react";

interface EmailTemplateProps {
  firstName: string; //champ variable de ton mail
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h3>Bienvenue à toi {firstName} 😊</h3>
    <br />
    <br />
    <p>
      Heureuse de te compter parmi mes abonnés. Tu recevras un e-mail de ma part
      uniquement lorsque je publierai un nouvel article sur mon blog.
    </p>
    <p>
      N&apos;hésites pas à répondre à mes mails si tu as des remarques, des
      conseils ou des questions ! Je me ferai un plaisir de te lire ^^{" "}
    </p>
    <br />
    <br />
    <p>
      A très vite 🌟
      <br />
      Stella
    </p>
    {/* prévoir de gérer le unsub */}
  </div>
);

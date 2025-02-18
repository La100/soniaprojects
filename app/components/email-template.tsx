import * as React from 'react';
import { translations } from '../locales/translations';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  language: 'pl' | 'en';
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  language
}) => {
  const t = translations.email[language];
  
  return (
    <div>
      <h1>{t.newMessage} {name}</h1>
      <p>{t.contactEmail} {email}</p>
      <div>
        <h2>{t.messageContent}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

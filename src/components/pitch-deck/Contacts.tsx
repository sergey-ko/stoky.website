import React from 'react';
import { FaEnvelope, FaGlobe, FaPhone, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa';

const ContactsSlide: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="pitch-deck-h3 mb-12">Partner with Stoky to transform the retail trading landscape with AI-powered Assistant.</h3>
      <ul className="space-y-4">
        <ContactItem icon={<FaEnvelope />} text="Email: sk@stoky.pro" link="mailto:sk@stoky.pro" />
        <ContactItem icon={<FaGlobe />} text="Website: stoky.pro" link="https://stoky.pro" />
        <ContactItem icon={<FaPhone />} text="Phone: +1 302 956 9684" link="tel:+13029569684" />
        <ContactItem icon={<FaLinkedin />} text="LinkedIn: Stoky AI" link="https://www.linkedin.com/company/stokyai/" />
        <ContactItem icon={<FaTelegram />} text="Telegram: Sergey Kovalev" link="https://t.me/Sergey0Kovalev" />
        <ContactItem icon={<FaYoutube />} text="YouTube: Stoky AI" link="https://www.youtube.com/@Stoky-AI" />
      </ul>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, link }) => {
  return (
    <li>
      <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
        <span className="text-xl">{icon}</span>
        <span className="pitch-deck-paragraph">{text}</span>
      </a>
    </li>
  );
};

export default ContactsSlide;
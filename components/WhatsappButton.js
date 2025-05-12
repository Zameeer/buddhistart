// components/WhatsappButton.js
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/9779818916817" // Replace with your number (e.g. 91 for India)
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        zIndex: 1000,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;

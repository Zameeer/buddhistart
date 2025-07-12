// components/FacebookButton.js
import { FaFacebookF } from 'react-icons/fa';

const FacebookButton = () => {
  return (
    <a
      href="https://www.facebook.com/urgen.buddhist.art/" // Replace with your Facebook page/profile link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '160px', // stacked above Wechat button
        right: '20px',
        backgroundColor: '#1877F2',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        zIndex: 1000,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      <FaFacebookF size={30} />
    </a>
  );
};

export default FacebookButton;

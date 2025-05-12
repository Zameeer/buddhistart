// components/WechatButton.js
const WechatButton = () => {
  return (
    <a
      href="https://wechat.com" // Replace with your actual WeChat contact or redirect link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        backgroundColor: '#7BB32E',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        zIndex: 1000,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="white"
      >
        <path d="M24 4C12.96 4 4 11.52 4 20.5c0 5.04 3.12 9.52 8 12.42v7.08l6.64-3.56c1.52.4 3.2.56 5.36.56 11.04 0 20-7.52 20-16.5S35.04 4 24 4zm-6 16c-1.12 0-2-.88-2-2s.88-2 2-2 2 .88 2 2-.88 2-2 2zm12 0c-1.12 0-2-.88-2-2s.88-2 2-2 2 .88 2 2-.88 2-2 2z"/>
      </svg>
    </a>
  );
};

export default WechatButton;

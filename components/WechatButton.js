"use client";
import React, { useState } from "react";

const WechatButton = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowQR(true)}
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
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Show WeChat QR"
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
      </button>
      {showQR && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setShowQR(false)}
        >
          <div
            style={{
              background: 'white',
              padding: 24,
              borderRadius: 12,
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              position: 'relative',
              minWidth: 240,
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                background: 'transparent',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#888'
              }}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src="UrkenWeChat.jpeg" // Place your QR code image in the public folder as wechat-qr.png
              alt="WeChat QR Code"
              style={{ width: 200, height: 200, objectFit: 'contain' }}
            />
            <div style={{ marginTop: 12, color: '#333', fontWeight: 500 }}>
              Scan to connect on WeChat
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WechatButton;

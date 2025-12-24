import React from 'react'

export default function Logos() {
  return (
    <div className="flex justify-center   w-28.25 h-28.25 rounded-full bg-[#FF6A46] relative overflow-hidden">
      
      <img
        src="/images/logo-text.svg"
        alt="logo"
        className="object-contain w-24.5 h-23 mt-2"
      />

      <img
        src="/images/logo-hand.svg"
        alt="hand"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <style>
        {`
          .rotating {
            animation: spin 5s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

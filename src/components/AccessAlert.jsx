import React, { useEffect, useState } from 'react';

const AccessAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setShowAlert(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-100 text-yellow-800 p-4 text-center shadow-md z-50">
      <p>
        🔐 This project uses a demo CORS proxy. If data doesn't load, please request temporary access at <a className="underline" href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noopener noreferrer">this link</a> and then refresh the page.
      </p>
      <button
        onClick={handleClose}
        className="mt-2 px-4 py-1 bg-yellow-400 rounded text-sm font-semibold"
      >
        Got it
      </button>
    </div>
  );
};

export default AccessAlert;

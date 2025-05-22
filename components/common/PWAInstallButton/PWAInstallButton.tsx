"use client";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PWAInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const pathname = usePathname().substring(1)

  useEffect(() => {
<<<<<<< Updated upstream
=======
    // Ensure this code runs only on the client-side
>>>>>>> Stashed changes
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

<<<<<<< Updated upstream
=======
    // Check if window is defined
>>>>>>> Stashed changes
    if (typeof window !== "undefined") {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }

    return () => {
<<<<<<< Updated upstream
=======
      // Clean up the event listener
>>>>>>> Stashed changes
      if (typeof window !== "undefined") {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };
<<<<<<< Updated upstream
  const isStandalone = typeof window !== "undefined" && window.matchMedia('(display-mode: standalone)').matches;

  if (isStandalone) return null;
=======

  // Check if the app is already installed
  const isStandalone = typeof window !== "undefined" && window.matchMedia('(display-mode: standalone)').matches;

  if (isStandalone) return null; // Hide button if already installed
>>>>>>> Stashed changes

  return (
    <div className={`${pathname.includes("admin")  && "hidden"} fixed z-30 top-1/2 right-5 transform -translate-y-1/2`}>
      {isInstallable && (
<<<<<<< Updated upstream
        <button
          onClick={handleInstallClick}
=======
        <button 
          onClick={handleInstallClick} 
>>>>>>> Stashed changes
          className="bg-primary text-white py-2 px-4 rounded shadow-md hover:bg-dark-primary transition duration-300"
        >
          Install App
        </button>
      )}
    </div>
  );
};

export default PWAInstallButton;

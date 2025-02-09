"use client";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NetworkStatus() {
  useEffect(() => {
    const handleOffline = () => {
      toast.error("You are offline", {
        position: "top-center",
        autoClose: 5000,
      });
    };

    const handleOnline = () => {
      toast.success("You are back online", {
        position: "top-center",
        autoClose: 5000,
      });
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return <ToastContainer />;
}

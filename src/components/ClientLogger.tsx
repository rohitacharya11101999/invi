"use client";

import { useEffect } from "react";

const IMPORTANT_ASSETS = [
  "/images/haldi/haldi.png",
  "/images/mehendi/mehendi.png",
  "/images/sangeet/sangeet.png",
  "/images/wedding/wedding.png",
];

export default function ClientLogger() {
  useEffect(() => {
    const sessionStart = new Date().toISOString();
    console.groupCollapsed("[WeddingInvite] Client startup");
    console.log("Timestamp", sessionStart);
    console.log("Node env", process.env.NODE_ENV);
    console.log("Location", window.location.href);
    console.log("User agent", navigator.userAgent);
    console.groupEnd();

    const onWindowError = (event: ErrorEvent) => {
      console.error("[WeddingInvite] Global error captured", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("[WeddingInvite] Unhandled promise rejection", event.reason);
    };

    window.addEventListener("error", onWindowError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    IMPORTANT_ASSETS.forEach((assetPath) => {
      const img = new Image();
      img.onload = () => {
        console.info(`[WeddingInvite] Asset available: ${assetPath}`);
      };
      img.onerror = () => {
        console.error(`[WeddingInvite] Asset missing or blocked: ${assetPath}`);
      };
      img.src = assetPath;
    });

    return () => {
      window.removeEventListener("error", onWindowError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}

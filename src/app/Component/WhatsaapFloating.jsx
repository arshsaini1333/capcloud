"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppFloating() {
  const WHATSAPP_NUMBER = "918014700000"; // country code included
  const MESSAGE = "Hello, I want to connect with you";

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      MESSAGE
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={openWhatsApp}
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        zIndex: 9999,
      }}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon style={{ color: "#fff", fontSize: "30px" }} />
    </div>
  );
}

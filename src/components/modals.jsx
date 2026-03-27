import React, { useState } from "react";
import { styles } from "./styles";

export function ImageModal({ title, image, onClose, theme }) {
  const [zoom, setZoom] = useState(1);

  return (
    <div
      style={{ ...styles.overlay, background: theme.overlay, animation: "overlayIn 0.22s ease" }}
      onClick={onClose}
    >
      <div
        style={{
          ...styles.modal,
          background: theme.modalBg,
          maxWidth: "800px",
          animation: "modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ color: theme.modalTitle, marginBottom: "12px" }}>{title}</h2>

        <div style={{ overflow: "hidden", borderRadius: "12px" }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              transform: `scale(${zoom})`,
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              cursor: zoom === 1 ? "zoom-in" : "zoom-out",
            }}
            onClick={() => setZoom(zoom === 1 ? 2 : 1)}
          />
        </div>

        <p style={{ marginTop: "10px", fontSize: "12px", color: theme.muted }}>
          Click image to zoom
        </p>

        <button
          style={{ ...styles.darkButton, background: theme.accentStrong, marginTop: "16px" }}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 12px 22px ${theme.accentGlow}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function InfoModal({ title, text, onClose, theme }) {
  return (
    <div
      style={{ ...styles.overlay, background: theme.overlay, animation: "overlayIn 0.22s ease" }}
      onClick={onClose}
    >
      <div
        style={{
          ...styles.modal,
          background: theme.modalBg,
          animation: "modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ ...styles.modalBadge, background: theme.modalBadgeBg, color: theme.modalBadgeText }}>
          {title}
        </div>
        <h2 style={{ ...styles.modalTitle, color: theme.modalTitle }}>{title}</h2>
        <p style={{ ...styles.modalText, color: theme.modalText }}>{text}</p>
        <button
          style={{
            ...styles.darkButton,
            background: theme.accentStrong,
            boxShadow: `0 8px 18px ${theme.accentGlow}`,
          }}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = `0 12px 22px ${theme.accentGlow}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 8px 18px ${theme.accentGlow}`;
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
import React, { useEffect, useMemo, useState } from "react";
import logoNight from "./assets/logo2.png";
import logoDay from "./assets/logo3.png";

const buildingOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "MAIN"];

const buildingData = {
  "1": {
    title: "Building 1",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.21.10-19" },
      { floor: "Floor 2", range: "10.10.21.20-29" },
      { floor: "Floor 3", range: "10.10.21.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.21.40-49" },
    ],
  },
  "2": {
    title: "Building 2",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.22.10-19" },
      { floor: "Floor 2", range: "10.10.22.20-29" },
      { floor: "Floor 3", range: "10.10.22.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.22.40-49" },
    ],
  },
  "3": {
    title: "Building 3",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.23.10-19" },
      { floor: "Floor 2", range: "10.10.23.20-29" },
      { floor: "Floor 3", range: "10.10.23.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.23.40-49" },
    ],
  },
  "4": {
    title: "Building 4",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.24.10-19" },
      { floor: "Floor 2", range: "10.10.24.20-29" },
      { floor: "Floor 3", range: "10.10.24.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.24.40-49" },
    ],
  },
  "5": {
    title: "Building 5",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.25.10-19" },
      { floor: "Floor 2", range: "10.10.25.20-29" },
      { floor: "Floor 3", range: "10.10.25.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.25.40-49" },
    ],
  },
  "6": {
    title: "Building 6",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.26.10-19" },
      { floor: "Floor 2", range: "10.10.26.20-29" },
      { floor: "Floor 3", range: "10.10.26.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.26.40-49" },
    ],
  },
  "7": {
    title: "Building 7",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.27.10-19" },
      { floor: "Floor 2", range: "10.10.27.20-29" },
      { floor: "Floor 3", range: "10.10.27.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.27.40-49" },
    ],
  },
  "8": {
    title: "Building 8",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.28.10-19" },
      { floor: "Floor 2", range: "10.10.28.20-29" },
      { floor: "Floor 3", range: "10.10.28.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.28.40-49" },
    ],
  },
  "9": {
    title: "Building 9",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.29.10-19" },
      { floor: "Floor 2", range: "10.10.29.20-29" },
      { floor: "Floor 3", range: "10.10.29.30-39", note: "CCTV and WiFi server are located at this floor." },
      { floor: "Floor 4", range: "10.10.29.40-49" },
    ],
  },
  A: {
    title: "Building A",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.81.10-18", note: "CCTV server is located at this floor." },
      { floor: "Floor 2", range: "10.10.81.20-28", note: "WiFi server is located at this floor." },
      { floor: "Floor 3", range: "10.10.81.30-38" },
      { floor: "Floor 4", range: "10.10.81.40-48" },
    ],
  },
  B: {
    title: "Building B",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.82.10-16", note: "CCTV server is located at this floor." },
      { floor: "Floor 2", range: "10.10.82.20-26", note: "WiFi server is located at this floor." },
      { floor: "Floor 3", range: "10.10.82.30-36" },
      { floor: "Floor 4", range: "10.10.82.40-46" },
    ],
  },
  C: {
    title: "Building C",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.83.10-16", note: "CCTV server is located at this floor." },
      { floor: "Floor 2", range: "10.10.83.20-26", note: "WiFi server is located at this floor." },
      { floor: "Floor 3", range: "10.10.83.30-36" },
      { floor: "Floor 4", range: "10.10.83.40-46" },
    ],
  },
  D: {
    title: "Building D",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.84.10-14", note: "CCTV server is located at this floor." },
      { floor: "Floor 2", range: "10.10.84.20-26", note: "WiFi server is located at this floor." },
      { floor: "Floor 3", range: "10.10.84.30-36" },
      { floor: "Floor 4", range: "10.10.84.40-46" },
      { floor: "Floor 5", range: "10.10.84.50-56" },
    ],
  },
  E: {
    title: "Building E (Sunset Restaurant)",
    subnet: "255.255.128.0",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 1", range: "10.10.84.10-14", note: "CCTV server is located at this floor." },
      { floor: "Floor 2", range: "10.10.84.20-26", note: "WiFi server is located at this floor." },
      { floor: "Floor 3", range: "10.10.84.30-36" },
      { floor: "Floor 4", range: "10.10.84.40-46" },
      { floor: "Floor 5", range: "10.10.84.50-56" },
    ],
  },
  MAIN: {
    title: "Main Building",
    subnet: "255.255.255.128",
    gateway: "10.10.0.1",
    notes: ["Main server is from IT Office (Service Building)", "1 switch per floor"],
    ipRanges: [
      { floor: "Floor 3", range: "10.10.13.1-XX", note: "CCTV server is located at this floor." },
      { floor: "Floor 4", range: "10.10.14.1-XX" },
      { floor: "Floor 5", range: "10.10.15.1-XX", note: "WiFi server is located at this floor." },
    ],
  },
};

const columns = [
  {
    title: "Zone 1",
    description: "Primary building access for the first block of guest-room network sections.",
    ids: ["1", "2", "3", "4"],
  },
  {
    title: "Zone 2",
    description: "Secondary building access covering the middle hotel block and shared network areas.",
    ids: ["5", "6", "7", "8", "9"],
  },
  {
    title: "Annex Buildings",
    description: "Additional building access for A–E sections and restaurant-related network areas.",
    ids: ["A", "B", "C", "D", "E", "MAIN"],
  },
];

const themes = {
  night: {
    pageBg: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
    text: "#e2e8f0",
    title: "#ffffff",
    muted: "#94a3b8",
    border: "rgba(51, 65, 85, 0.9)",
    headerBorder: "#1e293b",
    panelBg: "linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(8,47,73,0.88) 100%)",
    cardBg: "linear-gradient(135deg, #0f172a 0%, #172554 100%)",
    heroBg: "linear-gradient(135deg, #0f172a 0%, #082f49 100%)",
    summaryBg: "rgba(15,23,42,0.78)",
    summaryAccentBg: "rgba(90, 178, 175, 0.16)",
    switchBg: "rgba(2, 6, 23, 0.6)",
    switchText: "#facc15",
    accent: "#5ab2af",
    accentStrong: "#4aa7a4",
    accentLight: "#8ad1cf",
    accentGlow: "rgba(90,178,175,0.26)",
    accentBorder: "rgba(90,178,175,0.34)",
    buttonHoverBg: "linear-gradient(135deg, #0c3b53 0%, #3f9b98 100%)",
    infoButtonBg: "linear-gradient(135deg, #0f172a 0%, #172554 100%)",
    overlay: "rgba(0,0,0,0.45)",
    modalBg: "#ffffff",
    modalText: "#334155",
    modalTitle: "#0f172a",
    modalBadgeBg: "#dff5f4",
    modalBadgeText: "#166769",
    navNeutralBg: "rgba(15, 23, 42, 0.9)",
    navNeutralText: "#cbd5e1",
    detailNoteText: "#cbd5e1",
  },
  day: {
    pageBg: "linear-gradient(180deg, #f8fbfb 0%, #edf6f6 100%)",
    text: "#334155",
    title: "#334155",
    muted: "#64748b",
    border: "rgba(203, 213, 225, 0.95)",
    headerBorder: "#dbe4e8",
    panelBg: "linear-gradient(180deg, #ffffff 0%, #f4fbfb 100%)",
    cardBg: "linear-gradient(135deg, #ffffff 0%, #edf7f6 100%)",
    heroBg: "linear-gradient(135deg, #ffffff 0%, #eef8f8 100%)",
    summaryBg: "#ffffff",
    summaryAccentBg: "rgba(90, 178, 175, 0.14)",
    switchBg: "#f8fafc",
    switchText: "#b58900",
    accent: "#5ab2af",
    accentStrong: "#439997",
    accentLight: "#7cc6c3",
    accentGlow: "rgba(90,178,175,0.18)",
    accentBorder: "rgba(90,178,175,0.3)",
    buttonHoverBg: "linear-gradient(135deg, #edf9f8 0%, #d7f0ef 100%)",
    infoButtonBg: "linear-gradient(135deg, #ffffff 0%, #eef8f8 100%)",
    overlay: "rgba(15,23,42,0.25)",
    modalBg: "#ffffff",
    modalText: "#475569",
    modalTitle: "#0f172a",
    modalBadgeBg: "#dff5f4",
    modalBadgeText: "#166769",
    navNeutralBg: "#ffffff",
    navNeutralText: "#475569",
    detailNoteText: "#475569",
  },
};

function InfoModal({ title, text, onClose, theme }) {
  return (
    <div style={{ ...styles.overlay, background: theme.overlay }} onClick={onClose}>
      <div style={{ ...styles.modal, background: theme.modalBg }} onClick={(e) => e.stopPropagation()}>
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

function ThemeSwitch({ mode, onToggle, theme }) {
  return (
    <button
      onClick={onToggle}
      style={{
        ...styles.themeToggle,
        color: theme.title,
        background: theme.infoButtonBg,
        border: `1px solid ${theme.accentBorder}`,
        boxShadow: `0 8px 18px ${theme.accentGlow}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 12px 24px ${theme.accentGlow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 8px 18px ${theme.accentGlow}`;
      }}
    >
      <span
        style={{
          ...styles.themePill,
          background: mode === "day" ? theme.accentStrong : "transparent",
          color: mode === "day" ? "#ffffff" : theme.title,
        }}
      >
        Day
      </span>
      <span
        style={{
          ...styles.themePill,
          background: mode === "night" ? theme.accentStrong : "transparent",
          color: mode === "night" ? "#ffffff" : theme.title,
        }}
      >
        Night
      </span>
    </button>
  );
}

function HomePage({ onOpenBuilding, onOpenInfo, mode, onToggleTheme, theme }) {
  const logoSrc = mode === "day" ? logoDay : logoNight;
  

  return (
    <div style={{ ...styles.homePage, ...styles.pageFade, background: theme.pageBg, color: theme.text }}>
      <div style={styles.pageShell}>
       

        <header style={{ ...styles.headerLine, borderBottom: `1px solid ${theme.headerBorder}` }}>
          <div style={styles.headerLeft}>
            <div
              style={{
                ...styles.logoBoxSmall,
                animation: "softGlow 3s ease-in-out infinite",
                borderRadius: "14px",
              }}
            >
              <img src={logoSrc} alt="Phuket Graceland Logo" style={styles.logoImageSmall} />
            </div>

            <div style={styles.headerTextWrap}>
              <h1 style={{ ...styles.headerTitleHtmlLike, color: theme.title }}>Phuket Graceland</h1>
              <span style={{ ...styles.headerGoldText, color: theme.accentStrong }}>
                Resort &amp; Spa • Network Dashboard
              </span>
            </div>
          </div>

          <div style={{ ...styles.headerRightText, color: theme.muted }}>
            Select a building to view IP allocation, gateway settings, and floor-based notes.
          </div>
        </header>

        <div style={styles.topActions}>
  <div style={styles.leftActions}>
    <button
      style={{
        ...styles.infoActionButton,
        background: theme.infoButtonBg,
        color: theme.title,
        border: `1px solid ${theme.accentBorder}`,
        boxShadow: `0 8px 18px ${theme.accentGlow}`,
      }}
      onClick={() =>
        onOpenInfo(
          "POS Machine",
          "A POS machine is used for hotel sales and payment transactions. Staff use it to record purchases, process guest payments, and connect transaction data to the hotel network."
        )
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 12px 22px ${theme.accentGlow}`;
        e.currentTarget.style.borderColor = theme.accentStrong;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 8px 18px ${theme.accentGlow}`;
        e.currentTarget.style.borderColor = theme.accentBorder;
      }}
    >
      POS Info
    </button>

    <button
      style={{
        ...styles.infoActionButton,
        background: theme.infoButtonBg,
        color: theme.title,
        border: `1px solid ${theme.accentBorder}`,
        boxShadow: `0 8px 18px ${theme.accentGlow}`,
      }}
      onClick={() =>
        onOpenInfo(
          "Access Point",
          "An access point provides wireless network coverage to nearby rooms and hotel areas. It helps devices such as phones, laptops, tablets, and TVs connect to the hotel WiFi."
        )
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 12px 22px ${theme.accentGlow}`;
        e.currentTarget.style.borderColor = theme.accentStrong;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 8px 18px ${theme.accentGlow}`;
        e.currentTarget.style.borderColor = theme.accentBorder;
      }}
    >
      Access Point Info
    </button>
  </div>

  <div style={styles.rightActions}>
    <ThemeSwitch mode={mode} onToggle={onToggleTheme} theme={theme} />
  </div>
</div>

        <main style={styles.homeGrid}>
          {columns.map((column) => (
            <section
              key={column.title}
              style={{
                ...styles.panel,
                background: theme.panelBg,
                border: `1px solid ${theme.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 20px 38px ${theme.accentGlow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 16px 35px rgba(0, 0, 0, 0.12)";
              }}
            >
              <div style={{ ...styles.sectionTitle, color: theme.accentStrong }}>{column.title}</div>
              <p style={{ ...styles.sectionNote, color: theme.muted }}>{column.description}</p>

              <div style={styles.buttonList}>
                {column.ids.map((id) => (
                  <button
                    key={id}
                    onClick={() => onOpenBuilding(id)}
                    style={{
                      ...styles.buildingButton,
                      background: theme.cardBg,
                      border: `1px solid ${theme.accentBorder}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px) scale(1.015)";
                      e.currentTarget.style.borderColor = theme.accentStrong;
                      e.currentTarget.style.boxShadow = `0 18px 30px ${theme.accentGlow}`;
                      e.currentTarget.style.background = theme.buttonHoverBg;
                      const title = e.currentTarget.querySelector("[data-name]");
                      const arrow = e.currentTarget.querySelector("[data-arrow]");
                      if (title) title.style.color = theme.accentStrong;
                      if (arrow) {
                        arrow.style.transform = "translateX(6px)";
                        arrow.style.color = theme.title;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.borderColor = theme.accentBorder;
                      e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.08)";
                      e.currentTarget.style.background = theme.cardBg;
                      const title = e.currentTarget.querySelector("[data-name]");
                      const arrow = e.currentTarget.querySelector("[data-arrow]");
                      if (title) title.style.color = theme.title;
                      if (arrow) {
                        arrow.style.transform = "translateX(0)";
                        arrow.style.color = theme.accentStrong;
                      }
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(0.99)";
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px) scale(1.015)";
                    }}
                  >
                    <div style={styles.buildingButtonInner}>
                      <div>
                        <div data-name style={{ ...styles.buildingName, color: theme.title }}>
                          {buildingData[id].title}
                        </div>
                        <div
                          style={{
                            ...styles.switchTag,
                            background: theme.switchBg,
                            color: theme.switchText,
                            border: `1px solid ${theme.accentBorder}`,
                          }}
                        >
                          Switch
                        </div>
                      </div>
                      <div data-arrow style={{ ...styles.buildingArrow, color: theme.accentStrong }}>
                        →
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

function BuildingPage({
  buildingId,
  onBack,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  onJumpToBuilding,
  mode,
  theme,
}) {
  const building = buildingData[buildingId];
  const logoSrc = mode === "day" ? logoDay : logoNight;
  

  return (
    <div style={{ ...styles.detailPage, ...styles.pageFade, background: theme.pageBg, color: theme.text }}>
      <div style={styles.detailContainer}>
        

        <div
          style={{
            ...styles.heroCard,
            background: theme.heroBg,
            border: `1px solid ${theme.border}`,
          }}
        >
          <div style={styles.heroTop}>
            <div>
              <div
                style={{
                  ...styles.heroBadge,
                  color: theme.accentStrong,
                  border: `1px solid ${theme.accentBorder}`,
                  background: theme.summaryAccentBg,
                }}
              >
                Building Network Overview
              </div>
              <h1 style={{ ...styles.heroTitle, color: theme.title }}>{building.title}</h1>
              <p style={{ ...styles.heroSubtitle, color: theme.muted }}>
                Clean structured information for IP allocation, gateway settings,
                subnet configuration, and floor-based notes.
              </p>
            </div>

            <button
              style={{
                ...styles.backHeroButton,
                color: mode === "day" ? theme.title : "#ffffff",
                border: `1px solid ${theme.accentBorder}`,
                background: mode === "day" ? "#ffffff" : "rgba(255,255,255,0.08)",
              }}
              onClick={onBack}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.background = `linear-gradient(135deg, ${theme.accentStrong}, ${theme.accentLight})`;
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = `0 12px 22px ${theme.accentGlow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = mode === "day" ? "#ffffff" : "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = mode === "day" ? theme.title : "#ffffff";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              ← Back to Main Page
            </button>
          </div>

          <div style={styles.summaryGrid}>
            <div
              style={{
                ...styles.summaryCard,
                background: theme.summaryBg,
                border: `1px solid ${theme.border}`,
              }}
            >
              <div style={{ ...styles.summaryLabel, color: theme.muted }}>Subnet Mask</div>
              <div style={{ ...styles.summaryValue, color: theme.title }}>{building.subnet}</div>
            </div>

            <div
              style={{
                ...styles.summaryCard,
                background: theme.summaryBg,
                border: `1px solid ${theme.border}`,
              }}
            >
              <div style={{ ...styles.summaryLabel, color: theme.muted }}>Gateway</div>
              <div style={{ ...styles.summaryValue, color: theme.title }}>{building.gateway}</div>
            </div>

            <div
              style={{
                ...styles.summaryAccentCard,
                background: theme.summaryAccentBg,
                border: `1px solid ${theme.accentBorder}`,
              }}
            >
              <div style={{ ...styles.summaryLabelAccent, color: theme.accentStrong }}>Quick Notes</div>
              <div style={styles.noteList}>
                {building.notes.map((note) => (
                  <span
                    key={note}
                    style={{
                      ...styles.noteChip,
                      color: mode === "day" ? theme.title : "#cffafe",
                      border: `1px solid ${theme.accentBorder}`,
                      background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.45)",
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={styles.floorGrid}>
          {building.ipRanges.map((item, index) => {
            const highlighted = Boolean(item.note);

            return (
              <div
                key={item.floor}
                style={{
                  ...styles.floorCard,
                  background: highlighted ? theme.buttonHoverBg : theme.summaryBg,
                  border: `1px solid ${highlighted ? theme.accentBorder : theme.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.01)";
                  e.currentTarget.style.boxShadow = `0 22px 38px ${theme.accentGlow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 16px 30px rgba(0,0,0,0.12)";
                }}
              >
                <div
                  style={{
                    ...styles.floorHeader,
                    background: highlighted
                      ? theme.summaryAccentBg
                      : mode === "day"
                        ? "rgba(248,250,252,0.95)"
                        : "rgba(2,6,23,0.5)",
                    borderBottom: `1px solid ${highlighted ? theme.accentBorder : theme.border}`,
                  }}
                >
                  <div>
                    <div style={{ ...styles.floorHeaderSmall, color: theme.muted }}>Floor Section</div>
                    <h2 style={{ ...styles.floorTitle, color: theme.title }}>{item.floor}</h2>
                  </div>

                  <div
                    style={{
                      ...styles.floorBadge,
                      background: highlighted ? theme.accentStrong : mode === "day" ? "#f8fafc" : "#1e293b",
                      color: highlighted ? "#ffffff" : theme.title,
                      border: `1px solid ${highlighted ? theme.accentBorder : theme.border}`,
                    }}
                  >
                    {highlighted ? "Server Floor" : `Zone ${index + 1}`}
                  </div>
                </div>

                <div style={styles.floorBody}>
                  <div style={styles.infoGrid}>
                    <div
                      style={{
                        ...styles.infoMiniCard,
                        background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.45)",
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      <div style={{ ...styles.infoMiniLabel, color: theme.muted }}>IP Range</div>
                      <div style={{ ...styles.infoMiniValueBlue, color: theme.accentStrong }}>{item.range}</div>
                    </div>

                    <div
                      style={{
                        ...styles.infoMiniCard,
                        background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.45)",
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      <div style={{ ...styles.infoMiniLabel, color: theme.muted }}>Subnet</div>
                      <div style={{ ...styles.infoMiniValue, color: theme.title }}>{building.subnet}</div>
                    </div>

                    <div
                      style={{
                        ...styles.infoMiniCard,
                        background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.45)",
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      <div style={{ ...styles.infoMiniLabel, color: theme.muted }}>Gateway</div>
                      <div style={{ ...styles.infoMiniValue, color: theme.title }}>{building.gateway}</div>
                    </div>
                  </div>

                  <div
                    style={{
                      ...styles.noteBox,
                      background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.35)",
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    <div style={{ ...styles.noteBoxLabel, color: theme.muted }}>Floor Notes</div>
                    <p style={{ ...styles.noteBoxText, color: theme.detailNoteText }}>
                      {item.note
                        ? item.note
                        : "Standard network allocation for this floor. Devices connect through the assigned IP range and follow the same building gateway and subnet settings."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={styles.navRow}>
          <div>
            {onPrev && (
              <button
                style={{
                  ...styles.navButton,
                  color: mode === "day" ? theme.title : "#ffffff",
                  background: mode === "day" ? "#ffffff" : "linear-gradient(135deg, #0f172a, #172554)",
                  border: `1px solid ${theme.accentBorder}`,
                }}
                onClick={onPrev}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.background = `linear-gradient(135deg, ${theme.accentStrong}, ${theme.accentLight})`;
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow = `0 14px 24px ${theme.accentGlow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = mode === "day" ? "#ffffff" : "linear-gradient(135deg, #0f172a, #172554)";
                  e.currentTarget.style.color = mode === "day" ? theme.title : "#ffffff";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                ← {prevLabel}
              </button>
            )}
          </div>

          <div>
            {onNext && (
              <button
                style={{
                  ...styles.navButton,
                  color: mode === "day" ? theme.title : "#ffffff",
                  background: mode === "day" ? "#ffffff" : "linear-gradient(135deg, #0f172a, #172554)",
                  border: `1px solid ${theme.accentBorder}`,
                }}
                onClick={onNext}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.background = `linear-gradient(135deg, ${theme.accentStrong}, ${theme.accentLight})`;
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow = `0 14px 24px ${theme.accentGlow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = mode === "day" ? "#ffffff" : "linear-gradient(135deg, #0f172a, #172554)";
                  e.currentTarget.style.color = mode === "day" ? theme.title : "#ffffff";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {nextLabel} →
              </button>
            )}
          </div>
        </div>

        <div style={styles.buildingNavigator}>
          {buildingOrder.map((id) => (
            <button
              key={id}
              onClick={() => onJumpToBuilding(id)}
              style={{
                ...styles.navigatorButton,
                color: buildingId === id ? "#ffffff" : theme.navNeutralText,
                background: buildingId === id
                  ? `linear-gradient(135deg, ${theme.accentStrong}, ${theme.accentLight})`
                  : theme.navNeutralBg,
                border: `1px solid ${buildingId === id ? theme.accentBorder : theme.border}`,
                boxShadow: buildingId === id ? `0 14px 24px ${theme.accentGlow}` : "none",
                transform: buildingId === id ? "translateY(-2px) scale(1.03)" : "translateY(0) scale(1)",
              }}
              onMouseEnter={(e) => {
                if (buildingId !== id) {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.borderColor = theme.accentStrong;
                  e.currentTarget.style.color = theme.title;
                  e.currentTarget.style.boxShadow = `0 10px 18px ${theme.accentGlow}`;
                }
              }}
              onMouseLeave={(e) => {
                if (buildingId !== id) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.color = theme.navNeutralText;
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              {id === "MAIN" ? "MAIN" : id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.width = "100vw";
    document.body.style.overflowX = "hidden";
    document.body.style.fontFamily = "Inter, Arial, sans-serif";

    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.width = "100vw";
    document.documentElement.style.overflowX = "hidden";

    const root = document.getElementById("root");
    if (root) {
      root.style.margin = "0";
      root.style.padding = "0";
      root.style.width = "100vw";
      root.style.minHeight = "100vh";
      root.style.overflowX = "hidden";
    }

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes softGlow {
        0% { box-shadow: 0 0 0 rgba(90,178,175,0); }
        50% { box-shadow: 0 0 18px rgba(90,178,175,0.18); }
        100% { box-shadow: 0 0 0 rgba(90,178,175,0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [modal, setModal] = useState(null);
  const [mode, setMode] = useState("night");

  const theme = themes[mode];

  const buildingNav = useMemo(() => {
    if (!selectedBuilding) return { prevId: null, nextId: null, prevLabel: "", nextLabel: "" };
    const index = buildingOrder.indexOf(selectedBuilding);
    const prevId = index > 0 ? buildingOrder[index - 1] : null;
    const nextId = index < buildingOrder.length - 1 ? buildingOrder[index + 1] : null;

    return {
      prevId,
      nextId,
      prevLabel: prevId ? buildingData[prevId].title : "",
      nextLabel: nextId ? buildingData[nextId].title : "",
    };
  }, [selectedBuilding]);

  return (
    <>
      {!selectedBuilding ? (
        <HomePage
          onOpenBuilding={(id) => setSelectedBuilding(id)}
          onOpenInfo={(title, text) => setModal({ title, text })}
          mode={mode}
          onToggleTheme={() => setMode((prev) => (prev === "night" ? "day" : "night"))}
          theme={theme}
        />
      ) : (
        <BuildingPage
          buildingId={selectedBuilding}
          onBack={() => setSelectedBuilding(null)}
          onPrev={buildingNav.prevId ? () => setSelectedBuilding(buildingNav.prevId) : null}
          onNext={buildingNav.nextId ? () => setSelectedBuilding(buildingNav.nextId) : null}
          prevLabel={buildingNav.prevLabel}
          nextLabel={buildingNav.nextLabel}
          onJumpToBuilding={(id) => setSelectedBuilding(id)}
          mode={mode}
          onToggleTheme={() => setMode((prev) => (prev === "night" ? "day" : "night"))}
          theme={theme}
        />
      )}

      {modal && (
        <InfoModal
          title={modal.title}
          text={modal.text}
          onClose={() => setModal(null)}
          theme={theme}
        />
      )}
    </>
  );
}

const styles = {
  leftActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  
  rightActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
  pageFade: {
    animation: "fadeUp 0.45s ease-out",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
    gap: "12px",
  },

  pageLogoMini: {
    height: "34px",
    display: "flex",
    alignItems: "center",
  },

  pageLogoMiniImg: {
    height: "100%",
    objectFit: "contain",
  },

  themeToggle: {
    display: "inline-flex",
    gap: "6px",
    borderRadius: "999px",
    padding: "6px",
    cursor: "pointer",
    transition: "all 0.28s ease-in-out",
  },

  themePill: {
    borderRadius: "999px",
    padding: "8px 14px",
    fontSize: "13px",
    fontWeight: "700",
    transition: "all 0.28s ease-in-out",
  },

  buildingNavigator: {
    marginTop: "18px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  navigatorButton: {
    borderRadius: "999px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.28s ease-in-out",
  },

  headerLine: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "24px",
    marginBottom: "32px",
    minHeight: "90px",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  logoBoxSmall: {
    width: "64px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoImageSmall: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },

  headerTextWrap: {
    textAlign: "left",
  },

  headerTitleHtmlLike: {
    margin: 0,
    fontSize: "30px",
    fontFamily: "Georgia, serif",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  headerGoldText: {
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
  },

  headerRightText: {
    position: "absolute",
    right: 0,
    bottom: "24px",
    textAlign: "right",
    fontSize: "12px",
    maxWidth: "260px",
    lineHeight: 1.6,
  },

  homePage: {
    minHeight: "100vh",
    padding: "24px 16px",
    fontFamily: "Inter, Arial, sans-serif",
  },

  pageShell: {
    maxWidth: "1400px",
    margin: "0 auto",
  },

  topActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "24px",
  },

  infoActionButton: {
    borderRadius: "14px",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.28s ease-in-out",
  },

  homeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },

  panel: {
    borderRadius: "20px",
    padding: "20px",
    transition: "box-shadow 0.28s ease-in-out, transform 0.28s ease-in-out",
  },

  sectionTitle: {
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "700",
  },

  sectionNote: {
    fontSize: "13px",
    lineHeight: 1.6,
    marginTop: "10px",
    marginBottom: "18px",
  },

  buttonList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  buildingButton: {
    width: "100%",
    borderRadius: "18px",
    padding: "20px",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    textAlign: "left",
  },

  buildingButtonInner: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
  },

  buildingName: {
    fontWeight: "700",
    fontSize: "18px",
    transition: "color 0.25s ease-in-out",
  },

  switchTag: {
    display: "inline-flex",
    marginTop: "12px",
    borderRadius: "8px",
    padding: "4px 8px",
    fontSize: "12px",
    fontWeight: "700",
    transition: "all 0.25s ease-in-out",
  },

  buildingArrow: {
    fontSize: "24px",
    transition: "all 0.25s ease-in-out",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 1000,
  },

  modal: {
    width: "min(520px, 100%)",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
    transition: "all 0.28s ease-in-out",
  },

  modalBadge: {
    display: "inline-block",
    borderRadius: "999px",
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  modalTitle: {
    margin: "0 0 10px 0",
    fontSize: "28px",
  },

  modalText: {
    lineHeight: 1.7,
    marginBottom: "18px",
  },

  darkButton: {
    border: "none",
    borderRadius: "10px",
    color: "white",
    padding: "12px 18px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.25s ease-in-out",
  },

  detailPage: {
    minHeight: "100vh",
    width: "100vw",
    padding: "0",
    margin: "0",
    overflowX: "hidden",
    fontFamily: "Inter, Arial, sans-serif",
  },

  detailContainer: {
    width: "100vw",
    maxWidth: "100vw",
    margin: "0",
    padding: "14px",
    boxSizing: "border-box",
  },

  heroCard: {
    overflow: "hidden",
    borderRadius: "28px",
    marginBottom: "20px",
    width: "100%",
    transition: "all 0.28s ease-in-out",
  },

  heroTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    padding: "28px",
    alignItems: "center",
  },

  heroBadge: {
    display: "inline-block",
    borderRadius: "999px",
    padding: "7px 14px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "14px",
  },

  heroTitle: {
    margin: 0,
    fontSize: "44px",
    letterSpacing: "0.03em",
  },

  heroSubtitle: {
    marginTop: "14px",
    marginBottom: 0,
    maxWidth: "760px",
    lineHeight: 1.7,
    fontSize: "15px",
  },

  backHeroButton: {
    borderRadius: "999px",
    padding: "14px 20px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
    transition: "all 0.3s ease-in-out",
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    padding: "0 28px 28px 28px",
  },

  summaryCard: {
    borderRadius: "24px",
    padding: "20px",
    transition: "all 0.28s ease-in-out",
  },

  summaryAccentCard: {
    borderRadius: "24px",
    padding: "20px",
    transition: "all 0.28s ease-in-out",
  },

  summaryLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontWeight: "700",
  },

  summaryLabelAccent: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontWeight: "700",
  },

  summaryValue: {
    marginTop: "14px",
    fontSize: "30px",
    fontWeight: "800",
    wordBreak: "break-word",
  },

  noteList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "14px",
  },

  noteChip: {
    borderRadius: "999px",
    padding: "8px 12px",
    fontSize: "12px",
    fontWeight: "600",
    transition: "all 0.25s ease-in-out",
  },

  floorGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    width: "100%",
  },

  floorCard: {
    overflow: "hidden",
    borderRadius: "28px",
    width: "100%",
    minWidth: 0,
    transition: "all 0.28s ease-in-out",
  },

  floorHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "22px 22px 18px 22px",
  },

  floorHeaderSmall: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontWeight: "700",
  },

  floorTitle: {
    margin: "10px 0 0 0",
    fontSize: "28px",
  },

  floorBadge: {
    borderRadius: "999px",
    padding: "8px 12px",
    fontSize: "12px",
    fontWeight: "700",
    whiteSpace: "nowrap",
    transition: "all 0.25s ease-in-out",
  },

  floorBody: {
    padding: "22px",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "14px",
    marginBottom: "16px",
  },

  infoMiniCard: {
    borderRadius: "18px",
    padding: "16px",
    transition: "all 0.25s ease-in-out",
  },

  infoMiniLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: "700",
  },

  infoMiniValue: {
    marginTop: "12px",
    fontSize: "14px",
    fontWeight: "700",
    wordBreak: "break-word",
    fontFamily: "monospace",
  },

  infoMiniValueBlue: {
    marginTop: "12px",
    fontSize: "16px",
    fontWeight: "700",
    wordBreak: "break-word",
    fontFamily: "monospace",
  },

  noteBox: {
    borderRadius: "18px",
    padding: "16px",
    transition: "all 0.25s ease-in-out",
  },

  noteBoxLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: "700",
  },

  noteBoxText: {
    marginTop: "12px",
    marginBottom: 0,
    lineHeight: 1.7,
    fontSize: "14px",
  },

  navRow: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  navButton: {
    borderRadius: "999px",
    padding: "14px 18px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.28s ease-in-out",
  },
};
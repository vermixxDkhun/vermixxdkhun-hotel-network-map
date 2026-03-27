import React from "react";
import logoNight from "../assets/logo2.png";
import logoDay from "../assets/logo3.png";
import { buildingData, columns } from "../data/buildings";
import { styles } from "./styles";

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

export default function HomePage({ onOpenBuilding, onOpenInfo, mode, onToggleTheme, theme }) {
  const logoSrc = mode === "day" ? logoDay : logoNight;

  return (
    <div style={{ ...styles.homePage, ...styles.pageFade, background: theme.pageBg, color: theme.text }}>
      <div style={styles.pageShell}>

        <header style={{ ...styles.headerLine, borderBottom: `1px solid ${theme.headerBorder}` }}>
          <div style={styles.headerLeft}>
            <div style={{ ...styles.logoBoxSmall, animation: "softGlow 3s ease-in-out infinite", borderRadius: "14px" }}>
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
            <p>Powered by Khun Min Khant Zaw</p>
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
              onClick={() => onOpenInfo("POS Machine", "A POS machine is used for hotel sales and payment transactions. Staff use it to record purchases, process guest payments, and connect transaction data to the hotel network.")}
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
              onClick={() => onOpenInfo("Access Point", "An access point provides wireless network coverage to nearby rooms and hotel areas. It helps devices such as phones, laptops, tablets, and TVs connect to the hotel WiFi.")}
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
              style={{ ...styles.panel, background: theme.panelBg, border: `1px solid ${theme.border}` }}
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
                      if (arrow) { arrow.style.transform = "translateX(6px)"; arrow.style.color = theme.title; }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.borderColor = theme.accentBorder;
                      e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.08)";
                      e.currentTarget.style.background = theme.cardBg;
                      const title = e.currentTarget.querySelector("[data-name]");
                      const arrow = e.currentTarget.querySelector("[data-arrow]");
                      if (title) title.style.color = theme.title;
                      if (arrow) { arrow.style.transform = "translateX(0)"; arrow.style.color = theme.accentStrong; }
                    }}
                    onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(-2px) scale(0.99)"; }}
                    onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-6px) scale(1.015)"; }}
                  >
                    <div style={styles.buildingButtonInner}>
                      <div>
                        <div data-name style={{ ...styles.buildingName, color: theme.title }}>
                          {buildingData[id].title}
                        </div>
                        <div style={{ ...styles.switchTag, background: theme.switchBg, color: theme.switchText, border: `1px solid ${theme.accentBorder}` }}>
                          Switch
                        </div>
                      </div>
                      <div data-arrow style={{ ...styles.buildingArrow, color: theme.accentStrong }}>→</div>
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
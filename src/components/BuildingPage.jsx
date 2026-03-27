import React from "react";
import { buildingData, buildingOrder } from "../data/buildings";
import { buildingImages } from "../data/images";
import { styles } from "./styles";

export default function BuildingPage({
  buildingId,
  onBack,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  onJumpToBuilding,
  mode,
  theme,
  onOpenImage,
}) {
  const building = buildingData[buildingId];

  return (
    <div style={{ ...styles.detailPage, ...styles.pageFade, background: theme.pageBg, color: theme.text }}>
      <div style={styles.detailContainer}>

        {/* ── Hero Card ── */}
        <div style={{ ...styles.heroCard, background: theme.heroBg, border: `1px solid ${theme.border}` }}>
          <div style={styles.heroTop}>
            <div>
              <div style={{ ...styles.heroBadge, color: theme.accentStrong, border: `1px solid ${theme.accentBorder}`, background: theme.summaryAccentBg }}>
                Building Network Overview
              </div>
              <h1 style={{ ...styles.heroTitle, color: theme.title }}>{building.title}</h1>
              <p style={{ ...styles.heroSubtitle, color: theme.muted }}>
                Clean structured information for IP allocation, gateway settings, subnet configuration, and floor-based notes.
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

          {/* ── Summary Grid ── */}
          <div style={styles.summaryGrid}>
            <div style={{ ...styles.summaryCard, background: theme.summaryBg, border: `1px solid ${theme.border}` }}>
              <div style={{ ...styles.summaryLabel, color: theme.muted }}>Subnet Mask</div>
              <div style={{ ...styles.summaryValue, color: theme.title }}>{building.subnet}</div>
            </div>

            <div style={{ ...styles.summaryCard, background: theme.summaryBg, border: `1px solid ${theme.border}` }}>
              <div style={{ ...styles.summaryLabel, color: theme.muted }}>Gateway</div>
              <div style={{ ...styles.summaryValue, color: theme.title }}>{building.gateway}</div>
            </div>

            <div style={{ ...styles.summaryAccentCard, background: theme.summaryAccentBg, border: `1px solid ${theme.accentBorder}` }}>
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

        {/* ── Floor Cards ── */}
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
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.015)";
                  e.currentTarget.style.boxShadow = `0 28px 48px ${theme.accentGlow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 16px 30px rgba(0,0,0,0.12)";
                }}
              >
                <div
                  style={{
                    ...styles.floorHeader,
                    background: highlighted ? theme.summaryAccentBg : mode === "day" ? "rgba(248,250,252,0.95)" : "rgba(2,6,23,0.5)",
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
                  {/* ── CCTV / TV Buttons ── */}
                  <div style={{ marginTop: "12px", display: "flex", gap: "10px", marginBottom: "10px" }}>
                    {buildingImages[buildingId]?.[item.floor]?.cctv && (
                      <button
                        style={{ ...styles.navButton, background: theme.accentStrong, color: "#fff" }}
                        onClick={() => {
                          const img = buildingImages[buildingId]?.[item.floor];
                          onOpenImage(`${building.title} - ${item.floor} CCTV`, img?.cctv);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px) scale(1.04)";
                          e.currentTarget.style.boxShadow = `0 10px 20px ${theme.accentGlow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        CCTV
                      </button>
                    )}

                    {buildingImages[buildingId]?.[item.floor]?.tv && (
                      <button
                        style={{ ...styles.navButton, background: theme.accentStrong, color: "#fff" }}
                        onClick={() => {
                          const img = buildingImages[buildingId]?.[item.floor];
                          onOpenImage(`${building.title} - ${item.floor} TV`, img?.tv);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px) scale(1.04)";
                          e.currentTarget.style.boxShadow = `0 10px 20px ${theme.accentGlow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        TV
                      </button>
                    )}
                  </div>

                  {/* ── Info Mini Cards ── */}
                  <div style={styles.infoGrid}>
                    <div style={{ ...styles.infoMiniCard, background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.45)", border: `1px solid ${theme.border}` }}>
                      <div style={{ ...styles.infoMiniLabel, color: theme.muted }}>IP Range</div>
                      <div style={{ ...styles.infoMiniValueBlue, color: theme.accentStrong }}>{item.range}</div>
                    </div>
                    <div style={{ ...styles.infoMiniCard, background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.45)", border: `1px solid ${theme.border}` }}>
                      <div style={{ ...styles.infoMiniLabel, color: theme.muted }}>Subnet</div>
                      <div style={{ ...styles.infoMiniValue, color: theme.title }}>{building.subnet}</div>
                    </div>
                    <div style={{ ...styles.infoMiniCard, background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.45)", border: `1px solid ${theme.border}` }}>
                      <div style={{ ...styles.infoMiniLabel, color: theme.muted }}>Gateway</div>
                      <div style={{ ...styles.infoMiniValue, color: theme.title }}>{building.gateway}</div>
                    </div>
                  </div>

                  {/* ── Floor Notes ── */}
                  <div style={{ ...styles.noteBox, background: mode === "day" ? "#ffffff" : "rgba(2,6,23,0.35)", border: `1px solid ${theme.border}` }}>
                    <div style={{ ...styles.noteBoxLabel, color: theme.muted }}>Floor Notes</div>
                    <p style={{ ...styles.noteBoxText, color: theme.detailNoteText }}>
                      {item.note || "Standard network allocation for this floor. Devices connect through the assigned IP range and follow the same building gateway and subnet settings."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Prev / Next Nav ── */}
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

        {/* ── Building Navigator ── */}
        <div style={styles.buildingNavigator}>
          {buildingOrder.map((id) => (
            <button
              key={id}
              onClick={() => onJumpToBuilding(id)}
              style={{
                ...styles.navigatorButton,
                color: buildingId === id ? "#ffffff" : theme.navNeutralText,
                background: buildingId === id ? `linear-gradient(135deg, ${theme.accentStrong}, ${theme.accentLight})` : theme.navNeutralBg,
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
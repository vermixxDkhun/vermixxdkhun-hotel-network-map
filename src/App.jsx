import React, { useEffect, useMemo, useState } from "react";
import { buildingData, buildingOrder } from "./data/buildings";
import { themes } from "./theme/themes";
import { InfoModal, ImageModal } from "./components/modals";
import HomePage from "./components/Homepage";
import BuildingPage from "./components/BuildingPage";

export default function App() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [modal, setModal] = useState(null);
  const [imageModal, setImageModal] = useState(null);
  const [mode, setMode] = useState("night");

  const theme = themes[mode];

  // ── Global styles & keyframes ──
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
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes softGlow {
        0%   { box-shadow: 0 0 0  rgba(90,178,175,0); }
        50%  { box-shadow: 0 0 18px rgba(90,178,175,0.18); }
        100% { box-shadow: 0 0 0  rgba(90,178,175,0); }
      }
      @keyframes modalIn {
        from { opacity: 0; transform: translateY(24px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0)    scale(1); }
      }
      @keyframes overlayIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // ── Building prev/next navigation ──
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
          key={selectedBuilding}
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
          onOpenImage={(title, image) => setImageModal({ title, image })}
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

      {imageModal && (
        <ImageModal
          title={imageModal.title}
          image={imageModal.image}
          onClose={() => setImageModal(null)}
          theme={theme}
        />
      )}
    </>
  );
}
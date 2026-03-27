export const styles = {
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
      animation: "fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
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
      transition: "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
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
      transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, border-color 0.25s ease",
    },
  
    homeGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
    },
  
    panel: {
      borderRadius: "20px",
      padding: "20px",
      transition: "box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
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
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.25s ease, background 0.25s ease",
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
      transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
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
      transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease",
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
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background 0.25s ease, color 0.25s ease",
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
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
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
      transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease",
    },
  };
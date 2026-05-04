/* Direction C v2: Academic, refined.
 * Fixes: no emoji, EB Garamond (not Playfair), split hero, flat buttons, rectangular portraits,
 * stripped publication list, mono metadata, section numbering, muted teal.
 */

const C2 = {};
const C2_COLORS = {
  ink: "#0E1A2B",
  // deeper than 0F2044, slightly warmer
  text: "#1C2A3E",
  muted: "#5B6778",
  line: "#E6E3DD",
  paper: "#FAF8F3",
  // warm paper
  white: "#FFFFFF",
  accent: "#0F5F6E",
  // muted teal — less saturated than sky-500
  accent2: "#B85C38",
  // terracotta rust — secondary register: hiring, key papers
  accentSoft: "#7FB8C0"
};

// ───────── line icons (thin stroke, no emoji)
C2.Icon = function Icon({
  name,
  size = 20,
  stroke = C2_COLORS.ink
}) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    microscope: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 20h12M10 20V9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v11M8 16h8M11 7V4h2v3M12 4h4"
    })),
    dna: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 4c4 4 12 12 16 16M20 4c-4 4-12 12-16 16M7 7h4M13 13h4M7 13h4M13 7h4"
    })),
    code: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"
    })),
    cell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "10",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "14",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "13",
      cy: "8",
      r: "1"
    })),
    pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21c-4-5-7-8-7-12a7 7 0 0 1 14 0c0 4-3 7-7 12z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "2.5"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m3 7 9 6 9-6"
    })),
    inbox: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M4 12l2-8h12l2 8M4 12h5l1 2h4l1-2h5"
    })),
    twitter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 4l7 9-7 7h2l6-6 4 6h4l-7-10 7-6h-2l-6 5-4-5z"
    })),
    arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", p, paths[name]);
};

// ───────── Nav
C2.Nav = function NavC2() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("top");
  const [open, setOpen] = React.useState(false);
  const links = [["top", "Home"], ["research", "Research"], ["news", "News"], ["members", "Members"], ["publications", "Publications"], ["software", "Software"], ["lab-life", "Lab life"], ["contact", "Contact"]];
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i][0]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(links[i][0]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth"
    });
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
    style: {
      background: scrolled || open ? "rgba(250,248,243,0.96)" : "transparent",
      backdropFilter: scrolled || open ? "blur(12px)" : "none",
      borderBottom: scrolled || open ? `1px solid ${C2_COLORS.line}` : "1px solid transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8 flex items-center justify-between h-14 md:h-[72px]"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("top"),
    className: "flex items-baseline gap-3 text-left"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 500,
      fontSize: 24,
      color: C2_COLORS.ink,
      letterSpacing: "-0.01em"
    }
  }, "Chen Lab"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    },
    className: "hidden sm:inline"
  }, "GIS \xB7 Singapore")), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex items-center gap-0"
  }, links.map(([id, label]) => {
    const isActive = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => go(id),
      className: "relative px-4 py-2 transition-colors",
      style: {
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 500,
        fontSize: 13,
        color: isActive ? C2_COLORS.accent : C2_COLORS.text
      }
    }, label, isActive && /*#__PURE__*/React.createElement("span", {
      className: "absolute left-4 right-4 -bottom-0.5 h-px",
      style: {
        background: C2_COLORS.accent
      }
    }));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open,
    className: "md:hidden inline-flex items-center justify-center w-10 h-10",
    style: {
      color: C2_COLORS.ink
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none"
  }, open ? /*#__PURE__*/React.createElement("g", {
    stroke: C2_COLORS.ink,
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "17",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "5",
    x2: "5",
    y2: "17"
  })) : /*#__PURE__*/React.createElement("g", {
    stroke: C2_COLORS.ink,
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "7",
    x2: "19",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "11",
    x2: "19",
    y2: "11"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "15",
    x2: "19",
    y2: "15"
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden border-t",
    style: {
      borderColor: C2_COLORS.line
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "mx-auto max-w-[1280px] px-5 py-2 flex flex-col"
  }, links.map(([id, label]) => {
    const isActive = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => go(id),
      className: "flex items-center justify-between py-3 border-b last:border-b-0 text-left",
      style: {
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 500,
        fontSize: 15,
        color: isActive ? C2_COLORS.accent : C2_COLORS.ink,
        borderColor: C2_COLORS.line
      }
    }, /*#__PURE__*/React.createElement("span", null, label));
  }))));
};

// ───────── Hero (split layout, no gradient scrim)
C2.Hero = function HeroC2() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "relative pt-20 pb-10 md:pt-24 md:pb-20 overflow-hidden",
    style: {
      background: C2_COLORS.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "hero-group.jpg",
    alt: "",
    className: "w-full h-full object-cover",
    style: {
      opacity: 0.62,
      filter: "saturate(0.75) contrast(1)",
      objectPosition: "center 30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 md:hidden",
    style: {
      background: `linear-gradient(to bottom, ${C2_COLORS.paper}f2 0%, ${C2_COLORS.paper}cc 45%, ${C2_COLORS.paper}b3 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block absolute inset-0",
    style: {
      background: `linear-gradient(to right, ${C2_COLORS.paper}e6 0%, ${C2_COLORS.paper}99 40%, ${C2_COLORS.paper}33 80%, ${C2_COLORS.paper}1a 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-24 md:h-32",
    style: {
      background: `linear-gradient(to bottom, ${C2_COLORS.paper} 0%, ${C2_COLORS.paper}00 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-32 md:h-40",
    style: {
      background: `linear-gradient(to top, ${C2_COLORS.paper} 0%, ${C2_COLORS.paper}00 100%)`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-[1280px] px-5 md:px-8",
    style: {
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center justify-between gap-4 pb-4 mb-8 border-b flex-wrap",
    style: {
      borderColor: C2_COLORS.line
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.accent
    }
  }, "The Chen Laboratory \xB7 Genome Institute of Singapore \xB7 Agency for Science, Technology and Research (A*STAR)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, "Spatial omics \xB7 Systems biology")), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1100px]"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(48px, 11vw, 132px)",
      lineHeight: 0.92,
      letterSpacing: "-0.025em",
      color: C2_COLORS.ink,
      fontVariationSettings: "'SOFT' 50, 'opsz' 144"
    }
  }, "Mapping the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C2_COLORS.accent
    }
  }, "Language"), /*#__PURE__*/React.createElement("br", null), "of Cells"), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 md:mt-12 max-w-[640px]",
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(20px, 2vw, 26px)",
      lineHeight: 1.4,
      letterSpacing: "-0.005em",
      color: C2_COLORS.ink,
      textWrap: "pretty"
    }
  }, "We combine spatial omics with machine learning to decode how RNA localization shapes cell function and disease. Our work is interdisciplinary, collaborative, and driven by a vision of making RNA localization predictable and programmable."), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex mt-10 flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#research",
    className: "group inline-flex items-center gap-3 px-6 py-3 transition-colors",
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: "0.02em",
      background: C2_COLORS.ink,
      color: C2_COLORS.paper,
      borderRadius: 4
    }
  }, "Our Research", /*#__PURE__*/React.createElement(C2.Icon, {
    name: "arrow",
    size: 16,
    stroke: C2_COLORS.paper
  })), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "inline-flex items-center gap-2 px-6 py-3 transition-colors",
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: C2_COLORS.accent2,
      border: `1px solid ${C2_COLORS.accent2}`,
      borderRadius: 4
    }
  }, "Join the Lab")))));
};

// ───────── Email — obfuscated to deter bot scraping.
// Render @-sign as HTML entity, assemble href on click; no `mailto:` in static source.
C2.Email = function Email({
  children,
  className,
  style
}) {
  const u = "chenkh";
  const d = "a-star.edu.sg";
  const onClick = e => {
    e.preventDefault();
    window.location.href = "mail" + "to:" + u + String.fromCharCode(64) + d;
  };
  return /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: onClick,
    className: className,
    style: style
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, u, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "&#64;"
    }
  }), d));
};

// ───────── Section head with § numbering
C2.Head = function Head({
  idx,
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-4 mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: C2_COLORS.accent
    }
  }, "\xA7 ", idx), /*#__PURE__*/React.createElement("span", {
    className: "h-px flex-1 max-w-[60px]",
    style: {
      background: C2_COLORS.accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(44px, 5.5vw, 68px)",
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
      color: C2_COLORS.ink
    }
  }, title));
};
C2.Research = function ResearchC2() {
  const d = window.LAB_DATA;
  // Adapt B's accent strategy to C2's academic palette: a single muted teal, but each module gets a subtle tonal variation for the progress dots.
  const tones = [{
    label: C2_COLORS.accent,
    soft: "#7FB8C0"
  }, {
    label: "#6A5B3E",
    soft: "#C9B890"
  },
  // warm umber (pairs w/ teal)
  {
    label: "#5B4A7A",
    soft: "#B0A4C6"
  },
  // muted plum
  {
    label: "#1F5233",
    soft: "#9CC5AA"
  } // forest
  ];
  return /*#__PURE__*/React.createElement("section", {
    id: "research",
    className: "py-10 md:py-20",
    style: {
      background: C2_COLORS.white,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8"
  }, /*#__PURE__*/React.createElement(C2.Head, {
    idx: "01",
    eyebrow: "Research // capabilities",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C2_COLORS.accent
      }
    }, "Grammar"), " of RNA Localization")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.muted,
      marginBottom: 28
    }
  }, "Two questions guide our work"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16"
  }, [{
    num: "Q1",
    tag: "Subcellular localization",
    question: /*#__PURE__*/React.createElement(React.Fragment, null, "What rules govern ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: C2_COLORS.accent,
        fontStyle: "italic",
        fontWeight: 500
      }
    }, "where"), " a transcript lives inside a cell?"),
    prose: "Where a transcript lives inside a cell shapes when and how it is translated, yet these rules remain largely uncharacterized. We build subcellular spatial readouts to identify the molecular machinery that targets specific RNAs to dendrites, the ER, mitochondria, cytoplasmic granules, or other locations."
  }, {
    num: "Q2",
    tag: "mRNA therapeutics",
    question: /*#__PURE__*/React.createElement(React.Fragment, null, "Where does delivered mRNA ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: C2_COLORS.accent,
        fontStyle: "italic",
        fontWeight: 500
      }
    }, "actually go"), " inside the cell?"),
    prose: "The efficacy and toxicity of mRNA therapeutics depend on which compartment the delivered RNA lands in, how long it persists, and whether it triggers innate sensors. These intracellular fates are largely invisible to current assays."
  }].map(({
    num,
    tag,
    question,
    prose
  }) => /*#__PURE__*/React.createElement("div", {
    key: num,
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 13,
      letterSpacing: "0.18em",
      color: C2_COLORS.accent,
      fontWeight: 500
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(28px, 2.6vw, 38px)",
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
      color: C2_COLORS.ink,
      marginBottom: 16
    }
  }, question), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(17px, 1.3vw, 19px)",
      lineHeight: 1.6,
      color: C2_COLORS.text
    }
  }, prose)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-0"
  }, [{
    title: "Spatial omics technology",
    tag: "Imaging × Sequencing",
    desc: "We develop sequencing- and imaging-based methods to map RNA in intact tissues without dissociation.",
    img: "research-imaging.png",
    imgTag: "Microscopy"
  }, {
    title: "Systems biology",
    tag: "Open-source tools",
    desc: "We build open-source tools to analyze large-scale spatial datasets, revealing cell identity, tissue architecture, and intracellular signaling networks.",
    img: "research-banksy.png",
    imgTag: "BANKSY"
  }, {
    title: "Subcellular localization",
    tag: "CRISPR/Cas9",
    desc: "We use CRISPR/Cas9 perturbations to uncover mechanisms of RNA localization in healthy and diseased tissues.",
    img: "research-crispr.png",
    imgTag: "split-FISH"
  }, {
    title: "mRNA therapeutics",
    tag: "Delivery & distribution",
    desc: "We study RNA delivery and intracellular distribution to improve the efficacy and safety of RNA therapeutics.",
    img: "research-rna.png",
    imgTag: "Lipid nanoparticles"
  }].map((r, i) => {
    const tone = tones[i];
    const programId = String(i + 1).padStart(2, "0");
    return /*#__PURE__*/React.createElement("article", {
      key: r.title,
      className: "relative p-8 transition-colors flex flex-col",
      style: {
        border: `1px solid ${C2_COLORS.line}`,
        marginLeft: i % 2 === 1 ? -1 : 0,
        marginTop: i >= 2 ? -1 : 0,
        background: C2_COLORS.white
      },
      onMouseOver: e => e.currentTarget.style.background = C2_COLORS.paper,
      onMouseOut: e => e.currentTarget.style.background = C2_COLORS.white
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-4 mb-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-block px-2 py-1",
      style: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: tone.label,
        border: `1px solid ${tone.label}`
      }
    }, "[", r.tag, "]"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1.5 flex-none"
    }, [0, 1, 2, 3].map(j => /*#__PURE__*/React.createElement("span", {
      key: j,
      className: "w-1.5 h-1.5 rounded-full",
      style: {
        background: j <= i ? tone.label : C2_COLORS.line
      }
    })))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "'EB Garamond', Georgia, serif",
        fontWeight: 400,
        fontSize: 30,
        letterSpacing: "-0.015em",
        lineHeight: 1.1,
        color: C2_COLORS.ink,
        marginBottom: 12
      }
    }, r.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "'Manrope', sans-serif",
        fontSize: 15,
        lineHeight: 1.7,
        color: C2_COLORS.text,
        marginBottom: 24
      }
    }, r.desc), /*#__PURE__*/React.createElement("div", {
      className: "mt-auto relative overflow-hidden",
      style: {
        border: `1px solid ${C2_COLORS.line}`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: r.img,
      alt: r.title,
      className: "w-full aspect-[4/3] object-cover"
    }), /*#__PURE__*/React.createElement("span", {
      className: "absolute bottom-3 right-3 px-2 py-0.5",
      style: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        background: tone.label,
        color: C2_COLORS.paper
      }
    }, r.imgTag)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-20 pt-10 border-t-2",
    style: {
      borderColor: C2_COLORS.ink
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline justify-between mb-8 flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 28,
      letterSpacing: "-0.01em",
      color: C2_COLORS.ink
    }
  }, "Featured work")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10"
  }, [{
    thumb: "pub-merfish.png",
    j: "Science",
    y: "2015",
    t: "MERFISH — spatially resolved, highly multiplexed RNA profiling in single cells",
    href: "https://www.science.org/doi/10.1126/science.aaa6090",
    c: "#A03030"
  }, {
    thumb: "pub-splitfish.png",
    j: "Nat. Methods",
    y: "2020",
    t: "split-FISH — highly specific multiplexed RNA imaging in tissues",
    href: "https://www.nature.com/articles/s41592-020-0858-0",
    c: "#5B3A8A"
  }, {
    thumb: "pub-banksy.png",
    j: "Nat. Genetics",
    y: "2024",
    t: "BANKSY — scalable spatial omics data analysis",
    href: "https://www.nature.com/articles/s41588-024-01664-3",
    c: "#2D6E44"
  }].map(({
    thumb,
    j,
    y,
    t,
    href,
    c
  }) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: href,
    target: "_blank",
    rel: "noopener",
    className: "group block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 items-start"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "flex-none overflow-hidden",
    style: {
      width: 88,
      height: 88,
      border: `1px solid ${C2_COLORS.line}`,
      background: C2_COLORS.paper
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: t,
    className: "w-full h-full transition-transform duration-700 group-hover:scale-[1.06]",
    style: {
      objectFit: "cover",
      objectPosition: "top"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-2.5 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: 28,
      letterSpacing: "-0.02em",
      color: c,
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1
    }
  }, y), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.1em",
      color: c,
      borderBottom: `1px solid ${c}`,
      paddingBottom: 1
    }
  }, j)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.4,
      letterSpacing: "-0.005em",
      color: C2_COLORS.ink
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 inline-flex items-center gap-1.5 transition-opacity opacity-60 group-hover:opacity-100",
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: c
    }
  }, "Read article ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197"))))))));
};
C2.Members = function MembersC2() {
  const d = window.LAB_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "members",
    className: "py-10 md:py-20",
    style: {
      background: C2_COLORS.paper,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8"
  }, /*#__PURE__*/React.createElement(C2.Head, {
    idx: "03",
    eyebrow: "People",
    title: "The Laboratory"
  }), /*#__PURE__*/React.createElement("article", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 pb-12 border-b",
    style: {
      borderColor: C2_COLORS.line
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-3 min-w-0"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "relative overflow-hidden mx-auto md:mx-0 max-w-[160px] md:max-w-[240px]",
    style: {
      background: C2_COLORS.line
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.pi.photo,
    alt: d.pi.name,
    className: "w-full aspect-[4/5] object-cover",
    style: {
      filter: "grayscale(1) contrast(1.05)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-9 md:pt-2 min-w-0"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(40px, 4.5vw, 56px)",
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
      color: C2_COLORS.ink
    }
  }, "Chen Kok Hao, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: C2_COLORS.accent
    }
  }, "Ph.D.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 15.5,
      lineHeight: 1.65,
      color: C2_COLORS.text,
      marginTop: 24,
      listStyle: "none",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      paddingLeft: 18,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      color: C2_COLORS.accent
    }
  }, "\u2014"), "Group Leader, Laboratory of Imagenomics"), /*#__PURE__*/React.createElement("li", {
    style: {
      paddingLeft: 18,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      color: C2_COLORS.accent
    }
  }, "\u2014"), "Principal Scientist II, Genome Institute of Singapore"), /*#__PURE__*/React.createElement("li", {
    style: {
      paddingLeft: 18,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      color: C2_COLORS.accent
    }
  }, "\u2014"), "Agency for Science, Technology, and Research"), /*#__PURE__*/React.createElement("li", {
    style: {
      paddingLeft: 18,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      color: C2_COLORS.accent
    }
  }, "\u2014"), "Member, National Initiative for RNA Biology and its Applications (NIRBA)")), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-wrap gap-x-6 gap-y-2"
  }, [["ORCID", d.pi.orcid], ["Google Scholar", d.pi.scholar], ["A*STAR Profile", "https://www.a-star.edu.sg/gis/our-people/faculty-staff/members/kok-hao-chen"]].map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: C2_COLORS.ink,
      borderBottom: `1px solid ${C2_COLORS.accent}`,
      paddingBottom: 2
    }
  }, label, " \u2197"))))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline justify-between mb-8"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: 28,
      letterSpacing: "-0.01em",
      color: C2_COLORS.ink
    }
  }, "Current members"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, d.members.length, " scientists")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12"
  }, d.members.map(m => /*#__PURE__*/React.createElement("figure", {
    key: m.name,
    className: "group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden",
    style: {
      background: C2_COLORS.line
    }
  }, m.photo ? /*#__PURE__*/React.createElement("img", {
    src: m.photo,
    alt: m.name,
    className: "w-full aspect-[4/5] object-cover transition-all duration-500",
    style: {
      filter: "grayscale(1) contrast(1.05)"
    },
    onMouseEnter: e => e.currentTarget.style.filter = "grayscale(0) contrast(1)",
    onMouseLeave: e => e.currentTarget.style.filter = "grayscale(1) contrast(1.05)"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "w-full aspect-[4/5] flex items-center justify-center",
    style: {
      background: C2_COLORS.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(64px, 7vw, 96px)",
      color: C2_COLORS.paper,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, m.initial))), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.2,
      color: C2_COLORS.ink
    }
  }, m.name, m.credentials && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: C2_COLORS.muted
    }
  }, ", ", m.credentials)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: C2_COLORS.muted,
      marginTop: 4
    }
  }, m.role))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-24 pt-12 border-t",
    style: {
      borderColor: C2_COLORS.line
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline justify-between mb-8"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: 28,
      letterSpacing: "-0.01em",
      color: C2_COLORS.ink
    }
  }, "Alumni"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, d.alumni.length, " alumni")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-x-12"
  }, d.alumni.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    className: "flex items-baseline gap-4 py-3 border-b",
    style: {
      borderColor: C2_COLORS.line
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.15em",
      color: C2_COLORS.muted,
      width: 72,
      flexShrink: 0
    }
  }, a.years), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 500,
      fontSize: 15,
      color: C2_COLORS.ink,
      flexShrink: 0
    }
  }, a.name), a.current && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 12,
      color: C2_COLORS.muted,
      lineHeight: 1.4,
      marginLeft: "auto",
      textAlign: "right",
      maxWidth: "55%"
    }
  }, a.current)))))));
};
C2.Publications = function PublicationsC2() {
  const d = window.LAB_DATA;
  const list = d.publications;
  // journals as colored text, not pill backgrounds
  const journalColor = {
    "Science": "#a03030",
    "Nature Methods": "#5b3a8a",
    "Nature Genetics": "#2d6e44",
    "Nature Communications": "#0f5f6e",
    "PNAS": "#2d4c8a"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "publications",
    className: "py-10 md:py-20",
    style: {
      background: C2_COLORS.white,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8"
  }, /*#__PURE__*/React.createElement(C2.Head, {
    idx: "04",
    eyebrow: "Our work",
    title: "Publications"
  }), /*#__PURE__*/React.createElement("div", null, list.map(p => {
    const c = journalColor[p.journal] || C2_COLORS.muted;
    return /*#__PURE__*/React.createElement("a", {
      key: p.title,
      href: p.doi,
      target: "_blank",
      rel: "noopener",
      className: "group block md:grid md:grid-cols-12 md:gap-6 py-4 md:py-6 border-b transition-colors",
      style: {
        borderColor: C2_COLORS.line
      },
      onMouseEnter: e => e.currentTarget.style.background = C2_COLORS.paper,
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:hidden flex items-center gap-3 mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 12,
        color: C2_COLORS.ink,
        fontVariantNumeric: "tabular-nums"
      }
    }, p.year), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.1em",
        color: c,
        borderBottom: `1px solid ${c}`,
        paddingBottom: 1
      }
    }, p.journal)), /*#__PURE__*/React.createElement("div", {
      className: "hidden md:block md:col-span-1 min-w-0"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 13,
        color: C2_COLORS.ink,
        fontVariantNumeric: "tabular-nums"
      }
    }, p.year)), /*#__PURE__*/React.createElement("div", {
      className: "hidden md:block md:col-span-3 min-w-0"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.1em",
        color: c,
        borderBottom: `1px solid ${c}`,
        paddingBottom: 1
      }
    }, p.journal)), /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-8 min-w-0"
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "'EB Garamond', Georgia, serif",
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 1.4,
        letterSpacing: "-0.005em",
        color: C2_COLORS.ink,
        transition: "color 0.2s"
      },
      onMouseEnter: e => e.currentTarget.style.color = C2_COLORS.accent,
      onMouseLeave: e => e.currentTarget.style.color = C2_COLORS.ink
    }, p.title, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C2_COLORS.muted,
        fontSize: 13
      }
    }, "\u2197")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "'Manrope', sans-serif",
        fontSize: 12,
        lineHeight: 1.6,
        color: C2_COLORS.muted,
        marginTop: 6
      }
    }, p.authors)));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: C2_COLORS.muted,
      marginTop: 24
    }
  }, "* equal contribution \xA0\xB7\xA0 # co-corresponding authors")));
};
C2.News = function NewsC2() {
  const d = window.LAB_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "news",
    className: "py-10 md:py-20",
    style: {
      background: C2_COLORS.paper,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8"
  }, /*#__PURE__*/React.createElement(C2.Head, {
    idx: "02",
    eyebrow: "Dispatches",
    title: "News"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
  }, d.news.map((n, i) => /*#__PURE__*/React.createElement("article", {
    key: n.title,
    className: "pt-6 border-t",
    style: {
      borderColor: C2_COLORS.ink
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.accent,
      marginBottom: 12
    }
  }, n.date, " \xB7 Log.", String(i + 1).padStart(3, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
      color: C2_COLORS.ink,
      marginBottom: 10
    }
  }, n.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 15,
      lineHeight: 1.7,
      color: C2_COLORS.text
    }
  }, n.note))))));
};

// Embedded OSM map via static tile (no key needed) — we'll use a schematic SVG to guarantee offline
C2.MapFig = function MapFig() {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full aspect-[4/3] overflow-hidden",
    style: {
      background: C2_COLORS.paper,
      border: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Genome Institute of Singapore \u2014 map",
    src: "https://www.google.com/maps?q=Genome+Institute+of+Singapore,+60+Biopolis+Street,+Singapore&output=embed&z=16",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    style: {
      width: "100%",
      height: "100%",
      border: 0,
      filter: "grayscale(0.25) contrast(0.96)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 10,
      padding: "4px 8px",
      background: "rgba(248,245,238,0.92)",
      border: `1px solid ${C2_COLORS.line}`,
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 9,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: C2_COLORS.muted,
      pointerEvents: "none"
    }
  }, "1.3054\xB0N \xB7 103.7883\xB0E"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/maps/place/Genome+Institute+of+Singapore/@1.3054,103.7883,17z",
    target: "_blank",
    rel: "noopener",
    style: {
      position: "absolute",
      right: 12,
      bottom: 10,
      padding: "5px 10px",
      background: C2_COLORS.ink,
      color: C2_COLORS.paper,
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Open in Maps \u2197"));
};
C2.Software = function SoftwareC2() {
  const d = window.LAB_DATA;
  const list = d.software || [];
  return /*#__PURE__*/React.createElement("section", {
    id: "software",
    className: "py-10 md:py-20",
    style: {
      background: C2_COLORS.paper,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8"
  }, /*#__PURE__*/React.createElement(C2.Head, {
    idx: "05",
    eyebrow: "Open source",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Software ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: C2_COLORS.accent,
        fontStyle: "italic"
      }
    }, "& code"))
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(17px, 1.3vw, 19px)",
      lineHeight: 1.55,
      color: C2_COLORS.text,
      marginBottom: 36
    }
  }, "We release our analysis pipelines, image processors, and computational tools openly. Browse the full collection on GitHub, or jump straight to a project below."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, list.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.repo,
    target: "_blank",
    rel: "noopener",
    className: "group p-6 transition-colors",
    style: {
      background: C2_COLORS.white,
      border: `1px solid ${C2_COLORS.line}`
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = C2_COLORS.accent,
    onMouseLeave: e => e.currentTarget.style.borderColor = C2_COLORS.line
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.accent
    }
  }, "Repository"), /*#__PURE__*/React.createElement(C2.Icon, {
    name: "code",
    size: 16,
    stroke: C2_COLORS.muted
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: "-0.015em",
      lineHeight: 1.1,
      color: C2_COLORS.ink,
      marginBottom: 10
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 14,
      lineHeight: 1.6,
      color: C2_COLORS.text,
      marginBottom: 16
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 flex-wrap",
    style: {
      paddingTop: 14,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, s.lang), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: C2_COLORS.muted,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, s.paper)), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 inline-flex items-center gap-2 transition-opacity opacity-70 group-hover:opacity-100",
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: C2_COLORS.accent,
      borderBottom: `1px solid ${C2_COLORS.accent}`,
      paddingBottom: 2
    }
  }, "View on GitHub ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/KHChenLab",
    target: "_blank",
    rel: "noopener",
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: C2_COLORS.ink,
      borderBottom: `1px solid ${C2_COLORS.ink}`,
      paddingBottom: 2
    }
  }, "All repositories on github.com/KHChenLab \u2197"))));
};
C2.LabLife = function LabLifeC2() {
  const d = window.LAB_DATA;
  const list = d.gallery || [];
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    if (open === null) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen(o => (o + 1) % list.length);
      if (e.key === "ArrowLeft") setOpen(o => (o - 1 + list.length) % list.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, list.length]);
  return /*#__PURE__*/React.createElement("section", {
    id: "lab-life",
    className: "py-10 md:py-20",
    style: {
      background: C2_COLORS.white,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8"
  }, /*#__PURE__*/React.createElement(C2.Head, {
    idx: "06",
    eyebrow: "Album",
    title: "Lab Life"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: "clamp(17px, 1.3vw, 19px)",
      lineHeight: 1.55,
      color: C2_COLORS.text,
      marginBottom: 36
    }
  }, "Moments from the lab \u2014 retreats, milestones, and the people behind the science."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-7"
  }, list.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: g.src,
    type: "button",
    onClick: () => setOpen(i),
    className: "group text-left",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "zoom-in"
    }
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden",
    style: {
      background: C2_COLORS.line,
      border: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.caption,
    className: "w-full aspect-[4/3] object-cover transition-all duration-500",
    style: {
      filter: "grayscale(0.6) contrast(1.02)"
    },
    onMouseEnter: e => e.currentTarget.style.filter = "grayscale(0) contrast(1)",
    onMouseLeave: e => e.currentTarget.style.filter = "grayscale(0.6) contrast(1.02)"
  })), /*#__PURE__*/React.createElement("figcaption", {
    className: "flex items-baseline justify-between mt-3"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.muted
    }
  }, g.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontStyle: "italic",
      fontSize: 13,
      color: C2_COLORS.text
    }
  }, g.caption))))))), open !== null && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(14,26,43,0.92)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "5vh 5vw",
      cursor: "zoom-out"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: list[open].src,
    alt: list[open].caption,
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: "100%",
      maxHeight: "82vh",
      objectFit: "contain",
      boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
      cursor: "default"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-6 mt-4",
    style: {
      width: "min(900px, 100%)",
      color: C2_COLORS.paper
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      opacity: 0.7
    }
  }, list[open].date, " \xB7 ", String(open + 1).padStart(2, "0"), "/", String(list.length).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontStyle: "italic",
      fontSize: 16
    }
  }, list[open].caption), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(null);
    },
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.paper,
      background: "none",
      border: `1px solid ${C2_COLORS.paper}`,
      padding: "6px 12px",
      cursor: "pointer"
    }
  }, "Close \u2715"))));
};
C2.Contact = function ContactC2() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-10 md:py-20",
    style: {
      background: C2_COLORS.white,
      borderTop: `1px solid ${C2_COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8"
  }, /*#__PURE__*/React.createElement(C2.Head, {
    idx: "07",
    eyebrow: "Correspondence",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Get in ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: C2_COLORS.accent,
        fontStyle: "italic"
      }
    }, "touch"), ".")
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 mb-12",
    style: {
      border: `1px solid ${C2_COLORS.accent2}`,
      background: C2_COLORS.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.accent2,
      marginBottom: 8
    }
  }, "\u25CF Now hiring"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'EB Garamond', Georgia, serif",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: C2_COLORS.ink,
      marginBottom: 10
    }
  }, "We are hiring."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 15,
      lineHeight: 1.7,
      color: C2_COLORS.text,
      marginBottom: 12
    }
  }, "Post-doctoral fellows, PhD students, and research officers at all levels \u2014 if you are passionate about spatial omics and systems biology, we'd love to hear from you."), /*#__PURE__*/React.createElement(C2.Email, {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: C2_COLORS.ink,
      borderBottom: `1px solid ${C2_COLORS.accent2}`,
      paddingBottom: 2
    }
  }, "Send your CV \u2197")), /*#__PURE__*/React.createElement("dl", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8"
  }, [["Location", /*#__PURE__*/React.createElement(React.Fragment, null, "Level 5, Genome Institute of Singapore", /*#__PURE__*/React.createElement("br", null), "Biopolis research campus, One-North"), "pin"], ["Mailing address", /*#__PURE__*/React.createElement(React.Fragment, null, "60 Biopolis Street, Level 5", /*#__PURE__*/React.createElement("br", null), "Genome Building, Singapore 138672"), "inbox"], ["Email", /*#__PURE__*/React.createElement(C2.Email, {
    style: {
      color: C2_COLORS.ink,
      borderBottom: `1px solid ${C2_COLORS.accent}`,
      paddingBottom: 1
    }
  }), "mail"], ["Twitter / X", /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/KHChenLab",
    target: "_blank",
    rel: "noopener",
    style: {
      color: C2_COLORS.ink,
      borderBottom: `1px solid ${C2_COLORS.accent}`,
      paddingBottom: 1
    }
  }, "@KHChenLab"), "twitter"]].map(([label, v, icon]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-1 shrink-0"
  }, /*#__PURE__*/React.createElement(C2.Icon, {
    name: icon,
    size: 18,
    stroke: C2_COLORS.accent
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: C2_COLORS.muted,
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: 14,
      lineHeight: 1.6,
      color: C2_COLORS.ink
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 min-w-0"
  }, /*#__PURE__*/React.createElement(C2.MapFig, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: C2_COLORS.muted,
      marginTop: 10,
      textAlign: "center"
    }
  }, "Genome Institute of Singapore \xB7 60 Biopolis Street \xB7 Singapore")))));
};
C2.Page = function PageC2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C2_COLORS.paper,
      color: C2_COLORS.ink,
      fontFamily: "'Manrope', sans-serif"
    }
  }, /*#__PURE__*/React.createElement(C2.Nav, null), /*#__PURE__*/React.createElement(C2.Hero, null), /*#__PURE__*/React.createElement(C2.Research, null), /*#__PURE__*/React.createElement(C2.News, null), /*#__PURE__*/React.createElement(C2.Members, null), /*#__PURE__*/React.createElement(C2.Publications, null), /*#__PURE__*/React.createElement(C2.Software, null), /*#__PURE__*/React.createElement(C2.LabLife, null), /*#__PURE__*/React.createElement(C2.Contact, null), /*#__PURE__*/React.createElement("footer", {
    className: "py-10",
    style: {
      background: C2_COLORS.ink,
      color: "rgba(250,248,243,0.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1280px] px-5 md:px-8 flex items-center justify-between flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "\xA9 2026 Chen Laboratory \xB7 GIS \xB7 A*STAR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "Biopolis \xB7 Singapore"))));
};
window.C2 = C2;
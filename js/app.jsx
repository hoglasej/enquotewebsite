/* global React, ReactDOM, Nav, Hero, SocialProof, Pillars, Capabilities, Integration, FinalCTA, Footer,
   useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle */
// app.jsx — compose landing page + Tweaks
const { useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "brand",
  "heroVariant": "split",
  "heroMedia": "video",
  "headlineFont": "grotesk",
  "showProof": true
}/*EDITMODE-END*/;

const THEME_LABEL = { brand: "Brand", warm: "Warm", cool: "Cool" };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectApp(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
  }, [t.theme]);

  useEffectApp(() => {
    const root = document.documentElement;
    if (t.headlineFont === "serif") {
      root.style.setProperty("--font-display", "'Newsreader', Georgia, serif");
    } else {
      root.style.setProperty("--font-display", "'Schibsted Grotesk', system-ui, sans-serif");
    }
  }, [t.headlineFont]);

  const cinematic = t.heroVariant === "cinematic";

  return (
    <div id="page">
      {!cinematic && <SiteNav />}
      <main>
        <Hero variant={t.heroVariant} media={t.heroMedia} />
        {t.showProof && <SocialProof />}
        <Industries />
        <Pillars />
        <Capabilities />
        <Integration />
        <FinalCTA />
      </main>
      <SiteFooter />

      <TweaksPanel>
        <TweakSection label="Hero direction" />
        <TweakRadio label="Layout" value={t.heroVariant}
          options={["split", "centered", "offset", "cinematic"]}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakRadio label="3D media" value={t.heroMedia}
          options={["dashboard", "video"]}
          onChange={(v) => setTweak("heroMedia", v)} />

        <TweakSection label="Theme" />
        <TweakColor label="Palette" value={paletteFor(t.theme)}
          options={[paletteFor("brand"), paletteFor("warm"), paletteFor("cool")]}
          onChange={(v) => setTweak("theme", themeFromPalette(v))} />
        <TweakRadio label="Mood" value={t.theme}
          options={["brand", "warm", "cool"]}
          onChange={(v) => setTweak("theme", v)} />

        <TweakSection label="Typography" />
        <TweakRadio label="Headlines" value={t.headlineFont}
          options={["grotesk", "serif"]}
          onChange={(v) => setTweak("headlineFont", v)} />

        <TweakSection label="Sections" />
        <TweakToggle label="Logo strip" value={t.showProof}
          onChange={(v) => setTweak("showProof", v)} />
      </TweaksPanel>
    </div>
  );
}

const PALETTES = {
  brand: ["#3a3a3a", "#f5a623", "#f7f7f6"],
  warm:  ["#3a352e", "#f5a623", "#f7f3ec"],
  cool:  ["#363c45", "#f5a623", "#f1f4f7"],
};
function paletteFor(theme) { return PALETTES[theme] || PALETTES.brand; }
function themeFromPalette(p) {
  const key = Object.keys(PALETTES).find((k) => PALETTES[k][0] === p[0]);
  return key || "brand";
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

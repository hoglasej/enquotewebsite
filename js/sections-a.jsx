/* global React, Ic, HeroDashboard */
// sections-a.jsx — Nav + Hero variants + Social proof
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const PHONE = "+65 8495 5583";
const WA_LINK = "https://wa.me/6584955583";

/* ============================================================
   NAV (light page chrome)
   ============================================================ */
function Nav() {
  const [scrolled, setScrolled] = useStateA(false);
  const [open, setOpen] = useStateA(false);
  useEffectA(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [["Features", "#features"], ["Capabilities", "#capabilities"], ["Integrations", "#integrations"], ["Pricing", "#cta"]];
  return (
    <header className={"nav" + (scrolled ? " nav-scrolled" : "")}>
      <div className="nav-inner wrap">
        <a className="nav-brand" href="#top" aria-label="EnQuote home">
          <img className="nav-logo" src="assets/enquote-logo.png" alt="EnQuote" />
        </a>
        <nav className="nav-links">
          {links.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-wa nav-wa" href={WA_LINK} target="_blank" rel="noopener">
            {Ic.whatsapp({ size: 17 })} Chat now
          </a>
          <a className="btn btn-primary" href="#cta">Request a demo</a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? Ic.close({ size: 22 }) : Ic.menu({ size: 22 })}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          <a className="btn btn-primary" href="#cta" onClick={() => setOpen(false)}>Request a demo</a>
          <a className="btn btn-wa" href={WA_LINK} target="_blank" rel="noopener">{Ic.whatsapp({ size: 17 })} Chat now</a>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   SHARED hero copy block
   ============================================================ */
function HeroCopy({ center }) {
  return (
    <div className={"hero-copy" + (center ? " center" : "")}>
      <div className="hero-badge">
        <span className="dot"></span> The go-to ERP for renovation & service firms
      </div>
      <h1 className="hero-title">
        Send sharper quotes.<br />Win more jobs.
      </h1>
      <p className="hero-sub">
        EnQuote replaces the spreadsheet-and-WhatsApp scramble with one calm system —
        error-free quoting, full project clarity, and financials that reconcile themselves.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary btn-lg" href="#cta">Request a demo {Ic.arrow({ size: 18 })}</a>
        <a className="btn btn-wa btn-lg" href={WA_LINK} target="_blank" rel="noopener">
          {Ic.whatsapp({ size: 18 })} Chat on WhatsApp
        </a>
      </div>
      <div className="hero-trust">
        <div className="hero-stars">{Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}</div>
        Trusted by <b>80+</b> Singapore renovation & service firms · <b>1,000+</b> users
      </div>
    </div>
  );
}

/* ============================================================
   HERO VARIANTS (light)
   ============================================================ */
function useParallax3D() {
  const sceneRef = useRefA(null);
  const innerRef = useRefA(null);
  useEffectA(() => {
    const scene = sceneRef.current, inner = innerRef.current;
    if (!scene || !inner || window.matchMedia("(max-width: 900px)").matches) return;
    const baseX = 6, baseY = -12;
    let raf = 0;
    const onMove = (e) => {
      const r = scene.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        inner.style.transform = `rotateX(${(baseX - py * 9).toFixed(2)}deg) rotateY(${(baseY + px * 13).toFixed(2)}deg)`;
      });
    };
    const onLeave = () => { cancelAnimationFrame(raf); inner.style.transform = `rotateX(${baseX}deg) rotateY(${baseY}deg)`; };
    scene.addEventListener("mousemove", onMove);
    scene.addEventListener("mouseleave", onLeave);
    return () => { scene.removeEventListener("mousemove", onMove); scene.removeEventListener("mouseleave", onLeave); cancelAnimationFrame(raf); };
  }, []);
  return { sceneRef, innerRef };
}

function MediaStage({ media }) {
  const vidRef = useRefA(null);
  useEffectA(() => {
    if (media !== "video") return;
    const v = vidRef.current;
    if (!v) return;
    const tryPlay = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("pause", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("pause", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, [media]);

  if (media === "video") {
    return (
      <div className="hero-3d-stage video-stage">
        <div className="pui">
          <div className="pui-bar">
            <div className="pui-dots"><i></i><i></i><i></i></div>
            <div className="pui-url">app.enquote.io/demo</div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="video-ph"><span className="vp-play">{Ic.play({ size: 18 })}</span>Product demo video</div>
            <video ref={vidRef} className="hero-3d-video" src={DEMO_VIDEO} muted loop autoPlay playsInline preload="auto"></video>
          </div>
        </div>
      </div>
    );
  }
  return <div className="hero-3d-stage"><HeroDashboard /></div>;
}

function Hero3DVisual({ media }) {
  const { sceneRef, innerRef } = useParallax3D();
  const spark = [38, 52, 46, 64, 58, 78, 92];
  return (
    <div className="hero-visual hero-3d" ref={sceneRef}>
      <div className="hero-3d-inner" ref={innerRef}>
        <div className="hero-3d-floor" aria-hidden="true"></div>
        <MediaStage media={media} />
        <div className="float-card fc-toast">
          <span className="fc-ic">{Ic.check({ size: 18, stroke: 2.6 })}</span>
          <div><b>Quotation sent</b><small>Tan Residence · $48,200</small></div>
        </div>
        <div className="float-card fc-stat">
          <div className="fc-stat-top"><span>Win rate</span><span className="fc-up">↑ 41%</span></div>
          <div className="fc-val">+6 pts</div>
          <div className="fc-spark">
            {spark.map((h, i) => <i key={i} className={i >= spark.length - 2 ? "on" : ""} style={{ height: h + "%" }}></i>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSplit({ media }) {
  return (
    <section className="hero hero-split" id="top">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="wrap hero-split-grid">
        <HeroCopy />
        <Hero3DVisual media={media} />
      </div>
    </section>
  );
}

function HeroCentered() {
  return (
    <section className="hero hero-centered" id="top">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="wrap">
        <HeroCopy center />
        <div className="hero-visual hero-visual-wide"><HeroDashboard /></div>
      </div>
    </section>
  );
}

function HeroOffset() {
  return (
    <section className="hero hero-offset" id="top">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="wrap hero-offset-grid">
        <HeroCopy />
        <div className="hero-visual hero-visual-bleed"><HeroDashboard /></div>
      </div>
    </section>
  );
}

/* ============================================================
   CINEMATIC HERO — full-bleed video + liquid glass
   ============================================================ */
const CINE_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";
const DEMO_VIDEO = "https://enquote.io/wp-content/uploads/2025/01/website.mp4";

function HeroCinematic() {
  const vidRef = useRefA(null);
  const rafRef = useRefA(null);
  const fadingOutRef = useRefA(false);

  useEffectA(() => {
    const v = vidRef.current;
    if (!v) return;
    const DUR = 500;

    const fadeTo = (target) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const from = parseFloat(v.style.opacity || "0");
      const step = (now) => {
        const t = Math.min(1, (now - start) / DUR);
        v.style.opacity = String(from + (target - from) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const onLoaded = () => { v.play().catch(() => {}); fadeTo(1); };
    const onTime = () => {
      if (!v.duration) return;
      const remaining = v.duration - v.currentTime;
      if (remaining <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };
    const onEnded = () => {
      v.style.opacity = "0";
      setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnded);
    if (v.readyState >= 2) onLoaded();
    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const links = [["Features", "#features"], ["Capabilities", "#capabilities"], ["Pricing", "#cta"]];

  return (
    <section className="cine" id="top">
      <div className="cine-fallback" aria-hidden="true"></div>
      <video ref={vidRef} className="cine-video" src={CINE_VIDEO}
             muted playsInline autoPlay preload="auto"></video>
      <div className="cine-scrim" aria-hidden="true"></div>

      <nav className="cine-nav">
        <div className="cine-nav-inner liquid-glass">
          <div className="cine-brand"><span className="mk">E</span> EnQuote</div>
          <div className="cine-links">{links.map(([t, h]) => <a key={t} href={h}>{t}</a>)}</div>
          <div className="cine-nav-cta">
            <a className="plain" href={WA_LINK} target="_blank" rel="noopener">Chat now</a>
            <a className="cine-glass-btn liquid-glass" href="#cta">Request a demo</a>
          </div>
        </div>
      </nav>

      <div className="cine-body">
        <div className="cine-eyebrow liquid-glass"><span style={{ width: 7, height: 7, borderRadius: 9, background: "oklch(0.8 0.13 150)", display: "inline-block" }}></span> ERP for renovation & service firms</div>
        <h1 className="cine-h">Quote like a firm that<br /><em>always wins the job.</em></h1>
        <p className="cine-sub">Faster, error-free quotations and end-to-end project clarity — built for Singapore's renovation, design and service firms.</p>
        <form className="cine-form" onSubmit={(e) => e.preventDefault()}>
          <div className="cine-input-bar liquid-glass">
            <input type="email" placeholder="Work email — book your demo" aria-label="Work email" />
            <button className="cine-submit" type="submit" aria-label="Request demo">{Ic.arrow({ size: 20 })}</button>
          </div>
          <div className="cine-altrow">
            <a className="cine-pill liquid-glass" href={WA_LINK} target="_blank" rel="noopener">{Ic.whatsapp({ size: 17 })} Chat on WhatsApp</a>
            <a className="cine-pill liquid-glass" href="#features">{Ic.play({ size: 15 })} See it in action</a>
          </div>
        </form>
        <div className="cine-trust">Trusted by 80+ firms · 1,000+ users · Xero & QuickBooks</div>
      </div>

      <div className="cine-social">
        <button aria-label="Instagram">{Ic.spark({ size: 20 })}</button>
        <button aria-label="LinkedIn">{Ic.team({ size: 20 })}</button>
        <button aria-label="WhatsApp">{Ic.whatsapp({ size: 20 })}</button>
      </div>
    </section>
  );
}

function Hero({ variant, media }) {
  if (variant === "cinematic") return <HeroCinematic />;
  if (variant === "centered") return <HeroCentered />;
  if (variant === "offset") return <HeroOffset />;
  return <HeroSplit media={media} />;
}

/* ============================================================
   SOCIAL PROOF strip
   ============================================================ */
function SocialProof() {
  const base = "https://enquote.io/wp-content/uploads/2024/12/";
  const logos = [
    "WHST-300x300.png", "TWP-300x300.png", "Tidplus-300x300.png", "Tag-Interior-300x300.png",
    "Supaspace-300x300.png", "Soace-Atelier-300x300.png", "Praxis-300x300.png", "Molecule-300x300.png",
    "Miracle-Design-300x300.png", "Metis-300x300.png", "MakeGood-300x300.png", "Magnum-300x300.png",
    "Luxcraft-300x300.png", "Intheory-300x300.png", "Henglai-300x300.png", "Buildspec-300x300.png",
    "Brightway-300x300.png", "Art-Decor-300x300.png", "AMP-Design-300x300.png", "Optimum-Inteiror-300x300.png",
  ].map((f) => base + f);
  return (
    <section className="proof">
      <div className="wrap proof-inner">
        <div className="proof-lead">Trusted by <b>80+</b> renovation & service firms across Singapore</div>
        <div className="proof-marquee">
          <div className="proof-track">
            {[...logos, ...logos].map((src, i) => (
              <img className="proof-logo-img" key={i} src={src} alt="Client logo" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, HeroCinematic, SocialProof });

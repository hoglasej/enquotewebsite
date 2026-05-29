/* global React, Ic, SiteNav, SiteFooter, DEMO, SITE_WA, SITE_PHONE, SITE_EMAIL, HOME */
// pages.jsx — reusable inner-page building blocks
const { useState: usePageState } = React;

function Page({ children }) {
  return <div id="page"><SiteNav /><main>{children}</main><SiteFooter /></div>;
}

function Crumb({ trail }) {
  return (
    <div className="crumb">
      <a href={HOME}>Home</a>
      {trail.map((t, i) => (
        <React.Fragment key={i}>
          <span>/</span>{t[1] ? <a href={t[1]}>{t[0]}</a> : <span>{t[0]}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function PageHero({ eyebrow, title, sub, primary, secondary, visual, crumb }) {
  return (
    <section className="phero">
      <div className={"wrap phero-grid" + (visual ? "" : " solo")}>
        <div className="phero-text">
          {crumb && <Crumb trail={crumb} />}
          {eyebrow && <div className="eyebrow phero-eyebrow">{eyebrow}</div>}
          <h1 className="phero-title">{title}</h1>
          {sub && <p className="phero-sub">{sub}</p>}
          <div className="phero-actions">
            <a className="btn btn-primary btn-lg" href={primary?.href || DEMO}>{primary?.label || "Request a demo"} {Ic.arrow({ size: 18 })}</a>
            {secondary !== false && (
              <a className="btn btn-wa btn-lg" href={secondary?.href || SITE_WA} target={secondary?.href ? undefined : "_blank"} rel="noopener">
                {secondary?.icon !== false && Ic.whatsapp({ size: 18 })} {secondary?.label || "Chat on WhatsApp"}
              </a>
            )}
          </div>
        </div>
        {visual && <div className="phero-visual">{visual}</div>}
      </div>
    </section>
  );
}

function Shot({ label, ratio = "16 / 10", children }) {
  if (children) return <div className="shot-wrap">{children}</div>;
  return (
    <div style={{
      aspectRatio: ratio, borderRadius: "var(--radius-lg)", border: "1px solid var(--line)",
      background: "repeating-linear-gradient(135deg, var(--paper-2), var(--paper-2) 13px, var(--surface) 13px, var(--surface) 26px)",
      display: "grid", placeItems: "center", color: "var(--ink-faint)",
      fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", padding: "1rem",
    }}>{label}</div>
  );
}

const SITE_IMG = "https://enquote.io/wp-content/uploads/2024/10/";
const HERO_IMG = "https://enquote.io/wp-content/uploads/2025/01/";
function SiteImg({ src, alt, ratio = "16 / 11", fit = "contain" }) {
  return (
    <div className="site-img" style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt || ""} style={{ objectFit: fit, maxWidth: "100%", maxHeight: "100%", width: fit === "cover" ? "100%" : "auto", height: fit === "cover" ? "100%" : "auto" }} />
    </div>
  );
}
function HeroShot({ src, alt }) {
  return (
    <div className="hero-shot">
      <img src={src} alt={alt || ""} />
    </div>
  );
}

function FeatureRow({ eyebrow, title, body, points, visual, flip, band }) {
  return (
    <section className={"frow" + (band ? " band-soft" : "")}>
      <div className={"wrap frow-grid" + (flip ? " flip" : "")}>
        <div className="frow-text">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="frow-h">{title}</h2>
          <p className="frow-body">{body}</p>
          {points && (
            <ul className="frow-points">
              {points.map((p) => <li key={p}><span className="pp-check">{Ic.check({ size: 14, stroke: 2.6 })}</span>{p}</li>)}
            </ul>
          )}
        </div>
        <div className="frow-visual">{visual}</div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, lead, center }) {
  return (
    <div className={"sec-head" + (center ? " center" : "")}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="sec-title">{title}</h2>
      {lead && <p className="sec-lead">{lead}</p>}
    </div>
  );
}

function FeatureGrid({ eyebrow, title, lead, items, cols, band }) {
  return (
    <section className={"sec" + (band ? " band-soft" : "")}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} center />
        <div className={"fgrid" + (cols === 2 ? " two" : "")} style={{ marginTop: "2.4rem" }}>
          {items.map((it) => (
            <article className="cap-card" key={it.t}>
              <span className="cap-ic">{Ic[it.icon] ? Ic[it.icon]({ size: 22 }) : Ic.spark({ size: 22 })}</span>
              <h3 className="cap-t">{it.t}</h3>
              <p className="cap-d">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps({ eyebrow, title, lead, steps, band }) {
  return (
    <section className={"sec" + (band ? " band-soft" : "")}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} center />
        <div className="steps" style={{ marginTop: "2.6rem" }}>
          {steps.map((s, i) => (
            <div className="step" key={s.t}>
              <div className="step-n">{i + 1}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBand({ stats, band }) {
  return (
    <section className={"sec" + (band ? " band-soft" : "")} style={{ paddingBlock: "clamp(2.4rem,4vw,3.6rem)" }}>
      <div className="wrap statband">
        {stats.map((s) => (
          <div className="st" key={s.label}>
            <b dangerouslySetInnerHTML={{ __html: s.value }}></b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ({ eyebrow, title, items, band }) {
  const [open, setOpen] = usePageState(0);
  return (
    <section className={"sec" + (band ? " band-soft" : "")}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow || "FAQ"} title={title || "Common questions"} center />
        <div className="faq" style={{ marginTop: "2.2rem" }}>
          {items.map((it, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}<span className="fq-ic">{Ic.close({ size: 18 })}</span>
              </button>
              <div className="faq-a"><div className="faq-a-inner">{it.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PageCTA({ title, sub, primary, secondary }) {
  return (
    <section className="pcta">
      <div className="wrap pcta-card">
        <h2 className="pcta-h">{title || "Send more quotations today."}</h2>
        <p className="pcta-sub">{sub || "Book a 30-minute consultation and see EnQuote mapped to your team's workflow."}</p>
        <div className="pcta-actions">
          <a className="btn btn-lg pcta-primary" href={primary?.href || DEMO}>{primary?.label || "Request a demo"} {Ic.arrow({ size: 18 })}</a>
          <a className="btn btn-lg pcta-wa" href={SITE_WA} target="_blank" rel="noopener">{Ic.whatsapp({ size: 18 })} Chat now · {SITE_PHONE}</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Page, PageHero, FeatureRow, FeatureGrid, SectionHead, Steps, StatBand, FAQ, PageCTA, Shot, SiteImg, HeroShot, SITE_IMG, HERO_IMG, Crumb });

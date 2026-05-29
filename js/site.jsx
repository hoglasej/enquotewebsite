/* global React, Ic */
// site.jsx — shared chrome: SiteNav (multi-page) + SiteFooter
const { useState: useSiteState, useEffect: useSiteEffect } = React;

const HOME = "EnQuote Landing.html";
const DEMO = "Request a Demo.html";
const SITE_PHONE = "+65 8495 5583";
const SITE_WA = "https://wa.me/6584955583?text=Hi%20I%20saw%20EnQuote%20and%20would%20like%20to%20request%20a%20demo.";
const SITE_EMAIL = "hello@leaptech.sg";

// Pre-fills a WhatsApp chat with the form details — no backend needed.
const WA_NUMBER = "6584955583";
const WA_LABELS = { name: "Name", company: "Company", email: "Email", phone: "Phone", need: "Looking for", message: "Message", size: "Team size", tools: "Current tools" };
function sendViaWhatsApp(data) {
  const lines = Object.entries(data)
    .filter(([k, v]) => !k.startsWith("_") && String(v).trim())
    .map(([k, v]) => `${WA_LABELS[k] || k}: ${v}`);
  const msg = `${data._form || "EnQuote website enquiry"}\n\n${lines.join("\n")}`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  try { window.open(url, "_blank"); } catch (_) {}
  return url;
}

const NAV_ITEMS = [
  { label: "About the Software", href: "About the Software.html" },
  { label: "Services", href: "Services.html", sub: [
    { label: "Customer Management", href: "Customer Management.html", desc: "Leads, CRM & client records" },
    { label: "Projects Document", href: "Projects Document.html", desc: "Digital folders & e-signatures" },
    { label: "Cashflow Analysis", href: "Cashflow Analysis.html", desc: "Costs, purchasing & margins" },
  ] },
  { label: "Resources", href: "Resources.html", sub: [
    { label: "Tutorials", href: "Tutorials.html", desc: "Step-by-step how-to guides" },
    { label: "Daily Insights", href: "Daily Insights.html", desc: "Articles for ID firms" },
    { label: "Contact Us", href: "Contact Us.html", desc: "Talk to our team" },
  ] },
];

function chevron() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2, opacity: 0.6 }}><path d="m6 9 6 6 6-6" /></svg>;
}

function SiteNav() {
  const [scrolled, setScrolled] = useSiteState(false);
  const [open, setOpen] = useSiteState(false);
  useSiteEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={"nav" + (scrolled ? " nav-scrolled" : "")}>
      <div className="nav-inner wrap">
        <a className="nav-brand" href={HOME} aria-label="EnQuote home">
          <img className="nav-logo" src="assets/enquote-logo.png" alt="EnQuote" />
        </a>
        <nav className="nav-links">
          {NAV_ITEMS.map((it) => it.sub ? (
            <div className="nav-item has-sub" key={it.label}>
              <a className="nav-link" href={it.href}>{it.label}{chevron()}</a>
              <div className="nav-dropdown">
                {it.sub.map((s) => (
                  <a className="nav-dd-item" href={s.href} key={s.label}>
                    <b>{s.label}</b><span>{s.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a className="nav-link" href={it.href} key={it.label}>{it.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-wa nav-wa" href={SITE_WA} target="_blank" rel="noopener">{Ic.whatsapp({ size: 17 })} Chat now</a>
          <a className="btn btn-primary" href={DEMO}>Request a demo</a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? Ic.close({ size: 22 }) : Ic.menu({ size: 22 })}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          <a href={HOME} onClick={() => setOpen(false)}>Home</a>
          {NAV_ITEMS.map((it) => (
            <React.Fragment key={it.label}>
              <a href={it.href} onClick={() => setOpen(false)}>{it.label}</a>
              {it.sub && it.sub.map((s) => (
                <a className="nav-mobile-sub" href={s.href} key={s.label} onClick={() => setOpen(false)}>{s.label}</a>
              ))}
            </React.Fragment>
          ))}
          <a className="btn btn-primary" href={DEMO} onClick={() => setOpen(false)}>Request a demo</a>
          <a className="btn btn-wa" href={SITE_WA} target="_blank" rel="noopener">{Ic.whatsapp({ size: 17 })} Chat now</a>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  const cols = [
    { h: "Product", links: [["About the Software", "About the Software.html"], ["Services", "Services.html"], ["Customer Management", "Customer Management.html"], ["Request a Demo", DEMO]] },
    { h: "Services", links: [["Customer Management", "Customer Management.html"], ["Projects Document", "Projects Document.html"], ["Cashflow Analysis", "Cashflow Analysis.html"]] },
    { h: "Resources", links: [["Tutorials", "Tutorials.html"], ["Resources", "Resources.html"], ["Daily Insights", "Daily Insights.html"], ["Contact Us", "Contact Us.html"]] },
  ];
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="nav-brand" href={HOME}><img className="footer-logo" src="assets/enquote-logo.png" alt="EnQuote" /></a>
          <p className="footer-tag">The go-to ERP to scale renovation & service businesses in Singapore.</p>
          <div className="footer-contact">
            <a href={"mailto:" + SITE_EMAIL}>{SITE_EMAIL}</a>
            <a href={SITE_WA} target="_blank" rel="noopener">{SITE_PHONE}</a>
          </div>
          <div className="footer-social">
            <a href={SITE_WA} target="_blank" rel="noopener" aria-label="WhatsApp">{Ic.whatsapp({ size: 18 })}</a>
            <a href="https://www.instagram.com/enquote_io" target="_blank" rel="noopener" aria-label="Instagram">{Ic.spark({ size: 18 })}</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">{Ic.team({ size: 18 })}</a>
          </div>
        </div>
        {cols.map((c) => (
          <div className="footer-col" key={c.h}>
            <h4>{c.h}</h4>
            {c.links.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
          </div>
        ))}
      </div>
      <div className="wrap footer-base">
        <span>© 2026 Leaptechnology Pte Ltd. All rights reserved.</span>
        <div className="footer-legal"><a href="Privacy Policy.html">Privacy Policy</a><a href="Terms of Use.html">Terms of Use</a></div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteNav, SiteFooter, HOME, DEMO, SITE_PHONE, SITE_WA, SITE_EMAIL, sendViaWhatsApp, NAV_ITEMS });

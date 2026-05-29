/* global React, Ic, QuoteBuilder, MiniQuoting, MiniProjects, MiniWorkflow */
// sections-b.jsx — Pillars, Capabilities, Integration, Final CTA, Footer
const { useState: useStateB } = React;

const PHONE_B = "+65 8495 5583";
const WA_B = "https://wa.me/6584955583";

/* ============================================================
   3 CORE PILLARS — tabbed, with live mini UIs
   ============================================================ */
const PILLARS = [
  {
    key: "quoting", icon: "bolt", label: "Fast, fuss-free quoting",
    head: "Quotes that take minutes, not afternoons",
    body: "Build from a living price book — carpentry, M&E, tiling, all priced and ready. Margins, GST and discounts calculate themselves, so nothing slips through and nothing gets undersold.",
    points: ["Reusable price book & templates", "Auto margin + 9% GST maths", "Branded PDF in one click"],
    demo: "builder",
  },
  {
    key: "clarity", icon: "clarity", label: "Full project clarity",
    head: "Every project, every dollar, in one view",
    body: "From deposit to handover, see exactly where each job stands and what it's costing you in real time — no more reconciling five spreadsheets the night before a client meeting.",
    points: ["Stage-by-stage progress tracking", "Live budget vs. actual cost", "Shared client & contractor timeline"],
    demo: "projects",
  },
  {
    key: "workflow", icon: "flow", label: "All-in-one workflow",
    head: "One system from first lead to final invoice",
    body: "Leads, quotes, e-signatures, purchase orders and invoicing flow into each other automatically. The work moves forward while your team focuses on design, not data entry.",
    points: ["Lead → quote → PO → invoice", "Automated handoffs & reminders", "Syncs straight to Xero"],
    demo: "workflow",
  },
];

function Pillars() {
  const [active, setActive] = useStateB("quoting");
  const p = PILLARS.find((x) => x.key === active);
  return (
    <section className="sec pillars" id="features">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">What you get</span>
          <h2 className="sec-title">Three things every firm struggles with — solved.</h2>
        </div>

        <div className="pillar-tabs reveal">
          {PILLARS.map((x) => (
            <button key={x.key} className={"pillar-tab" + (x.key === active ? " on" : "")}
                    onClick={() => setActive(x.key)}>
              <span className="pt-ic">{Ic[x.icon]({ size: 20 })}</span>
              <span>{x.label}</span>
            </button>
          ))}
        </div>

        <div className="pillar-stage card reveal" key={active}>
          <div className="pillar-text">
            <h3 className="pillar-h">{p.head}</h3>
            <p className="pillar-body">{p.body}</p>
            <ul className="pillar-points">
              {p.points.map((pt) => (
                <li key={pt}><span className="pp-check">{Ic.check({ size: 14, stroke: 2.6 })}</span>{pt}</li>
              ))}
            </ul>
            <a className="pillar-link" href="#cta">See it in your demo {Ic.arrowUpRight({ size: 16 })}</a>
          </div>
          <div className="pillar-demo">
            {p.demo === "builder" && <QuoteBuilder />}
            {p.demo === "projects" && <MiniProjects />}
            {p.demo === "workflow" && <MiniWorkflow />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DEEPER CAPABILITIES — feature grid
   ============================================================ */
const CAPS = [
  { icon: "leads", t: "Leads distribution", d: "Capture enquiries from WhatsApp and web, then route them to the right designer automatically." },
  { icon: "cash", t: "Financial & purchasing ops", d: "Raise POs, track supplier costs and manage cashflow without leaving the project." },
  { icon: "sign", t: "Digital forms & e-signatures", d: "Send quotes and contracts for legally-binding sign-off — approved on a phone in minutes." },
  { icon: "gauge", t: "Real-time cost management", d: "Watch budget against actuals on every job, and catch overruns before they eat your margin." },
  { icon: "team", t: "Team, commission & KPI tracking", d: "See who's quoting, who's closing, and pay commissions on numbers everyone trusts." },
  { icon: "shield", t: "One source of truth", d: "Client docs, pricing and approvals live in one place — no more lost WhatsApp threads." },
];

function Capabilities() {
  return (
    <section className="sec caps" id="capabilities">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Goes deeper</span>
          <h2 className="sec-title">Everything the back office needs, in the same place.</h2>
          <p className="sec-lead">As your firm grows, EnQuote grows with it — the operational backbone behind the quoting.</p>
        </div>
        <div className="caps-grid">
          {CAPS.map((c, i) => (
            <article className="cap-card reveal" key={c.t} style={{ animationDelay: (i % 3) * 80 + "ms" }}>
              <span className="cap-ic">{Ic[c.icon]({ size: 22 })}</span>
              <h3 className="cap-t">{c.t}</h3>
              <p className="cap-d">{c.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INTEGRATION callout (Xero)
   ============================================================ */
function Integration() {
  return (
    <section className="sec integ" id="integrations">
      <div className="wrap integ-card reveal">
        <div className="integ-text">
          <span className="eyebrow">Integrations</span>
          <h2 className="integ-h">Your numbers, already reconciled in your accounting tool.</h2>
          <p className="integ-body">
            Approved quotes become invoices, and purchases flow to your books automatically.
            EnQuote keeps quoting and accounting in lockstep with <b>Xero</b> and <b>QuickBooks</b> —
            so month-end is a review, not a rebuild.
          </p>
          <div className="integ-stats">
            <div><b>2-way</b><span>live sync</span></div>
            <div><b>0</b><span>double entry</span></div>
            <div><b>Live</b><span>invoice status</span></div>
          </div>
        </div>
        <div className="integ-visual">
          <div className="integ-flow">
            <div className="integ-node enq"><img className="integ-logo" src="assets/enquote-logo.png" alt="EnQuote" /></div>
            <div className="integ-wire"><span className="pulse"></span></div>
            <div className="integ-targets">
              <div className="integ-node">{Ic.xero({ size: 26 })} Xero</div>
              <div className="integ-node">{Ic.quickbooks({ size: 26 })} QuickBooks</div>
            </div>
          </div>
          <div className="integ-rows">
            {[["INV-2041 · Tan Residence", "Synced", "won"], ["PO-118 · Joinery Co", "Synced", "won"], ["INV-2042 · Scotts Tower", "Pending", "sent"]].map(([a, b, c]) => (
              <div className="integ-row" key={a}>
                <span>{a}</span><span className={"pui-tag " + c}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
   ============================================================ */
function FinalCTA() {
  return (
    <section className="sec final" id="cta">
      <div className="wrap final-card reveal">
        <span className="eyebrow" style={{ color: "var(--brand-on)", opacity: 0.85 }}>Get started</span>
        <h2 className="final-h">Send more quotations today.</h2>
        <p className="final-sub">Book a 30-minute consultation. We'll map your current quoting flow and show you exactly where EnQuote saves your team hours.</p>
        <div className="final-actions">
          <a className="btn btn-lg final-primary" href="#top">Request a demo {Ic.arrow({ size: 18 })}</a>
          <a className="btn btn-lg final-wa" href={WA_B} target="_blank" rel="noopener">{Ic.whatsapp({ size: 18 })} Chat now · {PHONE_B}</a>
        </div>
        <div className="final-foot">No spreadsheets harmed · Setup support included · Cancel anytime</div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  const cols = [
    { h: "Product", links: ["Quoting", "Project clarity", "Workflow automation", "Integrations", "Pricing"] },
    { h: "Company", links: ["About Leap Tech", "Customers", "Careers", "Blog"] },
    { h: "Resources", links: ["Help centre", "Onboarding", "Status", "Security"] },
  ];
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="nav-brand" href="#top"><img className="footer-logo" src="assets/enquote-logo.png" alt="EnQuote" /></a>
          <p className="footer-tag">The go-to ERP to scale renovation & service businesses in Singapore.</p>
          <div className="footer-contact">
            <a href="mailto:hello@leaptech.sg">hello@leaptech.sg</a>
            <a href={WA_B} target="_blank" rel="noopener">{PHONE_B}</a>
          </div>
          <div className="footer-social">
            <a href={WA_B} target="_blank" rel="noopener" aria-label="WhatsApp">{Ic.whatsapp({ size: 18 })}</a>
            <a href="#" aria-label="LinkedIn">{Ic.team({ size: 18 })}</a>
            <a href="#" aria-label="Instagram">{Ic.spark({ size: 18 })}</a>
          </div>
        </div>
        {cols.map((c) => (
          <div className="footer-col" key={c.h}>
            <h4>{c.h}</h4>
            {c.links.map((l) => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
      </div>
      <div className="wrap footer-base">
        <span>© 2026 Leap Tech Pte Ltd. All rights reserved.</span>
        <div className="footer-legal"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
}

const INDUSTRIES = [
  { icon: "wrench", t: "Renovation", d: "Contractors & reno packages" },
  { icon: "sofa", t: "Interior Design", d: "ID firms & studios" },
  { icon: "sparkles", t: "Cleaning", d: "Cleaning & maintenance" },
  { icon: "zap", t: "Electrical", d: "Electricians & M&E" },
  { icon: "aircon", t: "Aircon", d: "Servicing & installation" },
];

function Industries() {
  return (
    <section className="sec industries" id="industries">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Who it's for</span>
          <h2 className="sec-title">Built for your trade</h2>
          <p className="sec-lead">One platform for the firms that quote, deliver and invoice project work across Singapore.</p>
        </div>
        <div className="ind-grid reveal">
          {INDUSTRIES.map((it) => (
            <div className="ind-card" key={it.t}>
              <span className="ind-ic">{Ic[it.icon]({ size: 22 })}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pillars, Capabilities, Integration, FinalCTA, Footer, Industries });

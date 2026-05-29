/* global React, Ic */
// productui.jsx — hand-built "real software" mockups
const { useState } = React;

function Avatar({ initials, hue }) {
  return <div className="pui-av" style={{ background: `oklch(0.6 0.12 ${hue})` }}>{initials}</div>;
}

/* ---- Sidebar used across mockups ---- */
function PuiSide({ active }) {
  const items = [
    { k: "Dashboard", i: "clarity" },
    { k: "Quotations", i: "quote" },
    { k: "Leads", i: "leads" },
    { k: "Projects", i: "flow" },
  ];
  const ops = [
    { k: "Purchasing", i: "cash" },
    { k: "Forms", i: "doc" },
    { k: "Team & KPI", i: "team" },
  ];
  return (
    <div className="pui-side">
      <div className="pui-brandrow">
        <div className="pui-logo">E</div>
        <div className="pui-brandname">EnQuote</div>
      </div>
      {items.map((it) => (
        <div key={it.k} className={"pui-navi" + (active === it.k ? " on" : "")}>
          {Ic[it.i]({ size: 16 })}<span>{it.k}</span>
        </div>
      ))}
      <div className="pui-navlabel">Operations</div>
      {ops.map((it) => (
        <div key={it.k} className={"pui-navi" + (active === it.k ? " on" : "")}>
          {Ic[it.i]({ size: 16 })}<span>{it.k}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   HERO DASHBOARD — full ERP overview
   ============================================================ */
function HeroDashboard() {
  const bars = [42, 58, 50, 71, 64, 88, 96];
  const months = ["J", "F", "M", "A", "M", "J", "J"];
  const pipeline = [
    { nm: "Tan Residence — Bishan", mt: "5-room BTO · reno package", amt: "$48,200", tag: "won", t: "Won", hue: 165, in: "TR" },
    { nm: "The Scotts Tower #14-02", mt: "Full condo interior", amt: "$96,500", tag: "sent", t: "Sent", hue: 250, in: "ST" },
    { nm: "Lim & Co Office Fit-out", mt: "Commercial · 2,400 sqft", amt: "$172,000", tag: "rev", t: "Review", hue: 47, in: "LC" },
    { nm: "Goh Family — Sembawang", mt: "Kitchen + masterbath", amt: "$31,800", tag: "draft", t: "Draft", hue: 30, in: "GF" },
  ];
  return (
    <div className="pui" role="img" aria-label="EnQuote ERP dashboard">
      <div className="pui-bar">
        <div className="pui-dots"><i></i><i></i><i></i></div>
        <div className="pui-url">app.enquote.io/dashboard</div>
      </div>
      <div className="pui-app">
        <PuiSide active="Dashboard" />
        <div className="pui-main">
          <div className="pui-head">
            <div>
              <div className="pui-h">Good morning, Wei Ling</div>
              <div className="pui-sub">Here's where your business stands this month</div>
            </div>
            <div className="pui-pill">{Ic.quote({ size: 14 })} New quote</div>
          </div>

          <div className="pui-kpis">
            <div className="pui-kpi">
              <div className="lab">Quotes sent</div>
              <div className="val">38</div>
              <div className="chg pui-up">{Ic.trend({ size: 12 })} +24%</div>
            </div>
            <div className="pui-kpi">
              <div className="lab">Win rate</div>
              <div className="val">41%</div>
              <div className="chg pui-up">{Ic.trend({ size: 12 })} +6 pts</div>
            </div>
            <div className="pui-kpi">
              <div className="lab">Pipeline value</div>
              <div className="val">$348k</div>
              <div className="chg pui-up">{Ic.trend({ size: 12 })} +18%</div>
            </div>
            <div className="pui-kpi">
              <div className="lab">Avg. quote time</div>
              <div className="val">22m</div>
              <div className="chg pui-down">↓ from 3h</div>
            </div>
          </div>

          <div className="pui-grid2">
            <div className="pui-panel-c">
              <div className="pui-panel-t"><b>Quotations sent</b><span>last 7 months</span></div>
              <div className="pui-chart">
                {bars.map((b, i) => (
                  <div className="col" key={i}>
                    <div className={"bar" + (i === bars.length - 1 ? " hi" : i === bars.length - 2 ? " ac" : "")}
                         style={{ height: b + "%" }}></div>
                    <div className="cl">{months[i]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pui-panel-c">
              <div className="pui-panel-t"><b>This week</b><span>4 tasks</span></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <MiniTask done label="Send Tan Residence revision" />
                <MiniTask done label="Sync 6 invoices to Xero" />
                <MiniTask label="Follow up Scotts Tower" />
                <MiniTask label="Approve carpentry PO" />
              </div>
            </div>
          </div>

          <div className="pui-panel-c">
            <div className="pui-panel-t"><b>Active pipeline</b><span>14 open deals</span></div>
            {pipeline.map((p) => (
              <div className="pui-row" key={p.nm}>
                <Avatar initials={p.in} hue={p.hue} />
                <div>
                  <div className="nm">{p.nm}</div>
                  <div className="mt">{p.mt}</div>
                </div>
                <span className={"pui-tag " + p.tag} style={{ marginLeft: "auto" }}>{p.t}</span>
                <div className="amt" style={{ marginLeft: 14, minWidth: 64 }}>{p.amt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniTask({ done, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12 }}>
      <span style={{
        width: 17, height: 17, borderRadius: 5, flexShrink: 0,
        display: "grid", placeItems: "center",
        background: done ? "var(--brand)" : "transparent",
        border: done ? "none" : "1.5px solid var(--pui-line)",
        color: "var(--brand-on)",
      }}>{done ? Ic.check({ size: 11, stroke: 2.4 }) : null}</span>
      <span style={{ color: done ? "var(--pui-faint)" : "var(--pui-ink)", textDecoration: done ? "line-through" : "none", fontWeight: done ? 400 : 500 }}>{label}</span>
    </div>
  );
}

/* ============================================================
   INTERACTIVE QUOTE BUILDER — feature 1 demo
   ============================================================ */
const QB_CATALOG = [
  { id: "carp", name: "Carpentry — kitchen cabinets", unit: "L.metre", price: 480, qty: 6 },
  { id: "floor", name: "Vinyl flooring (SPC)", unit: "sqft", price: 6.5, qty: 620 },
  { id: "paint", name: "Painting — full unit", unit: "lump", price: 2400, qty: 1 },
  { id: "elec", name: "Electrical rewiring", unit: "point", price: 95, qty: 18 },
  { id: "false", name: "False ceiling — L-box", unit: "L.metre", price: 32, qty: 40 },
];

function fmt(n) {
  return "$" + n.toLocaleString("en-SG", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function QuoteBuilder() {
  const [items, setItems] = useState([QB_CATALOG[0], QB_CATALOG[1], QB_CATALOG[3]]);
  const [added, setAdded] = useState(false);

  const sub = items.reduce((s, it) => s + it.price * it.qty, 0);
  const gst = sub * 0.09;
  const total = sub + gst;

  const toggle = (cat) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === cat.id);
      if (exists) return prev.filter((p) => p.id !== cat.id);
      setAdded(true);
      setTimeout(() => setAdded(false), 600);
      return [...prev, cat];
    });
  };

  return (
    <div className="pui" role="img" aria-label="Interactive quote builder">
      <div className="pui-bar">
        <div className="pui-dots"><i></i><i></i><i></i></div>
        <div className="pui-url">app.enquote.io/quotes/new</div>
        <span className="pui-tag won" style={{ marginLeft: "auto" }}>Auto-saved</span>
      </div>
      <div style={{ padding: 16 }}>
        <div className="pui-head" style={{ marginBottom: 12 }}>
          <div>
            <div className="pui-h">Quotation · Tan Residence</div>
            <div className="pui-sub">Tap a line item to add or remove — totals update live</div>
          </div>
        </div>

        <div className="pui-chips" style={{ marginBottom: 14 }}>
          {QB_CATALOG.map((c) => {
            const on = items.find((p) => p.id === c.id);
            return (
              <button key={c.id} className={"pui-chip" + (on ? " on" : "")}
                      onClick={() => toggle(c)} style={{ cursor: "pointer", fontFamily: "var(--font-display)" }}>
                {on ? "✓ " : "+ "}{c.name.split(" — ")[0].split(" (")[0]}
              </button>
            );
          })}
        </div>

        <div style={{ border: "1px solid var(--pui-line)", borderRadius: 12, overflow: "hidden" }}>
          <div className="qb-line hd">
            <span>Item</span><span style={{ textAlign: "right" }}>Qty</span>
            <span style={{ textAlign: "right" }}>Rate</span><span style={{ textAlign: "right" }}>Amount</span>
          </div>
          {items.length === 0 && (
            <div style={{ padding: 22, textAlign: "center", color: "var(--pui-faint)", fontSize: 12.5 }}>
              No line items yet — tap a chip above to start.
            </div>
          )}
          {items.map((it) => (
            <div className="qb-line" key={it.id}>
              <div className="it">{it.name}<small>{it.unit}</small></div>
              <div className="num">{it.qty}</div>
              <div className="num">{it.price}</div>
              <div className="num" style={{ fontWeight: 600 }}>{fmt(it.price * it.qty)}</div>
            </div>
          ))}
          <div className="qb-tot">
            <div className="qb-tr"><span>Subtotal</span><span className="num">{fmt(sub)}</span></div>
            <div className="qb-tr"><span>GST (9%)</span><span className="num">{fmt(gst)}</span></div>
            <div className="qb-tr grand">
              <span>Total {added && <em style={{ color: "var(--ok)", fontStyle: "normal", fontSize: 11, fontFamily: "var(--font-mono)" }}>· updated</em>}</span>
              <span className="num">{fmt(total)}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <div className="pui-pill">{Ic.sign({ size: 14 })} Send for e-sign</div>
          <div className="pui-pill ghost">{Ic.doc({ size: 14 })} Preview PDF</div>
          <div className="pui-pill ghost" style={{ marginLeft: "auto", gap: 6 }}>
            {Ic.xero({ size: 16 })} Syncs to Xero
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MINI UIs for the 3 pillars (compact)
   ============================================================ */
function MiniQuoting() {
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Price book</b><span>live rates</span></div>
        <div className="pui-chips">
          <span className="pui-chip on">Carpentry</span>
          <span className="pui-chip">Tiling</span>
          <span className="pui-chip">M&E</span>
          <span className="pui-chip">Ceiling</span>
        </div>
        <div style={{ border: "1px solid var(--pui-line)", borderRadius: 10, marginTop: 12, overflow: "hidden" }}>
          {[["Kitchen top cabinet", "$3,840"], ["Wardrobe — 4 door", "$2,960"], ["TV feature wall", "$1,520"]].map(([a, b]) => (
            <div key={a} className="pui-row" style={{ padding: "9px 12px", borderColor: "var(--pui-line-2)" }}>
              <span className="nm">{a}</span><span className="amt">{b}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "var(--brand-soft)", color: "var(--brand-deep)", padding: "10px 12px", borderRadius: 10, fontWeight: 600 }}>
          <span>Quote total</span><span style={{ fontFamily: "var(--font-mono)", fontSize: 15 }}>$48,200</span>
        </div>
      </div>
    </div>
  );
}

function MiniProjects() {
  const stages = [["Quote", 100], ["Deposit", 100], ["Carpentry", 72], ["M&E", 40], ["Handover", 0]];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Tan Residence</b><span>on track</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
          {stages.map(([s, v]) => (
            <div key={s}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, marginBottom: 5, color: "var(--pui-soft)" }}>
                <span style={{ fontWeight: 600, color: v === 0 ? "var(--pui-faint)" : "var(--pui-ink)" }}>{s}</span>
                <span style={{ fontFamily: "var(--font-mono)" }}>{v}%</span>
              </div>
              <div className="pui-meter"><i style={{ width: v + "%", background: v === 100 ? "var(--ok)" : "var(--brand)" }}></i></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniWorkflow() {
  const flow = [
    { t: "Lead in", s: "WhatsApp → CRM", on: true },
    { t: "Quote sent", s: "auto from price book", on: true },
    { t: "E-signed", s: "client approves", on: true },
    { t: "PO raised", s: "to carpenter", on: false },
    { t: "Synced", s: "Xero invoice", on: false },
  ];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Workflow automation</b><span>live</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 2 }}>
          {flow.map((f, i) => (
            <div key={f.t} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ width: 20, height: 20, borderRadius: 999, display: "grid", placeItems: "center",
                  background: f.on ? "var(--brand)" : "var(--pui-bg)", color: "var(--brand-on)",
                  border: f.on ? "none" : "1.5px solid var(--pui-line)" }}>
                  {f.on ? Ic.check({ size: 12, stroke: 2.6 }) : <span style={{ width: 5, height: 5, borderRadius: 9, background: "var(--pui-faint)" }} />}
                </span>
                {i < flow.length - 1 && <span style={{ width: 2, height: 22, background: f.on ? "var(--brand)" : "var(--pui-line)" }} />}
              </div>
              <div style={{ paddingBottom: 12 }}>
                <div style={{ fontWeight: 600, color: f.on ? "var(--pui-ink)" : "var(--pui-faint)" }}>{f.t}</div>
                <div style={{ fontSize: 10.5, color: "var(--pui-faint)", fontFamily: "var(--font-mono)" }}>{f.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HeroDashboard, QuoteBuilder, MiniQuoting, MiniProjects, MiniWorkflow, Avatar });

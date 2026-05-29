/* global React, Ic, Avatar */
// featureui.jsx — bespoke product mini-UIs for service feature rows.
// Replaces the animated GIFs; each matches its feature. Reuses .pui CSS from product.css.

function MiniLeads() {
  const leads = [
    { nm: "Mrs Tan · Bishan BTO", src: "WhatsApp", hue: 150, in: "MT" },
    { nm: "Scotts Tower #14-02", src: "Web form", hue: 250, in: "ST" },
    { nm: "Lim & Co — office", src: "WhatsApp", hue: 47, in: "LC" },
  ];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>New leads</b><span>auto-captured</span></div>
        {leads.map((l) => (
          <div className="pui-row" key={l.nm} style={{ padding: "9px 0" }}>
            <Avatar initials={l.in} hue={l.hue} />
            <div className="nm">{l.nm}</div>
            <span className={"pui-tag " + (l.src === "WhatsApp" ? "won" : "sent")} style={{ marginLeft: "auto" }}>{l.src}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniAssign() {
  const ppl = [["Wei Ling", "WL", 150, "8 leads"], ["Marcus", "MA", 250, "7 leads"], ["Priya", "PR", 47, "8 leads"]];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Lead distribution</b><span>round-robin</span></div>
        {ppl.map(([n, i, h, c]) => (
          <div className="pui-row" key={n} style={{ padding: "9px 0" }}>
            <Avatar initials={i} hue={h} /><div className="nm">{n}</div>
            <span className="amt" style={{ marginLeft: "auto" }}>{c}</span>
          </div>
        ))}
        <div style={{ marginTop: 10, background: "var(--brand-soft)", color: "var(--brand-deep)", padding: "9px 11px", borderRadius: 9, fontWeight: 600, display: "flex", gap: 8, alignItems: "center", fontSize: 11.5 }}>
          {Ic.check({ size: 14, stroke: 2.6 })} New lead → assigned to Priya
        </div>
      </div>
    </div>
  );
}

function MiniFolders() {
  const files = [["Floor plan v3", "PDF"], ["Quotation — Tan", "PDF"], ["VO-02 signed", "PDF"], ["Site photos", "ZIP"]];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Tan Residence</b><span>project folder</span></div>
        {files.map(([n, t]) => (
          <div className="pui-row" key={n} style={{ padding: "9px 0" }}>
            <span style={{ color: "var(--accent-deep)" }}>{Ic.doc({ size: 16 })}</span>
            <div className="nm">{n}</div>
            <span className="pui-tag draft" style={{ marginLeft: "auto" }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniForm() {
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Site survey form</b><span>template</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 4 }}>
          {["Unit type", "Floor area (sqft)", "Existing condition"].map((f) => (
            <div key={f}>
              <div style={{ fontSize: 10.5, color: "var(--pui-faint)", marginBottom: 4 }}>{f}</div>
              <div style={{ height: 24, borderRadius: 6, border: "1px solid var(--pui-line)", background: "var(--pui-bg)" }}></div>
            </div>
          ))}
          <div style={{ display: "flex", gap: 14, marginTop: 2 }}>
            {["Wiring OK", "Plumbing OK"].map((c) => (
              <div key={c} style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 11 }}>
                <span style={{ width: 15, height: 15, borderRadius: 4, background: "var(--brand)", display: "grid", placeItems: "center", color: "var(--brand-on)" }}>{Ic.check({ size: 10, stroke: 3 })}</span>{c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniSign() {
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Quotation · Tan Residence</b><span>$48,200</span></div>
        <div style={{ border: "1px solid var(--pui-line)", borderRadius: 10, padding: 14, marginTop: 6 }}>
          <div style={{ fontSize: 11, color: "var(--pui-faint)" }}>Client signature</div>
          <div style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 24, color: "var(--pui-ink)", borderBottom: "1px solid var(--pui-line)", padding: "4px 0 8px" }}>Tan W.L.</div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 10, color: "var(--ok)", fontWeight: 600, fontSize: 12 }}>
            {Ic.check({ size: 14, stroke: 2.6 })} Signed · 2 Mar, 10:42
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniBudget() {
  const cats = [["Carpentry", 82], ["Tiling", 61], ["M&E", 94], ["Painting", 38]];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Budget vs. actual</b><span>Tan Residence</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 4 }}>
          {cats.map(([n, v]) => (
            <div key={n}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, marginBottom: 5 }}>
                <span style={{ fontWeight: 600 }}>{n}</span>
                <span style={{ fontFamily: "var(--font-mono)", color: v > 90 ? "var(--accent-deep)" : "var(--pui-soft)" }}>{v}%</span>
              </div>
              <div className="pui-meter"><i style={{ width: v + "%", background: v > 90 ? "var(--accent)" : "var(--brand)" }}></i></div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 11, fontSize: 10.5, color: "var(--accent-deep)", fontFamily: "var(--font-mono)" }}>! M&amp;E trending over budget</div>
      </div>
    </div>
  );
}

function MiniPO() {
  const pos = [["PO-118 · Joinery Co", "$12,400", "won", "Approved"], ["PO-119 · Tiling Co", "$6,800", "sent", "Sent"], ["PO-120 · Aircon Co", "$3,200", "draft", "Draft"]];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div className="pui-panel-t"><b>Purchase orders</b><span>this project</span></div>
        {pos.map(([n, a, t, lbl]) => (
          <div className="pui-row" key={n} style={{ padding: "9px 0" }}>
            <div className="nm">{n}</div>
            <span className="amt" style={{ marginLeft: "auto", marginRight: 10 }}>{a}</span>
            <span className={"pui-tag " + t}>{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniSync() {
  const rows = [["INV-2041 · Tan", "Xero", "won", "Synced"], ["PO-118 · Joinery", "QuickBooks", "won", "Synced"], ["INV-2042 · Scotts", "Xero", "sent", "Pending"]];
  return (
    <div className="pui" style={{ fontSize: 12 }}>
      <div style={{ padding: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontWeight: 700, padding: "6px 10px", border: "1px solid var(--pui-line)", borderRadius: 9, display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ width: 18, height: 18, borderRadius: 5, background: "var(--accent)", color: "oklch(0.28 0.01 75)", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 11 }}>E</span>EnQuote
          </span>
          <span style={{ flex: "0 1 36px", height: 2, background: "var(--pui-line)" }}></span>
          <span style={{ fontWeight: 700, padding: "6px 10px", border: "1px solid var(--pui-line)", borderRadius: 9 }}>Xero · QuickBooks</span>
        </div>
        {rows.map(([n, s, t, lbl]) => (
          <div className="pui-row" key={n} style={{ padding: "8px 0" }}>
            <div className="nm">{n}</div>
            <span style={{ marginLeft: "auto", marginRight: 8, fontSize: 10.5, color: "var(--pui-faint)", fontFamily: "var(--font-mono)" }}>{s}</span>
            <span className={"pui-tag " + t}>{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { MiniLeads, MiniAssign, MiniFolders, MiniForm, MiniSign, MiniBudget, MiniPO, MiniSync });

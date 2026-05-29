/* global React */
// icons.jsx — minimal line-icon set (UI primitives, stroke-based)
const { createElement: h } = React;

function Icon({ d, paths, size = 22, stroke = 1.6, fill = "none", style, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
         stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"
         strokeLinejoin="round" style={style} aria-hidden="true" {...rest}>
      {paths ? paths : <path d={d} />}
    </svg>
  );
}

const Ic = {
  quote: (p) => <Icon {...p} paths={<>
    <path d="M4 5h16M4 10h10M4 15h16M4 20h7" /></>} />,
  bolt: (p) => <Icon {...p} paths={<path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />} />,
  clarity: (p) => <Icon {...p} paths={<>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9h18M9 9v12" /></>} />,
  flow: (p) => <Icon {...p} paths={<>
    <circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="6" r="2.4" />
    <circle cx="12" cy="18" r="2.4" />
    <path d="M7.8 7.6 11 16M16.2 7.6 13 16" /></>} />,
  leads: (p) => <Icon {...p} paths={<>
    <path d="M3 7h18l-7 8v4l-4 1v-5L3 7Z" /></>} />,
  cash: (p) => <Icon {...p} paths={<>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.6" /><path d="M6 9.5v5M18 9.5v5" /></>} />,
  sign: (p) => <Icon {...p} paths={<>
    <path d="M3 17c3-1 4-9 6-9s2 6 4 6 3-4 5-4" /><path d="M3 21h18" /></>} />,
  gauge: (p) => <Icon {...p} paths={<>
    <path d="M4 17a8 8 0 1 1 16 0" /><path d="M12 17l4-5" /><circle cx="12" cy="17" r="1.3" fill="currentColor" stroke="none" /></>} />,
  team: (p) => <Icon {...p} paths={<>
    <circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6M17 19a5.5 5.5 0 0 0-2.2-4.4" /></>} />,
  check: (p) => <Icon {...p} paths={<path d="m5 13 4 4L19 7" />} />,
  arrow: (p) => <Icon {...p} paths={<path d="M5 12h14M13 6l6 6-6 6" />} />,
  arrowUpRight: (p) => <Icon {...p} paths={<path d="M7 17 17 7M8 7h9v9" />} />,
  chat: (p) => <Icon {...p} paths={<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12Z" />} />,
  play: (p) => <Icon {...p} paths={<path d="M8 5.5v13l11-6.5-11-6.5Z" />} />,
  shield: (p) => <Icon {...p} paths={<path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6l-7-3Z" />} />,
  spark: (p) => <Icon {...p} paths={<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />} />,
  doc: (p) => <Icon {...p} paths={<><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v4h4M9 13h6M9 17h6" /></>} />,
  menu: (p) => <Icon {...p} paths={<path d="M3 6h18M3 12h18M3 18h18" />} />,
  close: (p) => <Icon {...p} paths={<path d="M6 6l12 12M18 6 6 18" />} />,
  trend: (p) => <Icon {...p} paths={<><path d="M3 17 9 11l4 4 8-8" /><path d="M21 7v5h-5" /></>} />,
  wrench: (p) => <Icon {...p} paths={<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />} />,
  sofa: (p) => <Icon {...p} paths={<><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /><path d="M2 11a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 1 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2v2H6v-2a2 2 0 0 0-2-2 2 2 0 0 0-2 2Z" /><path d="M4 18v2" /><path d="M20 18v2" /></>} />,
  sparkles: (p) => <Icon {...p} paths={<><path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-5.1-1.32a.5.5 0 0 1 0-.97L8.5 9.94A2 2 0 0 0 9.94 8.5l1.32-5.1a.5.5 0 0 1 .97 0l1.32 5.1A2 2 0 0 0 15 9.94l5.1 1.32a.5.5 0 0 1 0 .97L15 14.06a2 2 0 0 0-1.44 1.44l-1.32 5.1a.5.5 0 0 1-.97 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /></>} />,
  zap: (p) => <Icon {...p} paths={<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />} />,
  aircon: (p) => <Icon {...p} paths={<><path d="M12.8 19.6A2 2 0 1 0 14 16H2" /><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /><path d="M9.8 4.4A2 2 0 1 1 11 8H2" /></>} />,
  whatsapp: (p) => (
    <svg width={p?.size || 20} height={p?.size || 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={p?.style}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 1.97.58 3.8 1.56 5.34L2 22l4.9-1.62a9.86 9.86 0 0 0 5.14 1.43h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.05a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1 1.02 1.04-3.02-.2-.31a8.13 8.13 0 0 1-1.25-4.35 8.18 8.18 0 0 1 8.18-8.16c2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.17-8.34 8.17Zm4.49-6.12c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/>
    </svg>
  ),
  xero: (p) => (
    <svg width={p?.size || 30} height={p?.size || 30} viewBox="0 0 40 40" aria-hidden="true" style={p?.style}>
      <circle cx="20" cy="20" r="20" fill="#13B5EA"/>
      <path d="M14.3 20.1 11 16.8a.9.9 0 1 1 1.27-1.27l3.3 3.3 3.3-3.3a.9.9 0 0 1 1.28 1.27L16.85 20l3.3 3.3a.9.9 0 1 1-1.28 1.27l-3.3-3.3-3.3 3.3a.9.9 0 0 1-1.27-1.27l3.3-3.2Z" fill="#fff"/>
      <circle cx="27" cy="20" r="2.3" fill="#fff"/>
    </svg>
  ),
  quickbooks: (p) => (
    <svg width={p?.size || 30} height={p?.size || 30} viewBox="0 0 40 40" aria-hidden="true" style={p?.style}>
      <circle cx="20" cy="20" r="20" fill="#2CA01C"/>
      <path d="M17.4 11.6a8.6 8.6 0 0 0 0 16.8v-2.7a5.9 5.9 0 0 1 0-11.4Zm5.2 0v16.8h2.1a2.1 2.1 0 0 0 2.1-2.1V11.6Zm-1.3 2.7v11.4a5.9 5.9 0 0 0 0-11.4Z" fill="#fff"/>
    </svg>
  ),
};

window.Ic = Ic;

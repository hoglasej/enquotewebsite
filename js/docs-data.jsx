/* docs-data.jsx — EnQuote tutorial content (in-site).
   Videos + step articles sourced from the EnQuote docs.
   type: "video" | "steps" | "pending". Fill "pending" entries as content is captured. */
const VID = "https://designden.sg/wp-content/uploads/2024/12/";

const TUTORIALS = [
  {
    slug: "setup-account", cat: "Setup Your Account",
    title: "How to completely set up your account", read: "< 1 min", type: "steps",
    steps: [
      { text: "Head over to your profile icon in the top-right corner of the page.", img: VID + "image-1024x514.png" },
      { text: "Change your password and preset your signature under Edit Profile.", img: VID + "image-1-1024x521.png" },
      { text: "When you're done, click Save." },
    ],
  },
  {
    slug: "access-manage-projects", cat: "Management Guide",
    title: "How to access & manage your IDs' projects", read: "< 1 min", type: "video",
    intro: "Access, verify and manage every designer's projects and quotations from one place.",
    video: VID + "design-den-managment-how-to-access-and-manage-your-id-s-projects.mp4",
  },
  {
    slug: "approve-documents", cat: "Management Guide",
    title: "How to approve documents with DesignDen", read: "< 1 min", type: "video",
    intro: "Route documents through multiple stakeholders for approval — from sign-offs to payment processing.",
    video: VID + "How-to-approve-documents-with-DesignDen.mp4",
  },
  {
    slug: "manage-ranks-profit-sharing", cat: "Management Guide",
    title: "How to manage ranks & profit-sharing percentage", read: "< 1 min", type: "video",
    intro: "Allocate profit-sharing, set ranks and keep performance transparent — so your team stays motivated.",
    video: VID + "how-to-manage-ranks-and-profit-sharing-percentage.mp4",
  },
  {
    slug: "assign-leads", cat: "Management Guide",
    title: "How to assign leads to IDs", read: "< 1 min", type: "video",
    intro: "Seamlessly assign and track every lead so none slips through the cracks.",
    video: VID + "How-to-assign-leads-to-IDs.mp4",
  },
  {
    slug: "handover-close-project", cat: "Interior Designers Guide",
    title: "How to handover and close a project", read: "< 1 min", type: "video",
    intro: "Close out a project cleanly — from final handover to sign-off.",
    video: VID + "How-to-handover-and-close-a-project.mp4",
  },
  {
    slug: "confirm-vendor-invoice", cat: "Interior Designers Guide",
    title: "How to confirm vendor invoice for cost tracking", read: "< 1 min", type: "video",
    intro: "Managing many sites at once? Confirm supplier invoices fast and keep cost tracking accurate.",
    video: VID + "How-to-confirm-supplier-invoice.mp4",
  },
  {
    slug: "create-vo", cat: "Interior Designers Guide",
    title: "How to create a VO (Variation Order)", read: "< 1 min", type: "video",
    intro: "Creating variation orders can be tedious across multiple versions and revisions — EnQuote simplifies it so you can issue a VO and sell with clarity.",
    video: VID + "How-to-create-VO-Variation-Order.mp4",
  },
  {
    slug: "create-quotations", cat: "Interior Designers Guide",
    title: "How to create quotations", read: "< 1 min", type: "video",
    intro: "Build an accurate, branded quotation in minutes from your price book.",
    video: VID + "How-to-create-quotation.mp4",
  },
  {
    slug: "create-payment-vouchers", cat: "Accountant / Admin Guide",
    title: "How to create Payment Vouchers", read: "< 1 min", type: "video",
    intro: "Tired of building payment vouchers in Excel? Automate them with a few clicks and an approval workflow.",
    video: VID + "How-to-create-payment-vouchers.mp4",
  },
  {
    slug: "record-ap-ar", cat: "Accountant / Admin Guide",
    title: "How to record a project's AP & AR", read: "< 1 min", type: "video",
    intro: "Record and track each project's AP and AR on the go — no more spreadsheet juggling.",
    video: VID + "How-to-record-AP-and-AR.mp4",
  },
];

const TUTORIAL_CATS = ["Setup Your Account", "Management Guide", "Interior Designers Guide", "Accountant / Admin Guide"];

Object.assign(window, { TUTORIALS, TUTORIAL_CATS });

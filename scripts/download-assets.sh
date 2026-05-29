#!/usr/bin/env bash
# ------------------------------------------------------------
# EnQuote — download all external media into the project so the
# site is fully self-contained (ideal for GitHub Pages hosting).
#
# Run from the project root:   bash scripts/download-assets.sh
# Requires: curl  (preinstalled on macOS/Linux; on Windows use Git Bash/WSL)
#
# After running, do the find-and-replace in scripts/ASSETS.md (or paste the
# Claude Code prompt there) to repoint the code at these local files.
# ------------------------------------------------------------
set -e
cd "$(dirname "$0")/.."

mkdir -p assets/media/2025-01 assets/media/2024-12-logos assets/media/2024-10 assets/media/docs

dl () { # dl <url> <dest>
  echo "↓ $2"
  curl -fsSL "$1" -o "$2" || echo "  !! FAILED: $1"
}

EN_2501="https://enquote.io/wp-content/uploads/2025/01"
EN_2412="https://enquote.io/wp-content/uploads/2024/12"
EN_2410="https://enquote.io/wp-content/uploads/2024/10"
DD="https://designden.sg/wp-content/uploads/2024/12"

# ---- Home hero video + page hero banners (2025/01) ----
dl "$EN_2501/website.mp4" "assets/media/2025-01/website.mp4"
for n in 1 2 3 4; do dl "$EN_2501/$n.png" "assets/media/2025-01/$n.png"; done

# ---- Client logos (2024/12) ----
for f in WHST TWP Tidplus Tag-Interior Supaspace Soace-Atelier Praxis Molecule \
         Miracle-Design Metis MakeGood Magnum Luxcraft Intheory Henglai Buildspec \
         Brightway Art-Decor AMP-Design Optimum-Inteiror; do
  dl "$EN_2412/${f}-300x300.png" "assets/media/2024-12-logos/${f}-300x300.png"
done

# ---- Tutorial videos + step images (designden.sg) ----
dl "$DD/How-to-create-quotation.mp4"        "assets/media/docs/How-to-create-quotation.mp4"
dl "$DD/How-to-create-VO-Variation-Order.mp4" "assets/media/docs/How-to-create-VO-Variation-Order.mp4"
dl "$DD/design-den-managment-how-to-access-and-manage-your-id-s-projects.mp4" "assets/media/docs/design-den-managment-how-to-access-and-manage-your-id-s-projects.mp4"
dl "$DD/How-to-approve-documents-with-DesignDen.mp4" "assets/media/docs/How-to-approve-documents-with-DesignDen.mp4"
dl "$DD/How-to-assign-leads-to-IDs.mp4"      "assets/media/docs/How-to-assign-leads-to-IDs.mp4"
dl "$DD/how-to-manage-ranks-and-profit-sharing-percentage.mp4" "assets/media/docs/how-to-manage-ranks-and-profit-sharing-percentage.mp4"
dl "$DD/How-to-handover-and-close-a-project.mp4" "assets/media/docs/How-to-handover-and-close-a-project.mp4"
dl "$DD/How-to-confirm-supplier-invoice.mp4" "assets/media/docs/How-to-confirm-supplier-invoice.mp4"
dl "$DD/How-to-create-payment-vouchers.mp4"  "assets/media/docs/How-to-create-payment-vouchers.mp4"
dl "$DD/How-to-record-AP-and-AR.mp4"         "assets/media/docs/How-to-record-AP-and-AR.mp4"
dl "$DD/image-1024x514.png"                  "assets/media/docs/image-1024x514.png"
dl "$DD/image-1-1024x521.png"                "assets/media/docs/image-1-1024x521.png"
# NOTE: remaining tutorial videos are added here as they are captured into the site.

echo ""
echo "✓ Done. Files are in assets/media/. Now repoint the code — see scripts/ASSETS.md"

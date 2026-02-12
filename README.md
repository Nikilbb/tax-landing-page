# TaxFlow | Growth-Engineered Landing Page

A high-performance landing page for premium tax filing services, built with a focus on **Conversion Rate Optimization (CRO)** and **Advanced Marketing Attribution**.

## 🚀 Live Demo
**URL:** [INSERT YOUR VERCEL LINK HERE]

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Static Typing for Event Schemas)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📊 Growth Architecture & Tracking
This project goes beyond UI, implementing a full-funnel tracking system designed to optimize ad spend.

### 1. Attribution Logic
We use a **Last-Touch Attribution** model.
- **Persistence:** Marketing parameters (`utm_source`, `fbclid`, `gclid`) are extracted via a custom `useTracker` hook and persisted in `localStorage`.
- **Consistency:** This ensures that lead source data remains accurate even if the user refreshes or returns later.

### 2. Event Schema
| Event | Trigger | Strategic Purpose |
| :--- | :--- | :--- |
| `page_view` | Initial Load | Measures traffic and landing page reach. |
| `cta_click` | Button Interaction | Tracks high-intent clicks (WhatsApp/Calls). |
| `form_abandon` | Tab Close/Nav Away | Identifies friction points in the registration funnel. |
| `lead_submit` | Validated Success | Captures PII merged with original attribution IDs. |

### 3. Conversion Feedback Loop
The architecture is designed to support **Offline Conversions**:
1. **Capture:** Frontend captures Lead + Click IDs.
2. **Webhook:** Data is sent to an automation hub (e.g., Make.com).
3. **CAPI:** Qualified signals are pushed back to **Meta/Google Conversion APIs** to train ad platform AI.

## 🏗️ Component Structure
- `app/layout.tsx`: Root wrapper with Hydration error suppression for browser extensions.
- `app/page.tsx`: Main entry point structuring the conversion sections.
- `components/LeadForm.tsx`: Smart form with regex validation and abandonment listeners.
- `hooks/useTracker.ts`: Centralized engine for event dispatching and attribution.

## ⚙️ Installation & Setup
1. Clone the repo: `git clone [YOUR_REPO_URL]`
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
QC Workspace – Functional Prototype (V1)

This repository contains a lightweight functional prototype of the Document Quality Control (QC) Workspace designed for the DeepLogic AI TPM assignment.

The prototype demonstrates the core V1 flows for both Customer Users and Internal Ops, including:

Viewing problematic documents

Editing extracted fields

Retrying processing

Escalating issues to internal teams

Resolving issues

Persona-based RBAC preview

Dynamic dashboard + detail panel

Filters, search, and status updates

This project is intentionally minimal, focusing on workflow, data structure, and clarity, not visual polish.

📦 Features Implemented
🔍 Dashboard (Customer + Internal Ops)

Document list view

Pipeline, error type, status, date received

Search + filter bar

Persona-specific sidebar menu

📄 Detail Panel

Error reason & extracted metadata display

Edit, Retry, Escalate, Resolve actions

Comment section (UI-level)

🔄 Roles / Personas

Switch between:

Customer

Internal Ops

Each role sees:

Different sidebar

Different actions

Different documents (customer-level scoping)

⚙️ State & Logic

In-memory task list (AppContext.jsx)

Status updates reflected on the dashboard

Role-based UI handling

No backend required (mock data used)

📁 Folder Structure
src/
├── components/
│   ├── DemoControls.jsx
│   ├── DetailPanel.jsx
│   ├── Sidebar.jsx
│   ├── StatusPill.jsx
│   ├── TopControls.jsx
│   └── Layout.jsx
│
├── context/
│   └── AppContext.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css

🧪 Demo Data (Seed)

The prototype uses structured seed data representing:

multiple customers

different pipelines

multiple error types

different statuses (New, Needs Review, Escalated, Resolved)

Found in:
src/context/AppContext.jsx

▶️ Running Locally
1. Clone Repo
git clone <your-repo-url>
cd qc-workspace

2. Install Dependencies
npm install

3. Start Dev Server
npm run dev


Navigate to:
👉 http://localhost:5173

💡 Architecture Notes

This is a front-end only prototype meant to simulate:

API responses

Real document lifecycle

RBAC behaviours

UI flows

Backend endpoints (GET / PATCH / POST actions) are mocked via local state and simplified update functions.

# Tolly FormBuilder (Frontend)

A modern **React + Vite + TypeScript** frontend for building customizable forms using rich UI components.

## ⚙️ Tech Stack & Dependencies

* **Framework & Build**

  * React 19 with Vite as build tool (`dev`, `build`, `preview` scripts)
  * TypeScript support

* **UI & Form Tools**

  * 🔹 `@blocknote/react`, `@blocknote/core`, `@blocknote/mantine` — for form editor blocks
  * 🔹 `@radix-ui/react-slot` — flexible component slots
  * 🔹 `lucide-react` — icons
  * 🔹 `clsx`, `class-variance-authority`, `tailwind-merge` — styling helpers
  * 🔹 `tailwindcss` + `@tailwindcss/vite` plugin, optionally with `tw-animate-css` for animations

* **Routing & Linting**

  * React Router (`react-router-dom`)
  * ESLint with React hooks plugin



## 🚀 Getting Started

### Prerequisites

* Node.js (recommended v18+)
* npm or yarn

### Setup & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then visit: `http://localhost:5173` (default Vite address)

### Build for Production

```bash
npm run build
npm run preview
```

## 🔍 Features

* WYSIWYG form builder with drag‑and‑drop / block‑based editing (via `@blocknote`)
* Tailwind‑based utility styling
* Component variants control via `class-variance-authority`
* Icons support with `lucide-react`
* Client-side routing via React Router
* Animations via `tw-animate-css`



## 🧪 Code Quality

* Fully typed with TypeScript
* ESLint configured with React and hook rules
* Pre‑configured for responsive and utility-first CSS via Tailwind

## 📁 Suggested Directory Structure

```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── lib/
│   └── main.tsx
├── index.html
├── tsconfig.json
├── tailwind.config.js
└── package.json
```





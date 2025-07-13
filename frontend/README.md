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

*(Based on `package.json`)* ([raw.githubusercontent.com][1], [github.com][2])

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

## 🔍 Features (example section — adapt as needed)

* WYSIWYG form builder with drag‑and‑drop / block‑based editing (via `@blocknote`)
* Tailwind‑based utility styling
* Component variants control via `class-variance-authority`
* Icons support with `lucide-react`
* Client-side routing via React Router
* Animations via `tw-animate-css`

*(Feel free to update this section with actual implemented features.)*

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
│   ├── styles/
│   └── main.tsx
├── index.html
├── tsconfig.json
├── tailwind.config.js
└── package.json
```

*(Adjust to reflect your actual project structure.)*

## 📦 Frontend‑Backend Integration

Add here how to integrate with your backend:

* If communicating via REST/GraphQL, mention API endpoints or client setup
* If environment variables are needed (e.g. `VITE_API_URL`), describe `.env` file usage
* Any authentication or storage setup, if applicable

## 🛠️ Linting & Formatting

* ESLint (`npm run lint`)
* Optionally add Prettier or other tools as desired

## 🤝 Contribution & License

* **Contributing**: please open issues or submit PRs. *(Provide any branch or workflow specifics)*
* **License**: *(add your license info here)*

---

📝 Let me know if you’d like extra sections—**Demo**, **Testing**, **Deployment details**, or actual “Features implemented”, based on your codebase!

[1]: https://raw.githubusercontent.com/janakshukla/tolly-formbuilder/main/frontend/package.json?utm_source=chatgpt.com "raw.githubusercontent.com"
[2]: https://github.com/KryptXBSA/FormBuilder?utm_source=chatgpt.com "KryptXBSA/FormBuilder: UI based codegen tool to easily ... - GitHub"

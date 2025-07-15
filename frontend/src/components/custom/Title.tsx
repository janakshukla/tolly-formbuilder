import "@blocknote/core/fonts/inter.css";

import "@blocknote/mantine/style.css";

import "@blocknote/core/fonts/inter.css";
export default function Title() {
  return (
    <>
      <input
        className="outline-0 ring-0 font-bold placeholder:opacity-30 text-white ml-18 mb-8 text-2xl sm:text-4xl  "
        placeholder="Form title"
        type="text"
      />
    </>
  );
}

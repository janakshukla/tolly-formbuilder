import "@blocknote/core/fonts/inter.css";
import { en } from "@blocknote/core/locales";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
export default function Title() {
  const locale = en;
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        props: {
          level: 1,
        },
        
      },
    ],
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,

        heading: "Title",
      },
    },
  });
  return (
    <>

      <input className="outline-0 ring-0 font-bold placeholder:opacity-30 text-white ml-18 mb-8 text-2xl sm:text-4xl  " placeholder="Form title" type="text" />
    </>
  );
}

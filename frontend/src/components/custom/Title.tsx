import "@blocknote/core/fonts/inter.css";
import { en } from "@blocknote/core/locales";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
export default function Title() {
  const locale = en;
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
      },
    ],
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,

        heading: "Enter a title",
      },
    },
  });
  return (
    <>
      <BlockNoteView
        className="mb-4"
        formattingToolbar={false}
        linkToolbar={false}
        filePanel={false}
        sideMenu={false}
        slashMenu={false}
        tableHandles={false}
        editor={editor}
      />
    </>
  );
}

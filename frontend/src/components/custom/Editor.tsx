import {
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";

import { BlockNoteEditor, filterSuggestionItems } from "@blocknote/core";
import { formSchema } from "@/lib/formSchema";
import { BlockNoteView } from "@blocknote/mantine";
import { inputItem, labelitem } from "./All_Items";

export default function FormEditor() {
  const editor = useCreateBlockNote({ schema: formSchema });

  const getItems = (ed: BlockNoteEditor) => [
    ...getDefaultReactSlashMenuItems(ed),
    inputItem(ed),
    labelitem(ed),
  ];

  return (
    <BlockNoteView editor={editor} slashMenu={false}>
      <SuggestionMenuController
        triggerCharacter="/"
        getItems={async (query) =>
          //@ts-expect-error
          filterSuggestionItems(getItems(editor), query)
        }
      />
    </BlockNoteView>
  );
}

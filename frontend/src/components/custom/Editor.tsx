import {
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";

import { BlockNoteEditor, filterSuggestionItems } from "@blocknote/core";
import { formSchema } from "@/lib/formSchema";
import { BlockNoteView } from "@blocknote/mantine";
import { inputItem, labelitem, textareaItem } from "./All_Items";

export default function FormEditor() {
  const editor = useCreateBlockNote({ schema: formSchema });

  const getItems = (ed: BlockNoteEditor) => [
    ...getDefaultReactSlashMenuItems(ed),
    inputItem(ed),
    labelitem(ed),
    textareaItem(ed),
  ];

  return ( 
    <BlockNoteView className="md:ml-4  " editor={editor} slashMenu={false}>
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

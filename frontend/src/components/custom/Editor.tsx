//@ts-nocheck
import {
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
 
} from "@blocknote/react";
import type {DefaultReactSuggestionItem} from "@blocknote/react"
import {
  BlockNoteEditor,
  filterSuggestionItems,
  insertOrUpdateBlock
} from "@blocknote/core";
import { HiOutlineCursorClick } from "react-icons/hi";
import { formSchema } from "@/lib/formSchema";
import { BlockNoteView } from "@blocknote/mantine";
import { MessageCircleQuestion } from "lucide-react";

const inputItem = (editor: BlockNoteEditor): DefaultReactSuggestionItem => ({
  title: "Input",
  group: "Form fields",
  aliases: ["input", "text", "field"],
  icon: <HiOutlineCursorClick size={18} />,
  onItemClick: () =>
    insertOrUpdateBlock(editor, {
      type: "textInput",
      props: { placeholder: "Type placeholder" }
    },
  ),
  subtext: "this can be used to create short answers question."
}

);
const labelitem = (editor: BlockNoteEditor): DefaultReactSuggestionItem => ({
  title: "Label",
  group: "Form fields",
  aliases: ["question", "label", "text"],
  icon: <MessageCircleQuestion size={18} />,
  onItemClick: () =>
    insertOrUpdateBlock(editor, {
      type: "Label",
      props: { placeholder: "Enter your question" }
    },
  ),
  subtext: "This can be used to ask question"
})

export default function FormEditor() {
  const editor = useCreateBlockNote({ schema: formSchema });

  const getItems = (ed: BlockNoteEditor) => [
    ...getDefaultReactSlashMenuItems(ed),
    inputItem(ed),
    labelitem(ed)
  ];

  return (
    <BlockNoteView editor={editor} slashMenu={false}>
      <SuggestionMenuController
        triggerCharacter="/"
        getItems={async (query) =>
          filterSuggestionItems(getItems(editor), query)
        }
      />
    </BlockNoteView>
  );
}


//@ts-nocheck
import { insertOrUpdateBlock, type BlockNoteEditor } from "@blocknote/core";
import type { DefaultReactSuggestionItem } from "@blocknote/react";
import { MessageCircleQuestion,NotepadTextDashedIcon } from "lucide-react";
import { HiOutlineCursorClick } from "react-icons/hi";

export const inputItem = (editor: BlockNoteEditor): DefaultReactSuggestionItem => ({
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
export const labelitem = (editor: BlockNoteEditor): DefaultReactSuggestionItem => ({
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

export const textareaItem = (editor: BlockNoteEditor): DefaultReactSuggestionItem => ({
  title: "Text Area",
  group: "Form fields",
  aliases: ["textarea", "text", "field"],
  icon: <NotepadTextDashedIcon size={18} />,
  onItemClick: () =>
    insertOrUpdateBlock(editor, {
      type: "textArea",
      props: { placeholder: "Type placeholder" }
    },
  ),
  subtext: "this can be used to create long answers question."
});
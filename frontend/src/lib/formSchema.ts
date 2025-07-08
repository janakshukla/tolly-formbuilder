import { LabelBlock } from './../components/blocks/LabelBlock';
// lib/formSchema.ts
import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import { TextInputBlock } from "@/components/blocks/TextInputBlock";
import { TextAreaBlock } from '@/components/blocks/TextAreablock';

export const formSchema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs, // keep paragraphs, headings, etc.
    textInput: TextInputBlock,
    Label:LabelBlock,
    textArea:TextAreaBlock,
  }
});

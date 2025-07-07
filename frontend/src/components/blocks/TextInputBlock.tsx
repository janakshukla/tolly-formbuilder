// components/blocks/TextInputBlock.tsx
import { createReactBlockSpec} from "@blocknote/react";

export const TextInputBlock = createReactBlockSpec(
  /* ---------- schema ---------- */
  {
    type: "textInput",
    content: "none",               // <input> itself is not rich‑text
    propSchema: {
      name: { default: "field1" }, // you can store any extra metadata
      placeholder: { default: "Your answer" },
      required: { default: false }
    }
  },
  /* ---------- renderer ---------- */
  {
    render: ({ block, editor }) => (
      <input
        className="w-1/4 rounded border px-3 py-2 text-sm focus:outline-none"
        placeholder={block.props.placeholder}
        required={block.props.required}
        onChange={(e) =>
          // Persist the user‑supplied default value directly in the doc:
          editor.updateBlock(block, {
            props: { ...block.props, default: e.target.value }
          })
        }
      />
    )
  }
);

// components/blocks/LabelBlock.tsx
import { createReactBlockSpec} from "@blocknote/react";

export const LabelBlock = createReactBlockSpec(
  /* ---------- schema ---------- */
  {
    type: "Label",
    content: "none",               // <input> itself is not rich‑text
    propSchema: {
      name: { default: "field2" }, // you can store any extra metadata
      placeholder: { default: "Your question" },
      required: { default: false }
    }
  },
  /* ---------- renderer ---------- */
  {
    render: ({ block, editor }) => (
      <input
        className="w-full outline-none ring-0 px-3 py-2 text-2xl font-medium focus:outline-none"
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

// components/blocks/LabelBlock.tsx
import { createReactBlockSpec } from "@blocknote/react";
interface TextInputProps {
  name: string;
  placeholder: string;
  required: boolean;
  label: string;
  default?: string;
}

export const LabelBlock = createReactBlockSpec(
  /* ---------- schema ---------- */
  {
    type: "Label",
    content: "none", // <input> itself is not rich‑text
    propSchema: {
      name: { default: "field2" }, // you can store any extra metadata
      placeholder: { default: "Your question" },
      required: { default: false },
      label: { default: "Text Input" },
      default: { default: "" }
    }as const,
  },
  /* ---------- renderer ---------- */
  {
    render: ({ block, editor }) => {
        const props = block.props as TextInputProps;
      
        return (
         
            <input
              className="w-full outline-none ring-0 px-3 py-2 text-2xl font-medium focus:outline-none"
              placeholder={props.placeholder}
              required={props.required}
              value={props.default || ""}
              onChange={(e) =>
                editor.updateBlock(block, {
                  props: { ...props, default: e.target.value }
                })
              }
            />
      );
    },
  }
);

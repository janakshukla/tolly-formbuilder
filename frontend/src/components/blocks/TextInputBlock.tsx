import { createReactBlockSpec } from "@blocknote/react";
import { Input } from "../ui/input";

// Define the props interface
interface TextInputProps {
  name: string;
  placeholder: string;
  required: boolean;
  label: string;
  default?: string;
}

export const TextInputBlock = createReactBlockSpec(
  {
    type: "textInput",
    content: "none",
    propSchema: {
      name: { default: "field1" },
      placeholder: { default: "Your answer" },
      required: { default: false },
      label: { default: "Text Input" },
      default: { default: "" }
    } as const
  },
  {
    render: ({ block, editor }) => {
      const props = block.props as TextInputProps;
      
      return (
       
          <Input
            className=" rounded border  text-sm focus:outline-none"
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
    }
  }
)
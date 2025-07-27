import { createReactBlockSpec } from "@blocknote/react";
import { Textarea } from "../ui/textarea";

interface TextAreaProps {
    name: string;
    placeholder: string;
    required: boolean;
    label: string;
    default?: string;
    }

    export const TextAreaBlock = createReactBlockSpec(
        {
        type: "textArea",
        content: "none",
        propSchema: {
            name: { default: "field1" },
            placeholder: { default: "Your answer" },
            required: { default: false },
            label: { default: "Text Area" },
            default: { default: "" }
        } as const 
    },
    {
        render: ({ block, editor }) => {
            const props = block.props as TextAreaProps;

            return (
                <Textarea
                    className="w-full rounded border px-3 py-2 text-sm focus:outline-none"
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
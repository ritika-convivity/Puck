import { ComponentConfig } from "@measured/puck";
import { JSX } from "react";

export type HeadingProps = {
    text: string;
    size: '20px' | '24px' | '30px' | '36px' | '48px' | '60px';
    level: '1' | '2' | '3' | '4' | '5' | '6';
    align: 'left' | 'center' | 'right';
}

export const HeadingBlock: ComponentConfig<HeadingProps> = {
    fields: {
        text: { type: 'textarea' },
        level: {
            type: 'select', options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
            ]
        },
        size: {
            type: 'select', options: [
                { value: "60px", label: "3XL" },
                { value: "48px", label: "2XL" },
                { value: "36px", label: "XL" },
                { value: "30px", label: "L" },
                { value: "24px", label: "M" },
                { value: "20px", label: "S" },
            ]
        },
        align: {
            type: "radio",
            options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
            ],
        },
    },
    defaultProps: {
        text: 'heading',
        level: '1',
        size: '20px',
        align: 'left'
    },
    render: ({ text, size, level, align }) => {
        const Tag = `h${level}` as keyof JSX.IntrinsicElements;
        return (
            <section className="p-4">
                <Tag style={{ fontSize: `${size}`, textAlign: `${align}` }}>
                    {text}
                </Tag>
            </section>

        );
    }
}

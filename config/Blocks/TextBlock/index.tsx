import { ComponentConfig } from "@measured/puck";

export type TextProps = {
    text: string;
    size: '14px' | '16px' | '18px';
    align: 'left' | 'center' | 'right';
    color: 'default' | 'muted'
}

export const TextBlock: ComponentConfig<TextProps> = {
    fields: {
        text: { type: 'textarea' },
        size: {
            type: 'select', options: [
                { value: "18px", label: "L" },
                { value: "16px", label: "M" },
                { value: "14px", label: "S" },
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
        color: {
            type: 'radio',
            options: [{ label: 'Deafult', value: 'default' },
            { label: 'Muted', value: 'muted' }
            ]
        }
    },
    defaultProps: {
        text: 'paragraph',
        size: '14px',
        align: 'left',
        color: 'default'
    },
    render: ({ text, size, align, color }) => {
        const textColor = color === 'default' ? '#000' : '#808080';
        return (
            <section className="p-4">
                <p style={{ fontSize: `${size}`, textAlign: `${align}`, color: `${textColor}` }}>
                    {text}
                </p>
            </section>

        );
    }
}

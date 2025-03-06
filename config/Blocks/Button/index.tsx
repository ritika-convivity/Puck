import { ComponentConfig } from "@measured/puck";

export type ButtonProps = {
    label: string,
    variant: 'primary' | 'secondary'
}

export const Button: ComponentConfig<ButtonProps> = {
    fields: {
        label: { type: 'text' },
        variant: {
            type: 'radio',
            options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' }
            ]
        }
    },
    defaultProps: {
        label: 'button',
        variant: 'primary'
    },
    render: ({ label, variant }) => (
        <button style={{
            backgroundColor: variant === "primary" ? "blue" : "gray",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        }}>{label}</button>
    )
}
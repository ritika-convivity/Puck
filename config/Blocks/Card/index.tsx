import { ComponentConfig, FieldLabel } from "@measured/puck";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

export type CardProps = {
    icon: string;
    padding: string;
    iconSize: number;
    title: string;
    description: string;
    backgroundColor: string;
}

const icons = Object.keys(dynamicIconImports).reduce<
    // Record<string, ReactElement>
    Record<string, (props: any) => ReactElement>
>((acc, iconName) => {
    const El = dynamic((dynamicIconImports as any)[iconName]);

    return {
        ...acc,
        // [iconName]: <El />,
        [iconName]: (props) => <El {...props} />,
    };
}, {});

const iconOptions = Object.keys(dynamicIconImports).map((iconName) => ({
    label: iconName,
    value: iconName,
}));

export const Card: ComponentConfig<CardProps> = {
    fields: {
        icon: {
            type: 'select',
            options: iconOptions
        },
        padding: { type: 'text' },
        iconSize: { type: 'number' },
        title: { type: 'text' },
        description: { type: 'textarea' },
        backgroundColor: {
            type: "custom",
            label: "Background Color",
            render: ({ field, value, onChange }) => (
                <FieldLabel label={field?.label}>
                    <input
                        type="color"
                        value={value || "#ffffff"}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full cursor-pointer"
                    />
                </FieldLabel>
            ),
        },
    },
    defaultProps: {
        icon: 'badge-check',
        padding: '12px',
        iconSize: 24,
        title: 'Card title',
        description: 'Card description',
        backgroundColor: '#ffffff',
    },
    render: ({ title, description, icon, backgroundColor, iconSize, padding }) => (
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full text-center" style={{ backgroundColor: backgroundColor, padding: padding }}>
            <div className="flex items-center justify-center h-full w-full">
                {/* {icon && icons[icon]} */}
                {icon && icons[icon] ? icons[icon]({ size: iconSize }) : null}
            </div>
            <div className="flex flex-col gap-3 items-center">
                <h6 className="text-xl font-bold">{title}</h6>
                <p className="text-lg font-normal text-gray-600">{description}</p>
            </div>
        </div>
    )
}
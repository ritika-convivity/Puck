import { ComponentConfig } from "@measured/puck";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

export type CardProps = {
    icon?: string
    title: string;
    description: string;
}

const icons = Object.keys(dynamicIconImports).reduce<
    Record<string, ReactElement>
>((acc, iconName) => {
    const El = dynamic((dynamicIconImports as any)[iconName]);

    return {
        ...acc,
        [iconName]: <El />,
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
        title: { type: 'text' },
        description: { type: 'textarea' }
    },
    defaultProps: {
        icon: 'Feather',
        title: 'title',
        description: 'Card description'
    },
    render: ({ title, description, icon }) => (
        <div>
            <div>{icon && icons[icon]}</div>
            <div>
                <h6 className="text-xl">{title}</h6>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    )
}
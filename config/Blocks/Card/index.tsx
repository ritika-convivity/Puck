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
        icon: 'badge-check',
        title: 'Card title',
        description: 'Card description'
    },
    render: ({ title, description, icon }) => (
        <div className="flex flex-col gap-4 p-4 justify-center items-center h-full text-center">
            <div>{icon && icons[icon]}</div>
            <div className="flex flex-col gap-2 items-center">
                <h6 className="text-xl font-bold">{title}</h6>
                <p className="text-lg font-normal text-gray-600">{description}</p>
            </div>
        </div>
    )
}
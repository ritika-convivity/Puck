import { Button, ComponentConfig } from "@measured/puck";

export type HeroProps = {
    title: string,
    description: string,
    image?: {
        mode?: "inline" | "background";
        url?: string;
        alt?: string;
    };
    buttons: {
        label: string;
        href: string;
        variant?: "primary" | "secondary";
    }[];
    padding: string;
};

export const Hero: ComponentConfig<HeroProps> = {
    fields: {
        title: { type: 'text' },
        description: { type: 'textarea' },
        padding: { type: 'text' },
        image: {
            label: "Image",
            type: "object",
            objectFields: {
                url: { type: "text" },
                alt: { type: "text" },
                mode: {
                    type: 'radio',
                    options: [{ label: 'Inline', value: 'inline' },
                    { label: 'Background', value: 'background' }
                    ]
                }
            },
        },
        buttons: {
            type: "array",
            min: 1,
            max: 2,
            getItemSummary: (item) => item.label || "Button",
            arrayFields: {
                label: { type: "text" },
                href: { type: "text" },
                variant: {
                    type: "select",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                    ],
                },
            },
            defaultItemProps: {
                label: "Button",
                href: "#",
            },
        },
    },
    defaultProps: {
        title: 'Hero',
        description: 'Hero Description',
        buttons: [{ label: 'Learn More', href: '#' }],
        padding: '20px'
    },
    render: ({ title, description, image, buttons, padding }) => (
        <section style={{
            padding: `${padding}`,
            backgroundImage: image?.mode === "background" ? `url(${image?.url})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: '300px'
        }} className="content">
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-lg text-gray-600">{description}</p>
            </div>
            {image?.url && <img src={image?.url} alt={image?.alt} style={{ height: '' }} />}
            <nav className="flex gap-3 mt-4">
                {buttons?.map((button, i) => (
                    <Button key={i} href={button?.href || '#'} variant={button?.variant}>
                        {button?.label}
                    </Button>
                ))}
            </nav>
        </section>
    ),
};


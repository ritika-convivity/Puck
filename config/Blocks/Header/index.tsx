import { Button, ComponentConfig } from "@measured/puck";

export type HeaderProps = {
    image?: {
        url?: string;
        alt?: string;
    };
    buttons: {
        label: string;
        href: string;
        variant?: "primary" | "secondary";
    }[];
};

export const Header: ComponentConfig<HeaderProps> = {
    fields: {
        image: {
            label: "Image",
            type: "object",
            objectFields: {
                url: { type: "text" },
                alt: { type: "text" },
            },
        },
        buttons: {
            type: "array",
            min: 1,
            max: 4,
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
    render: ({ image, buttons }) => (
        <header style={{
            display: "flex",
            height: "80px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            background: "#f8f9fa",
        }}>
            {image?.url && <img src={image?.url} alt={image?.alt} style={{ height: "50px", objectFit: "contain" }} />}
            <nav className="flex gap-3">
                {buttons?.map((button, i) => (
                    <Button key={i} href={button?.href || '#'} variant={button?.variant}>
                        {button?.label}
                    </Button>
                ))}
            </nav>
        </header>
    ),
};


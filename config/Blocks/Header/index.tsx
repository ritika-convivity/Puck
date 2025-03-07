import { Button, ComponentConfig } from "@measured/puck";

export type HeaderProps = {
    image?: {
        url?: string;
        alt?: string;
    };
    navItems: {
        label: string;
        href: string;
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
        navItems: {
            type: "array",
            min: 1,
            max: 4,
            getItemSummary: (item) => item.label || "Button",
            arrayFields: {
                label: { type: "text" },
                href: { type: "text" },
            },
            defaultItemProps: {
                label: "Button",
                href: "#",
            },
        },
    },
    defaultProps: {
        image: {
            url: 'https://via.placeholder.com/300',
            alt: 'Default image'
        },
        navItems: [{ label: 'Learn More', href: '#' }],
    },
    render: ({ image, navItems }) => (
        <header style={{
            display: "flex",
            height: "80px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 20px",
            background: "#f8f9fa",
        }}>
            {image?.url && <img src={image?.url} alt={image?.alt} style={{ height: "100%", objectFit: "contain" }} />}
            <nav className="flex gap-3">
                {navItems?.map((item, i) => (
                    <a type="button" key={i} href={item?.href || '#'} className="text-[#292929] font-semibold hover:text-[#0158ad]">
                        {item?.label}
                    </a>
                ))}
            </nav>
        </header>
    ),
};


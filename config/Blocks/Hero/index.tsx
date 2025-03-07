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
        image: { url: 'https://via.placeholder.com/300', alt: 'Default image', mode: 'inline' },
        description: 'Hero Description',
        buttons: [{ label: 'Learn More', href: '#' }],
        padding: '20px'
    },
    render: ({ title, description, image, buttons, padding }) => (
        <section style={{
            padding: `${padding} 30px`,
            backgroundImage: image?.mode === "background" ? `url(${image?.url})` : "none",
            backgroundSize: "contain",
            backgroundPosition: 'center'
        }} className="content relative flex justify-between w-full h-full" >
            {image?.mode === "background" ?
                <div className="bg-gradient"
                    style={{
                        zIndex: 0,
                        background: 'linear-gradient(to left, hsla(0,0%,100%,0), #f7faff 100%)',
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0
                    }}></div> : ''}
            <div className="flex flex-col justify-center gap-4 z-1 relative">
                <div className="max-w-xl flex flex-col gap-3">
                    <h1 className="text-6xl font-bold">{title}</h1>
                    <p className="text-lg text-gray-600">{description}</p>
                </div>
                <div className="flex gap-3 mt-4">
                    {buttons?.map((button, i) => (
                        <a key={i} href={button?.href || '#'} className={`py-2.5 px-5 border cursor-pointer text-center rounded text-base font-semibold ${button?.variant === 'secondary' ? 'bg-[#fff] border-[#000] text-[#000]' : 'bg-[#0158ad] text-[#fff] border-[#0158ad]'}`}>
                            {button?.label}
                        </a>
                    ))}
                </div>
            </div>
            <img src={image?.url} alt={image?.alt} style={{ height: '365px', borderRadius: '16px' }} />
        </section >
    ),
};


import { ComponentConfig, DropZone } from "@measured/puck";

export type FlexProps = {
    justifyContent: "start" | "center" | "end";
    direction: "row" | "column";
    gap: number;
    wrap: "wrap" | "nowrap";
    alignItems: "start" | "center" | "end";
}

export const Flex: ComponentConfig<FlexProps> = {
    fields: {
        direction: {
            label: 'Direction', type: 'radio', options: [
                { label: 'Row', value: 'row' },
                { label: 'Colums', value: 'column' }
            ]
        },
        gap: {
            type: 'number'
        },
        wrap: {
            type: 'radio', options: [{ label: 'true', value: 'wrap' },
            { label: 'false', value: 'nowrap' }
            ]
        },
        justifyContent: {
            type: 'radio', options: [{ label: 'Start', value: 'start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'end' }]
        },
        alignItems: {
            type: 'radio', options: [{ label: 'Start', value: 'start' }, { label: 'Center', value: 'center' }, { label: 'End', value: 'end' }]
        },
    },
    defaultProps: {
        direction: 'row',
        gap: 12,
        wrap: 'nowrap',
        justifyContent: 'start',
        alignItems: 'start'
    },
    render: ({ direction, gap, wrap, justifyContent, alignItems }) => {
        console.log(wrap, 'wrapwrap')
        return (
            <section style={{ padding: '6px' }}>
                <DropZone zone="Flex" style={{
                    display: 'flex', flexDirection: direction, gap: `${gap}px`,
                    justifyContent: justifyContent, flexWrap: `${wrap}`, alignItems: alignItems
                }} />
            </section>
        )
    }
}

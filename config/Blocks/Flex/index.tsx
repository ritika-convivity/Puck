import { ComponentConfig, DropZone } from "@measured/puck";

export type FlexProps = {
    direction: 'row' | 'column',
    gap: number
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
        }
    },
    defaultProps: {
        direction: 'row',
        gap: 0
    },
    render: ({ direction, gap }) => (
        <section style={{ padding: '6px' }}>
            <DropZone zone="Flex" style={{ display: 'flex', flexDirection: `${direction}`, gap: `${gap}px` }} />
        </section>
    )
}

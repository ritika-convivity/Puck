import { ComponentConfig, DropZone } from "@measured/puck";

export type GridProps = {
    column: number,
    gap: number
}

export const Grid: ComponentConfig<GridProps> = {
    fields: {
        column: {
            label: 'Number of Columns',
            type: 'number'
        },
        gap: {
            type: 'number'
        }
    },
    defaultProps: {
        column: 0,
        gap: 0
    },
    render: ({ column, gap }) => (
        <section style={{ padding: '6px' }}>
            <DropZone zone="Zone-1" style={{ display: 'grid', gap: `${gap}px`, gridTemplateColumns: `repeat(${column}, 1fr)` }} />
        </section>
    )
}

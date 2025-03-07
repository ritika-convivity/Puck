import { ComponentConfig, DropZone } from "@measured/puck";

export type GridProps = {
    column: number,
    gap: number,
    row: number
}

export const Grid: ComponentConfig<GridProps> = {
    fields: {
        column: {
            label: 'Number of Columns',
            type: 'number'
        },
        gap: {
            type: 'number'
        },
        row: {
            label: 'Number of Rows',
            type: 'number'
        },
    },
    defaultProps: {
        column: 2,
        gap: 12,
        row: 2
    },
    render: ({ column, gap, row }) => (
        <section style={{ padding: '6px' }}>
            <DropZone zone="Grid" style={{ display: 'grid', gap: `${gap}px`, gridTemplateColumns: `repeat(${column}, 1fr)`, gridTemplateRows: `repeat(${row}, 1fr)`, }} />
        </section>
    )
}

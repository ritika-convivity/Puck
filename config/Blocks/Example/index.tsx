import { DropZone } from "@measured/puck";

export const Example = {
    render: () => (
        <DropZone
            zone="my-zone"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(4, 1fr)",
                gap: 16,
            }}
        />
    ),

    // Card: {
    //     inline: true,
    //     render: ({ text, spanCol, spanRow, puck }) => (
    //         <div
    //             ref={puck.dragRef}
    //             style={{
    //                 gridColumn: `span ${spanCol}`,
    //                 gridRow: `span ${spanRow}`,
    //                 padding: "8px",
    //                 border: "1px solid #ccc",
    //                 borderRadius: "4px",
    //                 backgroundColor: "#f9f9f9",
    //                 textAlign: "center",
    //             }}
    //         >
    //             {text}
    //         </div>
    //     ),

    //     fields: {
    //         text: {
    //             type: "text",
    //             label: "Card Text"
    //         },
    //         spanCol: {
    //             type: "number",
    //             label: "Span Columns",
    //             min: 1,
    //             max: 4
    //         },
    //         spanRow: {
    //             type: "number",
    //             label: "Span Rows",
    //             min: 1,
    //             max: 4
    //         }
    //     },

    //     defaultProps: {
    //         text: "Default Card",
    //         spanCol: 1,
    //         spanRow: 1
    //     }
    // }
};
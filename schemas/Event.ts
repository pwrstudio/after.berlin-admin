export default {
    title: "Event",
    name: "event",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string"
        },
        {
            title: "Date & time",
            name: "dateTime",
            type: "datetime"
        },
        {
            title: "Description",
            name: "about",
            type: "contentEditor"
        },
    ],
}
export default {
    title: "Event List",
    name: "eventList",
    type: "document",
    fields: [
        {
            title: "Title",
            description: "NOTE! This page will be automatically populated with past events.",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        }
    ],
}
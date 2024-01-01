// ICONS
import {
    MdMusicNote,
} from "react-icons/md"

export default {
    title: "Music",
    icon: MdMusicNote,
    name: "music",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Link",
            name: "link",
            type: "url",
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Interpreter",
            name: "interpreter",
            type: "string",
        },
        {
            title: "Composer/Interpreter",
            name: "composer",
            type: "string",
        },
        {
            title: "Label",
            name: "label",
            type: "string",
        },
        {
            title: "Catalogue number",
            name: "catalogueNumber",
            type: "string",
        },
        {
            title: "Additional notes",
            name: "additionalNotes",
            type: "text",
        },
        {
            title: "Date",
            name: "date",
            type: "date",
        },
        {
            title: "Description",
            name: "about",
            type: "contentEditor"
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ],
}
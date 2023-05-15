// ICONS
import {
    MdHome,
    MdEvent,
    MdList,
    MdEditDocument
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("after.berlin")
        .items([
            S.listItem()
                .title("Frontpage")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id("frontpage")
                        .title("Frontpage")
                        .schemaType("frontpage")
                        .documentId("frontpage")
                ),
            S.listItem()
                .title("Pages")
                .icon(MdEditDocument)
                .child(
                    S.documentList()
                        .title('Pages')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "page" })
                ),
            S.listItem()
                .title('Events')
                .icon(MdEvent)
                .child(
                    S.documentList()
                        .title('Events')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "event" })
                ),
            S.listItem()
                .title("Event list")
                .icon(MdList)
                .child(
                    S.editor()
                        .id("event-list")
                        .title("Event list")
                        .schemaType("eventList")
                        .documentId("eventList")
                ),
        ])

// ICONS
import {
    MdImage,
    MdHome,
    MdMail,
    MdEvent,
    MdNewspaper,
    MdQuestionAnswer,
    MdFileCopy,
    MdTag,
    MdTextFields
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("after.berlin")
        .items([
            S.listItem()
                .title("About")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id("about")
                        .title("about")
                        .schemaType("about")
                        .documentId("about")
                ),
            S.listItem()
                .title("Byline")
                .icon(MdTextFields)
                .child(
                    S.editor()
                        .id("Byline")
                        .title("byline")
                        .schemaType("byline")
                        .documentId("byline")
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
                )
        ])

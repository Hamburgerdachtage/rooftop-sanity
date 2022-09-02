import {ClockIcon} from "@sanity/icons"

export  default {
    name: 'eventTime',
    title: 'Event Time',
    type: 'document',
    icon: ClockIcon,
    fields: [
        {
            name: 'eventTime',
            title: 'Start date & Time',
            type: 'datetime',
        },
    ],
    preview: {
        select: {title: 'eventTime'},
        prepare(selection) {
            const date = new Date(selection.title).toLocaleDateString()
            const time = new Date(selection.title).toLocaleTimeString()
            return {
                title: `${date} ${time}`
            }
        }
      },
}
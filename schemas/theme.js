import {TagIcon} from "@sanity/icons"

export  default {
    name: 'theme',
    title: 'Theme',
    type: 'document',
    icon: TagIcon,
    fields: [
        {
            name: 'theme',
            title: 'Theme',
            type: 'string',
        },
    ],
    preview: {
        select: {title: 'theme'},
      },
}
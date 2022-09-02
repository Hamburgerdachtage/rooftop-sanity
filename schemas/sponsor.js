import {ImageIcon} from "@sanity/icons"

export  default {
    name: 'sponsor',
    title: 'Sponsor',
    type: 'document',
    icon: ImageIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'link',
            title: 'link',
            type: 'url',
            description:  'link to sponsors website'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
    ],
    preview: {
        select: {title: 'name', media: 'image'},
      },
}
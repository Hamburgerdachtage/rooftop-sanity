import {ImageIcon} from "@sanity/icons"
import { Rule } from "@sanity/base"
import plz from "../static/plz.json"

const hamburg = plz.map(item => {
    const keys = Object.keys(item)
})

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
            name: 'streetAddress',
            title: 'Street Address',
            type: 'string',
        },
        {
            name: 'postCode',
            title: 'Plz',
            type: 'number',
            validation: Rule().integer().positive().custom()
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
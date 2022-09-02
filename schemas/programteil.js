import {RocketIcon} from "@sanity/icons"

export  default {
    name: 'programteil',
    title: 'Programteil',
    type: 'document',
    icon: RocketIcon,
    fields: [
        {
            name: 'preTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        },
        {
            name: 'hashLink',
            title: 'Hash Link',
            type: 'string',
            initialValue: '#',
            validation: Rule => Rule.max(60).warning(`A hash-link shouldn't be more than 60 characters.`).regex(/^\S*$/, {
                name: 'Hash-Link'
            }).warning('Spaces not allowed').regex(/^#/).warning('Missing #')
        },
        {
            name: 'standort',
            title: 'Standort',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [
                {
                    type: 'reference',
                to: [{type:'event'}]
            }]
        }
    ],
    preview: {
        select: {title: 'name'},
        
    },
}
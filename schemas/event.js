import {CalendarIcon} from "@sanity/icons"

export  default {
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: CalendarIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'times',
            title: 'Event Times',
            type: 'array',
            of: [{type: 'eventTime'}],
        },
        {
            name: 'reservationLink',
            title: 'Reservation Link',
            type: 'reference',
            to: [{type: 'link'}],
        },
        {
            name: 'length',
            title: 'Dauer',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Standorte',
            type: 'string',
        },
        {
            name: 'locationLink',
            title: 'Location Link',
            type: 'reference',
            to: [{type: 'link'}]
        },
        {
            name: 'startPoint',
            title: 'Startpunkt',
            type: 'string',
        },
        {
            name: 'themes',
            title: 'Dach Themen',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'theme'}]
                
                }
                ],
        },
        {
            name: 'tips',
            title: 'Wissenswertes',
            type: 'string',
        },
        {
            name: 'costs',
            title: 'Kosten',
            type: 'string',
        },
        
    ],
    preview: {
        select: {title: 'name', media: 'image'},
    },
}
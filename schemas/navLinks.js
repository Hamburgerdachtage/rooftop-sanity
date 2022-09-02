import {MenuIcon} from "@sanity/icons"

export  default {
    name: 'navLinks',
    title: 'Navigation Links',
    type: 'document',
    icon: MenuIcon,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        options: {
          list: [
            'Menu Navigation',
            'Footer Navigation'
          ]
        },
        required: true
      },
      {
        name: 'pageLinks',
        title: 'Page Navigation Links',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [{type: 'pageLink'}]
            
            }
        ]
      },
      {
        name: 'navLinks',
        title: 'External Navigation Links',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [{type: 'link'}]
            
            }
        ]
      },
     
    ],
    preview: {
      select: {title: 'title', media: 'icon'},
  },
}

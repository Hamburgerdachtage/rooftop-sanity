import {BlockElementIcon} from '@sanity/icons'

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    {
      name: 'page',
      title:'Which Page? (Main is required for the main page)',
      type: 'string',
      options: {
        list: [
          'main',
          'faq'
        ]
      }
    },
    {
        name: 'headline',
        title: 'Headline',
        type: 'string',
        description: 'Please limit to 100 characters',
        options: {
            maxLength: 100,
        }
    },
    {
        name: 'subline',
        title: 'Subline',
        type: 'blockContent',       
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
    select: {title: 'page', media: 'image'},
  },
}

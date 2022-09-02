import {LinkIcon} from '@sanity/icons'

export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'text',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'URL',
      type: 'url',
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
    select: {title: 'text', media: 'image'},
  },
}

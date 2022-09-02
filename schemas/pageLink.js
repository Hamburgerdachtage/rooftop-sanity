import {LinkIcon} from '@sanity/icons'

export default {
  name: 'pageLink',
  title: 'Page Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name:'isInNav',
      title: 'Show in Navigation Menu',
      type: 'boolean'
    },
  ],
  preview: {
    select: {title: 'title', media: 'icon'},
  },
}

import {ComposeIcon} from '@sanity/icons'

export default {
  name: 'article',
  title: 'Pages',
  type: 'document',
  icon: ComposeIcon,
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
      name: 'pageLink',
      title: 'Page Title & Link',
      type: 'reference',
      to: [{type: 'pageLink'}],
    },

    {
      name: 'summary',
      title: 'Summary',
      type: 'blockContent',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    
  ],
  preview: {
    select: {title: 'pageLink.title', media: 'icon'},
  },
}

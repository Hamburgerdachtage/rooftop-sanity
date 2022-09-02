import {UlistIcon} from '@sanity/icons'

export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: UlistIcon,
  fields: [
    {
      name: 'headline',
      title: 'FAQ Headline',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'text',
      title: 'FAQ Text',
      type: 'blockContent',
    },
    {
      name: 'questions',
      title: 'Questions & Answers',
      type: 'array',
      of: [{type: 'reference',
            to: [{type: 'questionAnswer'}]
      }]
    },
  ],
  preview: {
    select: {title: 'headline', media: 'icon'},
  },
}

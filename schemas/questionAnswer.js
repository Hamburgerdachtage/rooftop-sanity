import {InfoOutlineIcon} from '@sanity/icons'

export default {
  name: 'questionAnswer',
  title: 'Question and Answer',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
     
    },
  ],
  preview: {
    select: {title: 'question', media: 'icon'},
  },
}

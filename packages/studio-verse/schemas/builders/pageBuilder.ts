import {defineField, defineType} from 'sanity'
import {Builder} from '@multiverse/shared-verse'

export const pageType = defineType({
  name: Builder.PAGE_BUILDER.name,
  type: 'document',
  title: Builder.PAGE_BUILDER.title,
  fields: [defineField({name: 'title', type: 'string'})],
  preview: {
    select: {
      title: 'title',
      urlSlug: 'urlSlug.current',
    },
    prepare(selection) {
      const {title, urlSlug} = selection
      return {
        title: title,
        subtitle: urlSlug,
      }
    },
  },
})

export default pageType

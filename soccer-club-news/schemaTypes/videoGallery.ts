import { defineField, defineType } from "sanity";

export default defineType({
  name: 'videogallery',
  title: 'Video Gallery',
  type: 'document',
  fields: [
    defineField({
      name:'title',
      title:'Title',
      type:'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:'video',
      title:'Videos',
      type:'array',
      of:[{
        type:'object',
        fields: [
          {
            name:'file',
            title:'Upload Video',
            type:'file',
            options:{ accept:'video/*' }
          },
          {
            name:'embedUrl',
            title:'YouTube/Vimeo Link',
            type:'url',
            description:'Paste a YouTube or Vimeo video link here'
          },
          {
            name:'description',
            title:'Description',
            type:'string'
          }
        ]
      }]
    })
  ]
})

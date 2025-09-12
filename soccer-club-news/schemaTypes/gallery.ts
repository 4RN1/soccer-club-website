import { defineType, defineField  } from "sanity";

export default defineType({
  name: 'photo' , 
  title:'Photos' ,
  type:'document' ,
  fields : [
    defineField({
      name: 'title',
      title:'Photo Title',
      type: 'string',
      

    }),
     defineField({
      name: 'image',
      title:'Image',
      type: 'image',
      options:{hotspot:true}

}), defineField({
  name:'caption',
  title:"Caption",
  type:'string'
})



  ]
})
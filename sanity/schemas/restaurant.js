export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) =>Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Restaurant description',
      type: 'string',
      validation: (Rule) =>Rule.max(200),
    },
    {
      name: 'image',
      title: 'Restaurant image',
      type: 'image',
      validation: (Rule) =>Rule.required(),
    },
    {
      name: 'lat',
      title: 'Restaurant lat',
      type: 'string',
      validation: (Rule) =>Rule.required(),
    },
    {
      name: 'long',
      title: 'Restaurant long',
      type: 'string',
      validation: (Rule) =>Rule.required(),
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) =>Rule.required(),
    },
    {
      name: 'rating',
      title: 'Restaurant rating',
      type: 'number',
      validation: (Rule) =>Rule.required().min(1).max(5).error("1 to 5 only"),
    },
    {
      name: 'type',
      title: 'Restaurant type',
      type: 'reference',
      to: [{type: "category"}],
      validation: (Rule) =>Rule.required(),
      
    },
    {
      name: 'dishes',
      title: 'Restaurant dishes',
      type: 'array',
      of: [{type: "reference" , to: [{type: "dish"}]}],
      validation: (Rule) =>Rule.required(),
    },
    
    
  ],

 
}

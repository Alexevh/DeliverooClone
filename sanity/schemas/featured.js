export default {

name: "featurted",
type: "document",
title: "Featured menu categories",
fields: [
    {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) =>Rule.required(),
      },
      {
        name: 'short_descriptions',
        title: 'Short description',
        type: 'string',
        validation: (Rule) =>Rule.max(200),
      },
      {
        name: 'restaurants',
        title: 'Restaurantes',
        type: 'array',
        of: [{type: "reference", to:[{type: "restaurant"}]}],
        validation: (Rule) =>Rule.required(),
      },
]

}
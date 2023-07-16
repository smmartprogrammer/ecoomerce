// sanity/pet.ts
export const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        // {
        //     name: 'image',
        //     title: 'Image',
        //     type: 'image',
        // },

        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image',}],              
             options: {
                hotspot: true,
            }},

        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name:'id',
            title: 'ID',
            type: 'string',
        },
 
        {
            name:'price',
            title: 'Price',
            type: 'number',
        },
        {
            name:'category',
            title: 'Category',
            type: 'string',
        },
        {
            name:'gender',
            title: 'Gender',
            type: 'string',
        },
        {
            name:'title',
            title: 'Title',
            type: 'string',
        }



    ]
}

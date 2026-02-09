export default {
  name: 'event',
  title: 'Church Event',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'date', title: 'Date', type: 'datetime'},
    {name: 'time', title: 'Time', type: 'string'},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'image', title: 'Hero Image', type: 'image'},
    {name: 'link', title: 'Link', type: 'url'},
  ],
  preview: {
    select: {title: 'title', subtitle: 'location', media: 'image'},
  },
}


import { PhotoGallery } from './PhotoGallery'

export function Gallery() {
  const photos = [
    {
      url: 'https://i.imgur.com/o7fqXLx.jpeg',
      alt: 'Couple kissing in elegant wedding attire',
    },
    {
      url: 'https://i.imgur.com/Pe9Y2mU.jpeg',
      alt: 'Bride holding beautiful bouquet',
    },
    {
      url: 'https://i.imgur.com/myAs3qz.jpeg',
      alt: 'Romantic couple kiss',
    },
    {
      url: 'https://i.imgur.com/5aQcmbj.jpeg',
      alt: 'Elegant couple portrait',
    },
    {
      url: 'https://i.imgur.com/XgYb9u7.jpeg',
      alt: 'Wedding couple standing together',
    },
    {
      url: 'https://i.imgur.com/3Ogzknm.jpeg',
      alt: 'Outdoor wedding ceremony setup',
    },
    {
      url: 'https://i.imgur.com/tT92JVq.jpeg',
      alt: 'Wedding aisle with beautiful flowers',
    },
    {
      url: 'https://i.imgur.com/taj29oQ.jpeg',
      alt: 'Beach wedding ceremony',
    },
    {
      url: 'https://i.imgur.com/jDwd5L3.jpeg',
      alt: 'Wedding celebration toast',
    },
    {
      url: 'https://i.imgur.com/ivXbRMM.jpeg',
      alt: 'Guests dancing at reception',
    },
    {
      url: 'https://i.imgur.com/6N05Fi2.jpeg',
      alt: 'Bride and groom smiling',
    },
    {
      url: 'https://i.imgur.com/CK0PuBb.jpeg',
      alt: 'Romantic couple kiss outdoors',
    },
    {
      url: 'https://i.imgur.com/AsEnnLe.jpeg',
      alt: 'Couple under wedding veil',
    },
    {
      url: 'https://i.imgur.com/8CjzZfr.jpeg',
      alt: 'Couple dancing in elegant setting',
    },
    {
      url: 'https://i.imgur.com/fhTmoHm.jpeg',
      alt: 'Couple by the ocean',
    },
    {
      url: 'https://i.imgur.com/ckGqw7G.jpeg',
      alt: 'Bride and groom kissing under veil',
    },
    {
      url: 'https://i.imgur.com/ibrajeh.jpeg',
      alt: 'Couple embracing',
    },
    {
      url: 'https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Outdoor ceremony moment',
    },
    {
      url: 'https://i.imgur.com/Z1huYzr.jpeg',
      alt: 'Ceremony seating under trees',
    },
    {
      url: 'https://i.imgur.com/6bD3b68.jpeg',
      alt: 'Wedding guests celebrating',
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="Wedding Gallery"
      description="A complete collection of our special day, capturing every beautiful moment"
    />
  )
}

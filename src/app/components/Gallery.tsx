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
      url: 'https://images.unsplash.com/photo-1698802060978-84008afaeb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
      url: 'https://images.unsplash.com/photo-1510181414401-d3f2aa71a124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Bride and groom smiling',
    },
    {
      url: 'https://i.imgur.com/CK0PuBb.jpeg',
      alt: 'Romantic couple kiss outdoors',
    },
    {
      url: 'https://images.unsplash.com/photo-1679599441274-6dcac44dba0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple under wedding veil',
    },
    {
      url: 'https://i.imgur.com/8CjzZfr.jpeg',
      alt: 'Couple dancing in elegant setting',
    },
    {
      url: 'https://images.unsplash.com/photo-1652950618856-2f19ae98297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple by the ocean',
    },
    {
      url: 'https://images.unsplash.com/photo-1694575173261-7c557fd2652b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Bride and groom kissing under veil',
    },
    {
      url: 'https://images.unsplash.com/photo-1683238085829-f571c9097d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple embracing',
    },
    {
      url: 'https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Outdoor ceremony moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939413139-19eeeb3a198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Ceremony seating under trees',
    },
    {
      url: 'https://images.unsplash.com/photo-1612599542558-f3022089fb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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

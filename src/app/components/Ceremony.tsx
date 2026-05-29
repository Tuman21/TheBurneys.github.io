import { PhotoGallery } from './PhotoGallery'

export function Ceremony() {
  const photos = [
    {
      url: 'https://i.imgur.com/XgYb9u7.jpeg', 
      alt: 'Beautiful outdoor ceremony venue',
    },
    {
      url: 'https://i.imgur.com/6N05Fi2.jpeg',
      alt: 'Elegant aisle with white and pink flowers',
    },
    {
      url: 'https://i.imgur.com/AsEnnLe.jpeg',
      alt: 'Beach wedding ceremony',
    },
    {
      url: 'https://i.imgur.com/Z1huYzr.jpeg',
      alt: 'Elegant ceremony seating',
    },
    {
      url: 'https://images.unsplash.com/photo-1723832347953-83c28e2d4dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Couple at ceremony with chandelier',
    },
    {
      url: 'https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Ceremony on grass field',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939413139-19eeeb3a198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Outdoor ceremony under trees',
    },
    {
      url: 'https://i.imgur.com/6bD3b68.jpeg',
      alt: 'Courtyard ceremony with white flowers',
    },
    {
      url: 'https://images.unsplash.com/photo-1474867985807-96ca17098cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Sacred ceremony moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1724855946379-451f59d45df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Ceremony setup with mirror',
    },
    {
      url: 'https://images.unsplash.com/photo-1672288336066-8cd91b57b510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://images.unsplash.com/photo-1696204868903-91d809b4df09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Outdoor ceremony with white chairs',
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="Ceremony"
      description="The sacred moments where we pledged our forever"
    />
  )
}

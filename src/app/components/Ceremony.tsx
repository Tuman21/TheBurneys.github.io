import { PhotoGallery } from './PhotoGallery'

export function Ceremony() {
  const photos = [
    {
      url: 'https://imgur.com/a/9fMCvZl', 
      alt: 'Beautiful outdoor ceremony venue',
    },
    {
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Elegant aisle with white and pink flowers',
    },
    {
      url: 'https://images.unsplash.com/photo-1576694667642-6f289dd54187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Beach wedding ceremony',
    },
    {
      url: 'https://images.unsplash.com/photo-1515715709530-858f7bfa1b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
      url: 'https://images.unsplash.com/photo-1670529776180-60e4132ab90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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

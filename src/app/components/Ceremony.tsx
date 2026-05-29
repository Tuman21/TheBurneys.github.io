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
      url: 'https://i.imgur.com/oTPvTcf.jpeg',
      alt: 'Couple at ceremony with chandelier',
    },
    {
      url: 'https://i.imgur.com/2kyDjLD.jpeg',
      alt: 'Ceremony on grass field',
    },
    {
      url: 'https://i.imgur.com/Vv4a2MP.jpeg',
      alt: 'Outdoor ceremony under trees',
    },
    {
      url: 'https://i.imgur.com/6bD3b68.jpeg',
      alt: 'Courtyard ceremony with white flowers',
    },
    {
      url: 'https://i.imgur.com/XJZv9OR.jpeg',
      alt: 'Sacred ceremony moment',
    },
    {
      url: 'https://i.imgur.com/OGdawPK.jpeg',
      alt: 'Ceremony setup with mirror',
    },
    {
      url: 'https://i.imgur.com/rtNp1ZC.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/TVsfjLR.jpeg',
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

import { PhotoGallery } from './PhotoGallery'

export function TheBurneys() {
  const photos = [
    {
      url: 'https://i.imgur.com/Pe9Y2mU.jpeg',
      alt: 'Couple embracing at sunset',
    },
    {
      url: 'https://i.imgur.com/jDwd5L3.jpeg',
      alt: 'Intimate moment at golden hour',
    },
    {
      url: 'https://i.imgur.com/myAs3qz.jpeg',
      alt: 'Romantic outdoor embrace',
    },
    {
      url: 'https://i.imgur.com/taj29oQ.jpeg',
      alt: 'Couple in sunlight',
    },
    {
      url: 'https://i.imgur.com/8CjzZfr.jpeg',
      alt: 'Tender moment together',
    },
    {
      url: 'https://i.imgur.com/o7fqXLx.jpeg',
      alt: 'Couple sharing intimate moment',
    },
    {
      url: 'https://i.imgur.com/ivXbRMM.jpeg',
      alt: 'Romantic outdoor portrait',
    },
    {
      url: 'https://i.imgur.com/CK0PuBb.jpeg',
      alt: 'Couple back to back',
    },
    {
      url: 'https://i.imgur.com/tT92JVq.jpeg',
      alt: 'Holding hands outdoors',
    },
    {
      url: 'https://i.imgur.com/3Ogzknm.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: 'https://i.imgur.com/5aQcmbj.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: '',
      alt: 'Embracing and looking at each other',
    },
    {
      url: '',
      alt: 'Embracing and looking at each other',
    },
    {
      url: '',
      alt: 'Embracing and looking at each other',
    },
    {
      url: '',
      alt: 'Embracing and looking at each other',
    },
    {
      url: '',
      alt: 'Embracing and looking at each other',
    },
    {
      url: '',
      alt: 'Embracing and looking at each other',
    },
    
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="The Burney's"
      description="Our love story captured in intimate and personal moments"
    />
  )
}

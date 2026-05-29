import { PhotoGallery } from './PhotoGallery'

export function FirstLook() {
  const photos = [
    {
      url: 'https://i.imgur.com/fhTmoHm.jpeg',
      alt: 'Emotional first embrace',
    },
    {
      url: 'https://i.imgur.com/ckGqw7G.jpeg',
      alt: 'First look moment',
    },
    {
      url: 'https://i.imgur.com/ibrajeh.jpeg',
      alt: 'Couple in dramatic archway',
    },
    {
      url: 'https://i.imgur.com/5hGOY21.jpeg',
      alt: 'Emotional father-daughter moment',
    },
    {
      url: 'https://i.imgur.com/g9XlIQm.jpeg',
      alt: 'First look in front of house',
    },
    {
      url: 'https://images.unsplash.com/photo-1588260436171-5703b8d6e835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Dramatic first look reveal',
    },
    {
      url: 'https://images.unsplash.com/photo-1568759516444-8395c289e031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Emotional black and white moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1683539172324-66058836064f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Bride and groom first look',
    },
    {
      url: 'https://images.unsplash.com/photo-1704584592536-ac0fd1101875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Tender first look moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1706876998330-950fd7d6ffdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Emotional reveal moment',
    },
    {
      url: 'https://images.unsplash.com/photo-1685524480909-78aa53966145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'First look in blue suit',
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="First Look"
      description="The emotional moment when we first saw each other"
    />
  )
}

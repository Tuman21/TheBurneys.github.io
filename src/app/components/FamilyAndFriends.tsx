import { PhotoGallery } from './PhotoGallery'

export function FamilyAndFriends() {
  const photos = [
    {
      url: 'https://i.imgur.com/olJ27tI.jpeg',
      alt: 'Celebratory toast with loved ones',
    },
    {
      url: 'https://i.imgur.com/Y7beWxH.jpeg',
      alt: 'Guests celebrating together',
    },
    {
      url: 'https://i.imgur.com/S4Y27OA.jpeg',
      alt: 'Dancing and celebration',
    },
    {
      url: 'https://i.imgur.com/e17LBsK.jpeg',
      alt: 'Family gathering at table',
    },
    {
      url: 'https://i.imgur.com/NgppC5Q.jpeg',
      alt: 'Group prayer moment',
    },
    {
      url: 'https://i.imgur.com/l8UFd99.jpeg',
      alt: 'Friends and family together',
    },
    {
      url: 'https://i.imgur.com/1jR56Ge.jpeg',
      alt: 'Confetti celebration',
    },
    {
      url: 'https://i.imgur.com/09kNVLu.jpeg',
      alt: 'Wedding party outdoors',
    },
    {
      url: 'https://i.imgur.com/gJZHkei.jpeg',
      alt: 'Beach ceremony gathering',
    },
    {
      url: '',
      alt: 'Ceremony kiss with guests',
    },
    {
      url: '',
      alt: 'Walking down the aisle',
    },
    {
      url: '',
      alt: 'Lakeside ceremony with guests',
    },
    {
      url: '',
      alt: 'Petal celebration',
    },
    {
      url: '',
      alt: 'Bride with family',
    },
    {
      url: '',
      alt: 'hands'
    },
    {
      url: '',
      alt: 'hands'
    },
    {
      url: '',
      alt: 'hands'
    },
    {
      url: '',
      alt: 'hands'
    },
    {
      url: '',
      alt: 'hands'
    },
    {
      url: '',
      alt: 'hands'
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="Family & Friends"
      description="Celebrating with the people we love most"
    />
  )
}

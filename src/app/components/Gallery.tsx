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
      url: 'https://i.imgur.com/5hGOY21.jpeg',
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
    {
      url: 'https://i.imgur.com/g9XlIQm.jpeg',
      alt: 'Bride and groom first look',
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
    {
      url: 'https://i.imgur.com/cxN3lLR.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/z3sT2S7.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/l9Uo3kC.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/aCMoNMz.jpeg',
      alt: 'Holding hands during ceremony',
    },
    {
      url: 'https://i.imgur.com/wSTEv3Q.jpeg',
      alt: 'a thing',
    },
    {
      url: 'https://i.imgur.com/l6Ytwtf.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/64TM8aQ.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/V7LEoA6.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/6K3cp5y.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ujZXcLD.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/earisOH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/2eQ5jct.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/w9VJyF3.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Op1ZZmB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/tDW2pvT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/3XjR2m9.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/DSdtj0m.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/91HaDlH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/0UkH5Ut.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/SuXuTYB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/VhlgqRE.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/VKHDixd.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/EYhgMKy.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/qiJEEN4.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/3syiA21.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/A5HNWsC.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/51jiDgI.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/N0T96cH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/GvjC6LF.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Ay6i3aW.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/PB14yta.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ppW3kqV.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/HUYi5gM.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/r96FhFp.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/rKXIw0H.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/3Ymb6w4.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ZLOIj8s.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/qlxeEWT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/vDb7qLT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/gqhCQiF.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ZOEKIxT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/b104LO4.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/06JRHu5.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/AdjE6Gd.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/wc8Dt65.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/XiJ7vuo.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/J8pAA37.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ZXhGgbz.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/olJ27tI.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Y7beWxH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/S4Y27OA.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/fq4UEs6.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/aV2oh14.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/e17LBsK.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/NgppC5Q.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/l8UFd99.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/1jR56Ge.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/09kNVLu.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/gJZHkei.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jaAm9Hf.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/nx4e58L.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/voE9t8M.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/cvyU3qP.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jzy3Q2q.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/yGgggWx.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/tBQYDAN.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/aWXGY7W.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/ds3Ilfa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/1NDmbUa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/keHPMbp.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/S6cLAAT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/JgWPVrp.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/U1SD3qh.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/sGgmOsS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/GemfdjB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/OteMcXD.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/bCM5Oby.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/hwRKCwC.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/MLK81hE.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Qz5iRZO.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/N0gc2kh.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/fBbHGC9.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/P8qbp9z.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/CbWJ3Yv.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Aw49JCa.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/JvA51ro.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/IgA9WzN.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/eGEtlC4.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jRZDkze.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/aMeeITJ.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Rcfr6oK.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/NhF9VF2.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/bN1VVpc.jpeg',
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
      title="Wedding Gallery"
      description="A complete collection of our special day, capturing every beautiful moment"
    />
  )
}

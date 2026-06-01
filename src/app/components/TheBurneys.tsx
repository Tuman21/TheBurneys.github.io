import { PhotoGallery } from './PhotoGallery'

export function TheBurneys() {
  const photos = [
    {
      url: 'https://i.imgur.com/13okFQV.jpeg',
      alt: 'hands'
    },
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
      url: 'https://i.imgur.com/cxN3lLR.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: 'https://i.imgur.com/z3sT2S7.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: 'https://i.imgur.com/l9Uo3kC.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: 'https://i.imgur.com/aCMoNMz.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: 'https://i.imgur.com/wSTEv3Q.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: 'https://i.imgur.com/l6Ytwtf.jpeg',
      alt: 'Embracing and looking at each other',
    },
    {
      url: 'https://i.imgur.com/64TM8aQ.jpeg',
      alt: 'holding'
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
      url: 'https://i.imgur.com/HUYi5gM.jpeg',
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
      url: 'https://i.imgur.com/vDb7qLT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/b104LO4.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/AdjE6Gd.jpeg',
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
      url: 'https://i.imgur.com/ZFjkEbL.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Y8RYP5x.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/1TTnrAD.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/DGYWkZV.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/sKvs9eG.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/I3YJBU2.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/3beCgvT.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/Xbbgvjk.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/F81UCeH.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/KjtbbiA.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/JwpDLNU.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/NPyz12P.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/l2WXWxx.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/BovtUjC.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/t1d8G0K.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/4hHSybn.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/7gAqCzm.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/75vqmh1.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/WsBjKou.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/jzRkaiJ.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/CgeGzHS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/siMFTdq.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/VWvaKuX.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/nbkd3mM.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/vJJyE1s.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/kvM87IB.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/sadwRlS.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/iF9lq7c.jpeg',
      alt: 'hands'
    },
    {
      url: 'https://i.imgur.com/UWfr7gV.jpeg',
      alt: 'hands'
    },
  ]

  return (
    <PhotoGallery
      photos={photos}
      title="The Burneys'"
      description="Our love story captured in intimate and personal moments"
    />
  )
}

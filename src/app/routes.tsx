import { createBrowserRouter } from 'react-router'
import { Root } from './components/Root'
import { Home } from './components/Home'
import { Gallery } from './components/Gallery'
import { TheBurneys } from './components/TheBurneys'
import { Ceremony } from './components/Ceremony'
import { FirstLook } from './components/FirstLook'
import { FamilyAndFriends } from './components/FamilyAndFriends'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'gallery', Component: Gallery },
      { path: 'the-burneys', Component: TheBurneys },
      { path: 'ceremony', Component: Ceremony },
      { path: 'first-look', Component: FirstLook },
      { path: 'family-and-friends', Component: FamilyAndFriends },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
})

import { Link } from 'react-router'


export function Home() {
  const navigationCards = [
    {
      to: '/gallery',
      label: 'Gallery',
      description: 'View all wedding photos',
    },
    {
      to: '/the-burneys',
      label: "The Burneys",
      description: 'Our intimate moments',
    },
    {
      to: '/ceremony',
      label: 'Ceremony',
      description: 'The special moments',
    },
    {
      to: '/first-look',
      label: 'First Look',
      description: 'The emotional reveal',
    },
    {
      to: '/family-and-friends',
      label: 'Family & Friends',
      description: 'Celebrating together',
    },
  ]
//comment for git push
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://i.imgur.com/o7fqXLx.jpeg"   
          alt="The Burneys' Wedding"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center">
        <h1 className="mb-4 font-serif text-5xl tracking-wide text-white sm:text-6xl md:text-7xl">
          The Burneys
        </h1>
        <p className="mb-16 text-xl font-light text-white/90 sm:text-2xl">
          Forever Begins Here
        </p>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navigationCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20"
            >
              <h2 className="mb-2 font-serif text-2xl text-white transition-colors group-hover:text-[#fd7d7d]">
                {card.label}
              </h2>
              <p className="text-sm text-white/80">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const links = [
    { to: '/gallery', label: 'Gallery' },
    { to: '/the-burneys', label: "The Burneys" },
    { to: '/ceremony', label: 'Ceremony' },
    { to: '/first-look', label: 'First Look' },
    { to: '/family-and-friends', label: 'Family & Friends' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        isHome
          ? 'bg-black/20 shadow-none backdrop-blur-sm'
          : 'bg-white/95 shadow-sm backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className={`font-serif text-2xl transition-colors ${
              isHome
                ? 'text-white hover:text-[#fd7d7d]'
                : 'text-[#084d66] hover:text-[#823327]'
            }`}
          >
            The Burneys
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? isHome
                      ? 'text-[#fd7d7d]'
                      : 'text-[#823327]'
                    : isHome
                      ? 'text-white/90 hover:text-white'
                      : 'text-gray-700 hover:text-[#084d66]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 transition-colors md:hidden ${
              isHome
                ? 'text-white hover:bg-white/10'
                : 'text-[#084d66] hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`border-t md:hidden ${
            isHome ? 'border-white/20 bg-black/40 backdrop-blur-md' : 'border-gray-200 bg-white'
          }`}
        >
          <div className="space-y-3 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? isHome
                      ? 'bg-white/20 text-white'
                      : 'bg-[#084d66] text-white'
                    : isHome
                      ? 'text-white/90 hover:bg-white/10'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

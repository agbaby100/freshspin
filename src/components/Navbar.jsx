import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Services',     href: '#services'     },
  { label: 'How It Works', href: '#how-it-works'  },
  { label: 'Pricing',      href: '#pricing'       },
  { label: 'Contact',      href: '#contact'       },
]

function scrollTo(href, callback) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  if (callback) callback()
}

export default function Navbar({ onBookNow }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  const handleClick = (e, href) => {
    e.preventDefault()
    setActive(href)
    scrollTo(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — scrolls to top */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setActive('') }}
          className="flex items-center gap-2 no-underline"
        >
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
            </svg>
          </div>
          <span className="font-display text-xl font-bold text-gray-900">FreshSpin</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`text-sm font-medium transition-colors relative pb-0.5
                ${active === href
                  ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full'
                  : 'text-gray-600 hover:text-blue-600'
                }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={onBookNow}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-md"
          >
            Book Pickup
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { handleClick(e, href); setMenuOpen(false) }}
              className={`text-sm font-medium py-2.5 px-3 rounded-xl transition-colors
                ${active === href ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onBookNow() }}
            className="bg-orange-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full w-full mt-2"
          >
            Book Pickup
          </button>
        </div>
      )}
    </nav>
  )
}

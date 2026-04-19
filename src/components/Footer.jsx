export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
              </svg>
            </div>
            <span className="font-display text-white font-bold text-lg">FreshSpin</span>
          </div>
          <p className="text-sm leading-relaxed">Fast, reliable laundry service delivered right to your door. Professional care for every fabric.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Services',     href: '#services'     },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Pricing',      href: '#pricing'      },
              { label: 'Contact',      href: '#contact'      },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Uniosun Sasa Market</li>
            <li>📞 +234 913 716 2359</li>
            <li>✉️ hello@freshspin.ng</li>
            <li>🕐 Mon–Sat: 7am – 9pm</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs">
        © 2026 FreshSpin Laundry Services. All rights reserved.
      </div>
    </footer>
  )
}

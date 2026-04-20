export default function Hero({ onBookNow }) {
  return (
    <section className="relative overflow-hidden bg-cover bg-center text-white" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200)'}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-white/5 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            Same-day pickup available
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Fast &amp; Reliable<br />
            <span className="text-teal-400">Laundry Service</span>
          </h1>

          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            We pick up, wash, dry, fold, and deliver — so you can spend time on what matters most. Professional care for every fabric.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-2">
            <button
              onClick={onBookNow}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
            >
              📦 Book Pickup
            </button>
            <button href= "#services" className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center md:justify-start mt-12 animate-fade-up-3">
            {[
              { value: '5,000+', label: 'Happy customers' },
              { value: '24h', label: 'Turnaround' },
              { value: '4.9★', label: 'Average rating' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center md:text-left">
                <div className="font-display text-2xl font-bold text-teal-300">{value}</div>
                <div className="text-blue-200 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="flex-1 flex justify-center animate-fade-up-2">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 max-w-xs w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl">
                🧺
              </div>
              <div>
                <div className="font-semibold text-[70%]">Order #FS-2847</div>
                <div className="text-blue-200 text-xs">Wash &amp; Fold</div>
              </div>
              <span className="ml-auto bg-green-400/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                In progress
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { step: 'Picked up', done: true },
                { step: 'Washing', done: true, active: true },
                { step: 'Drying', done: false },
                { step: 'Delivery', done: false },
              ].map(({ step, done, active }) => (
                <div key={step} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    done && !active ? 'bg-green-400 text-white' :
                    active ? 'bg-orange-400 text-white spin-slow' :
                    'bg-white/20 text-white/40'
                  }`}>
                    {done && !active ? '✓' : active ? '↻' : '○'}
                  </div>
                  <span className={`text-sm ${done || active ? 'text-white' : 'text-white/40'}`}>{step}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-2xl p-4 text-center">
              <div className="text-blue-200 text-xs mb-1">Estimated delivery</div>
              <div className="font-display font-bold text-lg">Today, 5:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

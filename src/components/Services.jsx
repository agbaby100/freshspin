import ServiceCard from './ServiceCard'

const SERVICES = [
  {
    id: 'wash-fold',
    icon: '🫧',
    title: 'Wash & Fold',
    description: 'Full wash, dry, and fold service. Delivered fresh and neatly packed.',
    currency: '₦',
    price: 3750,
    features: ['Sorted by color & fabric', 'Eco-friendly detergents', 'Same-day option', 'Free pickup & delivery'],
    accent: false,
  },
  {
    id: 'dry-cleaning',
    icon: '✨',
    title: 'Dry Cleaning',
    description: 'Professional care for your delicates, suits, dresses, and formal wear.',
    currency: '₦',
    price: 12000,
    features: ['Inspected before cleaning', 'Stain treatment included', 'Pressed & hung', 'Garment bags provided'],
    accent: true,
  },
  {
    id: 'ironing',
    icon: '👔',
    title: 'Ironing',
    description: 'Crisp, professional ironing and pressing for shirts, trousers, and more.',
    currency: '₦',
    price: 2250,
    features: ['Steam iron finish', 'Shirts & trousers', 'Suits & dresses', 'Hangers included'],
    accent: false,
  },
]

export default function Services({ onBookService }) {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Choose the service that fits your needs. We handle everything with care and deliver right to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onBook={() => onBookService(service.id)}
            />
          ))}
        </div>

        {/* How it works */}
        <div className="mt-20" id="how-it-works">
          <h3 className="font-display text-2xl font-bold text-center text-gray-900 mb-10">How It Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', icon: '📱', label: 'Book online', desc: 'Choose your service and schedule a pickup' },
              { step: '02', icon: '🚗', label: 'We collect', desc: 'Driver picks up from your door' },
              { step: '03', icon: '🫧', label: 'We clean', desc: 'Professional cleaning at our facility' },
              { step: '04', icon: '📦', label: 'Delivered', desc: 'Fresh clothes back at your door' },
            ].map(({ step, icon, label, desc }) => (
              <div key={step} className="relative">
                <div className="text-xs font-bold text-blue-300 mb-2">{step}</div>
                <div className="text-3xl mb-2">{icon}</div>
                <div className="font-semibold text-gray-800 mb-1">{label}</div>
                <div className="text-gray-500 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

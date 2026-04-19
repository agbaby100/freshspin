const PLANS = [
  {
    name: 'Basic',
    price: '₦14,985',
    period: '/week',
    desc: 'Perfect for individuals with light laundry needs.',
    features: ['Up to 5 kg/week', 'Wash & Fold only', '48h turnaround', 'Free pickup & delivery'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '₦29,985',
    period: '/week',
    desc: 'Best for couples or small households.',
    features: ['Up to 12 kg/week', 'Wash, Fold & Ironing', '24h turnaround', 'Priority pickup', 'Free pickup & delivery'],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '₦52,485',
    period: '/week',
    desc: 'For families or heavy laundry needs.',
    features: ['Unlimited kg/week', 'All services included', 'Same-day turnaround', 'Dedicated agent', 'Free pickup & delivery', 'Dry cleaning included'],
    cta: 'Go Premium',
    highlight: false,
  },
]

export default function Pricing({ onBookNow }) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            PRICING
          </span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mb-4">Simple, Transparent Plans</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No hidden fees. Pick a plan that works for your household and cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 border-2 border-blue-500'
                  : 'bg-gray-50 border-2 border-gray-100 text-gray-900'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  ⭐ Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className={`font-display text-5xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold ${
                      plan.highlight ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'
                    }`}>✓</span>
                    <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onBookNow}
                className={`w-full font-bold py-3.5 rounded-2xl transition-all hover:scale-105 ${
                  plan.highlight
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          All plans include free pickup & delivery. Cancel or pause anytime. No contracts.
        </p>
      </div>
    </section>
  )
}

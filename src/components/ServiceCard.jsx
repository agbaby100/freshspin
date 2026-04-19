export default function ServiceCard({ icon, title, description, currency, price, features, accent, onBook }) {
  return (
    <div className={`relative bg-white rounded-3xl p-7 shadow-sm border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${accent ? 'border-orange-400' : 'border-gray-100'}`}>
      {accent && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${accent ? 'bg-orange-50' : 'bg-blue-50'}`}>
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${accent ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-display font-bold text-gray-900">{currency}{price.toLocaleString()}</span>
          <span className="text-gray-400 text-sm">/load</span>
        </div>
        <button
          onClick={onBook}
          className={`font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 ${
            accent
              ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md'
              : 'bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white'
          }`}
        >
          Book Now
        </button>
      </div>
    </div>
  )
}

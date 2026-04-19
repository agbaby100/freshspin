export default function OrderSummary({ order, onNewBooking }) {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
          ✓
        </div>
        <h2 className="font-display text-3xl font-extrabold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-500 mb-8">We'll pick up your laundry on the scheduled date. You'll receive a confirmation SMS shortly.</p>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-left space-y-4 mb-8">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <span className="text-gray-500 text-sm">Order ID</span>
            <span className="font-bold text-blue-600 font-display">#{order.id}</span>
          </div>

          {[
            { label: 'Name', value: order.name },
            { label: 'Phone', value: order.phone },
            { label: 'Address', value: order.address },
            { label: 'Service', value: order.serviceLabel },
            { label: 'Pickup Date', value: order.pickupDate },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-gray-400 font-medium">{label}</span>
              <span className="font-semibold text-gray-800 text-right max-w-[60%]">{value}</span>
            </div>
          ))}

          {order.notes && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 font-medium">Notes</span>
              <span className="font-semibold text-gray-800 text-right max-w-[60%]">{order.notes}</span>
            </div>
          )}

          <div className="flex justify-between items-center border-t border-gray-100 pt-4">
            <span className="font-semibold text-gray-700">Estimated Price</span>
            <span className="font-display text-2xl font-bold text-orange-500">{order.currency}{order.price.toLocaleString()}/load</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-8 text-sm text-blue-700">
          <strong>What happens next?</strong> Our driver will arrive at your address on {order.pickupDate}. Please have your laundry ready in a bag.
        </div>

        <button
          onClick={onNewBooking}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full transition-all hover:scale-105 shadow-md"
        >
          Book Another Pickup
        </button>
      </div>
    </section>
  )
}

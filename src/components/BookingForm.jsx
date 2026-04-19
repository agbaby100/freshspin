import { useState } from 'react'

const SERVICE_OPTIONS = [
  { value: 'wash-fold',    label: 'Wash & Fold',   currency: '₦', price: 3750 },
  { value: 'dry-cleaning', label: 'Dry Cleaning',  currency: '₦', price: 12000 },
  { value: 'ironing',      label: 'Ironing',       currency: '₦', price: 2250 },
]

const INITIAL = {
  name: '',
  phone: '',
  address: '',
  service: '',
  pickupDate: '',
  notes: '',
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default function BookingForm({ preselectedService, onSubmit }) {
  const [form, setForm] = useState({ ...INITIAL, service: preselectedService || '' })
  const [errors, setErrors] = useState({})

  const today = new Date().toISOString().split('T')[0]

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }))
    setErrors((e) => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    else if (form.name.trim().length < 2) e.name = 'Name must be at least 2 characters'

    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'

    if (!form.address.trim()) e.address = 'Address is required'
    else if (form.address.trim().length < 10) e.address = 'Please enter your full address'

    if (!form.service) e.service = 'Please select a service'

    if (!form.pickupDate) e.pickupDate = 'Pickup date is required'
    else if (form.pickupDate < today) e.pickupDate = 'Pickup date must be today or later'

    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }

    const serviceObj = SERVICE_OPTIONS.find((s) => s.value === form.service)
    onSubmit({
      ...form,
      id: 'FS-' + Math.floor(Math.random() * 9000 + 1000),
      serviceLabel: serviceObj.label,
      currency: serviceObj.currency,
      price: serviceObj.price,
      submittedAt: new Date().toLocaleString(),
    })
  }

  const inputClass = (key) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-800 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
      errors[key] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
    }`

  const selectedService = SERVICE_OPTIONS.find((s) => s.value === form.service)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            BOOK NOW
          </span>
          <h2 className="font-display text-3xl font-extrabold text-gray-900 mb-2">Schedule Your Pickup</h2>
          <p className="text-gray-500 text-sm">Fill in your details and we'll be at your door.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Full Name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder="e.g. Amaka Obi"
                className={inputClass('name')}
              />
            </Field>

            <Field label="Phone Number" error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="+234 800 000 0000"
                className={inputClass('phone')}
              />
            </Field>
          </div>

          <Field label="Pickup Address" error={errors.address}>
            <input
              type="text"
              value={form.address}
              onChange={(e) => set('address', e.target.value)}
              placeholder="Street, City, State"
              className={inputClass('address')}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Service Type" error={errors.service}>
              <select
                value={form.service}
                onChange={(e) => set('service', e.target.value)}
                className={inputClass('service')}
              >
                <option value="">Select a service...</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label} — {s.currency}{s.price.toLocaleString()}/load</option>
                ))}
              </select>
            </Field>

            <Field label="Pickup Date" error={errors.pickupDate}>
              <input
                type="date"
                value={form.pickupDate}
                min={today}
                onChange={(e) => set('pickupDate', e.target.value)}
                className={inputClass('pickupDate')}
              />
            </Field>
          </div>

          <Field label="Special Instructions (optional)" error={''}>
            <textarea
              value={form.notes}
              onChange={(e) => set('notes', e.target.value)}
              placeholder="Any specific care instructions, allergies, or notes..."
              rows={3}
              className={`${inputClass('notes')} resize-none`}
            />
          </Field>

          {/* Price preview */}
          {selectedService && (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-blue-800">{selectedService.label}</div>
                <div className="text-xs text-blue-500 mt-0.5">Starting price per load</div>
              </div>
              <div className="font-display text-2xl font-bold text-blue-700">{selectedService.currency}{selectedService.price.toLocaleString()}</div>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl text-lg transition-all hover:scale-[1.02] shadow-lg mt-2"
          >
            Confirm Booking →
          </button>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

const INFO = [
  { icon: '📍', label: 'Address', value: 'Uniosun Sasa Market' },
  { icon: '📞', label: 'Phone', value: '+234 913 716 2359' },
  { icon: '✉️', label: 'Email', value: 'hello@freshspin.ng' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 7am – 9pm' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            CONTACT US
          </span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Questions? Feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-5">
              {INFO.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-blue-100 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{label}</div>
                    <div className="text-gray-800 font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-blue-600 rounded-3xl p-6 text-white">
              <div className="font-display text-lg font-bold mb-2">Same-day pickup available!</div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Book before 11am and we'll pick up your laundry today and deliver it by evening.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="text-5xl mb-4">📬</div>
                <h4 className="font-display text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Send a Message</h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Amaka Obi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                <button
                  onClick={handleSend}
                  disabled={!form.name || !form.email || !form.message}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3.5 rounded-2xl transition-all hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

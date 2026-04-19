import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import BookingForm from './components/BookingForm'
import OrderSummary from './components/OrderSummary'
import Footer from './components/Footer'

export default function App() {
  const [currentOrder, setCurrentOrder] = useState(null)
  const [showBooking, setShowBooking] = useState(false)
  const [preselectedService, setPreselectedService] = useState('')

  const handleBookNow = (service = '') => {
    setPreselectedService(service)
    setShowBooking(true)
    setCurrentOrder(null)
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const handleOrderSubmit = (order) => {
    const existing = JSON.parse(localStorage.getItem('freshspin_orders') || '[]')
    existing.push(order)
    localStorage.setItem('freshspin_orders', JSON.stringify(existing))
    setCurrentOrder(order)
    setShowBooking(false)
    setTimeout(() => {
      document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const handleNewBooking = () => {
    setCurrentOrder(null)
    setShowBooking(true)
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookNow={() => handleBookNow()} />
      <Hero onBookNow={() => handleBookNow()} />
      <Services onBookService={handleBookNow} />
      <Pricing onBookNow={() => handleBookNow()} />
      <Contact />

      <div id="booking">
        {showBooking && !currentOrder && (
          <BookingForm
            preselectedService={preselectedService}
            onSubmit={handleOrderSubmit}
          />
        )}
      </div>

      <div id="summary">
        {currentOrder && (
          <OrderSummary order={currentOrder} onNewBooking={handleNewBooking} />
        )}
      </div>

      {!showBooking && !currentOrder && (
        <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <p className="text-white/70 text-lg mb-4">Ready to get started?</p>
          <button
            onClick={() => handleBookNow()}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
          >
            Book a Pickup Now
          </button>
        </div>
      )}

      <Footer />
    </div>
  )
}

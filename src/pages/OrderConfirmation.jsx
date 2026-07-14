import React, { useMemo } from 'react'
import { CheckCircle, Package, Truck, Calendar, Hash } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderConfirmation = ({ deliveryDetails }) => {
  const orderNumber = useMemo(() => {
    return 'WDM-' + Math.floor(100000 + Math.random() * 900000);
  }, []);

  const estimatedDelivery = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-16">
        <div className='p-10 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-8 border border-green-700/50'>
          {/* Animated checkmark */}
          <div className="relative inline-flex mb-8">
            <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping"></div>
            <div className="relative p-4 bg-green-500/10 rounded-full border border-green-500/30">
              <CheckCircle className='w-20 h-20 text-green-400 drop-shadow-lg' />
            </div>
          </div>

          <h2 className='text-4xl font-extrabold text-white mb-3'>Order Confirmed! 🎉</h2>
          <p className='text-base text-gray-400 mb-8'>
            Your transaction is complete. A confirmation has been sent to{' '}
            {deliveryDetails?.email
              ? <span className="text-orange-400 font-semibold">{deliveryDetails.email}</span>
              : 'your account'
            }.
          </p>

          {/* Order Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
            <div className='p-4 bg-gray-800 border border-gray-700 rounded-xl flex items-start space-x-3'>
              <Hash className='w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5' />
              <div>
                <p className='text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1'>Order Number</p>
                <p className='text-white font-bold text-base'>{orderNumber}</p>
              </div>
            </div>
            <div className='p-4 bg-gray-800 border border-gray-700 rounded-xl flex items-start space-x-3'>
              <Calendar className='w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5' />
              <div>
                <p className='text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1'>Estimated Delivery</p>
                <p className='text-white font-bold text-sm'>{estimatedDelivery}</p>
              </div>
            </div>
          </div>

          {/* Delivery address */}
          <div className='p-6 bg-green-900/20 border border-green-700/40 rounded-xl text-left mb-8 flex items-start space-x-3'>
            <Truck className='w-5 h-5 text-green-400 flex-shrink-0 mt-1' />
            <div>
              <p className='text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2'>Delivering To</p>
              <p className='font-bold text-white text-base mb-1'>{deliveryDetails?.name}</p>
              {deliveryDetails?.phone && <p className='text-gray-400 text-sm'>{deliveryDetails.phone}</p>}
              <p className='text-gray-400 text-sm'>{deliveryDetails?.address}</p>
              <p className='text-gray-400 text-sm'>{deliveryDetails?.city} – {deliveryDetails?.zip}</p>
            </div>
          </div>

          <div className='p-4 bg-gray-800/60 rounded-xl mb-8 flex items-center justify-center space-x-2'>
            <Package className='w-4 h-4 text-orange-400' />
            <p className='text-sm text-gray-400'>
              Shipped via <span className='text-white font-semibold'>Express Delivery</span> · <span className='text-green-400 font-semibold'>Free</span>
            </p>
          </div>

          <Link
            to={"/"}
            className="w-full px-4 py-4 bg-orange-600 text-white font-extrabold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderConfirmation
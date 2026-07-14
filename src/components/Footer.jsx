import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ShoppingCart, Github, Twitter, Instagram, Mail, Zap, Shield, Truck } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-gray-950 text-gray-400 border-t border-orange-900/40 mt-16'>
      {/* Trust badges */}
      <div className='border-b border-gray-800/60'>
        <div className='container mx-auto px-4 md:px-8 py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            <div className='flex items-center space-x-3 justify-center sm:justify-start'>
              <div className='p-2 bg-orange-500/10 rounded-xl border border-orange-500/20'>
                <Truck className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <p className='text-white text-sm font-bold'>Free Express Delivery</p>
                <p className='text-xs text-gray-500'>On all orders nationwide</p>
              </div>
            </div>
            <div className='flex items-center space-x-3 justify-center'>
              <div className='p-2 bg-orange-500/10 rounded-xl border border-orange-500/20'>
                <Shield className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <p className='text-white text-sm font-bold'>Secure Payments</p>
                <p className='text-xs text-gray-500'>256-bit SSL encryption</p>
              </div>
            </div>
            <div className='flex items-center space-x-3 justify-center sm:justify-end'>
              <div className='p-2 bg-orange-500/10 rounded-xl border border-orange-500/20'>
                <Zap className='w-5 h-5 text-orange-400' />
              </div>
              <div>
                <p className='text-white text-sm font-bold'>1-Year Warranty</p>
                <p className='text-xs text-gray-500'>On all premium products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className='container mx-auto px-4 md:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Brand */}
          <div>
            <Link to="/" className='flex items-center space-x-2 mb-4'>
              <Home className='w-7 h-7 text-orange-400' />
              <span className='text-2xl font-extrabold text-white tracking-widest uppercase'>
                WDM<span className='text-orange-400'>STORE</span>
              </span>
            </Link>
            <p className='text-sm leading-relaxed text-gray-500 mb-5'>
              Your premier destination for cutting-edge technology. We bring you the latest laptops, smartphones, tablets, and cameras at unbeatable prices.
            </p>
            <div className='flex space-x-3'>
              <a href="#" aria-label="GitHub" className='p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-200 border border-gray-700 hover:border-orange-500/50'>
                <Github className='w-4 h-4 text-gray-400 hover:text-orange-400 transition duration-200' />
              </a>
              <a href="#" aria-label="Twitter" className='p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-200 border border-gray-700 hover:border-orange-500/50'>
                <Twitter className='w-4 h-4 text-gray-400 hover:text-orange-400 transition duration-200' />
              </a>
              <a href="#" aria-label="Instagram" className='p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-200 border border-gray-700 hover:border-orange-500/50'>
                <Instagram className='w-4 h-4 text-gray-400 hover:text-orange-400 transition duration-200' />
              </a>
              <a href="#" aria-label="Email" className='p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-200 border border-gray-700 hover:border-orange-500/50'>
                <Mail className='w-4 h-4 text-gray-400 hover:text-orange-400 transition duration-200' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-bold text-sm uppercase tracking-widest mb-4 border-b border-gray-800 pb-2'>Quick Links</h3>
            <ul className='space-y-3'>
              {[
                { label: 'All Products', to: '/' },
                { label: 'My Cart', to: '/cart' },
                { label: 'Checkout', to: '/checkout' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className='text-sm text-gray-500 hover:text-orange-400 transition duration-200 flex items-center space-x-2 group'>
                    <span className='w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition duration-200'></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-white font-bold text-sm uppercase tracking-widest mb-4 border-b border-gray-800 pb-2'>Categories</h3>
            <ul className='space-y-3'>
              {['Laptops', 'Phones', 'Tablets', 'Cameras'].map(cat => (
                <li key={cat}>
                  <Link to="/" className='text-sm text-gray-500 hover:text-orange-400 transition duration-200 flex items-center space-x-2 group'>
                    <span className='w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition duration-200'></span>
                    <span>{cat}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-gray-800/60'>
        <div className='container mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2'>
          <p className='text-xs text-gray-600'>© 2025 WDMTech Labs. All Rights Reserved.</p>
          <p className='text-xs text-gray-600'>
            Built with <span className='text-orange-400 font-semibold'>React</span> · Designed for excellence
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
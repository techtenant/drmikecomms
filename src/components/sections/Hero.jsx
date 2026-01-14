'use client';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* LEFT: Text Content */}
          <div className="py-12">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-semibold">Excellent</span>
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-clinic-dark mb-6 leading-tight">
              Redefining your natural beauty
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive aesthetic medicine from consultation to treatment
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex items-center gap-3">
              <FiSearch className="text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Start typing what you're looking for..."
                className="flex-1 outline-none text-gray-700"
              />
            </div>

            {/* Popular Searches */}
            <div>
              <p className="text-sm text-gray-600 mb-3">Popular searches</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/treatments#anti-wrinkle" className="border-2 border-gray-300 hover:border-clinic-blue px-4 py-2 rounded-full text-sm transition">
                  Anti-wrinkle injections
                </Link>
                <Link href="/treatments#fillers" className="border-2 border-gray-300 hover:border-clinic-blue px-4 py-2 rounded-full text-sm transition">
                  Dermal fillers
                </Link>
                <Link href="/treatments#vaser" className="border-2 border-gray-300 hover:border-clinic-blue px-4 py-2 rounded-full text-sm transition">
                  Vaser liposuction
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1737215398603-2ef701df8036?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Medical facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

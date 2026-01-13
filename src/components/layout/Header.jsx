import Link from 'next/link';
import { FiSearch, FiPhone, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-clinic-blue text-white sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Top bar with logo, search, phone, enquire */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold">
              Dr Mike Comins
            </Link>
            <span className="text-sm opacity-80">MBBS FBCAM</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hover:bg-white/10 p-2 rounded-full transition">
              <FiSearch size={20} />
            </button>
            <a href="tel:02075841642" className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded transition">
              <FiPhone size={18} />
              <span className="hidden md:inline">+44 (0)20 7584 1642</span>
            </a>
            <Link 
              href="/contact" 
              className="bg-clinic-light text-clinic-dark px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Enquire online
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/20 py-3">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <Link href="/" className="hover:text-clinic-light transition">Home</Link>
            </li>
            <li className="relative group">
              <button className="hover:text-clinic-light transition flex items-center gap-1">
                Treatments <span className="text-xs">▼</span>
              </button>
            </li>
            <li>
              <Link href="/about" className="hover:text-clinic-light transition">About Dr Comins</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-clinic-light transition">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-clinic-light transition">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
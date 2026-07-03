import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Destinations', path: '/destinations' },
  { name: 'Packages', path: '/packages' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1B4332]/95 backdrop-blur-md border-b border-[#2D5A3D]'
          : 'bg-transparent border-b border-[rgba(254,245,217,0.15)]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Company Name */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="h-11 lg:h-14 w-11 lg:w-14 rounded-lg bg-[#FEF5D9] p-1 flex items-center justify-center overflow-hidden">
              <img
                src="/images/gemonet-logo.png"
                alt="Gemonet Tours and Safaris"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-[#FEF5D9] text-base lg:text-lg leading-tight tracking-wide">GEMONET</p>
              <p className="font-body text-[#FEF5D9]/70 text-[0.6rem] lg:text-[0.65rem] uppercase tracking-[0.12em] leading-tight">Tours and Safaris</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-[0.8125rem] uppercase tracking-[0.08em] transition-colors duration-250 ${
                  location.pathname === link.path
                    ? 'text-[#D4A843]'
                    : 'text-[#FEF5D9] hover:text-[#D4A843]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary !py-2.5 !px-6 !text-xs"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#FEF5D9] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B4332]/98 backdrop-blur-md border-t border-[#2D5A3D]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-body text-sm uppercase tracking-wider py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#D4A843]'
                    : 'text-[#FEF5D9] hover:text-[#D4A843]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary !w-full !text-center !mt-4"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

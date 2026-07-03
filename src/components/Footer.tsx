import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const destinationLinks = [
  { name: 'Maasai Mara', path: '/destinations' },
  { name: 'Amboseli', path: '/destinations' },
  { name: 'Diani Beach', path: '/destinations' },
  { name: 'Tsavo East & West', path: '/destinations' },
  { name: 'Lake Nakuru', path: '/destinations' },
  { name: 'Samburu', path: '/destinations' },
]

const serviceLinks = [
  { name: 'Safari Packages', path: '/services' },
  { name: 'Hotel Bookings', path: '/services' },
  { name: 'Airport Transfers', path: '/services' },
  { name: 'Group Travel', path: '/services' },
  { name: 'Honeymoon Packages', path: '/services' },
  { name: 'Corporate Travel', path: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-[#FEF5D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-14 w-14 rounded-lg bg-[#FEF5D9] p-1 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src="/images/gemonet-logo.png"
                  alt="Gemonet Tours and Safaris"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-display text-[#FEF5D9] text-xl leading-tight tracking-wide">GEMONET</p>
                <p className="font-body text-[#FEF5D9]/70 text-[0.65rem] uppercase tracking-[0.12em] leading-tight">Tours and Safaris</p>
              </div>
            </div>
            <p className="text-[#FEF5D9]/60 text-sm leading-relaxed max-w-[280px]">
              Your adventure, our passion.
            </p>
            <p className="text-[#FEF5D9]/50 text-xs leading-relaxed max-w-[280px] mt-3">
              Gemonet Tours and Safaris is a licensed Kenyan tours and travel company specializing in safari packages, beach holidays, and corporate travel.
            </p>
          </div>

          {/* Destinations Column */}
          <div>
            <h4 className="font-body text-base font-medium text-[#FEF5D9] mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#FEF5D9]/60 text-sm hover:text-[#D4A843] transition-colors duration-250"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-body text-base font-medium text-[#FEF5D9] mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#FEF5D9]/60 text-sm hover:text-[#D4A843] transition-colors duration-250"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-body text-base font-medium text-[#FEF5D9] mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#D4A843] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#FEF5D9]/60 text-sm">+254 716 876 073</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#D4A843] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#FEF5D9]/60 text-sm">gemonet83@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4A843] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#FEF5D9]/60 text-sm">Mtwapa, Kilifi County, Kenya</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="text-[#FEF5D9]/50 hover:text-[#D4A843] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#FEF5D9]/50 hover:text-[#D4A843] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#FEF5D9]/50 hover:text-[#D4A843] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-6 border-t border-[#2D5A3D] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#FEF5D9]/40 text-xs">
            &copy; {new Date().getFullYear()} Gemonet Tours and Safaris. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[#FEF5D9]/40 text-xs">
            <a href="#" className="hover:text-[#D4A843] transition-colors">Privacy Policy</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-[#D4A843] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

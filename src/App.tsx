import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Packages from './pages/Packages'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  // Get origin for WhatsApp tracking based on current page
  const getPageName = () => {
    const path = location.pathname
    if (path === '/') return 'Homepage'
    if (path === '/destinations') return 'Destinations Page'
    if (path === '/packages') return 'Packages Page'
    if (path === '/services') return 'Services Page'
    if (path === '/blog') return 'Blog Page'
    if (path.startsWith('/blog/')) return 'Blog Article'
    if (path === '/contact') return 'Contact Page'
    return 'Website'
  }

  return (
    <div className="min-h-screen bg-[#FEF5D9]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton origin={getPageName()} />
    </div>
  )
}

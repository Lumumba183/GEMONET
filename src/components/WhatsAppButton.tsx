import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  origin?: string
  message?: string
}

export default function WhatsAppButton({ origin = 'Website', message }: WhatsAppButtonProps) {
  const phoneNumber = '254716876073'
  const defaultMessage = message || `Hello Gemonet Tours and Safaris! I found you through your ${origin} and I'm interested in learning more about your travel packages.`

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </button>
  )
}
